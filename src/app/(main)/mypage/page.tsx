'use client'

import { useQuery } from '@tanstack/react-query'

import { Spinner } from '@/components/common'
import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { userQueries } from '@/service/api/mypage'
import { useMyInfoStore } from '@/store/myInfo'

import { UserInfoSection, UserSocialInfoSection } from './_components'

const MyPage = () => {
  const { userId } = useMyInfoStore((state) => state.getMyInfo())

  const {
    data: userInfo,
    isPending: userInfoPending,
    error: userInfoError,
  } = useQuery(userQueries.userInfo({ userId: userId }))

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
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
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

export default MyPage
