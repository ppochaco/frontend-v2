import { Card } from '@/components/ui'

interface HoverCardProps {
  title: string
  description: string
  backgroundColor?: string
}

export const HoverCard = ({
  title,
  description,
  backgroundColor = '#fff',
}: HoverCardProps) => {
  return (
    <Card
      style={{ backgroundColor }}
      className="group relative h-full w-full border-none from-black/30 to-transparent font-semibold hover:cursor-pointer hover:bg-gradient-to-t"
    >
      <div className="absolute left-0 top-0 aspect-[0.95] whitespace-pre-line p-3 text-lg transition-opacity duration-300 group-hover:opacity-0 sm:p-5 sm:text-2xl">
        {title}
      </div>
      <div className="flex aspect-[0.95] flex-col justify-between gap-10 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-5">
        <div className="sm:text-md text-sm">{description}</div>
        <div className="whitespace-pre-line text-lg text-white sm:text-xl">
          {title}
        </div>
      </div>
    </Card>
  )
}
