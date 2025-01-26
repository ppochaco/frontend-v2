import { Outlet } from 'react-router'

import { MainLayout } from '@/components/feature/layout/main'

export const MainRoute = () => {
  return (
    <MainLayout>
      <div className="flex w-full flex-1 justify-center px-5 pt-10 sm:px-20">
        <Outlet />
      </div>
    </MainLayout>
  )
}
