'use client'

import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { activityQueries, semesterQueries } from '@/service/api'
import { Activity, Semester } from '@/types/activity'

import {
  ActivityBoardList,
  ActivityHero,
  ActivityList,
  ActivitySkeleton,
  CreateBoardButton,
  SemesterList,
  SemesterListSkeleton,
} from './_components'

type ActivityParams = {
  params: {
    semesterId: string
    activityId: string
  }
}

interface ActivityPageProps extends ActivityParams {
  semesters: Semester[]
  semester: Semester
  activities: Activity[]
}

const ActivityPage = ({
  params,
  semesters,
  semester,
  activities,
}: ActivityPageProps) => {
  const router = useRouter()

  const { data: activity, error } = useQuery(
    activityQueries.detail({
      semesterId: semester.semesterId,
      activityId: Number(params.activityId),
    }),
  )

  if (error) {
    const lastActivity = activities[activities.length - 1]
    router.push(`/activity/${semester.semesterId}/${lastActivity.activityId}`)
  }

  if (activity) {
    return (
      <div className="flex flex-col items-center gap-2">
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

  return (
    <div className="flex flex-col items-center gap-2">
      <ActivityHero />
      <SemesterList semester={semester} semesters={semesters} />
      <ActivitySkeleton />
    </div>
  )
}

export default function ActivityRedirectPage({ params }: ActivityParams) {
  const router = useRouter()

  const { data: semesters } = useSuspenseQuery(semesterQueries.list())
  const { data: activities } = useSuspenseQuery(
    activityQueries.list({ semesterId: Number(params.semesterId) }),
  )

  const { data: semester, error } = useQuery(
    semesterQueries.detail({ semesterId: Number(params.semesterId) }),
  )

  if (error) {
    const lastSemester = semesters[semesters.length - 1]
    router.push(`/activity/${lastSemester.semesterId}/-1`)
  }

  if (!semesters.length) {
    return (
      <div className="flex flex-col items-center gap-2">
        <ActivityHero />
        <div>학기가 없습니다.</div>
      </div>
    )
  }

  if (!semester) {
    return (
      <div className="flex flex-col items-center gap-2">
        <ActivityHero />
        <SemesterListSkeleton />
      </div>
    )
  }

  if (!activities.length) {
    return (
      <div className="flex flex-col items-center gap-2">
        <ActivityHero />
        <SemesterList semester={semester} semesters={semesters} />
        <div>활동이 없습니다.</div>
      </div>
    )
  }

  return (
    <ActivityPage
      params={params}
      semesters={semesters}
      semester={semester}
      activities={activities}
    />
  )
}
