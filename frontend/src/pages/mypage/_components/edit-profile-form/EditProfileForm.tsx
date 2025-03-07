import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
} from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import { profileQuries, updateProfileInfoApi } from '@/service/api'
import { ProfileResponseDto } from '@/service/model'
import {
  UpdateProfileInfo,
  UpdateProfileInfoSchema,
} from '@/service/schema/mypage'

interface EditProfileFormProps {
  profile: ProfileResponseDto
  userId: string
}

export const EditProfileForm = ({ profile, userId }: EditProfileFormProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const { mutate: updateProfileInfo, isPending } = useMutation({
    mutationFn: updateProfileInfoApi,
    onSuccess: (data) => onSuccess(data.message),
  })

  const form = useForm<UpdateProfileInfo>({
    resolver: zodResolver(UpdateProfileInfoSchema),
    defaultValues: {
      profileIntro: profile.profileIntro ?? '',
      githubAccount: profile.githubAccount ?? '',
      instaAccount: profile.instaAccount ?? '',
    },
  })

  const onSuccess = (message?: string) => {
    toast(message, { duration: 2000 })

    queryClient
      .invalidateQueries({
        queryKey: profileQuries.all(),
      })
      .then(() => {
        form.reset(form.getValues())
      })
  }

  const onSubmit = (data: UpdateProfileInfo) => {
    updateProfileInfo({ userId, data })
    setIsEditing(false)
  }

  const onClickEdit = () => {
    setIsEditing(!isEditing)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col pb-10"
      >
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold sm:text-2xl">프로필 정보</div>
          <div className="flex flex-row items-center justify-end gap-2">
            {isEditing ? (
              <Button
                variant={'outline'}
                onClick={() => onClickEdit()}
                type="button"
                className="transition-opacity"
              >
                취소
              </Button>
            ) : (
              <Button
                onClick={() => onClickEdit()}
                type="button"
                className="transition-opacity"
              >
                수정
              </Button>
            )}
            {isEditing && (
              <Button type="submit">{isPending ? '저장 중' : '완료'}</Button>
            )}
          </div>
        </div>
        <Separator className="my-2 sm:my-3" />
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="profileIntro"
            render={({ field }) => (
              <FormItem>
                <div className="flex w-full flex-col gap-1">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-4">
                    <FormLabel className="pt-1 text-base font-bold text-primary sm:text-lg">
                      한 줄 소개
                    </FormLabel>
                    <FormControl>
                      {isEditing ? (
                        <div>
                          <Input
                            className="w-full md:w-80"
                            placeholder="한 줄 소개를 입력하세요."
                            {...field}
                            value={field.value}
                            autoFocus
                          />
                          <FormMessage className="pl-1 pt-1" />
                        </div>
                      ) : (
                        <div className="text-md flex h-10 items-center pb-1">
                          {profile.profileIntro}
                        </div>
                      )}
                    </FormControl>
                  </div>
                </div>
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-1">
            <FormLabel className="text-base font-bold text-primary sm:text-lg">
              소셜 정보
            </FormLabel>
            <FormField
              control={form.control}
              name="githubAccount"
              render={({ field }) => (
                <FormItem>
                  <div className="flex h-10 items-center gap-2">
                    <GitHubLogoIcon className="h-5 w-5" />
                    <FormControl>
                      {isEditing ? (
                        <Input
                          className="w-full md:w-auto"
                          placeholder="GitHub 계정"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      ) : (
                        <span>{profile.githubAccount}</span>
                      )}
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instaAccount"
              render={({ field }) => (
                <FormItem>
                  <div className="flex h-10 items-center gap-2">
                    <InstagramLogoIcon className="h-5 w-5" />
                    <FormControl>
                      {isEditing ? (
                        <Input
                          className="w-full md:w-auto"
                          placeholder="Instagram 계정"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      ) : (
                        <span>{profile.instaAccount}</span>
                      )}
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full pt-2 text-xs text-primary/40 sm:text-sm">
          멤버 페이지에서 보이는 정보입니다.
        </div>
      </form>
    </Form>
  )
}
