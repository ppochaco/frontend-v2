import { useLocation, useNavigate } from 'react-router'

import { Button } from '@/components/ui'
import { useMyInfoStore } from '@/store/myInfo'
import { isRoleAboveOrEqual } from '@/utils'

export const CreateNoticePostButton = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { role } = useMyInfoStore((state) => state.myInfo)

  return (
    <Button
      onClick={() => navigate(`${pathname}/create-post`)}
      disabled={!isRoleAboveOrEqual('ROLE_ADMIN', role)}
    >
      공지사항 작성하기
    </Button>
  )
}
