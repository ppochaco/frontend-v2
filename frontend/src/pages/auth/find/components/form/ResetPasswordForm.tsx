import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { Button, Input, Label } from '@/components/ui'
import { API_ERROR_MESSAGES } from '@/constant'
import { resetPasswordApi } from '@/service/api'
import { ResetPassword, ResetPasswordSchema } from '@/service/schema'

import { FindErrorMessage } from './ErrorMessageBox'
import { SendCodeMessage } from './SuccessMessageBox'
import { VerifyCodeForm } from './VerifyCodeForm'

export const ResetPasswordForm = () => {
  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: () => {
      setSendCode(true)
    },
    onError: (error) => {
      onErrorReset(error)
    },
  })

  const form = useForm<ResetPassword>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: 'onSubmit',
    defaultValues: {
      userId: '',
      studentNumber: '',
    },
  })

  const [message, setMessage] = useState('')
  const [sendCode, setSendCode] = useState(false)
  const [sendUserId, setSendUserId] = useState('')

  const onSubmit = form.handleSubmit(
    (values) => {
      resetPassword({
        userId: values.userId,
        studentNumber: parseInt(values.studentNumber),
      })
      setSendUserId(values.userId)
      setMessage('')
    },
    (errors) => {
      const errorMessage =
        Object.values(errors).flatMap((error) => error.message)[0] || ''
      setMessage(errorMessage)
    },
  )

  const onErrorReset = (error: Error) => {
    if (error instanceof AxiosError) {
      const res = error.response

      if (res?.status === 201 || res?.status === 404 || res?.status === 429) {
        setMessage(res.data.message)
        return
      }
    }

    setMessage(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="userId">아이디</Label>
          <Input {...form.register('userId')} name="userId" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="studentNumber">학번</Label>
          <Input {...form.register('studentNumber')} name="studentNumber" />
          <Button
            className="mt-8"
            disabled={isPending || sendCode}
            type="submit"
          >
            인증번호 받기
          </Button>
        </div>
        <FindErrorMessage message={message} />
        <SendCodeMessage sendCode={sendCode} />
      </form>
      {sendCode && <VerifyCodeForm userId={sendUserId} />}
    </>
  )
}
