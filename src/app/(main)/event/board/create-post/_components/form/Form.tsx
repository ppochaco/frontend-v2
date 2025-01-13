'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui'
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
    <Form {...form}>
      <form>
        <div>temp form ui</div>
      </form>
    </Form>
  )
}
