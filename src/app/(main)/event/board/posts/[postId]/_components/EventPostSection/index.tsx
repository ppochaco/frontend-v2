'use client'

import { Spinner } from '@/components/common'
import { BoardNavigationButton, PostContent } from '@/components/feature'
import { useGetPost } from '@/service/data/post'

import { EventPostDetail } from './EventPostDetail'

type EventPostSectionProps = {
  postId: number
}

export const EventPostSection = ({ postId }: EventPostSectionProps) => {
  const { data: post, status } = useGetPost({ postId })

  if (status === 'pending') return <Spinner />

  if (!post) return <div>게시글 정보가 없습니다.</div>

  return (
    <div>
      <EventPostDetail post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
    </div>
  )
}
