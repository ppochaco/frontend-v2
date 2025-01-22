import { useLocation } from 'react-router'

import { useQuery } from '@tanstack/react-query'

import { NotFound } from '@/components/common'
import { NavLink } from '@/components/common'
import { Separator } from '@/components/ui'
import { ActivityBreadcrumb } from '@/pages/activity/components'
import { boardQueries } from '@/service/api'

type BoardHeroProps = {
  activityId: number
  boardId: number
}

export const BoardHero = ({ boardId, activityId }: BoardHeroProps) => {
  const { pathname } = useLocation()

  const { data: boardDetail, status } = useQuery(
    boardQueries.detail({ activityId, boardId }),
  )

  if (status === 'pending') return <BoardHeroSkeleton />

  if (!boardDetail) return <NotFound />

  const boardPath = pathname.split('/').slice(0, -1).join('/')

  const navLinks: NavLink[] = [
    {
      link: `${boardPath}`,
      name: `${boardDetail.boardName} 게시판`,
    },
  ]

  return (
    <div>
      <Separator variant="dark" />
      <ActivityBreadcrumb navLinks={navLinks} pageName="게시판 수정하기" />
      <Separator variant="dark" />
    </div>
  )
}

const BoardHeroSkeleton = () => {
  return (
    <div>
      <Separator variant="dark" />
      <ActivityBreadcrumb navLinks={[]} pageName="게시판 수정하기" />
      <Separator variant="dark" />
    </div>
  )
}
