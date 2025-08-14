// Legacy: 현재 사용하지 않는 페이지입니다.
import { useNavigate } from 'react-router'

import { ArrowLeftIcon, ChatBubbleIcon, Link2Icon } from '@radix-ui/react-icons'

import { MemberCard } from '@/components/feature'
import { Button, Card } from '@/components/ui'
import { useProfileSuspensePaging } from '@/service/api'

export default function MemberPage() {
  const navigate = useNavigate()
  const { data: maker } = useProfileSuspensePaging({
    roles: ['ROLE_TEAM_LEADER'],
  })

  const makerProfiles = maker?.pages.flatMap((page) => page.profiles)

  return (
    <main className="flex h-full w-full max-w-[920px] flex-col items-center pb-20">
      <div className="text-xl font-semibold">해달 홈페이지 Maker</div>
      <div className="text-primary/60">
        해달 홈페이지의 초기 기능을 개발했어요
      </div>
      <div className="grid w-full max-w-[320px] grid-cols-2 place-items-center gap-6 py-10 sm:max-w-[520px] sm:grid-cols-3 md:max-w-[680px] lg:max-w-[920px] lg:grid-cols-4">
        {makerProfiles?.map((user) => {
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
      <Card className="flex w-full flex-col gap-4 border-none bg-primary px-4 py-10 text-xs text-white sm:text-sm">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/KNU-HAEDAL-Website/frontend-v2/issues/new?template=bug-template.md"
          className="hover:underline"
        >
          <div className="flex items-center gap-2">
            <Link2Icon />
            <div>해달 홈페이지를 사용하는데 발생한 불편한 점을 알려주세요</div>
          </div>
        </a>
        <div className="flex items-center gap-2">
          <ChatBubbleIcon />
          <div>
            Maker가 하고싶다면 해구르르 <b>권용민</b>에게 문의해주세요
          </div>
        </div>
      </Card>
      <div className="flex w-full pt-10">
        <Button variant="link" onClick={() => navigate('/member')}>
          <ArrowLeftIcon className="bg w-10" />
          <div>2025-1 멤버</div>
        </Button>
      </div>
    </main>
  )
}
