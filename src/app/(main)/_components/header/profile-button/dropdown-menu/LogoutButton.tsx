'use client'

import { useMutation } from '@tanstack/react-query'

import { useToast } from '@/components/ui'
import { logoutApi } from '@/service/api'
import { useMyInfoStore } from '@/store/myInfo'

export const LogoutButton = () => {
  const clearMyInfo = useMyInfoStore((state) => state.clearMyInfo)

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (data) => onSuccess(data.message),
    onError: () => onError(),
  })

  const { toast } = useToast()

  const onSuccess = (message: string) => {
    clearMyInfo()

    toast({
      title: message,
      duration: 2000,
    })
  }

  const onError = () => {
    toast({
      title: '로그아웃에 실패했습니다. 잠시후 다시 시도해주세요.',
      duration: 2000,
      variant: 'destructive',
    })
  }

  return <button onClick={() => logout()}>로그아웃</button>
}
