'use client'

import { useQuery } from '@tanstack/react-query'

import { userQueries } from '@/service/api/mypage'
import { useMyInfoStore } from '@/store/myInfo'

import { UserInfoSection, UserSocialInfoSection } from './_components'

const MyPage = () => {
  const { userId } = useMyInfoStore((state) => state.getMyInfo())

  const { data: userInfo } = useQuery(userQueries.userInfo({ userId: userId }))

  const { data: userProfile } = useQuery(
    userQueries.profile({ userId: userId }),
  )

  return (
    <div className="mt-1 flex w-full flex-col items-center justify-center">
      <section className="w-full max-w-screen-xl px-12 pt-10 md:px-20">
        <UserInfoSection
          studentId={userInfo?.studentNumber}
          name={userInfo?.userName}
          role={userInfo?.role}
          profileImageUrl={userProfile?.profileImageUrl}
          userId={userId}
        />
      </section>
      <section className="mb-30 w-full max-w-screen-xl px-12 pb-20 md:px-20">
        <UserSocialInfoSection
          githubInfo={userProfile?.githubAccount}
          instagramInfo={userProfile?.instaAccount}
          profileIntro={userProfile?.profileIntro}
          userId={userId}
        />
      </section>
    </div>
  )
}

export default MyPage
