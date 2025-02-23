import { ChevronRightCircle } from 'lucide-react'

import { Button } from '@/components/ui'

export const RecruitLinkButton = () => {
  return (
    <div className="flex justify-center bg-gradient-to-t from-[#F1F5F9] to-[#E9EDFF] py-20">
      <Button className="text-md px-8 py-6">
        <div>신청 폼 바로가기</div>
        <ChevronRightCircle />
      </Button>
    </div>
  )
}
