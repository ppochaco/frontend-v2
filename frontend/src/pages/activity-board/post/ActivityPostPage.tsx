import { Suspense } from 'react'
import { useParams } from 'react-router'

import { useSuspenseQuery } from '@tanstack/react-query'

import { NotFound, Spinner } from '@/components/common'
import {
  BoardNavigationButton,
  Comment,
  PostContent,
} from '@/components/feature'
import { Separator } from '@/components/ui'
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

  if (!post) return <NotFound />

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

const ActivityPostSkeleton = () => {
  return (
    <div className="flex w-full flex-col">
      <ActivityPostHero boardName="" />
      <Separator className="mb-4 mt-36" />
      <Spinner />
    </div>
  )
}

export default function FetchActivityPostPage() {
  return (
    <Suspense fallback={<ActivityPostSkeleton />}>
      <ActivityPostPage />
    </Suspense>
  )
}
