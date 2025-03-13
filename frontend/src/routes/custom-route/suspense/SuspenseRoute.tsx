import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router'

import { Spinner } from '@/components/common'
import { DefaultErrorFallback } from '@/components/feature'

export const SuspenseRoute = () => {
  return (
    <ErrorBoundary FallbackComponent={DefaultErrorFallback}>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  )
}
