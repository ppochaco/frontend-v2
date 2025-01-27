import { useLocation } from 'react-router'

import { NavLink, PageBreadcrumb } from '@/components/common'
import { Separator } from '@/components/ui'

export const ActivityHeroSkeleton = () => {
  const { pathname } = useLocation()
  const activityPath = pathname.split('/').slice(0, 4).join('/')

  const activityNav: NavLink = {
    index: 0,
    link: activityPath,
    name: '활동',
  }

  return (
    <div className="flex flex-col">
      <Separator variant="dark" />
      <PageBreadcrumb navLinks={[activityNav]} />
      <Separator variant="dark" />
    </div>
  )
}
