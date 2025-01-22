import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useParams } from 'react-router'

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
import { activityPostQuries, updateActivityPostApi } from '@/service/api'
import { PostWithBoardResponseDto } from '@/service/model'
import { CreateActivityPost, CreateActivityPostSchema } from '@/service/schema'
import { getImageNameFromBlocks } from '@/utils'

import { ActivityDateFieldDialog } from './date-field-dialog'

interface EditActivityPostFormProps {
  boardId: number
  postInfo: PostWithBoardResponseDto
}

export const EditActivityPostForm = ({
  boardId,
  postInfo,
}: EditActivityPostFormProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const params = useParams()

  const postId = Number(params.postId)

  const { mutate: updateActivityPost, isPending } = useMutation({
    mutationFn: updateActivityPostApi,
    onSuccess: (data) => onSuccess(data.message),
  })

  const form = useForm<CreateActivityPost>({
    resolver: zodResolver(CreateActivityPostSchema),
    defaultValues: {
      postTitle: '',
      postContent: '',
      postImageNames: [],
      postActivityStartDate: '',
      postActivityEndDate: '',
    },
  })

  useEffect(() => {
    if (postInfo) {
      form.reset({
        postTitle: postInfo.postTitle,
        postContent: postInfo.postContent,
        postImageNames: [],
        postActivityStartDate: postInfo.postActivityStartDate,
        postActivityEndDate: postInfo.postActivityEndDate || '',
      })
    }
  }, [postInfo, form])

  const onSuccess = (message?: string) => {
    toast.success(message, { duration: 2000 })

    queryClient.refetchQueries({
      queryKey: activityPostQuries.details({ boardId, postId }),
    })

    const basePath = pathname.split('/').slice(0, -1).join('/')
    navigate(basePath)
  }
  const onSumbit = form.handleSubmit((values) => {
    const imageNames = getImageNameFromBlocks(values.postContent)
    form.setValue('postImageNames', imageNames)

    updateActivityPost({ boardId, postId, data: form.getValues() })
  })

  return (
    <Form {...form}>
      <form onSubmit={onSumbit} className="flex flex-col gap-4">
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
        <PostContentFieldEditor contents={postInfo.postContent} />
        <div className="flex justify-end">
          <Button disabled={isPending}>게시글 수정</Button>
        </div>
      </form>
    </Form>
  )
}
