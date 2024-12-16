import { useState } from 'react'

type UseSocialInfoProps = {
  initialGithubInfo: string
  initialInstagramInfo: string
}

export const useSocialInfo = ({
  initialGithubInfo,
  initialInstagramInfo,
}: UseSocialInfoProps) => {
  const [githubInfo, setGithubInfo] = useState(initialGithubInfo)
  const [instagramInfo, setInstagramInfo] = useState(initialInstagramInfo)
  const [isEditing, setIsEditing] = useState(false)
  const [tempGithubInfo, setTempGithubInfo] = useState(initialGithubInfo)
  const [tempInstagramInfo, setTempInstagramInfo] =
    useState(initialInstagramInfo)

  const editSocialInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isEditing) {
      setGithubInfo(tempGithubInfo)
      setInstagramInfo(tempInstagramInfo)
      setIsEditing(false)
    } else {
      setTempGithubInfo(githubInfo)
      setTempInstagramInfo(instagramInfo)
      setIsEditing(true)
    }
  }

  const keyDownEditSocialInfo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setGithubInfo(tempGithubInfo)
      setInstagramInfo(tempInstagramInfo)
      setIsEditing(false)
    }
  }

  return {
    githubInfo,
    instagramInfo,
    isEditing,
    tempGithubInfo,
    tempInstagramInfo,
    setTempGithubInfo,
    setTempInstagramInfo,
    editSocialInfo,
    keyDownEditSocialInfo,
  }
}
