import { NotFoundError } from '@/components/common'
import { MainLayout } from '@/components/feature'

export default function NotFoundPage() {
  return (
    <MainLayout>
      <NotFoundError />
    </MainLayout>
  )
}
