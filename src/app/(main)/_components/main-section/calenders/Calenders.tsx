import Image from 'next/image'

export const CalendarFirstSemester = () => {
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
      <table className="md:text-md w-full table-fixed border-collapse overflow-hidden break-keep rounded-xl border border-gray-300 text-sm">
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

export const CalendarSecondSemester = () => {
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
      <table className="md:text-md relative w-full table-fixed border-collapse overflow-hidden break-keep rounded-xl border border-gray-300 text-sm">
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
