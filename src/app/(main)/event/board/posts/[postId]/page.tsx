'use client'

import { Suspense } from 'react'

import { BoardNavigationButton, PostContent } from '@/components/feature'
import { PostView } from '@/types/post'

import { EventPostDetail, EventPostHero } from './_components'

type EventPostPageParams = {
  params: {
    postId: string
  }
}

const EventPostPage = ({ params }: EventPostPageParams) => {
  console.log(params.postId)

  return (
    <div>
      <EventPostHero />
      <Suspense fallback={<div>loading...</div>}>
        <EventPostDetail post={postData} />
        <PostContent content={postData.postContent} />
        <BoardNavigationButton />
      </Suspense>
    </div>
  )
}

export default EventPostPage

const postData: PostView = {
  postContent: '',
  postImageUrl: '',
  boardId: 0,
  boardName: '행사',
  postId: 0,
  postTitle: '테스트',
  postViews: 1,
  postActivityStartDate: Date(),
  postActivityEndDate: Date(),
  postCreateDate: '2024-12-26',
  userId: 'dkwls0234',
  userName: '관리자',
}
