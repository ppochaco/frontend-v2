import { useLocation } from 'react-router'

// import { NotFound } from '@/components/common'
import { NavLink } from '@/components/common'
import { Separator } from '@/components/ui'
import { ActivityBreadcrumb } from '@/pages/activity/components'

type BoardHeroProps = {
  boardName: string
}

export const EditBoardHero = ({ boardName }: BoardHeroProps) => {
  const { pathname } = useLocation()

  const boardPath = pathname.split('/').slice(0, -1).join('/')

  const navLinks: NavLink[] = [
    {
      link: `${boardPath}`,
      name: `${boardName} 게시판`,
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

// const EditBoardHeroSkeleton = () => {
//   return (
//     <div>
//       <Separator variant="dark" />
//       <ActivityBreadcrumb navLinks={[]} pageName="게시판 수정하기" />
//       <Separator variant="dark" />
//     </div>
//   )
// }
