import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { Button, Input, Label } from '@/components/ui'
import { API_ERROR_MESSAGES } from '@/constant'
import { findUserIdApi } from '@/service/api'
import { FindUserId, FindUserIdSchema } from '@/service/schema'

import { FindErrorMessage } from './ErrorMessageBox'
import { FindSuccessMessage } from './SuccessMessageBox'

export const FindUserIdForm = () => {
  const { mutate: find, isPending } = useMutation({
    mutationFn: findUserIdApi,
    onSuccess: (data) => {
      setUserId(data.userId + '')
    },
    onError: (error) => {
      onErrorFind(error)
    },
  })

  const form = useForm<FindUserId>({
    resolver: zodResolver(FindUserIdSchema),
    mode: 'onSubmit',
    defaultValues: {
      studentNumber: '',
      userName: '',
    },
  })

  const [userId, setUserId] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = form.handleSubmit(
    (values) => {
      find({
        studentNumber: parseInt(values.studentNumber),
        name: values.userName,
      })
      setMessage('')
    },
    (errors) => {
      const errorMessage =
        Object.values(errors).flatMap((error) => error.message)[0] || ''
      setMessage(errorMessage)
    },
  )

  const onErrorFind = (error: Error) => {
    if (error instanceof AxiosError) {
      const res = error.response

      if (res?.status === 404) {
        setMessage(res.data.message)
        return
      }
    }

    setMessage(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="studentNumber">학번</Label>
        <Input {...form.register('studentNumber')} name="studentNumber" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="userName">이름</Label>
        <Input {...form.register('userName')} name="userName" />
        <Button className="mt-8" disabled={isPending} type="submit">
          확인
        </Button>
      </div>
      <FindSuccessMessage userId={userId} />
      <FindErrorMessage message={message} />
    </form>
  )
}
