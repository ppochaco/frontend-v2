import { useParams } from 'react-router'

import { useQuery } from '@tanstack/react-query'

import { NotFound, Spinner } from '@/components/common'
import { Separator, Skeleton } from '@/components/ui'
import { activityQueries, boardQueries, semesterQueries } from '@/service/api'
import { useMyInfoStore } from '@/store'

import { EditBoardDetail } from './_components/detail'
import { EditBoardForm } from './_components/form'
import { EditBoardHero } from './_components/hero'

export default function EditBoardPage() {
  const params = useParams()
  const { userName } = useMyInfoStore((state) => state.myInfo)

  const {
    data: boardDetail,
    status: boardDetailStatus,
    error: boardDetailError,
  } = useQuery(
    boardQueries.detail({
      activityId: Number(params.activityId),
      boardId: Number(params.boardId),
    }),
  )

  const {
    data: semester,
    status: semesterStatus,
    error: semesterError,
  } = useQuery(
    semesterQueries.detail({ semesterId: Number(params.semesterId) }),
  )

  const {
    data: activity,
    status: activityStatus,
    error: activityError,
  } = useQuery(
    activityQueries.detail({
      semesterId: Number(params.semesterId),
      activityId: Number(params.activityId),
    }),
  )

  if (boardDetailStatus === 'pending') return null
  if (boardDetailError) return null

  if (semesterStatus === 'pending' || activityStatus === 'pending') {
    return <EditBoardSkeleton />
  }

  if (semesterError || activityError)
    return (
      <div className="w-full">
        <EditBoardHero boardName={boardDetail.boardName} />
        <NotFound />
      </div>
    )

  return (
    <div className="w-full">
      <EditBoardHero boardName={boardDetail.boardName} />
      <EditBoardDetail
        semesterName={semester.semesterName}
        activityName={activity.activityName}
        userName={userName}
      />
      <EditBoardForm
        activityId={Number(params.activityId)}
        boardDetail={boardDetail}
      />
    </div>
  )
}

const EditBoardSkeleton = () => {
  return (
    <div className="w-full">
      <div>
        <Separator variant="dark" />
        <Skeleton className="my-4 h-5 w-full" />
        <Separator variant="dark" />
      </div>
      <Spinner />
    </div>
  )
}
