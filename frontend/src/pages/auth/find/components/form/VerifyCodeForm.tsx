import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

import { Button, Input, Label } from '@/components/ui'
import { API_ERROR_MESSAGES } from '@/constant'
import { verifyResetPasswordCodeApi } from '@/service/api'
import { VerifyCode, VerifyCodeSchema } from '@/service/schema'

import { FindErrorMessage } from './ErrorMessageBox'

interface VerifyEmailCodeProps {
  userId: string
}

export const VerifyCodeForm = ({ userId }: VerifyEmailCodeProps) => {
  const { mutate: verifyResetPasswordCode, isPending } = useMutation({
    mutationFn: verifyResetPasswordCodeApi,
    onSuccess: () => {
      toast.success('이메일로 전송된 임시 비밀번호를 사용해주세요. ', {
        duration: 3000,
      })
      navigate('/')
    },
    onError: (error) => {
      onErrorReset(error)
    },
  })

  const form = useForm<VerifyCode>({
    resolver: zodResolver(VerifyCodeSchema),
    mode: 'onChange',
    defaultValues: {
      code: '',
    },
  })

  const navigate = useNavigate()
  const [message, setMessage] = useState('')

  const onErrorReset = (error: Error) => {
    if (error instanceof AxiosError) {
      const res = error.response
      console.log(res)

      if (res?.status === 400 || res?.status === 404) {
        setMessage(res.data.message)
        return
      }
    }

    setMessage(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }

  const onSubmit = form.handleSubmit(
    (values) => {
      verifyResetPasswordCode({
        userId: userId,
        code: values.code,
      })
      setMessage('')
    },
    (errors) => {
      const errorMessage =
        Object.values(errors).flatMap((error) => error.message)[0] || ''
      setMessage(errorMessage)
    },
  )

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
      <div className="mt-4 flex flex-col gap-2">
        <Label htmlFor="code">인증번호</Label>
        <div className="flex gap-2">
          <Input {...form.register('code')} name="code" />
          <Button type="submit" disabled={isPending}>
            인증번호 확인
          </Button>
        </div>
      </div>
      <FindErrorMessage message={message} />
    </form>
  )
}
