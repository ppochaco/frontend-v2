import { useParams } from 'react-router'

import { useSuspenseQuery } from '@tanstack/react-query'

import { NotFound } from '@/components/common'
import {
  BoardNavigationButton,
  CommentForm,
  CommentList,
  PostContent,
} from '@/components/feature'
import { Label } from '@/components/ui'
import { activityPostQuries, boardQueries } from '@/service/api'
import { CommentResponseDto } from '@/service/model'

import { ActivityPostDetail, ActivityPostHero } from './_components'

export default function ActivityPostPage() {
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
      <div className="flex flex-col gap-2 py-16">
        <Label>{data.length}개의 댓글</Label>
        <CommentForm postId={post.postId} />
        <CommentList comments={data} />
      </div>
    </div>
  )
}

const data: CommentResponseDto[] = [
  {
    commentId: 0,
    commentContent: 'string',
    userId: 'string',
    userName: 'string',
    postId: 0,
    deleted: true,
    replies: [
      {
        commentId: 1,
        commentContent: 'string',
        userId: 'string',
        userName: 'string',
        postId: 0,
        deleted: true,
        replies: [],
        commentRegDate: '2025-01-19T12:25:16.838Z',
      },
    ],
    commentRegDate: '2025-01-19T12:25:16.838Z',
  },
]
