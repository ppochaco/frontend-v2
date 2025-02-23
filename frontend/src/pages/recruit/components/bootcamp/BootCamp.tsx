import { Card } from '@/components/ui'

import { BootcampAccordionCard } from './accordion-card'
import { BootcampScheduleTable } from './schedule-table'

export const RecruitBootCamp = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <div className="text-3xl font-bold lg:text-4xl">부트캠프</div>
      <Card className="mx-5 my-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-10 sm:py-4 md:px-12">
        <div className="font-semibold">부트캠프란?</div>
        <div className="flex-1">
          해달 준회원의 필수 참여 코스로 매주 2회, 총 8차시로 진행됩니다.
        </div>
      </Card>
      <BootcampAccordionCard />
      <BootcampScheduleTable />
    </div>
  )
}
