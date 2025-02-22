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
      <div className="absolute left-0 top-0 aspect-[0.95] whitespace-pre-line p-5 text-2xl transition-opacity duration-300 group-hover:opacity-0">
        {title}
      </div>
      <div className="flex aspect-[0.95] flex-col justify-between gap-10 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div>{description}</div>
        <div className="whitespace-pre-line text-xl text-white">{title}</div>
      </div>
    </Card>
  )
}
