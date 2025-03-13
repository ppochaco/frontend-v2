import { useNavigate } from 'react-router'

import { ArrowRightIcon } from '@radix-ui/react-icons'

import { IntersectionObserverLoader } from '@/components/common'
import { MemberCard } from '@/components/feature'
import { Button } from '@/components/ui'
import { useProfileSuspensePaging } from '@/service/api'

export default function MemberPage() {
  const navigate = useNavigate()
  const { data: admin } = useProfileSuspensePaging({ roles: ['ROLE_ADMIN'] })

  const {
    data: member,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProfileSuspensePaging({ roles: ['ROLE_MEMBER'] })

  const adminProfiles = admin?.pages.flatMap((page) => page.profiles)
  const memberProfiles = member?.pages.flatMap((page) => page.profiles)

  return (
    <main className="flex h-full w-full flex-col items-center pb-20">
      <div className="text-xl font-semibold">2025-1 멤버</div>
      <div className="text-md text-primary/60">
        해달과 {adminProfiles.length + memberProfiles.length}명의 부원들이 함께
        하고 있어요
      </div>
      <div className="w-full max-w-[920px] pb-4 pt-10 text-xl font-semibold">
        해구르르
      </div>
      <div className="grid w-full max-w-[320px] grid-cols-2 place-items-center gap-6 sm:max-w-[520px] sm:grid-cols-3 md:max-w-[680px] lg:max-w-[920px] lg:grid-cols-4">
        {adminProfiles?.map((user) => {
          return (
            <MemberCard
              key={user.userId}
              userName={user.userName}
              userImageUrl={user.profileImageUrl}
              userDetail={user.profileIntro}
              githubId={user.githubAccount}
              instagramId={user.instaAccount}
            />
          )
        })}
      </div>
      <div className="w-full max-w-[920px] pb-4 pt-10 text-xl font-semibold">
        정회원 & 준회원
      </div>
      {memberProfiles.length ? (
        <div>
          <div className="grid w-full max-w-[320px] grid-cols-2 place-items-center gap-6 sm:max-w-[520px] sm:grid-cols-3 md:max-w-[680px] lg:max-w-[920px] lg:grid-cols-4">
            {memberProfiles.map((user) => {
              return (
                <MemberCard
                  key={user.userId}
                  userName={user.userName}
                  userImageUrl={user.profileImageUrl}
                  userDetail={user.profileIntro}
                  githubId={user.githubAccount}
                  instagramId={user.instaAccount}
                />
              )
            })}
          </div>
          {hasNextPage && (
            <IntersectionObserverLoader
              callback={() => {
                if (!isFetchingNextPage) {
                  fetchNextPage()
                }
              }}
            />
          )}
        </div>
      ) : (
        <div className="w-full max-w-[920px] text-primary/60">
          멤버가 없습니다.
        </div>
      )}
      <div className="flex w-full justify-end pt-10">
        <Button variant="link" onClick={() => navigate('/member/maker')}>
          <div>해달 홈페이지 Maker</div>
          <ArrowRightIcon className="bg w-10" />
        </Button>
      </div>
    </main>
  )
}
