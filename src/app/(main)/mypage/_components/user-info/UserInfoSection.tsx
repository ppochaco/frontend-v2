'use client'

import { useState } from 'react'

import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'

import { Button, Input } from '@/components/ui'

interface UserInfoSectionProps {
  githubInfo: string
  instagramInfo: string
  profileIntro: string
}

const UserInfoSection = ({
  githubInfo: initialGithubInfo,
  instagramInfo: initialInstagramInfo,
  profileIntro: initialProfileIntro,
}: UserInfoSectionProps) => {
  const [profileIntro, setProfileIntro] = useState(initialProfileIntro)
  const [isEditing, setIsEditing] = useState(false)
  const [tempProfileIntro, setTempProfileIntro] = useState(initialProfileIntro)

  const [githubInfo, setGithubInfo] = useState(initialGithubInfo)
  const [instagramInfo, setInstagramInfo] = useState(initialInstagramInfo)
  const [isEditingSocial, setIsEditingSocial] = useState(false)
  const [tempGithubInfo, setTempGithubInfo] = useState(initialGithubInfo)
  const [tempInstagramInfo, setTempInstagramInfo] =
    useState(initialInstagramInfo)

  const onEditProfileIntro = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isEditing) {
      setProfileIntro(tempProfileIntro)
      setIsEditing(false)
    } else {
      setTempProfileIntro(profileIntro)
      setIsEditing(true)
    }
  }

  const onEditProfileIntroKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      setProfileIntro(tempProfileIntro)
      setIsEditing(false)
    }
  }

  const onEditSocialInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isEditingSocial) {
      setGithubInfo(tempGithubInfo)
      setInstagramInfo(tempInstagramInfo)
      setIsEditingSocial(false)
    } else {
      setTempGithubInfo(githubInfo)
      setTempInstagramInfo(instagramInfo)
      setIsEditingSocial(true)
    }
  }

  const onEditSocialInfoKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      setGithubInfo(tempGithubInfo)
      setInstagramInfo(tempInstagramInfo)
      setIsEditingSocial(false)
    }
  }

  return (
    <section className="mt-10 flex h-full w-full flex-col space-y-5">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
          <div className="text-lg font-bold text-primary md:text-xl">
            한 줄 소개
          </div>
          <div className="md:y-0 y-5 flex h-10 gap-5">
            {isEditing ? (
              <div className="flex h-10 w-full justify-center md:w-auto">
                <Input
                  className="w-full md:w-auto"
                  value={tempProfileIntro}
                  onChange={(e) => setTempProfileIntro(e.target.value)}
                  onKeyDown={onEditProfileIntroKeyDown}
                  autoFocus
                />
              </div>
            ) : (
              <div className="text-md flex h-10 items-center">
                {profileIntro}
              </div>
            )}
          </div>
        </div>
        <Button
          className="w-fit px-0 py-0 font-semibold text-destructive hover:text-destructive md:px-3 md:py-[2px]"
          variant="ghost"
          onClick={(e) => onEditProfileIntro(e)}
        >
          {isEditing ? '완료' : '수정'}
        </Button>
      </div>
      <div className="text-sm text-zinc-400 md:text-base">
        멤버 페이지에서 보이는 정보입니다.
      </div>
      <div className="border-t border-border" />
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold text-primary md:text-xl">
            소셜 정보
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:gap-5 md:py-2">
            <div className="flex h-10 cursor-pointer items-center gap-2 align-middle">
              <div className="flex-shrink-0">
                <GitHubLogoIcon className="h-5 w-5" />
              </div>
              {isEditingSocial ? (
                <Input
                  className="w-full md:w-auto"
                  value={tempGithubInfo}
                  onChange={(e) => setTempGithubInfo(e.target.value)}
                  onKeyDown={onEditSocialInfoKeyDown}
                  autoFocus
                />
              ) : (
                <span className="text-md">{githubInfo}</span>
              )}
            </div>
            <div className="flex h-10 cursor-pointer items-center gap-2 align-middle">
              <div className="flex-shrink-0">
                <InstagramLogoIcon className="h-5 w-5" />
              </div>
              {isEditingSocial ? (
                <Input
                  className="w-full md:w-auto"
                  value={tempInstagramInfo}
                  onChange={(e) => setTempInstagramInfo(e.target.value)}
                  onKeyDown={onEditSocialInfoKeyDown}
                />
              ) : (
                <span>{instagramInfo}</span>
              )}
            </div>
          </div>
          <div className="text-sm text-zinc-400 md:text-base">
            멤버 페이지에서 보이는 정보입니다.
          </div>
        </div>
        <Button
          className="w-fit px-0 py-0 font-semibold text-destructive hover:text-destructive md:px-3 md:py-[2px]"
          variant="ghost"
          onClick={(e) => onEditSocialInfo(e)}
        >
          {isEditingSocial ? '완료' : '수정'}
        </Button>
      </div>
      <div className="border-t border-border" />
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold text-primary md:text-xl">
            회원 탈퇴
          </div>
          <div className="text-sm text-zinc-400 md:text-base">
            탈퇴 시 작성한 게시글 및 댓글이 모두 삭제되며 복구되지 않습니다.
          </div>
        </div>
        <Button
          className="w-fit px-0 py-0 font-semibold text-destructive hover:text-destructive md:px-3 md:py-[2px]"
          variant="ghost"
          onClick={() => console.log('회원 탈퇴')}
        >
          탈퇴하기
        </Button>
      </div>
    </section>
  )
}

export default UserInfoSection
