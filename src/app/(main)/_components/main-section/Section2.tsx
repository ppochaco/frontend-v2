import { Content } from '@/components/common'
import { CAROUSEL_ACTIVITIES as CarouselActivities } from '@/constant/carouselActicities'

import { Carousel } from './carousel'

export const Section2 = () => {
  return (
    <Content className="w-full flex-col bg-white pb-40 pt-28 md:px-10">
      <div className="flex w-full flex-1 flex-col items-center gap-12">
        <p className="text-center text-4xl font-semibold leading-snug">
          주요 활동 및 행사
        </p>
        <Carousel />
        <div className="relative mt-10 flex w-full flex-col items-center px-12">
          <Calendar />
          <p className="-rotate-15 absolute -bottom-5 right-6 bg-yellow-400/80 px-0.5 text-3xl font-semibold">
            한눈에 보기
          </p>
        </div>
      </div>
    </Content>
  )
}

const Calendar = () => {
  return (
    <table className="w-full table-fixed border-collapse overflow-hidden rounded-xl border border-gray-300">
      <thead className="bg-primary text-white">
        <tr>
          <th className="border border-gray-300 px-4 py-2">3월</th>
          <th className="border border-gray-300 px-4 py-2">4월</th>
          <th className="border border-gray-300 px-4 py-2">5월</th>
          <th className="border border-gray-300 px-4 py-2">6월</th>
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
          <td className="border border-gray-300 px-4 py-2"></td>
          <td className="border border-gray-300 px-4 py-2">🏞️ MT</td>
          <td className="border border-gray-300 px-4 py-2"></td>
          <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
      </tbody>
    </table>
  )
}
