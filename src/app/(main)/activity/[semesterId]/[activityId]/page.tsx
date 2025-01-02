'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { ActivityHero, ActivityList, SemesterList } from '@/components/feature'
import { activityQueries, semesterQueries } from '@/service/api'

import { ActivityBoardList, CreateBoardButton } from './_components'

type ActivityParams = {
  params: {
    semesterId: string
    activityId: string
  }
}

export default function ActivityRedirectPage({ params }: ActivityParams) {
  const { data: semesters } = useSuspenseQuery(semesterQueries.list())
  const { data: semester } = useSuspenseQuery(
    semesterQueries.detail({ semesterId: Number(params.semesterId) }),
  )

  const { data: activities } = useSuspenseQuery(
    activityQueries.list({ semesterId: Number(params.semesterId) }),
  )

  useSuspenseQuery(
    activityQueries.detail({
      semesterId: Number(params.semesterId),
      activityId: Number(params.activityId),
    }),
  )

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <ActivityHero />
      <SemesterList semester={semester} semesters={semesters} />
      <div className="flex w-full flex-col items-center gap-6">
        <ActivityList
          activities={activities}
          activityId={Number(params.activityId)}
        />
        <ActivityBoardList activityId={Number(params.activityId)} />
        <div className="mb-20 flex w-full justify-end">
          <CreateBoardButton />
        </div>
      </div>
    </div>
  )
}
