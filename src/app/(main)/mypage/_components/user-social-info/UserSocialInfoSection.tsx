import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { useMutation } from '@tanstack/react-query'

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  toast,
} from '@/components/ui'
import { queryClient } from '@/lib/query-client'
import {
  CreateMypageSocialInfo,
  CreateMypageSocialInfoSchema,
} from '@/schema/mypage'
import { putUpdateProfileApi, userQueries } from '@/service/api/mypage'

interface UserSocialInfoSectionProps {
  githubInfo?: string
  instagramInfo?: string
  profileIntro?: string
  userId: string
}

export const UserSocialInfoSection = ({
  githubInfo: initialGithubInfo,
  instagramInfo: initialInstagramInfo,
  profileIntro: initialProfileIntro,
  userId,
}: UserSocialInfoSectionProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: putUpdateProfileApi,
    onSuccess: (data) => onSuccess(data.message),
  })

  const form = useForm<CreateMypageSocialInfo>({
    resolver: zodResolver(CreateMypageSocialInfoSchema),
    defaultValues: {
      profileIntro: initialProfileIntro ?? undefined,
      githubAccount: initialGithubInfo ?? undefined,
      instaAccount: initialInstagramInfo ?? undefined,
    },
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

  const onSubmit = (data: CreateMypageSocialInfo) => {
    updateProfile({
      userId: userId,
      profileData: {
        profileIntro: data.profileIntro,
        githubAccount: data.githubAccount,
        instaAccount: data.instaAccount,
      },
    })
    setIsEditing(false)
  }

  const onClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsEditing(!isEditing)
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col space-y-5"
        >
          <div className="hidden flex-row items-center justify-end gap-2 md:flex">
            <Button
              variant="outline"
              onClick={onClickEdit}
              className="text-destructive"
            >
              {isEditing ? '취소' : '수정'}
            </Button>
            <Button variant="default" type="submit">
              {isPending ? '저장 중' : '완료'}
            </Button>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:justify-between">
            <FormField
              control={form.control}
              name="profileIntro"
              render={({ field }) => (
                <FormItem className="md:flex md:flex-col md:items-center md:gap-2">
                  <div className="flex w-full flex-col gap-2 md:flex-row md:items-center">
                    <div className="flex flex-row justify-between">
                      <FormLabel className="text-lg font-bold text-primary md:text-xl">
                        한 줄 소개
                      </FormLabel>
                      <div className="flex flex-row items-center justify-end gap-2 md:hidden">
                        <Button
                          variant="outline"
                          onClick={onClickEdit}
                          className="text-destructive"
                          size="sm"
                        >
                          {isEditing ? '취소' : '수정'}
                        </Button>
                        <Button variant="default" type="submit" size="sm">
                          {isPending ? '저장 중' : '완료'}
                        </Button>
                      </div>
                    </div>

                    <FormControl>
                      {isEditing ? (
                        <Input
                          className="w-full md:w-80"
                          placeholder="한 줄 소개를 입력하세요."
                          {...field}
                          value={field.value || initialProfileIntro}
                          autoFocus
                          onFocus={(e) => {
                            e.target.value = ''
                            field.onChange('')
                          }}
                        />
                      ) : (
                        <div className="text-md flex h-10 items-center">
                          {field.value || initialProfileIntro}
                        </div>
                      )}
                    </FormControl>
                  </div>
                  <FormDescription className="w-full text-sm text-zinc-400 md:text-base">
                    멤버 페이지에서 보이는 정보입니다.
                  </FormDescription>
                  <div className="flex w-full">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="border-t border-border" />

          <div className="flex flex-col gap-5 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold text-primary md:text-xl">
                소셜 정보
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <FormField
                  control={form.control}
                  name="githubAccount"
                  render={({ field }) => (
                    <FormItem className="md:flex md:items-center md:gap-10">
                      <div className="flex h-10 items-center gap-2">
                        <GitHubLogoIcon className="h-5 w-5" />
                        <FormControl>
                          {isEditing ? (
                            <Input
                              className="w-full md:w-auto"
                              placeholder="GitHub 계정"
                              {...field}
                              value={field.value}
                              onFocus={(e) => {
                                e.target.value = ''
                                field.onChange('')
                              }}
                              autoFocus
                            />
                          ) : (
                            <span>{field.value || initialGithubInfo}</span>
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
                    <FormItem className="md:flex md:items-center md:gap-10">
                      <div className="flex h-10 items-center gap-2">
                        <InstagramLogoIcon className="h-5 w-5" />
                        <FormControl>
                          {isEditing ? (
                            <Input
                              className="w-full md:w-auto"
                              placeholder="Instagram 계정"
                              {...field}
                              value={field.value}
                              onFocus={(e) => {
                                e.target.value = ''
                                field.onChange('')
                              }}
                              autoFocus
                            />
                          ) : (
                            <span>{field.value || initialInstagramInfo}</span>
                          )}
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
      <div className="mb-5 mt-5 border-t border-border md:hidden" />
      <div className="mt-3 flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3 md:mt-2">
          <div className="text-lg font-bold text-primary md:text-xl">
            회원 탈퇴
          </div>
          <div className="text-sm text-zinc-400 md:text-base">
            탈퇴 시 작성한 게시글 및 댓글이 모두 삭제되며 복구되지 않습니다.
          </div>
        </div>
        <Button
          className="w-fit px-0 py-0 font-semibold text-destructive hover:text-destructive md:px-3 md:py-[2px]"
          variant="ghost"
          onClick={() => console.log('회원 탈퇴')}
        >
          탈퇴하기
        </Button>
      </div>
    </>
  )
}
