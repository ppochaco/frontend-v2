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
import { addCommentReplyApi, commentQueries } from '@/service/api/comment'
import { CreateReply, CreateReplySchema } from '@/service/schema'

interface ReplyFormProps {
  postId: number
  commentId: number
}

export const ReplyForm = ({ postId, commentId }: ReplyFormProps) => {
  const form = useForm<CreateReply>({
    resolver: zodResolver(CreateReplySchema),
    defaultValues: {
      commentId,
      commentContent: '',
    },
  })

  const { mutate: addReply, error } = useMutation({
    mutationFn: addCommentReplyApi,
    onSuccess: () => onSuccess(),
  })

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: commentQueries.lists(postId) })
    form.reset()
  }

  if (error) throw error

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          addReply({ commentId, data: values }),
        )}
        className="flex flex-col gap-1"
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
        <div className="flex w-full justify-end">
          <Button>작성하기</Button>
        </div>
      </form>
    </Form>
  )
}
