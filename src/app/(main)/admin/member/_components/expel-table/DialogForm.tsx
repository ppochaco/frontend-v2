import { Dispatch, SetStateAction } from 'react'

import { AdminUserQuries, expelUser } from '@/servicetest/api/admin'
import { useMutation } from '@tanstack/react-query'

import { Button, useToast } from '@/components/ui'
import { queryClient } from '@/lib/query-client'

type ExpelMemberDialogFormProps = {
  userId: string
  setDialogOpen: Dispatch<SetStateAction<boolean>>
}

export const ExpelMemberDialogForm = ({
  userId,
  setDialogOpen,
}: ExpelMemberDialogFormProps) => {
  const { mutate: expel, isPending } = useMutation({
    mutationFn: expelUser,
    onSuccess: (data) => onSuccess(data.message),
  })

  const { toast } = useToast()

  const onSuccess = (message: string) => {
    queryClient.invalidateQueries({
      queryKey: AdminUserQuries.filter({ isActive: true }),
    })

    toast({
      title: message,
      duration: 2000,
    })
  }

  return (
    <div className="flex gap-2">
      <Button variant="secondary" onClick={() => setDialogOpen(false)}>
        취소하기
      </Button>
      <Button onClick={() => expel({ userId })} disabled={isPending}>
        내보내기
      </Button>
    </div>
  )
}
