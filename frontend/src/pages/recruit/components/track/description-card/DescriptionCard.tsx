import { Card } from '@/components/ui'

interface TrackDescriptionCardProps {
  title: string
  description: string
  tags: string[]
}

export const TrackDescriptionCard = ({
  title,
  description,
  tags,
}: TrackDescriptionCardProps) => {
  return (
    <Card className="flex flex-col gap-3 rounded-md border-none bg-[#D6CFE4] p-4 shadow-md">
      <div className="flex justify-between">
        <div className="text-base font-semibold sm:text-lg">{title}</div>
        <div className="flex gap-2 text-sm font-medium text-[#878093] sm:text-base">
          {tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
      </div>
      <div className="text-sm sm:text-base">{description}</div>
    </Card>
  )
}
