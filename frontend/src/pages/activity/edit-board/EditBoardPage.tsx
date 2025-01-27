import { Suspense } from 'react'
import { useParams } from 'react-router'

import { useSuspenseQuery } from '@tanstack/react-query'

import { NotFound } from '@/components/common'
import { Separator, Skeleton } from '@/components/ui'
import { activityQueries, boardQueries, semesterQueries } from '@/service/api'
import { useMyInfoStore } from '@/store'

import {
  EditBoardDetail,
  EditBoardForm,
  EditBoardHero,
  EditBoardImage,
} from './_components'

const EditBoardPage = () => {
  const params = useParams()
  const { userName } = useMyInfoStore((state) => state.myInfo)

  const { data: boardDetail } = useSuspenseQuery(
    boardQueries.detail({
      activityId: Number(params.activityId),
      boardId: Number(params.boardId),
    }),
  )

  const { data: semester } = useSuspenseQuery(
    semesterQueries.detail({ semesterId: Number(params.semesterId) }),
  )

  const { data: activity } = useSuspenseQuery(
    activityQueries.detail({
      semesterId: Number(params.semesterId),
      activityId: Number(params.activityId),
    }),
  )

  if (!boardDetail) return <NotFound />

  return (
    <div className="w-full pb-20">
      <EditBoardHero boardName={boardDetail.boardName} />
      <EditBoardDetail
        semesterName={semester.semesterName}
        activityName={activity.activityName}
        userName={userName}
      />
      <div className="flex flex-col md:flex-row md:justify-center">
        <EditBoardImage
          activityId={Number(params.activityId)}
          boardId={Number(params.boardId)}
          boardImageUrl={boardDetail.boardImageUrl}
        />
        <Separator
          orientation="vertical"
          className="mx-6 hidden h-96 md:flex"
        />
        <Separator className="my-8 md:hidden" />
        <EditBoardForm
          activityId={Number(params.activityId)}
          boardDetail={boardDetail}
        />
      </div>
    </div>
  )
}

const EditBoardSkeleton = () => {
  return (
    <div className="w-full">
      <Separator variant="dark" />
      <Skeleton className="my-4 h-5 w-96 bg-slate-50" />
      <Separator variant="dark" />
    </div>
  )
}

export default function FetchEditBoardPage() {
  return (
    <Suspense fallback={<EditBoardSkeleton />}>
      <EditBoardPage />
    </Suspense>
  )
}
