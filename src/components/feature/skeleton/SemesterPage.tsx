import { AdminSemesterSkeleton } from '.'
import { SectionWithTitle } from '../admin/section-with-title'

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
