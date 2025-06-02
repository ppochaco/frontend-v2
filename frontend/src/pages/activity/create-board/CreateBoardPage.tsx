import { useParams } from 'react-router'

import { useQuery } from '@tanstack/react-query'

import { NetworkError } from '@/components/common'
import { ActivityPageSkeleton } from '@/components/feature'
import { activityQueries, semesterQueries } from '@/service/api'
import { useMyInfoStore } from '@/store'

import {
  CreateBoardDetail,
  CreateBoardForm,
  CreateBoardHero,
} from './_components'

export default function CreateBoardPage() {
  const params = useParams()
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
    return <ActivityPageSkeleton />
  }

  if (semesterError || activityError)
    return (
      <div className="w-full">
        <CreateBoardHero />
        <NetworkError />
      </div>
    )

  return (
    <div className="w-full">
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
