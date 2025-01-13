import Image from 'next/image'

import { Content } from '@/components/common'
import { CAROUSEL_ACTIVITIES as CarouselActivities } from '@/constant/carouselActicities'

import { Carousel } from './carousel'

export const Section2 = () => {
  return (
    <Content className="w-full flex-col bg-white pb-20 pt-20 md:px-10 md:pb-36 md:pt-28">
      <div className="flex w-full flex-1 flex-col items-center gap-12">
        <p className="text-center text-4xl font-semibold leading-snug">
          주요 활동 및 행사
        </p>
        <Carousel />
        <div className="relative mt-4 flex w-full flex-col items-center gap-12 px-12 md:mt-8 md:flex-row md:gap-6 md:gap-8">
          <CalendarFirstSemester />
          <CalendarSecondSemester />
          <p className="-rotate-15 absolute -bottom-5 right-6 bg-yellow-400/80 px-0.5 text-2xl font-semibold md:text-3xl">
            한눈에 보기
          </p>
        </div>
      </div>
    </Content>
  )
}

const CalendarFirstSemester = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/crayon.svg"
        alt="crayon"
        width={100}
        height={0}
        className="absolute -top-7 left-[calc(68%)] z-10"
      />
      <p className="absolute -top-10 left-[calc(72%)] z-10 text-lg font-semibold text-red-400">
        해커톤
      </p>
      <table className="md:text-md w-full table-fixed border-collapse overflow-hidden rounded-xl border border-gray-300 text-sm break-keep">
        <thead className="bg-primary text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">3월</th>
            <th className="border border-gray-300 px-4 py-2">4월</th>
            <th className="border border-gray-300 px-4 py-2">5월</th>
            <th className="border border-gray-300 px-4 py-2">6월</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">🎈 개강총회</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">🎈 종강총회</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">🧺 해크닉</td>
            <td className="border border-gray-300 px-4 py-2">🥪 간식마차</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">🥪 간식마차</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">🏞️ MT</td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const CalendarSecondSemester = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/crayon.svg"
        alt="crayon"
        width={100}
        height={0}
        className="absolute -top-7 left-[calc(68%)] z-10"
      />
      <p className="absolute -top-10 left-[calc(72%)] z-10 text-lg font-semibold text-red-400">
        해커톤
      </p>
      <table className="relative w-full table-fixed border-collapse overflow-hidden rounded-xl border border-gray-300 md:text-md text-sm break-keep">
        <thead className="bg-primary text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">9월</th>
            <th className="border border-gray-300 px-4 py-2">10월</th>
            <th className="border border-gray-300 px-4 py-2">11월</th>
            <th className="border border-gray-300 px-4 py-2">12월</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">🎈 개강총회</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">🎈 종강총회</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">🧺 해크닉</td>
            <td className="border border-gray-300 px-4 py-2">🥪 간식마차</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">🥪 간식마차</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">🏞️ MT</td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
