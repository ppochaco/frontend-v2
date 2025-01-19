import { useState } from 'react'

import { Pencil2Icon } from '@radix-ui/react-icons'

import { Button, Separator } from '@/components/ui'
import { CommentResponseDto } from '@/service/model'

import { CommentListItem } from './item'
import { CommentReply } from './reply'

interface CommentListProps {
  comments: CommentResponseDto[]
  postId: number
}

export const CommentList = ({ comments, postId }: CommentListProps) => {
  const [isOpenReplies, setIsOpenReplies] = useState<Record<number, boolean>>(
    {},
  )

  const toggleReply = (commentId: number) => {
    setIsOpenReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }))
  }

  return (
    <div className="flex flex-col py-6">
      {comments.map((comment, index) => (
        <div key={comment.commentId}>
          <CommentListItem comment={comment} postId={postId} />
          <Button
            variant="ghost"
            onClick={() => toggleReply(comment.commentId)}
            className="flex h-fit items-center gap-1 px-1 py-2 text-sm font-medium text-primary/80 hover:bg-transparent"
          >
            <Pencil2Icon />
            <div>
              {comment.replies.length
                ? `${comment.replies.length}개의 답글`
                : '답글 달기'}
            </div>
          </Button>
          {isOpenReplies[comment.commentId] && (
            <CommentReply
              replies={comment.replies}
              commentId={comment.commentId}
              isDeleted={comment.deleted}
              postId={postId}
            />
          )}
          {comments.length - 1 !== index && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  )
}
