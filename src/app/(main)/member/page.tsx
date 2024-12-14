'use client'

import { MemberCard } from './_components'

export default function MemberPage() {
  return (
    <main className="flex h-full w-full flex-col pl-10 pt-10">
      <MemberCard
        userName={memberMockData.userName}
        userImageUrl={memberMockData.userImageUrl}
        userDetail={memberMockData.userDetail}
        githubId={memberMockData.githubId}
        instagramId={memberMockData.instagramId}
      />
    </main>
  )
}

const memberMockData = {
  userName: '김아진',
  userImageUrl: 'https://picsum.photos/200',
  userDetail: '일이삼사오육칠팔구십일이삼사오육칠팔구십',
  githubId: 'ppochaco',
  instagramId: 'a_jin34',
}
