'use client'

import { useEffect } from 'react'

import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

import { FallbackProps } from '@/components/common'
import { Button } from '@/components/ui'

const ActivityErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const router = useRouter()

  useEffect(() => {
    if (error instanceof AxiosError && error.response?.status === 404) {
      resetErrorBoundary()
      router.push('/activity')
    }
  }, [router, error, resetErrorBoundary])

  return (
    <div className="flex flex-col items-center gap-6 pt-40">
      <div>{error?.message} </div>
      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => router.back()}>
          뒤로가기
        </Button>
        <Button onClick={() => resetErrorBoundary()}>다시 시도</Button>
      </div>
    </div>
  )
}

export default ActivityErrorFallback
