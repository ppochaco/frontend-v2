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
    <Card className="flex flex-col justify-evenly items-center p-4 w-40 h-auto md:w-52">
      <Avatar className="w-20 h-20 bg-slate-100">
        <AvatarImage src={imageSrc} />
      </Avatar>
      <div className="py-2 w-full text-lg font-semibold text-center">
        {userName}
      </div>
      <div className="h-16 overflow-y-scroll text-sm md:h-24 [&::-webkit-scrollbar]:hidden">
        {userDetail ? (
          <div className="flex items-center h-full text-primary/80">
            {userDetail}
          </div>
        ) : (
          <div className="flex items-center h-full text-primary/30">
            한 줄 소개가 없습니다
          </div>
        )}
      </div>
      <div className="flex justify-end items-center pt-2 w-full">
        <div className="flex gap-2 h-5">
          {showGithubButton && (
            <IconButton
              icon={<GitHubLogoIcon className="w-5 h-auto" />}
              onClick={handleGithubClick}
            />
          )}
          {showInstagramButton && (
            <IconButton
              icon={<InstagramLogoIcon className="w-5 h-auto" />}
              onClick={handleInstagramClick}
            />
          )}
        </div>
      </div>
    </Card>
  )
}
