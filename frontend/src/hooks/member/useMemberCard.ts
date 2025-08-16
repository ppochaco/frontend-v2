import { useMemo } from 'react'

import { BASE_URL } from '@/service/config'

interface UseMemberCardProps {
  userImageUrl?: string
  githubId?: string
  instagramId?: string
}

export const useMemberCard = ({
  userImageUrl,
  githubId,
  instagramId,
}: UseMemberCardProps) => {
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

  return {
    imageSrc,
    handleGithubClick,
    handleInstagramClick,
    showGithubButton,
    showInstagramButton,
  }
}
