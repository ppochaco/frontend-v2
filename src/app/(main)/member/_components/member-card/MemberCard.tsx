import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'

import { IconButton } from '@/components/common'
import { Avatar, AvatarFallback, AvatarImage, Card } from '@/components/ui'

interface MemberCardProps {
  userName: string
  userImageUrl?: string
  userDetail?: string
  githubId?: string
  instagramId?: string
}

export const MemberCard = ({
  userName,
  userImageUrl,
  userDetail,
  githubId,
  instagramId,
}: MemberCardProps) => {
  const onClickGithubIcon = () => {
    if (!githubId) return

    window.open(
      `https://github.com/${githubId}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const onClickInstagramIcon = () => {
    if (!instagramId) return

    window.open(
      `https://www.instagram.com/${instagramId}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <Card className="flex h-auto w-40 flex-col items-center justify-evenly p-4 md:w-52">
      <div className="h-auto w-full transition-all duration-500 [transform-style:preserve-3d] [transform:perspective(800px)] hover:cursor-pointer hover:[transform:rotateY(180deg)]">
        <Avatar className="aspect-square h-auto w-full rounded-md object-cover [backface-visibility:hidden]">
          <AvatarImage src={userImageUrl} />
          <AvatarFallback className="aspect-square w-full rounded-md px-3 text-sm text-primary/30">
            프로필 사진이 없습니다
          </AvatarFallback>
        </Avatar>

        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-sm bg-accent px-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {userDetail ? (
            <div className="text-center text-sm text-primary/80">
              {userDetail}
            </div>
          ) : (
            <div className="text-sm text-primary/30">한 줄 소개가 없습니다</div>
          )}
        </div>
      </div>
      <div className="flex w-full items-center justify-end pt-2">
        <div className="w-full pl-1 text-lg font-semibold">{userName}</div>
        <div className="flex gap-2">
          {githubId && (
            <IconButton
              icon={<GitHubLogoIcon className="h-auto w-5" />}
              onClick={onClickGithubIcon}
            />
          )}
          {instagramId && (
            <IconButton
              icon={<InstagramLogoIcon className="h-auto w-5" />}
              onClick={onClickInstagramIcon}
            />
          )}
        </div>
      </div>
    </Card>
  )
}
