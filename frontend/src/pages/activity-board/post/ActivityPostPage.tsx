import { Suspense } from 'react'
import { useParams } from 'react-router'

import { useSuspenseQuery } from '@tanstack/react-query'

import { NetworkError } from '@/components/common'
import {
  ActivityPageSkeleton,
  BoardNavigationButton,
  Comment,
  PostContent,
} from '@/components/feature'
import { activityPostQuries, boardQueries } from '@/service/api'

import { ActivityPostDetail, ActivityPostHero } from './_components'

const ActivityPostPage = () => {
  const params = useParams()

  const { data: board } = useSuspenseQuery(
    boardQueries.detail({
      activityId: Number(params.activityId),
      boardId: Number(params.boardId),
    }),
  )

  const { data: post } = useSuspenseQuery(
    activityPostQuries.detail({
      boardId: Number(params.boardId),
      postId: Number(params.postId),
    }),
  )

  if (!post) return <NetworkError />

  return (
    <div className="flex w-full flex-col">
      <ActivityPostHero boardName={board.boardName} />
      <ActivityPostDetail boardId={Number(params.boardId)} post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
      <Comment postId={post.postId} />
    </div>
  )
}

export default function FetchActivityPostPage() {
  return (
    <Suspense fallback={<ActivityPageSkeleton />}>
      <ActivityPostPage />
    </Suspense>
  )
}
