'use client'

import { semesterQueries } from '@/servicetest/api/semester'
import { useQuery } from '@tanstack/react-query'

import { useGetActivities } from '@/service/data/activity'
import { useMyInfoStore } from '@/store/myInfo'

import {
  CreateBoardDetail,
  CreateBoardForm,
  CreateBoardHero,
  CreateBoardSkeleton,
} from './_components'

type CreateBoardPageParams = {
  params: {
    semesterName: string
    activityId: string
  }
}

const CreateBoardPage = ({ params }: CreateBoardPageParams) => {
  const { userName } = useMyInfoStore((state) => state.getMyInfo())

  const { data: semesters, status } = useQuery(semesterQueries.list())

  const currentSemester = semesters?.find(
    (semester) => semester.semesterName === params.semesterName,
  )

  const { data: activities } = useGetActivities(currentSemester?.semesterId)
  const currentActivity = activities?.find(
    (activity) => activity.activityId === Number(params.activityId),
  )

  if (status === 'pending' || !currentActivity) return <CreateBoardSkeleton />

  return (
    <div className="w-full pt-10">
      <CreateBoardHero />
      <CreateBoardDetail
        semesterName={params.semesterName}
        activityName={currentActivity.activityName}
        userName={userName}
      />
      <CreateBoardForm activityId={Number(currentActivity.activityId)} />
    </div>
  )
}

export default CreateBoardPage
