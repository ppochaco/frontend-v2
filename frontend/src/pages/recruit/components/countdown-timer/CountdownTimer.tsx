import { useEffect, useMemo, useState } from 'react'

import { getDateDistance } from '@toss/date'

export const CountdownTimer = () => {
  /**
   * 모집 마감 타이머
   *
   * @todo 새 학기 시작 시 모집 마감 시간 교체
   */
  const endDate = useMemo(() => new Date('2025-09-05T23:59:59+09:00'), [])

  const [distance, setDistance] = useState(getDateDistance(new Date(), endDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setDistance(getDateDistance(new Date(), endDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="flex justify-center bg-black py-12 text-white">
      <div className="relative flex aspect-[3/1] max-h-[464px] w-3/4 max-w-[1402px] items-center justify-center rounded-[50%] border-2 lg:border-4">
        <div className="absolute -top-4 left-0 flex aspect-[5/2] max-h-[113px] w-1/5 min-w-24 max-w-[285px] items-center justify-center rounded-[50%] bg-white text-black sm:top-0">
          <div className="text-xs font-bold md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            서류 마감까지,
          </div>
        </div>
        <div className="font-archivo text-clamp">
          {padZero(distance.days)}:{padZero(distance.hours)}:
          {padZero(distance.minutes)}:{padZero(distance.seconds)}
        </div>
      </div>
    </div>
  )
}

const padZero = (num: number) => String(num).padStart(2, '0')
