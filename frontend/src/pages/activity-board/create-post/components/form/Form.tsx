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
import { activityPostQuries, addActivityPostApi } from '@/service/api'
import { CreateActivityPost, CreateActivityPostSchema } from '@/service/schema'
import { getImageNameFromBlocks } from '@/utils'

import { ActivityDateFieldDialog } from './date-field-dialog'

interface CreateActivityPostFormProps {
  boardId: number
}

export const CreateActivityPostForm = ({
  boardId,
}: CreateActivityPostFormProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { mutate: addActivityPost, isPending } = useMutation({
    mutationFn: addActivityPostApi,
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

  const onSuccess = (message?: string) => {
    toast(message, { duration: 2000 })

    queryClient.refetchQueries({
      queryKey: activityPostQuries.lists(boardId),
    })

    const basePath = pathname.split('/').slice(0, -1).join('/')
    navigate(basePath)
  }

  const onSubmit = form.handleSubmit((values) => {
    const imageNames = getImageNameFromBlocks(values.postContent)
    form.setValue('postImageNames', imageNames)

    addActivityPost({ boardId, data: form.getValues() })
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
