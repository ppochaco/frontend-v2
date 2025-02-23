export const BootcampScheduleTable = () => {
  return (
    <div className="max-w-[860px] px-5 py-10">
      <table className="w-full max-w-[1000px] table-fixed border-collapse overflow-hidden rounded-xl border border-gray-300 text-center">
        <thead className="bg-black text-white">
          <tr>
            <th />
            {DAYS.map((day) => (
              <th key={day} className="border px-4 py-2 font-normal">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CLASS_SCHEDULE.map((group, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap border border-b-black text-sm font-semibold sm:text-base">
                {group.level}
              </td>
              {DAYS.map((day) => (
                <td
                  key={day}
                  className="whitespace-nowrap border border-b-black py-2 align-top text-sm sm:px-4 sm:text-base"
                >
                  {group.schedule[day].map((subject, index) => (
                    <div key={index}>{subject}</div>
                  ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

type Day = (typeof DAYS)[number]

const DAYS = ['월', '화', '수', '목', '금'] as const

type ClassSchedule = {
  level: string
  schedule: Record<Day, string[]>
}

const CLASS_SCHEDULE: ClassSchedule[] = [
  {
    level: '기초반',
    schedule: {
      월: ['파이썬'],
      화: ['C 언어', '웹 기초'],
      수: ['파이썬'],
      목: ['C 언어', '웹 기초'],
      금: [],
    },
  },
  {
    level: '응용반',
    schedule: {
      월: ['ANS', 'React'],
      화: [],
      수: ['Spring', 'React'],
      목: ['ANS'],
      금: ['Spring'],
    },
  },
] as const
