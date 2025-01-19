import { useLocation } from 'react-router'

import { useQuery } from '@tanstack/react-query'

import { NotFound } from '@/components/common'
import { Label, Skeleton } from '@/components/ui'
import { commentQueries } from '@/service/api/comment'

import { CommentForm } from './form'
import { CommentList } from './list'

interface CommentProps {
  postId: number
}

export const Comment = ({ postId }: CommentProps) => {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)

  const page =
    Number(searchParams.get('page')) > 0
      ? Number(searchParams.get('page')) - 1
      : 0

  const { data, status, error } = useQuery(
    commentQueries.list({ postId, page }),
  )

  if (status === 'pending')
    return (
      <div className="flex flex-col gap-2 py-16">
        <Label>0개의 댓글</Label>
        <Skeleton className="h-20 bg-primary/5" />
      </div>
    )

  if (error) return <NotFound />

  return (
    <div className="flex flex-col gap-2 py-16">
      <Label>{data.comments.length}개의 댓글</Label>
      <CommentForm postId={postId} />
      <CommentList comments={data.comments} postId={postId} />
    </div>
  )
}
