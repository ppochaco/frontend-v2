import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'

import { Button, Form, Input } from '@/components/ui'
import {
  CreateMypageSocialInfo,
  CreateMypageSocialInfoSchema,
} from '@/schema/mypage'

interface UserSocialInfoSectionProps {
  githubInfo: string
  instagramInfo: string
  profileIntro: string
}

export const UserSocialInfoSection = ({
  githubInfo: initialGithubInfo,
  instagramInfo: initialInstagramInfo,
  profileIntro: initialProfileIntro,
}: UserSocialInfoSectionProps) => {
  const [isEditingIntro, setIsEditingIntro] = useState(false)
  const [isEditingSocial, setIsEditingSocial] = useState(false)

  const form = useForm<CreateMypageSocialInfo>({
    resolver: zodResolver(CreateMypageSocialInfoSchema),
    defaultValues: {
      introduction: initialProfileIntro,
      githubInfo: initialGithubInfo,
      instagramInfo: initialInstagramInfo,
    },
  })

  const { register, handleSubmit, watch } = form

  const onSubmit = (data: CreateMypageSocialInfo) => {
    console.log('제출된 데이터:', data)
    setIsEditingIntro(false)
    setIsEditingSocial(false)
  }

  const clickToEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isEditingIntro === false && isEditingSocial === false) {
      setIsEditingIntro(true)
      setIsEditingSocial(true)
    } else {
      setIsEditingIntro(false)
      setIsEditingSocial(false)
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col space-y-5"
        >
          <div className="hidden flex-row items-center justify-end gap-2 md:flex">
            <Button
              variant="outline"
              onClick={clickToEdit}
              className="text-destructive"
            >
              수정
            </Button>
            <Button variant="default" type="submit">
              완료
            </Button>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
              <div className="flex justify-between">
                <div className="text-lg font-bold text-primary md:text-xl">
                  한 줄 소개
                </div>
                <div className="flex gap-3 md:hidden">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clickToEdit}
                    className="text-destructive"
                  >
                    수정
                  </Button>
                  <Button variant="default" type="submit" size="sm">
                    완료
                  </Button>
                </div>
              </div>
              <div className="md:y-0 y-5 flex h-10 gap-5">
                {isEditingIntro ? (
                  <Input
                    className="w-full md:w-auto"
                    {...register('introduction')}
                    autoFocus
                  />
                ) : (
                  <div className="text-md flex h-10 items-center">
                    {watch('introduction')}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-sm text-zinc-400 md:text-base">
            멤버 페이지에서 보이는 정보입니다.
          </div>
          <div className="border-t border-border" />

          <div className="flex flex-col gap-5 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold text-primary md:text-xl">
                소셜 정보
              </div>
              <div className="flex flex-col md:flex-row md:gap-5 md:py-2">
                <div className="flex h-10 items-center gap-2">
                  <GitHubLogoIcon className="h-5 w-5" />
                  {isEditingSocial ? (
                    <Input
                      className="w-full md:w-auto"
                      {...register('githubInfo')}
                    />
                  ) : (
                    <span>{watch('githubInfo')}</span>
                  )}
                </div>
                <div className="flex h-10 items-center gap-2">
                  <InstagramLogoIcon className="h-5 w-5" />
                  {isEditingSocial ? (
                    <Input
                      className="w-full md:w-auto"
                      {...register('instagramInfo')}
                    />
                  ) : (
                    <span>{watch('instagramInfo')}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
      <div className="mb-5 mt-5 border-t border-border md:hidden" />
      <div className="mt-3 flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
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
