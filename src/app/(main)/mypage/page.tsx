'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui'
import { CreateMypageSchema } from '@/schema/mypage'

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

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="mb-30 mt-1 w-full max-w-screen-xl px-12 pb-20 pt-10 md:mt-5 md:px-20"
      >
        <UserImgSection />
        <UserInfoSection />
      </form>
    </Form>
  )
}

export default MyPage
