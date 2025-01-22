import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
} from '@/components/ui'
import { API_ERROR_MESSAGES } from '@/constant'
import { queryClient } from '@/lib/query-client'
import { boardQueries, updateBoardImageApi } from '@/service/api'
import { BASE_URL } from '@/service/config'
import { UpdateBoardImage, UpdateBoardImageSchema } from '@/service/schema'

interface EditBoardImageProps {
  activityId: number
  boardId: number
  boardImageUrl: string
}

export const EditBoardImage = ({
  activityId,
  boardId,
  boardImageUrl,
}: EditBoardImageProps) => {
  const form = useForm<UpdateBoardImage>({
    resolver: zodResolver(UpdateBoardImageSchema),
    defaultValues: {
      file: new File([], ''),
    },
  })

  const { mutate: updateBoardImage } = useMutation({
    mutationFn: updateBoardImageApi,
    onSuccess: (data) => onSuccess(data.message),
    onError: (error) => onError(error),
  })

  const onClickUploadButton = () => {
    const fileInput =
      document.querySelector<HTMLInputElement>('input[type="file"]')
    fileInput?.click()
  }

  const onSubmit = form.handleSubmit((values) => {
    updateBoardImage({ activityId, boardId, data: { file: values.file } })
  })

  const onSuccess = (message: string) => {
    toast.success(message)
    queryClient.invalidateQueries({ queryKey: boardQueries.all() })
  }

  const onError = (error: Error) => {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message)
      return
    }

    toast.error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }

  return (
    <Form {...form}>
      <form className="w-full max-w-96">
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:items-center">
                <Label className="text-md w-40">대표 이미지</Label>
                <div className="flex justify-end">
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    multiple={false}
                    onChange={(e) => {
                      field.onChange(e.target.files ? e.target.files[0] : null)
                      onSubmit()
                    }}
                  />
                </FormControl>
              </div>
              <div className="flex aspect-video overflow-hidden bg-slate-100">
                <img
                  src={`${BASE_URL}${boardImageUrl}`}
                  onClick={onClickUploadButton}
                  className="w-full object-contain hover:cursor-pointer hover:brightness-75"
                />
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
