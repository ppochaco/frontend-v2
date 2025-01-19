import { useState } from 'react'

import { Pencil2Icon } from '@radix-ui/react-icons'

import { Button, Separator } from '@/components/ui'
import { CommentResponseDto } from '@/service/model'

import { CommentListItem } from './item'
import { CommentReply } from './reply'

interface CommentListProps {
  comments: CommentResponseDto[]
}

export const CommentList = ({ comments }: CommentListProps) => {
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
          <CommentListItem comment={comment} />
          <div
            onClick={() => toggleReply(comment.commentId)}
            className="px-1 py-2 text-sm font-medium"
          >
            <Button
              variant="ghost"
              className="flex h-fit items-center gap-1 p-0 text-primary/80 hover:bg-transparent"
            >
              <Pencil2Icon />
              <div>
                {comment.replies.length
                  ? `${comment.replies.length}개의 답글`
                  : '답글 달기'}
              </div>
            </Button>
          </div>
          {isOpenReplies[comment.commentId] && (
            <CommentReply
              replies={comment.replies}
              commentId={comment.commentId}
            />
          )}
          {comments.length - 1 !== index && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  )
}
