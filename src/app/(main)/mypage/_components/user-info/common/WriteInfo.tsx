interface WriteInfoProps {
  title: string
  children?: React.ReactNode
  description: string
  division?: boolean
  actionText?: string
  actionColor?: string
  onActionClick?: () => void
}

const WriteInfo = ({
  title,
  children,
  description,
  division = false,
  actionText = '수정',
  actionColor = 'text-destructive',
  onActionClick,
}: WriteInfoProps) => {
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
          <div className="text-lg font-bold text-primary md:text-xl">
            {title}
          </div>
          {children}
        </div>
        {actionText && (
          <div
            className={`inline-block cursor-pointer font-semibold transition-[background-size] md:bg-gradient-to-r md:from-destructive md:to-destructive md:bg-[length:0%_2px] md:bg-left-bottom md:bg-no-repeat md:duration-300 md:ease-in-out md:hover:bg-[length:100%_2px] ${actionColor}`}
            onClick={onActionClick}
          >
            {actionText}
          </div>
        )}
      </div>
      <div className="text-sm text-zinc-400 md:text-base">{description}</div>
      {division && <div className="border-t border-border" />}
    </>
  )
}

export default WriteInfo
