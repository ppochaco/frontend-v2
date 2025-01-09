import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Cross2Icon, UploadIcon } from '@radix-ui/react-icons'
import { useMutation } from '@tanstack/react-query'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  toast,
} from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import { CreateMypageProfile, CreateMypageProfileSchema } from '@/schema/mypage'
import { putUpdateProfileImageApi, userQueries } from '@/service/api/mypage'
import { BACKEND_API } from '@/service/config'

interface UserInfoSectionProps {
  name?: string
  role?: string
  studentId?: number
  profileImageUrl?: string
  userId: string
}

export const UserInfoSection = ({
  name,
  role,
  studentId,
  profileImageUrl: initialProfileImage,
  userId,
}: UserInfoSectionProps) => {
  const form = useForm<CreateMypageProfile>({
    resolver: zodResolver(CreateMypageProfileSchema),
    defaultValues: {
      profileImage: initialProfileImage
        ? new File([initialProfileImage], 'profile')
        : undefined,
    },
  })

  const { mutate: updateProfileImage } = useMutation({
    mutationFn: putUpdateProfileImageApi,
    onSuccess: (data) => onSuccess(data.message),
  })

  const onSuccess = (message?: string) => {
    toast({
      title: message,
      duration: 2000,
    })

    queryClient.invalidateQueries({
      queryKey: userQueries.profiles({ userId: userId }),
    })
  }

  const getBaseURL = () => BACKEND_API.defaults.baseURL

  const formattedImageUrl = initialProfileImage
    ? `${getBaseURL()}${initialProfileImage}`
    : undefined

  const [previewImage, setPreviewImage] = useState<string | undefined>(
    formattedImageUrl,
  )

  const handleUploadProfile = (file: File) => {
    form.handleSubmit(onSubmit)()

    const reader = new FileReader()
    reader.onload = () => {
      setPreviewImage(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const onClickUploadButton = () => {
    const fileInput =
      document.querySelector<HTMLInputElement>('input[type="file"]')
    fileInput?.click()
  }

  const onClickRemoveButton = () => {
    form.setValue('profileImage', undefined)
    setPreviewImage(undefined)
  }

  const onSubmit = (data: CreateMypageProfile) => {
    if (!data.profileImage) return
    updateProfileImage({
      userId: userId,
      file: data.profileImage,
    })
  }

  return (
    <section className="flex h-full w-full flex-col md:flex-row md:space-x-8">
      <div className="flex flex-col items-center justify-center space-y-5">
        <Avatar className="md:h-35 md:w-35 mx-auto flex h-32 w-32 items-center justify-center rounded-full">
          <AvatarImage src={previewImage || formattedImageUrl} />
          <AvatarFallback />
        </Avatar>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-3 text-center align-middle md:flex-col"
          >
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      multiple={false}
                      onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : null
                        field.onChange(file)
                        if (file) handleUploadProfile(file)
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="w-55 flex flex-row items-center gap-5 md:w-full md:gap-4">
              <Button
                onClick={onClickUploadButton}
                className="text-md mx-auto my-auto h-full w-full rounded-full font-semibold"
                variant="outline"
                size="default"
              >
                <UploadIcon className="h-4 w-4 text-blue-500" />
              </Button>
              <Button
                onClick={onClickRemoveButton}
                className="text-md mx-auto my-auto rounded-full px-3 font-semibold md:h-full md:w-full"
                variant="destructive"
                size="icon"
              >
                <Cross2Icon className="h-auto w-6 font-bold text-white md:h-5 md:w-5" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="mb-5 mt-10 border-t border-border md:hidden" />
      <div className="mt-5 space-y-3">
        <div className="flex flex-row items-center gap-3 md:gap-5">
          <div className="text-2xl font-bold md:text-3xl">{name}</div>
          <div className="text-md rounded-full border border-primary px-3 py-1 text-primary md:text-xl">
            {role}
          </div>
        </div>
        <div className="text-xl">{studentId}</div>
      </div>
    </section>
  )
}
