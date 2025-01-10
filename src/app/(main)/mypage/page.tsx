'use client'

import { useQuery } from '@tanstack/react-query'

import { Spinner } from '@/components/common'
import { userQueries } from '@/service/api/mypage'
import { useMyInfoStore } from '@/store/myInfo'

import { UserInfoSection, UserSocialInfoSection } from './_components'

export default function MyPage() {
  const { userId } = useMyInfoStore((state) => state.myInfo)

  const {
    data: userInfo,
    isPending: userInfoPending,
    error: userInfoError,
  } = useQuery(userQueries.userInfo({ userId }))

  const {
    data: userProfile,
    isPending: userProfilePending,
    error: userProfileError,
  } = useQuery(userQueries.profile({ userId: userId }))

  if (userInfoPending || userProfilePending)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    )

  if (userInfoError || userProfileError) {
    return <div>error</div>
  }

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
