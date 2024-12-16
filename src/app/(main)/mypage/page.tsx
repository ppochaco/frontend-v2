'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui'
import { CreateMypage, CreateMypageSchema } from '@/schema/mypage'

import { UserImgSection, UserInfoSection } from './_components'

const MyPage = () => {
  const form = useForm({
    resolver: zodResolver(CreateMypageSchema),
    defaultValues: {
      introduction: '',
      socialInfo: {
        github: '',
        instagram: '',
      },
      profileImage: new File([], ''),
    },
  })

  const onSubmit = (data: CreateMypage) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={() => onSubmit}
        className="mb-30 mt-1 w-full max-w-screen-xl px-12 pb-20 pt-10 md:mt-5 md:px-20"
      >
        {mypageMockData.map((data) => (
          <div key={data.userId}>
            <UserImgSection
              studentId={data.studentId}
              name={data.name}
              role={data.role}
            />
            <UserInfoSection
              githubInfo={data.socialInfo.github}
              instagramInfo={data.socialInfo.instagram}
              profileIntro={data.introduction}
            />
          </div>
        ))}
      </form>
    </Form>
  )
}

export default MyPage

const mypageMockData = [
  {
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
  },
]
