import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import {
  Button,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui'
import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { cn } from '@/lib/utils'
import { verifyUserEmailApi } from '@/service/api'

import { SignupInputFieldProps } from '../InputField'

interface VerifyUserEmailFieldProps extends SignupInputFieldProps {
  userEmail: string
  userId: string
  isValid: boolean
  setIsValid: (isValid: boolean) => void
  disabled: boolean
}

export const VerifyUserEmailField = ({
  name,
  formLabel,
  placeholder,
  formDescription,
  userEmail,
  userId,
  isValid,
  setIsValid,
  disabled,
}: VerifyUserEmailFieldProps) => {
  const form = useFormContext()

  const [message, setMessage] = useState('')

  const { mutate: verifyUserEmail, isPending } = useMutation({
    mutationFn: verifyUserEmailApi,
    onSuccess: (data) => onSuccess(data.message),
    onError: (error: Error) => onError(error),
  })

  const onClick = () => {
    verifyUserEmail({
      email: userEmail,
      userId: userId,
      code: form.getValues(name),
    })
  }

  const onSuccess = (message: string) => {
    setIsValid(true)
    setMessage(message)
  }

  const onError = (error: Error) => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 400) {
        if (error.response.data.code === 'EMAIL_001') {
          setMessage(error.response?.data.message)
          return
        }

        setMessage(error.response?.data.errors[0].message)
        return
      }

      setMessage(API_ERROR_MESSAGES.UNKNOWN_ERROR)
    }
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>
            <div className="flex gap-2">
              <Input
                value={field.value}
                onChange={(e) => {
                  field.onChange(e)
                  setIsValid(false)
                  setMessage('')
                }}
                placeholder={placeholder}
              />
              <Button
                type="button"
                variant="outline"
                disabled={disabled || isPending}
                onClick={onClick}
              >
                인증번호 확인
              </Button>
            </div>
          </FormControl>
          <FormDescription className="pl-2">{formDescription}</FormDescription>
          <FormMessage className="pl-2" />
          {message && (
            <p
              className={cn(
                isValid ? 'text-blue-600' : 'text-red-600',
                'pl-2 text-sm',
              )}
            >
              {message}
            </p>
          )}
        </FormItem>
      )}
    />
  )
}
