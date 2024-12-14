'use client'

import { MemberCard } from './_components'

export default function MemberPage() {
  return (
    <main className="flex h-full w-full flex-col items-center py-10">
      <div className="text-xl font-semibold">2024-2 멤버</div>
      <div className="text-md text-primary/60">
        해달과 123명의 부원들이 함께 하고 있어요
      </div>
      <div className="grid w-full max-w-[400px] grid-cols-2 place-items-center gap-6 pt-6 sm:max-w-[520px] sm:grid-cols-3 md:max-w-[680px] lg:max-w-[920px] lg:grid-cols-4">
        {memberMockData.map((user) => {
          return (
            <MemberCard
              key={user.userId}
              userName={user.userName}
              userImageUrl={user.userImageUrl}
              userDetail={user.userDetail}
              githubId={user.githubId}
              instagramId={user.instagramId}
            />
          )
        })}
      </div>
    </main>
  )
}

const memberMockData = [
  {
    userId: 0,
    userName: '김아진',
    userImageUrl: 'https://picsum.photos/200',
    userDetail: '일이삼사오육칠팔구십일이삼사오육칠팔구십',
    githubId: 'ppochaco',
    instagramId: 'a_jin34',
  },
  {
    userId: 1,
    userName: '조대성',
    userImageUrl: '',
    userDetail: '일이삼사오육칠팔구십일이삼사오육칠팔구십',
    githubId: '',
    instagramId: 'a_jin34',
  },
  {
    userId: 2,
    userName: '김민주',
    userImageUrl: 'https://picsum.photos/200',
    userDetail: '',
    githubId: 'ppochaco',
    instagramId: '',
  },
  {
    userId: 3,
    userName: '김강민',
    userImageUrl: '',
    userDetail: '',
    githubId: '',
    instagramId: '',
  },
  {
    userId: 4,
    userName: '김아진',
    userImageUrl: 'https://picsum.photos/200',
    userDetail: '일이삼사오육칠팔구십일이삼사오육칠팔구십',
    githubId: 'ppochaco',
    instagramId: 'a_jin34',
  },
  {
    userId: 5,
    userName: '조대성',
    userImageUrl: '',
    userDetail: '일이삼사오육칠팔구십일이삼사오육칠팔구십',
    githubId: '',
    instagramId: 'a_jin34',
  },
  {
    userId: 6,
    userName: '김민주',
    userImageUrl: 'https://picsum.photos/200',
    userDetail: '',
    githubId: 'ppochaco',
    instagramId: '',
  },
  {
    userId: 7,
    userName: '김강민',
    userImageUrl: '',
    userDetail: '',
    githubId: '',
    instagramId: '',
  },
]
