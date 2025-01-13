import Image from 'next/image'

import { Content } from '@/components/common'

import { Calendar } from './calender'
import { Carousel } from './carousel'
import { EVENTS_FIRST_SEMESTER, EVENTS_SECOND_SEMESTER } from './eventsData'

export const Section2 = () => {
  return (
    <Content className="w-full flex-col bg-white pb-20 pt-20 md:px-10 md:pb-36 md:pt-28">
      <div className="flex w-full flex-1 flex-col items-center gap-12">
        <p className="text-center text-4xl font-semibold leading-snug">
          주요 활동 및 행사
        </p>
        <Carousel />
        <div className="relative mt-4 flex w-full flex-col items-center gap-12 px-12 md:mt-10 md:flex-row md:gap-6 md:gap-8">
          <Calendar
            months={EVENTS_FIRST_SEMESTER.months}
            events={EVENTS_FIRST_SEMESTER.events}
          />
          <Calendar
            months={EVENTS_SECOND_SEMESTER.months}
            events={EVENTS_SECOND_SEMESTER.events}
          />
          <p className="-rotate-15 absolute -bottom-5 right-6 bg-yellow-400/80 px-0.5 text-2xl font-semibold md:text-3xl">
            한눈에 보기
          </p>
        </div>
      </div>
    </Content>
  )
}
