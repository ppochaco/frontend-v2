import { Card } from '@/components/ui'
import { cn } from '@/lib/utils'

import { StarIcon } from '../star-icon'

interface DescriptionCardProps {
  title: string
  description: string
  className?: string
}

export const DescriptionCard = ({
  title,
  description,
  className,
}: DescriptionCardProps) => {
  return (
    <Card
      className={cn(
        'mx-5 flex flex-col px-6 py-4 sm:flex-row sm:items-center sm:gap-4 md:px-12',
        className,
      )}
    >
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="font-semibold">{title}</div>
        <StarIcon width={18} />
      </div>
      <div className="flex-1">{description}</div>
    </Card>
  )
}
