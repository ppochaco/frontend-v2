'use client'

import { useEffect } from 'react'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { semesterQueries } from '@/service/api'
import { Semester } from '@/types/activity'

import {
  ActivityHero,
  SemesterListSkeleton,
} from './[semesterId]/[activityId]/_components'

interface ActivityRedirectProps {
  semesters: Semester[]
}

const SemesterRedirect = ({ semesters }: ActivityRedirectProps) => {
  const router = useRouter()

  useEffect(() => {
    const lastSemester = semesters[semesters.length - 1]
    router.push(`/activity/${lastSemester.semesterId}`)
  }, [router, semesters])

  return (
    <div className="flex flex-col items-center gap-2">
      <ActivityHero />
      <SemesterListSkeleton />
    </div>
  )
}

export default function SemesterRedirectPage() {
  const { data: semesters } = useSuspenseQuery(semesterQueries.list())

  if (!semesters.length) {
    return (
      <div className="flex flex-col items-center gap-2">
        <ActivityHero />
        <div className="pt-3">학기가 없습니다.</div>
      </div>
    )
  }

  return <SemesterRedirect semesters={semesters} />
}
