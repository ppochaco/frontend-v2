import { useEffect, useState } from 'react'
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
import { checkUserEmailApi } from '@/service/api'

import { SignupInputFieldProps } from '../InputField'

interface CheckUserEmailFieldProps extends SignupInputFieldProps {
  isValid: boolean
  setUserEmail: (email: string) => void
  setIsValid: (isValid: boolean) => void
}

export const CheckUserEmailField = ({
  name,
  formLabel,
  placeholder,
  formDescription,
  isValid,
  setUserEmail,
  setIsValid,
}: CheckUserEmailFieldProps) => {
  const form = useFormContext()
  const { errors } = form.formState

  const [message, setMessage] = useState('')

  const { mutate: checkUserEmail, isPending } = useMutation({
    mutationFn: checkUserEmailApi,
    onSuccess: (data) => {
      if (data.message) {
        onSuccess(data.message)
      } else {
        onError(new Error('Message is undefined'))
      }
    },
    onError: (error: Error) => onError(error),
  })

  const email = form.getValues(name)

  useEffect(() => {
    setUserEmail(email)
  }, [email, setUserEmail])

  const onClick = () => {
    checkUserEmail({ email })
  }

  const onSuccess = (message: string) => {
    setIsValid(true)
    setMessage(message)
  }

  const onError = (error: Error) => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 409) {
        setMessage(error.response?.data.message)
        return
      }
    }

    setMessage(API_ERROR_MESSAGES.UNKNOWN_ERROR)
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
                disabled={!!errors[name] || isPending}
                onClick={onClick}
              >
                인증번호 전송
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
