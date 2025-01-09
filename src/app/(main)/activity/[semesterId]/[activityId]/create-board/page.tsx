'use client'

import { useQuery } from '@tanstack/react-query'

import { activityQueries, semesterQueries } from '@/service/api'
import { useMyInfoStore } from '@/store/myInfo'

import {
  CreateBoardDetail,
  CreateBoardForm,
  CreateBoardHero,
  CreateBoardSkeleton,
} from './_components'

type CreateBoardPageParams = {
  params: {
    semesterId: string
    activityId: string
  }
}

const CreateBoardPage = ({ params }: CreateBoardPageParams) => {
  const { userName } = useMyInfoStore((state) => state.myInfo)

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

  if (semesterStatus === 'pending' || activityStatus === 'pending') {
    return <CreateBoardSkeleton />
  }

  if (semesterError || activityError) return <div>not found</div>

  return (
    <div className="w-full pt-10">
      <CreateBoardHero />
      <CreateBoardDetail
        semesterName={semester.semesterName}
        activityName={activity.activityName}
        userName={userName}
      />
      <CreateBoardForm activityId={activity.activityId} />
    </div>
  )
}

export default CreateBoardPage
