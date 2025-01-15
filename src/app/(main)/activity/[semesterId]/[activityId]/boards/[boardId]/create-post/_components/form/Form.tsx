'use client'

import { useRef } from 'react'
import { useForm } from 'react-hook-form'

import { Block } from '@blocknote/core'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { usePathname, useRouter } from 'next/navigation'

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
  Skeleton,
  useToast,
} from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import { CreateActivityPost, CreateActivityPostSchema } from '@/schema/post'
import { activityPostQuries, addActivityPostApi } from '@/service/api'

import { ActivityDateFieldDialog } from './date-field-dialog'

const PostContentFieldEditor = dynamic(
  () => import('@/components/feature/post/post-editor/PostEditorField'),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[500px] w-full bg-slate-100" />,
  },
)

interface CreateActivityPostFormProps {
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

  const imageMapRef = useRef<Map<string, number>>(new Map())

  const addImageId = (url: string, id: number) => {
    imageMapRef.current.set(url, id)
  }

  const onSubmit = (values: CreateActivityPost) => {
    const imageIds: number[] = []

    JSON.parse(values.postContent)
      .filter((block: Block) => block.type === 'image')
      .forEach((block: Block) => {
        if (block.type === 'image') {
          const url = block.props.url.split('/').pop() ?? ''
          const imageId = imageMapRef.current.get(url)

          if (imageId) imageIds.push(imageId)
        }
      })

    form.setValue('postImageIds', imageIds)

    addActivityPost({ boardId, data: values })
  }

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
        <ActivityDateFieldDialog />
        <Separator />
        <div>게시글 내용 작성하기</div>
        <PostContentFieldEditor addImageId={addImageId} />
        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            게시글 업로드
          </Button>
        </div>
      </form>
    </Form>
  )
}
