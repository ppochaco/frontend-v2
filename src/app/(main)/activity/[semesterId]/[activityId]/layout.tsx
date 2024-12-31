import { ReactNode, Suspense } from 'react'

import { ActivityHero, SemesterListSkeleton } from './_components'

export default function ActivityPageLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex w-full max-w-screen-xl flex-col gap-2 px-12 sm:px-20">
      <Suspense
        fallback={
          <div className="flex w-full flex-col items-center gap-2">
            <ActivityHero />
            <SemesterListSkeleton />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  )
}
