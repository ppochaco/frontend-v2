import { ReactNode } from 'react'

import { ErrorHandlingWrapper } from '@/components/common'

import {
  ActivityErrorFallback,
  ActivityHero,
  SemesterListSkeleton,
} from './[semesterId]/[activityId]/_components'

export default function SemesterRedirectLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex w-full max-w-screen-xl flex-col gap-2 px-12 sm:px-20">
      <ErrorHandlingWrapper
        suspenseFallback={
          <div className="flex w-full flex-col items-center gap-2">
            <ActivityHero />
            <SemesterListSkeleton />
          </div>
        }
        fallbackComponent={ActivityErrorFallback}
      >
        {children}
      </ErrorHandlingWrapper>
    </div>
  )
}
