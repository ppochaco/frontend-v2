'use client'

import { useQuery } from '@tanstack/react-query'

import { userQueries } from '@/service/api/mypage'

import { UserInfoSection, UserSocialInfoSection } from './_components'

const MyPage = () => {
  const { data: userInfo } = useQuery(
    userQueries.userInfo({ userId: 'admin0234' }),
  )

  const { data: userProfile } = useQuery(
    userQueries.profile({ userId: 'admin0234' }),
  )

  console.log(userProfile)

  return (
    <div className="mt-1 flex w-full flex-col items-center justify-center">
      <section className="w-full max-w-screen-xl px-12 pt-10 md:px-20">
        <UserInfoSection
          studentId={userInfo?.studentNumber}
          name={userInfo?.userName}
          role={userInfo?.role}
        />
      </section>
      <section className="mb-30 w-full max-w-screen-xl px-12 pb-20 md:px-20">
        <UserSocialInfoSection
          githubInfo={userProfile?.githubAccount}
          instagramInfo={userProfile?.instaAccount}
          profileIntro={userProfile?.profileIntro}
        />
      </section>
    </div>
  )
}

export default MyPage
