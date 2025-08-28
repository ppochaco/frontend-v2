import { cn } from '@/lib/utils'

export const BootcampScheduleTable = () => {
  return (
    <div className="max-w-[860px] px-5 py-10">
      <table className="w-full max-w-[1000px] table-fixed overflow-hidden rounded-xl border text-center">
        <thead className="bg-black text-white">
          <tr>
            <th className="border border-r-gray-500" />
            {DAYS.map((day) => (
              <th
                key={day}
                className="border border-r-gray-500 px-4 py-2 font-normal"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CLASS_SCHEDULE.map((group, index) => (
            <tr
              key={index}
              className={cn(index === 0 ? 'bg-[#F5FFF2]' : 'bg-[#F2F1FF]')}
            >
              <td className="whitespace-nowrap border border-b-black text-sm font-semibold sm:text-base">
                {group.level}
              </td>
              {DAYS.map((day) => (
                <td
                  key={day}
                  className="whitespace-nowrap border border-b-black align-top text-sm font-light sm:text-base"
                >
                  {group.schedule[day].map((subject, index) => (
                    <div key={index} className={cn(index < 2 && 'border-b')}>
                      &nbsp;{subject}&nbsp;
                    </div>
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
      월: ['C언어', '', '웹 기초', ''],
      화: ['', '파이썬', '', '자바'],
      수: ['C언어', '', '웹 기초', ''],
      목: ['', '파이썬', '', '자바'],
      금: ['', '', '', ''],
    },
  },
  {
    level: '심화반',
    schedule: {
      월: ['Spring', '', ''],
      화: ['', 'React', 'Flutter'],
      수: ['Spring', '', ''],
      목: ['', 'React', 'Flutter'],
      금: ['', '', ''],
    },
  },
] as const
