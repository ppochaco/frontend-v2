import { ErrorHandlingWrapper } from '@/components/common'
import { AdminErrorFallback } from '@/components/feature'

import { AdminSemesterPageSkeleton } from './page'

export default function AdminSemesterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ErrorHandlingWrapper
      suspenseFallback={<AdminSemesterPageSkeleton />}
      fallbackComponent={AdminErrorFallback}
    >
      {children}
    </ErrorHandlingWrapper>
  )
}
