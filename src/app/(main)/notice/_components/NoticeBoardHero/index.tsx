import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Separator } from '@/components/ui/separator'

export const NoticeBoardHero = () => {
  return (
    <div className="flex w-full flex-col">
      <Separator variant="dark" />
      <PageBreadcrumb navLinks={[]} pageName="공지" />
      <Separator variant="dark" />
    </div>
  )
}
