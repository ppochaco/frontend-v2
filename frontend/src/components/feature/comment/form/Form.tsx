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
import { addCommentApi, commentQueries } from '@/service/api/comment'
import { CreateComment, CreateCommentSchema } from '@/service/schema'

interface CommentFormProps {
  postId: number
}

export const CommentForm = ({ postId }: CommentFormProps) => {
  const form = useForm<CreateComment>({
    resolver: zodResolver(CreateCommentSchema),
    defaultValues: {
      postId,
      commentContent: '',
    },
  })

  const { mutate: addComment } = useMutation({
    mutationFn: addCommentApi,
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
          addComment({ postId, data: values }),
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
