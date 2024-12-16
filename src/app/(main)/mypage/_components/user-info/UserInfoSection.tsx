// import { useState } from 'react'
import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'

import WriteInfo from './WriteInfo'

interface UserInfoSectionProps {
  githubInfo: string
  instagramInfo: string
  profileIntro: string
}

const UserInfoSection = ({
  githubInfo,
  instagramInfo,
  profileIntro,
}: UserInfoSectionProps) => {
  // const [editProfileIntro, setEditProfileIntro] = useState<boolean>(false)
  // const [editSocialIntro, setEditSocialIntro] = useState<boolean>(false)

  return (
    <section className="mt-10 flex h-full w-full flex-col space-y-5">
      <WriteInfo
        title="한 줄 소개"
        description="멤버 페이지에서 보이는 정보입니다."
        actionText="수정"
        division
      >
        <div className="text-md">{profileIntro}</div>
      </WriteInfo>
      <WriteInfo
        title="소셜 정보"
        actionText="수정"
        description="멤버 페이지에서 보이는 정보입니다."
        division
      >
        <div className="flex gap-5">
          <div className="flex cursor-pointer items-center gap-2 align-middle">
            <GitHubLogoIcon className="h-auto w-5" />
            <span>{githubInfo}</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 align-middle">
            <InstagramLogoIcon className="h-auto w-5" />
            <span>{instagramInfo}</span>
          </div>
        </div>
      </WriteInfo>
      <WriteInfo
        title="회원 탈퇴"
        description="탈퇴 시 작성한 게시글 및 댓글이 모두 삭제되며 복구되지 않습니다."
        actionText="탈퇴하기"
        onClick={() => console.log('회원 탈퇴')}
      />
    </section>
  )
}

export default UserInfoSection
