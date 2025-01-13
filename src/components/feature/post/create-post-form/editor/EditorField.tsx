'use client'

import { useFormContext } from 'react-hook-form'

import { BlockNoteEditor, PartialBlock } from '@blocknote/core'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'

import { FormField, FormItem, FormMessage } from '@/components/ui'
import { CreateActivityPost } from '@/schema/post'

interface PostContentFieldEditorProps {
  contents?: string
  isFixed: boolean
}

const PostContentFieldEditor = ({
  contents,
  isFixed,
}: PostContentFieldEditorProps) => {
  const { control } = useFormContext<CreateActivityPost>()

  const initialContent = JSON.parse(contents || '') as PartialBlock[]

  const createEditor = useCreateBlockNote()
  const fixEditor = BlockNoteEditor.create({ initialContent })

  return (
    <FormField
      control={control}
      name="postContent"
      render={({ field }) => (
        <FormItem>
          {!isFixed ? (
            <BlockNoteView
              editor={createEditor}
              onChange={() =>
                field.onChange(JSON.stringify(createEditor.document))
              }
              className="h-[500px] overflow-auto rounded-md border pt-4"
            />
          ) : (
            <BlockNoteView
              editor={fixEditor}
              onChange={() =>
                field.onChange(JSON.stringify(fixEditor.document))
              }
              className="h-[500px] overflow-auto rounded-md border pt-4"
            />
          )}

          <div className="flex justify-end">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}

export default PostContentFieldEditor
