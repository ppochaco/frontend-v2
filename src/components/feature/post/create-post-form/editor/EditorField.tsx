'use client'

import { useFormContext } from 'react-hook-form'

import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import { useMutation } from '@tanstack/react-query'

import { FormField, FormItem, FormMessage } from '@/components/ui'
import { CreateActivityPost } from '@/schema/post'
import { uploadPostImageApi } from '@/service/api/post/image-upload'

const PostContentFieldEditor = () => {
  const { mutateAsync: uploadPostImage } = useMutation({
    mutationFn: uploadPostImageApi,
    onSuccess: (data) => onSuccess(data.postImageId),
  })
  const { control } = useFormContext<CreateActivityPost>()

  const uploadFile = async (file: File): Promise<string> => {
    const data = await uploadPostImage({ data: { file } })

    return data.postImageUrl.replace(
      '/upload',
      'https://www.knu-haedal.com/api/upload',
    )
  }

  const editor = useCreateBlockNote({
    uploadFile,
  })

  const onSuccess = (imageId: number) => {
    console.log(imageId)
  }

  return (
    <FormField
      control={control}
      name="postContent"
      render={({ field }) => (
        <FormItem>
          <BlockNoteView
            editor={editor}
            onChange={() => field.onChange(JSON.stringify(editor.document))}
            className="h-[500px] overflow-auto rounded-md border pt-4"
          />
          <div className="flex justify-end">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}

export default PostContentFieldEditor
