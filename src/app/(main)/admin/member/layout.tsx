import { ErrorHandlingWrapper, Spinner } from '@/components/common'
import { AdminErrorFallback } from '@/components/feature'

export default function AdminMemberLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ErrorHandlingWrapper
      suspenseFallback={<Spinner />}
      fallbackComponent={AdminErrorFallback}
    >
      {children}
    </ErrorHandlingWrapper>
  )
}
