'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ActiveButton } from '@/components/ActiveButton'
import { ActivitySkeleton } from '@/components/feature'
import { useGetActivities } from '@/service/data/activity'

type ActivityListProps = {
  semesterId: number
  activityId: number
}

export const ActivityList = ({ semesterId, activityId }: ActivityListProps) => {
  const { data: activities, status } = useGetActivities(semesterId)

  const pathName = usePathname()
  const basePath = pathName.split('/').slice(0, -1).join('/')

  if (status === 'pending') return <ActivitySkeleton />
  if (!activities?.length) return <div>활동이 없습니다.</div>

  return (
    <div className="flex justify-center gap-2">
      {activities.map((activity) => (
        <Link
          key={activity.activityId}
          href={`${basePath}/${activity.activityId}`}
        >
          <ActiveButton
            isActive={activityId === activity.activityId}
            className="h-3 rounded-full p-4"
          >
            {activity.activityName}
          </ActiveButton>
        </Link>
      ))}
    </div>
  )
}
