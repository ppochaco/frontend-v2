import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

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

  const { mutate: addReply } = useMutation({
    mutationFn: addCommentReplyApi,
    onSuccess: () => onSuccess(),
    onError: (error) => onError(error),
  })

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: commentQueries.lists(postId) })
    form.reset()
  }

  const onError = (error: Error) => {
    if (error instanceof AxiosError && error.status === 403) {
      toast.error('로그인 후 이용해주세요.')
      return
    }

    toast.error(error.message)
  }

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
