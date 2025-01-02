'use client'

import { useEffect } from 'react'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { activityQueries, semesterQueries } from '@/service/api'
import { Activity, Semester } from '@/types/activity'

import {
  ActivityHero,
  ActivitySkeleton,
  SemesterList,
} from './[activityId]/_components'

type ActivityRedirectParams = {
  params: {
    semesterId: string
  }
}

interface ActivityRedirectProps {
  semesters: Semester[]
  semester: Semester
  activities: Activity[]
}

const ActivityRedirect = ({
  semester,
  semesters,
  activities,
}: ActivityRedirectProps) => {
  const router = useRouter()

  useEffect(() => {
    const lastActivity = activities[activities.length - 1]
    router.push(`/activity/${semester.semesterId}/${lastActivity.activityId}`)
  }, [router, semesters, semester, activities])

  return (
    <div className="flex flex-col items-center gap-2">
      <ActivityHero />
      <SemesterList semester={semester} semesters={semesters} />
      <ActivitySkeleton />
    </div>
  )
}

export default function ActivityRedirectPage({
  params,
}: ActivityRedirectParams) {
  const { data: semesters } = useSuspenseQuery(semesterQueries.list())
  const { data: semester } = useSuspenseQuery(
    semesterQueries.detail({ semesterId: Number(params.semesterId) }),
  )

  const { data: activities } = useSuspenseQuery(
    activityQueries.list({ semesterId: Number(params.semesterId) }),
  )

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
    <ActivityRedirect
      semesters={semesters}
      semester={semester}
      activities={activities}
    />
  )
}
