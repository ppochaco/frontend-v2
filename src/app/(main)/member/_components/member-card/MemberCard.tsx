import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'

import { IconButton } from '@/components/common'
import { Card } from '@/components/ui'

import { FlipCard } from './FlipCard'

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
      <FlipCard userImageUrl={userImageUrl} userDetail={userDetail} />
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
