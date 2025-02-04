import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router'

import { Spinner } from '@/components/common'
import { useAuthStore } from '@/store'

export const MyPageRoute = () => {
  const accessToken = useAuthStore((state) => state.accessToken)

  return accessToken ? (
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/" />
  )
}
