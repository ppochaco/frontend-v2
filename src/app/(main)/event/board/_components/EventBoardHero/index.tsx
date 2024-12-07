import { NavLink, PageBreadcrumb } from '@/components/common'
import { Separator } from '@/components/ui'

import { EventBoardDetail } from './EventBoardDetail'

export const EventBoardHero = () => {
  return (
    <div className="flex w-full flex-col">
      <Separator variant="dark" />
      <PageBreadcrumb navLinks={EventPageNavLinks} pageName="행사 게시판" />
      <EventBoardDetail />
      <Separator variant="dark" />
    </div>
  )
}

const EventPageNavLinks: NavLink[] = [
  {
    index: 0,
    link: '/event',
    name: '행사 갤러리',
  },
]
