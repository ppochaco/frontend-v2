import { useMemo } from 'react'

import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'

import { IconButton } from '@/components/common'
import { Avatar, AvatarImage, Card } from '@/components/ui'
import { BASE_URL } from '@/service/config'

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
  // 이미지 URL 처리
  const imageSrc = useMemo(() => {
    if (!userImageUrl) return undefined

    return userImageUrl.startsWith('https')
      ? userImageUrl
      : `${BASE_URL}${userImageUrl}`
  }, [userImageUrl])

  // GitHub 링크 처리
  const handleGithubClick = () => {
    if (!githubId) return

    window.open(
      `https://github.com/${githubId}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  // Instagram 링크 처리
  const handleInstagramClick = () => {
    if (!instagramId) return

    window.open(
      `https://www.instagram.com/${instagramId}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  // 소셜 미디어 버튼 표시 여부
  const showGithubButton = !!githubId
  const showInstagramButton = !!instagramId

  return (
    <Card className="flex h-auto w-40 flex-col items-center justify-evenly p-4 md:w-52">
      <Avatar className="h-20 w-20 bg-slate-100">
        <AvatarImage src={imageSrc} />
      </Avatar>
      <div className="w-full py-2 text-center text-lg font-semibold">
        {userName}
      </div>
      <div className="h-16 overflow-y-scroll text-sm md:h-24 [&::-webkit-scrollbar]:hidden">
        {userDetail ? (
          <div className="flex h-full items-center text-primary/80">
            {userDetail}
          </div>
        ) : (
          <div className="flex h-full items-center text-primary/30">
            한 줄 소개가 없습니다
          </div>
        )}
      </div>
      <div className="flex w-full items-center justify-end pt-2">
        <div className="flex h-5 gap-2">
          {showGithubButton && (
            <IconButton
              icon={<GitHubLogoIcon className="h-auto w-5" />}
              onClick={handleGithubClick}
            />
          )}
          {showInstagramButton && (
            <IconButton
              icon={<InstagramLogoIcon className="h-auto w-5" />}
              onClick={handleInstagramClick}
            />
          )}
        </div>
      </div>
    </Card>
  )
}
