import { Suspense, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import { ActivityPageSkeleton } from '@/components/feature'
import { useMyInfoStore } from '@/store'
import { isRoleAboveOrEqual } from '@/utils'

export const AdminBoardRoute = () => {
  const navigate = useNavigate()
  const { role } = useMyInfoStore((state) => state.myInfo)

  useEffect(() => {
    if (!isRoleAboveOrEqual('ROLE_TEAM_LEADER', role)) {
      navigate(-1)
    }
  }, [role, navigate])

  if (!role) return null

  return (
    <Suspense fallback={<ActivityPageSkeleton />}>
      <Outlet />
    </Suspense>
  )
}
