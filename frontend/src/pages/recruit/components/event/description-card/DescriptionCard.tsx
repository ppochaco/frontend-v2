import { Card } from '@/components/ui'

interface DescriptionCardProps {
  title: string
  description: string
  backgroundColor?: string
}

export const DescriptionCard = ({
  title,
  description,
  backgroundColor = '#fff',
}: DescriptionCardProps) => {
  return (
    <Card
      style={{ backgroundColor }}
      className="h-full min-h-[180px] w-full border-none bg-gradient-to-t from-black/30 to-transparent font-semibold"
    >
      <div className="flex h-full flex-col justify-between gap-4 p-3 sm:aspect-[0.96] sm:gap-0 md:p-5">
        <div className="h-full text-sm sm:text-base md:text-base">
          {description}
        </div>
        <div className="whitespace-pre-line text-lg text-white sm:text-xl md:text-xl">
          {title}
        </div>
      </div>
    </Card>
  )
}
