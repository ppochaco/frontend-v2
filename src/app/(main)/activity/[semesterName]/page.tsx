'use client'

import { semesterQueries } from '@/servicetest/api/semester'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import {
  ActivitySemesterSkeleton,
  SemesterPagination,
} from '@/components/feature'

import { RedirectActivity } from './_components'

type RedirectActivityParams = {
  params: { semesterName: string }
}

const RedirectSemesterPage = ({ params }: RedirectActivityParams) => {
  const router = useRouter()
  const { data: semesters, status } = useQuery(semesterQueries.list())

  if (status === 'pending') return <ActivitySemesterSkeleton />

  if (!semesters) return <div>학기가 없습니다.</div>

  const currentSemester = semesters.find(
    (semester) => semester.semesterName === params.semesterName,
  )

  if (!currentSemester) return <div>학기가 없습니다.</div>

  if (params.semesterName === 'init') {
    const lastSemester = semesters[semesters.length - 1].semesterName

    router.push(`/activity/${lastSemester}`)
    return
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <SemesterPagination
        semesterName={params.semesterName}
        semesters={semesters}
      />
      <RedirectActivity semester={currentSemester} />
    </div>
  )
}

export default RedirectSemesterPage
