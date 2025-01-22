import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { PostContentFieldEditor } from '@/components/feature'
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
} from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import { NoticePostQuries, addNoticePostApi } from '@/service/api'
import { CreateNoticePost, CreateNoticePostSchema } from '@/service/schema'
import { getImageNameFromBlocks } from '@/utils'

export const CreateNoticePostForm = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { mutate: addNoticePost, isPending } = useMutation({
    mutationFn: addNoticePostApi,
    onSuccess: (data) => onSuccess(data.message),
  })

  const form = useForm<CreateNoticePost>({
    resolver: zodResolver(CreateNoticePostSchema),
    defaultValues: {
      postTitle: '',
      postContent: '',
      postImageNames: [],
    },
  })

  const onSubmit = (values: CreateNoticePost) => {
    const imageNames = getImageNameFromBlocks(values.postContent)
    form.setValue('postImageNames', imageNames)

    addNoticePost({ data: form.getValues() })
  }

  const onSuccess = (message?: string) => {
    toast.success(message, { duration: 2000 })

    queryClient.invalidateQueries({ queryKey: NoticePostQuries.all() })

    const basePath = pathname.split('/').slice(0, -1).join('/')
    navigate(basePath)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
        <Separator />
        <div>
          <Label className="text-md">게시글 내용 작성하기</Label>
          <PostContentFieldEditor />
        </div>
        <div className="flex justify-end pb-10">
          <Button type="submit" disabled={isPending}>
            공지사항 업로드
          </Button>
        </div>
      </form>
    </Form>
  )
}
