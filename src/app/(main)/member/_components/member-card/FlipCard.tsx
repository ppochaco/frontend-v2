import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'

interface FlipCardProps {
  userImageUrl?: string
  userDetail?: string
}

export const FlipCard = ({ userImageUrl, userDetail }: FlipCardProps) => {
  return (
    <div className="h-auto w-full transition-all duration-500 [transform-style:preserve-3d] [transform:perspective(800px)] hover:cursor-pointer hover:[transform:rotateY(180deg)]">
      <Avatar className="aspect-square h-auto w-full rounded-md object-cover [backface-visibility:hidden]">
        <AvatarImage src={userImageUrl} />
        <AvatarFallback className="aspect-square w-full rounded-md px-3 text-sm text-primary/30">
          프로필 사진이 없습니다
        </AvatarFallback>
      </Avatar>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-accent px-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
        {userDetail ? (
          <div className="text-center text-sm text-primary/80">
            {userDetail}
          </div>
        ) : (
          <div className="text-sm text-primary/30">한 줄 소개가 없습니다</div>
        )}
      </div>
    </div>
  )
}
