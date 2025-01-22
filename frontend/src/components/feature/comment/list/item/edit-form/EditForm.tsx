import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Textarea,
} from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import { commentQueries, updateCommentApi } from '@/service/api/comment'
import { UpdateComment, UpdateCommentSchema } from '@/service/schema'

interface EditCommentFormProps {
  postId: number
  commentId: number
  defaultContent: string
  onClickCancel: () => void
}

export const EditCommentForm = ({
  postId,
  commentId,
  defaultContent,
  onClickCancel,
}: EditCommentFormProps) => {
  const form = useForm<UpdateComment>({
    resolver: zodResolver(UpdateCommentSchema),
    defaultValues: {
      postId,
      commentId,
      commentContent: defaultContent,
    },
  })

  const { mutate: updateComment, error } = useMutation({
    mutationFn: updateCommentApi,
    onSuccess: () => onSuccess(),
  })

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: commentQueries.lists(postId) })
    form.reset()
    onClickCancel()
  }

  if (error) throw error

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          updateComment({ commentId, postId, data: values }),
        )}
        className="flex flex-col gap-1 py-2"
      >
        <FormField
          control={form.control}
          name="commentContent"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="h-20 bg-white"
                  placeholder="댓글을 작성하세요"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClickCancel}>
            취소
          </Button>
          <Button>댓글 수정</Button>
        </div>
      </form>
    </Form>
  )
}
