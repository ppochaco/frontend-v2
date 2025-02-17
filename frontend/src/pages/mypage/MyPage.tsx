import { useSuspenseQuery } from '@tanstack/react-query'

import { Separator } from '@/components/ui'
import { profileQuries } from '@/service/api'
import { useMyInfoStore } from '@/store'

import { ProfileImage, ProfileInfo, UserSocialInfoSection } from './_components'

export default function MyPage() {
  const { userId } = useMyInfoStore((state) => state.myInfo)

  const { data: profile } = useSuspenseQuery(
    profileQuries.profile({ userId: userId }),
  )

  return (
    <div className="flex w-full flex-col items-center justify-center pb-20">
      <section className="flex w-full flex-col md:flex-row md:space-x-8">
        <ProfileImage profile={profile} userId={userId} />
        <Separator orientation="vertical" className="hidden md:flex" />
        <Separator className="my-10 md:hidden" />
        <ProfileInfo profile={profile} />
      </section>
      <UserSocialInfoSection profile={profile} userId={userId} />
    </div>
  )
}
