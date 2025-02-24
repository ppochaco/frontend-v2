import { DescriptionCard } from '@/components/feature'

import { BootcampAccordionCard } from './accordion-card'
import { BootcampScheduleTable } from './schedule-table'

export const RecruitBootCamp = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <div className="text-4xl font-bold lg:text-5xl">부트캠프</div>
      <DescriptionCard
        title="부트캠프란?"
        description="해달 준회원의 필수 참여 코스로 매주 2회, 총 8차시로 진행됩니다."
        className="mt-10"
      />
      <div className="py-4 text-sm text-zinc-400">
        ※ 프로젝트 경험이 있으신 분들은 수료 처리 가능합니다.
      </div>
      <BootcampAccordionCard />
      <BootcampScheduleTable />
    </div>
  )
}
