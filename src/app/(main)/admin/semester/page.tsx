'use client'

import { SectionWithTitle } from '@/components/feature'
import { useGetSemesters } from '@/service/data/semester'

import {
  ActivityAccordion,
  SemesterList,
  SemesterSkeleton,
} from './_components'

const AdminSemesterPage = () => {
  const { semesters, status } = useGetSemesters()

  if (status === 'pending') return <AdminSemesterPageSkeleton />

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

const AdminSemesterPageSkeleton = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <SectionWithTitle title="학기 관리">
        <SemesterSkeleton />
      </SectionWithTitle>
      <SectionWithTitle title="활동 관리">
        <div />
      </SectionWithTitle>
    </div>
  )
}
