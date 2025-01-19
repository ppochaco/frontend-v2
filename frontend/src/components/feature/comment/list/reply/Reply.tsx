import { Separator } from '@/components/ui'
import { CommentResponseDto } from '@/service/model'

import { CommentListItem } from '../item'
import { ReplyForm } from './form'

interface CommentReplyProps {
  replies: CommentResponseDto[]
  commentId: number
  postId: number
  isDeleted?: boolean
}

export const CommentReply = ({
  replies,
  commentId,
  postId,
  isDeleted,
}: CommentReplyProps) => {
  return (
    <div className="rounded-md bg-zinc-50 p-4">
      {replies.map((reply) => (
        <div key={reply.commentId}>
          <CommentListItem comment={reply} postId={postId} />
          <Separator className="my-4" />
        </div>
      ))}
      {!isDeleted && (
        <div className="pt-2">
          <ReplyForm postId={postId} commentId={commentId} />
        </div>
      )}
    </div>
  )
}
