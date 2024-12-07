'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { useMyInfoStore } from '@/store/myInfo'
import { Role } from '@/types/user'

export const CreatePostButton = () => {
  const pathName = usePathname()
  const router = useRouter()

  const { role } = useMyInfoStore((state) => state.getMyInfo())

  return (
    <div className="mb-20 flex justify-end">
      <Button
        onClick={() => router.push(`${pathName}/create-post`)}
        disabled={!role?.includes(role as Role)}
        className="max-w-fit"
      >
        게시글 생성하기
      </Button>
    </div>
  )
}
