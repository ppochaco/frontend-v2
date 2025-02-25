import { Card } from '@/components/ui'

interface ProcessCardProps {
  title: string
  detail: string
}

export const ProcessCard = ({ title, detail }: ProcessCardProps) => {
  return (
    <Card className="flex min-w-52 flex-col justify-center gap-2 rounded-xl border-none bg-secondary px-4 py-6 shadow-none">
      <div className="text-base font-bold sm:text-lg">{title}</div>
      <div className="text-sm sm:text-base">{detail}</div>
    </Card>
  )
}
