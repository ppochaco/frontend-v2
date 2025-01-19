import { Separator } from '@/components/ui'
import { CommentResponseDto } from '@/service/model'

import { CommentForm } from '../../form'
import { CommentListItem } from '../item'

interface CommentReplyProps {
  replies: CommentResponseDto[]
}

export const CommentReply = ({ replies }: CommentReplyProps) => {
  return (
    <div className="rounded-md bg-zinc-50 p-4">
      {replies.map((reply) => (
        <div key={reply.commentId}>
          <CommentListItem comment={reply} />
          <Separator className="my-4" />
        </div>
      ))}
      <div className="pt-2">
        <CommentForm postId={1} />
      </div>
    </div>
  )
}
