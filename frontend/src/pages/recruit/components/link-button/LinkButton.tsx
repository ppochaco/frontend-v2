import { Link } from 'react-router'

import { ChevronRightCircle } from 'lucide-react'

import { StarIcon } from '@/components/feature'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

interface RecruitLinkButtonProps {
  className?: string
}

export const RecruitLinkButton = ({ className }: RecruitLinkButtonProps) => {
  return (
    <Link to="https://forms.gle/74xngwMadKWfco647">
      <Button className={cn('text-md px-8 py-6', className)}>
        <StarIcon />
        <div>신청 폼 바로가기</div>
        <ChevronRightCircle />
      </Button>
    </Link>
  )
}
