import { ReactNode } from 'react'

import { SemesterPagination } from '@/components/feature'
import ErrorHandlingWrapper from '@/service/components/error-boundary/ErrorHandlingWrapper'

import { ActivityErrorFallback } from './_components'

type ActivityPageParams = {
  semesterName: string
}

type ActivityLayoutProps = {
  params: ActivityPageParams
  children: ReactNode
}

const ActivityLayout = ({ params, children }: ActivityLayoutProps) => {
  return (
    <ErrorHandlingWrapper
      fallbackComponent={ActivityErrorFallback}
      suspenseFallback={
        <div className="flex flex-col items-center gap-2">
          <SemesterPagination
            semesterName={params.semesterName}
            semesters={[]}
          />
        </div>
      }
    >
      {children}
    </ErrorHandlingWrapper>
  )
}

export default ActivityLayout
