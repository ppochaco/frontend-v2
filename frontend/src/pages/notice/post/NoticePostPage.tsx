import { useParams } from 'react-router'

import { useSuspenseQuery } from '@tanstack/react-query'

import {
  BoardNavigationButton,
  CommentForm,
  CommentList,
  PostContent,
} from '@/components/feature'
import { Label } from '@/components/ui'
import { NoticePostQuries } from '@/service/api'
import { CommentResponseDto } from '@/service/model'

import { NoticePostDetail, NoticePostHero } from './_components'

export default function NoticePostPage() {
  const params = useParams()

  const { data: post } = useSuspenseQuery(
    NoticePostQuries.detail({ postId: Number(params.postId) }),
  )

  return (
    <div className="w-full">
      <NoticePostHero />
      <NoticePostDetail post={post} />
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
