import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input, Label } from '@/components/ui'
import { Find, FindSchema } from '@/service/schema'

import { FindErrorMessage } from './ErrorMessageBox'

export const FindForm = () => {
  const form = useForm<Find>({
    resolver: zodResolver(FindSchema),
    mode: 'onSubmit',
    defaultValues: {
      studentNumber: '',
      userName: '',
    },
  })

  const [message, setMessage] = useState('')
  const [studentNumber, setStudentNumber] = useState('')
  const [userName, setUserName] = useState('')

  const onSubmit = form.handleSubmit(
    (values) => {
      setStudentNumber(values.studentNumber)
      setUserName(values.userName)
    },
    (errors) => {
      const errorMessage =
        Object.values(errors).flatMap((error) => error.message)[0] || ''
      setMessage(errorMessage)
    },
  )

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="studentNumber">학번</Label>
        <Input {...form.register('studentNumber')} name="studentNumber" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="userName">이름</Label>
        <Input {...form.register('userName')} name="userName" />
        <Button className="mt-8" type="submit">
          확인
        </Button>
      </div>
      <FindErrorMessage message={message} />
    </form>
  )
}
