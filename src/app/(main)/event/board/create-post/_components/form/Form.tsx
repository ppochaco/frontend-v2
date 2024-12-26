'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { CreatePostForm } from '@/components/feature'
import { CreateEventPost, CreateEventPostSchema } from '@/schema/post'

export const CreateEventPostForm = () => {
  const form = useForm<CreateEventPost>({
    resolver: zodResolver(CreateEventPostSchema),
    defaultValues: {
      postTitle: '',
      postContent: '',
    },
  })

  return (
    <CreatePostForm
      form={form}
      onSubmit={() => {}}
      isExecuting={false}
      isActivityDateRequired={false}
      isImageRequired={false}
    />
  )
}
