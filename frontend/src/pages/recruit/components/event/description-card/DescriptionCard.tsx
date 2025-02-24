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
      className="h-full w-full border-none bg-gradient-to-t from-black/30 to-transparent font-semibold"
    >
      <div className="flex aspect-[0.95] flex-col justify-between gap-10 p-3 transition-opacity duration-300 sm:p-5">
        <div className="text-sm sm:text-base md:text-lg">{description}</div>
        <div className="whitespace-pre-line text-lg text-white sm:text-xl md:text-2xl">
          {title}
        </div>
      </div>
    </Card>
  )
}
