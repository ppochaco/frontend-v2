import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { checkUserId } from '@/servicetest/api/auth'
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

import { SignupInputFieldProps } from '../InputField'

interface CheckUserIdFieldProps extends SignupInputFieldProps {
  isValid: boolean
  setIsValid: (isValid: boolean) => void
}

export const CheckUserIdField = ({
  name,
  formLabel,
  placeholder,
  formDescription,
  isValid,
  setIsValid,
}: CheckUserIdFieldProps) => {
  const form = useFormContext()
  const { errors } = form.formState

  const [message, setMessage] = useState('')

  const { mutate, isPending } = useMutation({
    mutationFn: checkUserId,
    onSuccess: (data) => onSuccess(data.message),
    onError: (error: Error) => onError(error),
  })

  const onClick = () => {
    mutate(form.getValues(name))
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
                중복 확인
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
