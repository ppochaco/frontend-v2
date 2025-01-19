import { Pencil1Icon } from '@radix-ui/react-icons'
import { useMutation } from '@tanstack/react-query'
import { kstFormat } from '@toss/date'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { API_ERROR_MESSAGES } from '@/constant'
import { queryClient } from '@/lib/query-client'
import { commentQueries, deleteCommentApi } from '@/service/api/comment'
import { CommentResponseDto } from '@/service/model'
import { useMyInfoStore } from '@/store'

import { DeleteCommentDialog } from './delete-dialog'

interface CommentListItemProps {
  comment: CommentResponseDto
  postId: number
}

export const CommentListItem = ({ comment, postId }: CommentListItemProps) => {
  const { userId } = useMyInfoStore((state) => state.myInfo)

  const { mutate: deleteComment } = useMutation({
    mutationFn: deleteCommentApi,
    onSuccess: () => onSuccess(),
    onError: (error) => onError(error),
  })

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: commentQueries.lists(postId) })
  }

  const onError = (error: Error) => {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message)
      return
    }

    toast.error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-row gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="" className="bg-white" />
            <AvatarFallback />
          </Avatar>
          <div className="flex flex-col pb-1">
            <div>{comment.userName}</div>
            <div className="text-xs text-primary/60">
              {kstFormat(new Date(comment.commentRegDate), 'yyyy.LL.dd')}
            </div>
          </div>
        </div>
        {comment.userId === userId && !comment.deleted && (
          <div className="flex flex-row gap-2 text-primary/70">
            <Pencil1Icon className="h-4 w-4 hover:cursor-pointer hover:text-primary" />
            <DeleteCommentDialog
              onClick={() =>
                deleteComment({ postId, commentId: comment.commentId })
              }
            />
          </div>
        )}
      </div>
      <div className="px-1">{comment.commentContent}</div>
    </>
  )
}
