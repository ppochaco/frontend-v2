import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Textarea,
} from '@/components/ui'
import { CreateReply, CreateReplySchema } from '@/service/schema'

interface ReplyFormProps {
  commentId: number
}

export const ReplyForm = ({ commentId }: ReplyFormProps) => {
  const form = useForm<CreateReply>({
    resolver: zodResolver(CreateReplySchema),
    defaultValues: {
      commentId,
      commentContent: '',
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => console.log(values))}
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
