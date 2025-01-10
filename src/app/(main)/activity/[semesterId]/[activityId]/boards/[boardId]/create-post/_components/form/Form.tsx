'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'

import { PostContentFieldEditor } from '@/components/feature/post/create-post-form/editor'
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  Separator,
  useToast,
} from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import { CreateActivityPost, CreateActivityPostSchema } from '@/schema/post'
import { activityPostQuries, addActivityPostApi } from '@/service/api'

import { ActivityDateFieldDialog } from './date-field-dialog'

type CreateActivityPostFormProps = {
  boardId: number
}

export const CreateActivityPostForm = ({
  boardId,
}: CreateActivityPostFormProps) => {
  const { toast } = useToast()
  const router = useRouter()
  const pathName = usePathname()

  const { mutate: addActivityPost, isPending } = useMutation({
    mutationFn: addActivityPostApi,
    onSuccess: (data) => onSuccess(data.message),
  })

  const form = useForm<CreateActivityPost>({
    resolver: zodResolver(CreateActivityPostSchema),
    defaultValues: {
      postTitle: '',
      postContent: '',
      postImageIds: [],
      postActivityStartDate: '',
      postActivityEndDate: '',
    },
  })

  const onSuccess = (message?: string) => {
    toast({
      title: message,
      duration: 2000,
    })

    queryClient.invalidateQueries({
      queryKey: activityPostQuries.board(boardId),
    })

    const basePath = pathName.split('/').slice(0, -1).join('/')
    router.push(basePath)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          addActivityPost({ boardId, data: values }),
        )}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="postTitle"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center">
                <Label className="text-md w-40">게시글 제목</Label>
                <FormControl>
                  <Input value={field.value} onChange={field.onChange} />
                </FormControl>
              </div>
              <div className="flex justify-end">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <ActivityDateFieldDialog />
        <Separator />
        <div>게시글 내용 작성하기</div>
        <PostContentFieldEditor />
        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            게시글 업로드
          </Button>
        </div>
      </form>
    </Form>
  )
}
