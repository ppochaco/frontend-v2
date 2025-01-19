import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import { kstFormat } from '@toss/date'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { CommentResponseDto } from '@/service/model'

interface CommentListProps {
  comments: CommentResponseDto[]
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="flex flex-col gap-8 pb-16 pt-10">
      {comments.map((comment) => (
        <div key={comment.commentId}>
          <div className="flex justify-between">
            <div className="flex flex-row gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="" className="bg-white" />
                <AvatarFallback />
              </Avatar>
              <div className="flex flex-col pb-1">
                <div>{comment.userName}</div>
                <div className="text-xs">
                  {kstFormat(new Date(comment.commentRegDate), 'yyyy.LL.dd')}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 text-primary/70">
              <Pencil1Icon className="h-4 w-4 hover:cursor-pointer hover:text-primary" />
              <TrashIcon className="h-4 w-4 hover:cursor-pointer hover:text-primary" />
            </div>
          </div>
          <div className="px-1">{comment.commentContent}</div>
          <div className="px-1 py-2 text-sm font-normal text-primary/70 underline-offset-4 hover:cursor-pointer hover:text-primary hover:underline">
            답글 달기
          </div>
        </div>
      ))}
    </div>
  )
}
