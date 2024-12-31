'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui'
import { useMyInfoStore } from '@/store/myInfo'

export const CreateBoardButton = () => {
  const router = useRouter()
  const pathName = usePathname()

  const { role } = useMyInfoStore((state) => state.getMyInfo())

  return (
    <Button
      className="max-w-fit"
      onClick={() => router.push(`${pathName}/create-board`)}
      disabled={!(role === 'ROLE_ADMIN' || role === 'ROLE_TEAM_LEADER')}
    >
      게시판 생성하기
    </Button>
  )
}
