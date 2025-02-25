import { DescriptionCard } from '@/components/feature'

import { BootcampAccordionCard } from './accordion-card'
import { BootcampScheduleTable } from './schedule-table'

export const RecruitBootCamp = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-4xl font-bold lg:text-5xl"
      >
        부트캠프
      </div>
      <div data-aos="fade-up" data-aos-duration="600" data-aos-delay={100}>
        <DescriptionCard
          title="부트캠프란?"
          description="해달 준회원의 필수 참여 코스로 매주 2회, 총 8차시로 진행됩니다."
          className="mt-10"
        />
      </div>
      <div data-aos="fade-up" data-aos-duration="600" data-aos-delay={200}>
        <BootcampAccordionCard />
      </div>
      <div data-aos="fade-up" data-aos-duration="600" data-aos-delay={250}>
        <BootcampScheduleTable />
      </div>
    </div>
  )
}
