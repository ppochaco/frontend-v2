import { PageBreadcrumb } from '@/components/common'
import { Separator } from '@/components/ui'

export const NoticeBoardHero = () => {
  return (
    <div className="flex w-full flex-col">
      <Separator variant="dark" />
      <PageBreadcrumb navLinks={[]} pageName="공지사항 게시판" />
      <Separator variant="dark" />
    </div>
  )
}
