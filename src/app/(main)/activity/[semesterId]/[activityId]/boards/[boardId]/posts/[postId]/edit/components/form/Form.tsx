'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams, usePathname, useRouter } from 'next/navigation'

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
import { activityPostQuries, updateActivityPostApi } from '@/service/api'

import { ActivityDateFieldDialog } from './date-field-dialog'

interface EditActivityPostFormProps {
  boardId: number
}

export const EditActivityPostForm = ({
  boardId,
}: EditActivityPostFormProps) => {
  const { toast } = useToast()
  const router = useRouter()
  const pathName = usePathname()
  const params = useParams()

  const postId = Number(params.postId)

  const { data: editPostData } = useQuery(
    activityPostQuries.detail({ boardId, postId }),
  )

  const { mutate: updateActivityPost, isPending } = useMutation({
    mutationFn: updateActivityPostApi,
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

  useEffect(() => {
    if (editPostData) {
      form.reset({
        postTitle: editPostData.postTitle,
        postContent: editPostData.postContent,
        postActivityStartDate: editPostData.postActivityStartDate,
        postActivityEndDate: editPostData.postActivityEndDate,
      })
    }
  }, [editPostData, form])

  const onSuccess = (message?: string) => {
    toast({
      title: message,
      duration: 2000,
    })

    queryClient.refetchQueries({
      queryKey: activityPostQuries.lists(boardId),
    })

    const basePath = pathName.split('/').slice(0, -1).join('/')
    router.push(basePath)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          updateActivityPost({ boardId, postId, data: values }),
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
        <div>게시글 내용 수정하기</div>
        <PostContentFieldEditor
          isFixed={true}
          contents={editPostData?.postContent}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            게시글 수정
          </Button>
        </div>
      </form>
    </Form>
  )
}
