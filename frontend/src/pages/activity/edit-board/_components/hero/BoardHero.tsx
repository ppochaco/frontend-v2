import { Separator } from '@/components/ui'
import { ActivityBreadcrumb } from '@/pages/activity/components'

export const BoardHero = () => {
  return (
    <div>
      <Separator variant="dark" />
      <ActivityBreadcrumb navLinks={[]} pageName="게시판 수정하기" />
      <Separator variant="dark" />
    </div>
  )
}
