import { useLocation, useNavigate } from 'react-router'

import { Button } from '@/components/ui'
import { useMyInfoStore } from '@/store/myInfo'
import { isRoleAboveOrEqual } from '@/utils'

export const CreateBoardButton = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { role } = useMyInfoStore((state) => state.myInfo)

  return (
    <Button
      className="max-w-fit"
      onClick={() => navigate(`${pathname}/create-board`)}
      disabled={!isRoleAboveOrEqual('ROLE_TEAM_LEADER', role)}
    >
      게시판 생성하기
    </Button>
  )
}
