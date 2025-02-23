import { AccordionContent } from '@radix-ui/react-accordion'

import { DescriptionCard } from '@/components/feature'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  Separator,
} from '@/components/ui'

export const RecruitTrack = () => {
  return (
    <div className="flex flex-col items-center bg-[#E9EDFF] pb-20">
      <div className="text-3xl font-bold lg:text-4xl">트랙 & 소모임</div>
      <div className="flex flex-col gap-4 pt-10">
        <DescriptionCard
          title="트랙이란?"
          description="해달 정회원이 참여 가능한 코스로, 학술 분야의 내용을 탐구하기 위해 만들어진 모임입니다."
        />
        <DescriptionCard
          title="소모임이란?"
          description="해달 회원이면 모두 참여할 수 있는 모임으로, 학술 이외의 주제를 공유하며 네트워킹할 수 있습니다."
        />
        <div className="flex flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:items-start sm:justify-center">
          <Accordion type="single" collapsible className="w-full text-black">
            <AccordionItem
              value="item-1"
              className="rounded-xl border-none bg-[#BCB5C9] px-3 py-1"
            >
              <AccordionTrigger className="text-lg font-semibold text-white">
                현재 개설된 트랙 LIST
              </AccordionTrigger>
              <AccordionContent className="flex gap-4">
                <Separator
                  orientation="vertical"
                  className="h-[168px] w-0.5 bg-black"
                />
                <ul className="pb-4">
                  <li>Datto(인공지능, 데분)</li>
                  <li>리눅스 왕기초 어린이반</li>
                  <li>실전 AI 입문</li>
                  <li>유니티 게임 개발</li>
                  <li>임베디드 시스템</li>
                  <li>임베디드 아두이노</li>
                  <li>파이썬 앱 개발</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full text-black">
            <AccordionItem
              value="item-1"
              className="rounded-xl border-none bg-[#B5C9C5] px-3 py-1"
            >
              <AccordionTrigger className="text-lg font-semibold text-white">
                현재 개설된 소모임 LIST
              </AccordionTrigger>
              <AccordionContent className="flex gap-4">
                <Separator
                  orientation="vertical"
                  className="h-[24px] w-0.5 bg-black"
                />
                <div className="pb-4">학기 초 개설 후 업데이트 예정입니다.</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
