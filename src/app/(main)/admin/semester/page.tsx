'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { AdminSemesterSkeleton, SectionWithTitle } from '@/components/feature'
import { semesterQueries } from '@/service/api'

import { ActivityAccordion, SemesterList } from './_components'

const AdminSemesterPage = () => {
  const { data: semesters } = useSuspenseQuery(semesterQueries.list())

  return (
    <div className="flex w-full flex-col items-center">
      <SectionWithTitle title="학기 관리">
        <SemesterList semesters={semesters} />
      </SectionWithTitle>
      <SectionWithTitle title="활동 관리">
        <ActivityAccordion semesters={semesters} />
      </SectionWithTitle>
    </div>
  )
}

export default AdminSemesterPage

export const AdminSemesterPageSkeleton = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <SectionWithTitle title="학기 관리">
        <AdminSemesterSkeleton />
      </SectionWithTitle>
      <SectionWithTitle title="활동 관리">
        <div />
      </SectionWithTitle>
    </div>
  )
}
