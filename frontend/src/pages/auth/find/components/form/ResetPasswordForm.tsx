import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input, Label } from '@/components/ui'
import { Reset, ResetSchema } from '@/service/schema'

export const ResetPasswordForm = () => {
  const form = useForm<Reset>({
    resolver: zodResolver(ResetSchema),
    mode: 'onSubmit',
    defaultValues: {
      userId: '',
      studentNumber: '',
    },
  })

  const onSubmit = form.handleSubmit(() => {})

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="userId">아이디</Label>
        <Input {...form.register('userId')} name="userId" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="studentNumber">학번</Label>
        <Input {...form.register('studentNumber')} name="studentNumber" />
        <Button className="mt-8" type="submit">
          확인
        </Button>
      </div>
    </form>
  )
}
