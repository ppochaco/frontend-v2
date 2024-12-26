'use client'

import { UserInfoSection, UserSocialInfoSection } from './_components'

const MyPage = () => {
  return (
    <div className="mt-1 flex w-full flex-col items-center justify-center">
      <section className="w-full max-w-screen-xl px-12 pt-10 md:px-20">
        <UserInfoSection
          studentId={mypageMockData.studentId}
          name={mypageMockData.name}
          role={mypageMockData.role}
        />
      </section>
      <section className="mb-30 w-full max-w-screen-xl px-12 pb-20 md:px-20">
        <UserSocialInfoSection
          githubInfo={mypageMockData.socialInfo.github}
          instagramInfo={mypageMockData.socialInfo.instagram}
          profileIntro={mypageMockData.introduction}
        />
      </section>
    </div>
  )
}

export default MyPage

const mypageMockData = {
  introduction: '도비는 자유에요!',
  userId: '3',
  studentId: '2099111222',
  name: '호반우',
  role: '해구르르',
  socialInfo: {
    github: 'hobanwo',
    instagram: 'hobanwo',
  },
  // profileImage: new File([], ''),
  profileImage: 'https://github.com/shadcn.png',
}
