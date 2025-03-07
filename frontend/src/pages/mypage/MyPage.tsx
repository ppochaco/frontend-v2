import { useSuspenseQuery } from '@tanstack/react-query'

import { Separator } from '@/components/ui'
import { profileQuries } from '@/service/api'
import { useMyInfoStore } from '@/store'

import {
  DeleteAccountForm,
  ProfileImage,
  ProfileInfo,
  UserSocialInfoSection,
} from './_components'

export default function MyPage() {
  const { userId } = useMyInfoStore((state) => state.myInfo)

  const { data: profile } = useSuspenseQuery(
    profileQuries.profile({ userId: userId }),
  )

  return (
    <div className="flex w-full flex-col items-center justify-center pb-20">
      <section className="flex w-full flex-col pb-10 md:flex-row md:space-x-8">
        <ProfileImage profile={profile} userId={userId} />
        <Separator orientation="vertical" className="hidden md:flex" />
        <Separator className="mb-5 mt-10 sm:my-10 md:hidden" />
        <ProfileInfo profile={profile} />
        <Separator className="my-5 sm:my-10 md:hidden" />
      </section>
      <UserSocialInfoSection profile={profile} userId={userId} />
      <DeleteAccountForm />
    </div>
  )
}
