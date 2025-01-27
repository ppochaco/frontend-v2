import { Spinner } from '@/components/common'

import { ActivityHeroSkeleton } from '../hero-skeleton'

export const ActivityPageSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <ActivityHeroSkeleton />
      <Spinner />
    </div>
  )
}
