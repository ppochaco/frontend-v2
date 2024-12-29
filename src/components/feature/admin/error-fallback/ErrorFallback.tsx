'use client'

import { useCallback, useEffect } from 'react'

import { CrossCircledIcon } from '@radix-ui/react-icons'
import { AxiosError } from 'axios'

import { FallbackProps } from '@/components/common'
import { Button, useToast } from '@/components/ui'
import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { cn } from '@/lib/utils'

export const AdminErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const { toast } = useToast()

  const handleToast = useCallback(
    (message: string, status: number) => {
      if (status === 404 || status === 409) {
        toast({
          description: (
            <div className="flex items-center font-semibold">
              <CrossCircledIcon className="mr-2 h-5 w-5 text-white" />
              {message}
            </div>
          ),
          className: cn(
            'right-0 flex fixed md:max-w-[420px] top-4 md:right-4 data-[state=open]:sm:slide-in-from-top-full',
          ),
          variant: 'destructive',
        })

        resetErrorBoundary()
      }
    },
    [toast, resetErrorBoundary],
  )

  useEffect(() => {
    if (error instanceof AxiosError && error.response?.data.message) {
      handleToast(error.response.data.message, error.response.status)
    }
  }, [error, handleToast])

  return (
    <div className="flex flex-col items-center gap-6 pt-40">
      <div>{API_ERROR_MESSAGES.UNKNOWN_ERROR} </div>
      <Button onClick={() => resetErrorBoundary()}>뒤로가기</Button>
    </div>
  )
}
