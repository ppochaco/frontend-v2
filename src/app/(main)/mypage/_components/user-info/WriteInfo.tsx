import { Button } from '@/components/ui'

interface WriteInfoProps {
  title: string
  children?: React.ReactNode
  description: string
  division?: boolean
  actionText?: string
  onClick?: () => void
}

const WriteInfo = ({
  title,
  children,
  description,
  division = false,
  actionText,
  onClick,
}: WriteInfoProps) => {
  console.log(onClick)
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
          <div className="text-lg font-bold text-primary md:text-xl">
            {title}
          </div>
          {children}
        </div>
        <Button
          className="w-fit px-0 py-0 font-semibold text-destructive hover:text-destructive md:px-3 md:py-[2px]"
          variant="ghost"
          onClick={onClick}
        >
          {actionText}
        </Button>
      </div>
      <div className="text-sm text-zinc-400 md:text-base">{description}</div>
      {division && <div className="border-t border-border" />}
    </>
  )
}

export default WriteInfo
