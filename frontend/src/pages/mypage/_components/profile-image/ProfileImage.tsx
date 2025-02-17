import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Cross2Icon, UploadIcon } from '@radix-ui/react-icons'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

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
} from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import {
  deleteProfileImageApi,
  profileQuries,
  updateProfileImageApi,
} from '@/service/api/profile'
import { BASE_URL } from '@/service/config'
import { ProfileResponseDto } from '@/service/model'
import {
  UpdateProfileImage,
  UpdateProfileImageSchema,
} from '@/service/schema/mypage'
import { useMyInfoStore } from '@/store'

interface ProfileImageProps {
  profile: ProfileResponseDto
  userId: string
}

export const ProfileImage = ({ profile, userId }: ProfileImageProps) => {
  const setMyInfo = useMyInfoStore((state) => state.setMyInfo)

  const form = useForm<UpdateProfileImage>({
    resolver: zodResolver(UpdateProfileImageSchema),
    defaultValues: {
      profileImage: profile.profileImageUrl
        ? new File([profile.profileImageUrl], 'profile')
        : undefined,
    },
  })

  const { mutate: updateProfileImage } = useMutation({
    mutationFn: updateProfileImageApi,
    onSuccess: (data) => onSuccess(data.message),
  })

  const { mutate: deleteProfileImage } = useMutation({
    mutationFn: deleteProfileImageApi,
    onSuccess: (data) => onSuccess(data.message),
  })

  const onSuccess = async (message?: string) => {
    toast.success(message, { duration: 2000 })

    queryClient.invalidateQueries({
      queryKey: profileQuries.all(),
    })

    const { profileImageUrl: profileImage } = await queryClient.fetchQuery(
      profileQuries.profile({ userId }),
    )

    setMyInfo({ profileImage })
  }

  const onClickUploadButton = () => {
    const fileInput =
      document.querySelector<HTMLInputElement>('input[type="file"]')
    fileInput?.click()
  }

  const onSumbit = form.handleSubmit((data) => {
    if (!data.profileImage) return

    updateProfileImage({
      userId,
      data: { file: data.profileImage },
    })
  })

  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <Avatar className="mx-auto flex h-32 w-32 items-center justify-center rounded-full">
        <AvatarImage src={`${BASE_URL}${profile.profileImageUrl}`} />
        <AvatarFallback />
      </Avatar>
      <Form {...form}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full flex-col gap-3 text-center align-middle"
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
                      onSumbit()
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="w-55 flex w-full flex-row items-center gap-5">
            <Button
              onClick={onClickUploadButton}
              className="text-md mx-auto my-auto h-full w-full rounded-full font-semibold"
              variant="outline"
              size="default"
            >
              <UploadIcon className="h-4 w-4 text-blue-500" />
            </Button>
            <Button
              onClick={() => deleteProfileImage({ userId })}
              className="text-md mx-auto my-auto h-full rounded-full px-3 font-semibold md:w-full"
              variant="destructive"
              size="icon"
            >
              <Cross2Icon className="h-5 w-5 font-bold text-white" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
