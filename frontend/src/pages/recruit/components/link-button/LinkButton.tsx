import { ChevronRightCircle } from 'lucide-react'

import { StarIcon } from '@/components/feature'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

interface RecruitLinkButtonProps {
  className?: string
}

export const RecruitLinkButton = ({ className }: RecruitLinkButtonProps) => {
  const handleClick = () => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLScdj0yHEl91sTmzIWjAGWj87AiAItrAoCC4xrO_IEzKk7PWKQ/viewform'
  }

  return (
    <Button
      className={cn('text-md gap-4 p-6', className)}
      onClick={handleClick}
    >
      <StarIcon />
      <div className="font-bold">신청 폼 바로가기</div>
      <ChevronRightCircle />
    </Button>
  )
}
