import { FallbackProps } from 'react-error-boundary'

import { AxiosError } from 'axios'
import { toast } from 'sonner'

import { API_ERROR_MESSAGES } from '@/constant'

export const CommentErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  resetErrorBoundary()
  if (error instanceof AxiosError) {
    if (error.status === 403) {
      return toast.error('로그인 후 이용해주세요.')
    }

    return toast.error(error.response?.data.message)
  }

  return toast.error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
}
