'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button, buttonVariants } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Activity } from '@/types/activity'

type ActivityListProps = {
  activities: Activity[]
  activityId: number
}

export const ActivityList = ({ activities, activityId }: ActivityListProps) => {
  const pathName = usePathname()
  const basePath = pathName.split('/').slice(0, -1).join('/')

  return (
    <div className="flex justify-center gap-2">
      {activities.map((activity) => (
        <Link
          key={activity.activityId}
          href={`${basePath}/${activity.activityId}`}
        >
          <Button
            className={cn(
              buttonVariants({
                variant:
                  activityId === activity.activityId ? 'default' : 'secondary',
              }),
              'h-3 rounded-full p-4',
            )}
          >
            {activity.activityName}
          </Button>
        </Link>
      ))}
    </div>
  )
}
