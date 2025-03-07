import { useSuspenseQuery } from '@tanstack/react-query'

import { Separator } from '@/components/ui'
import { profileQuries } from '@/service/api'
import { useMyInfoStore } from '@/store'

import {
  DeleteAccountForm,
  EditProfileForm,
  ProfileImage,
  ProfileInfo,
} from './_components'

export default function MyPage() {
  const { userId } = useMyInfoStore((state) => state.myInfo)

  const { data: profile } = useSuspenseQuery(
    profileQuries.profile({ userId: userId }),
  )

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 pb-20 sm:gap-16">
      <section className="flex w-full flex-col md:flex-row md:space-x-8">
        <ProfileImage profile={profile} userId={userId} />
        <Separator orientation="vertical" className="hidden md:flex" />
        <ProfileInfo profile={profile} />
      </section>
      <EditProfileForm profile={profile} userId={userId} />
      <DeleteAccountForm />
    </div>
  )
}
