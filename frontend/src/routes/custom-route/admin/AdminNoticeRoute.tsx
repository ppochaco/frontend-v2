import { Navigate, Outlet } from 'react-router'

import { useMyInfoStore } from '@/store'
import { isRoleAboveOrEqual } from '@/utils'

export const AdminNoticeRoute = () => {
  const { role } = useMyInfoStore((state) => state.myInfo)

  return isRoleAboveOrEqual('ROLE_ADMIN', role) ? (
    <Outlet />
  ) : (
    <Navigate to="/notice" />
  )
}
