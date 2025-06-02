import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { NetworkError } from '@/components/common'
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
import { NoticePostQuries, updateNoticePostApi } from '@/service/api'
import { CreateNoticePost, CreateNoticePostSchema } from '@/service/schema'
import { getImageNameFromBlocks } from '@/utils'

interface EditNoticePostFormProps {
  postId: number
}

export const EditNoticePostForm = ({ postId }: EditNoticePostFormProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { data: postInfo } = useSuspenseQuery(
    NoticePostQuries.detail({
      postId,
    }),
  )

  const { mutate: updateNoticePost, isPending } = useMutation({
    mutationFn: updateNoticePostApi,
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

  useEffect(() => {
    if (postInfo) {
      form.reset({
        postTitle: postInfo.postTitle,
        postContent: postInfo.postContent,
        postImageNames: [],
      })
    }
  }, [postInfo, form])

  const onSubmit = (values: CreateNoticePost) => {
    const imageNames = getImageNameFromBlocks(values.postContent)
    form.setValue('postImageNames', imageNames)

    updateNoticePost({ postId: postInfo.postId, data: form.getValues() })
  }

  const onSuccess = (message?: string) => {
    toast.success(message, { duration: 2000 })

    queryClient.invalidateQueries({ queryKey: NoticePostQuries.all() })

    const basePath = pathname.split('/').slice(0, -1).join('/')
    navigate(basePath)
  }

  if (!postInfo) return <NetworkError />

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
          <Label className="text-md">게시글 내용 수정하기</Label>
          <PostContentFieldEditor contents={postInfo.postContent} />
        </div>
        <div className="flex justify-end pb-10">
          <Button type="submit" disabled={isPending}>
            게시글 수정
          </Button>
        </div>
      </form>
    </Form>
  )
}
