'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'

import { Form } from '@/components/ui'
import { CreateMypageSchema } from '@/schema/mypage'

const MyPage = () => {
  const form = useForm({
    resolver: zodResolver(CreateMypageSchema),
    defaultValues: {
      introduction: '',
      socialInfo: {
        github: '',
        instagram: '',
      },
      profileImage: new File([], ''),
    },
  })

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="mb-30 mt-1 w-full max-w-screen-xl px-12 pb-20 pt-10 md:mt-5 md:px-20">
          <section className="flex h-full w-full flex-col md:flex-row md:space-x-8">
            <div className="space-y-5">
              <div className="md:h-35 md:w-35 mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gray-300">
                이미지
              </div>
              <div className="flex w-full flex-col gap-3 text-center md:flex-col">
                <div className="mx-auto rounded-sm bg-yellow-400 px-3 py-1 md:px-5 md:py-2">
                  <div className="font-bold text-white">이미지 업로드</div>
                </div>
                <div className="mx-auto font-bold">이미지 제거</div>
              </div>
            </div>
            <div className="mb-5 mt-10 border-t border-border md:hidden" />
            <div className="mt-5 space-y-3">
              <div className="flex flex-row items-center gap-3 md:gap-5">
                <div className="text-2xl font-bold md:text-3xl">호반우</div>
                <div className="text-md rounded-full border border-primary px-3 py-1 text-primary md:text-xl">
                  해구르르
                </div>
              </div>
              <div className="text-xl">2099111222</div>
            </div>
          </section>
          <section className="mt-10 flex h-full w-full flex-col space-y-5">
            <div className="flex flex-col gap-5 md:flex-row md:justify-between">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
                <div className="text-lg font-bold text-primary md:text-xl">
                  한 줄 소개
                </div>
                <div className="text-md md:text-lg">아자아자 화이팅!</div>
              </div>
              <div className="inline-block cursor-pointer font-semibold text-destructive transition-[background-size] md:bg-gradient-to-r md:from-destructive md:to-destructive md:bg-[length:0%_2px] md:bg-left-bottom md:bg-no-repeat md:duration-300 md:ease-in-out md:hover:bg-[length:100%_2px]">
                수정
              </div>
            </div>
            <div className="text-sm text-zinc-400 md:text-base">
              멤버 페이지에서 보이는 정보입니다.
            </div>
            <div className="border-t border-border" />
            <div className="flex flex-col gap-5 md:flex-row md:justify-between">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
                <div className="text-lg font-bold text-primary md:text-xl">
                  소셜 정보
                </div>
                <div className="text-md flex gap-5 md:text-lg">
                  <div className="flex cursor-pointer gap-3">
                    <Image
                      width={20}
                      height={20}
                      alt="github-icon"
                      src="/asset/icon/Github.svg"
                    />
                    <span>hobanu</span>
                  </div>
                  <div className="flex cursor-pointer gap-2">
                    <Image
                      width={20}
                      height={20}
                      alt="github-icon"
                      src="/asset/icon/Instagram.svg"
                    />
                    <span>@hobanu</span>
                  </div>
                </div>
              </div>
              <span className="inline-block cursor-pointer font-semibold text-destructive transition-[background-size] md:bg-gradient-to-r md:from-destructive md:to-destructive md:bg-[length:0%_2px] md:bg-left-bottom md:bg-no-repeat md:duration-300 md:ease-in-out md:hover:bg-[length:100%_2px]">
                수정
              </span>
            </div>
            <div className="text-sm text-zinc-400 md:text-base">
              멤버 페이지에서 보이는 정보입니다.
            </div>
            <div className="border-t border-border" />
            <div className="flex flex-row items-center gap-5 md:gap-10">
              <div className="text-lg font-bold md:text-xl">회원 탈퇴</div>
              <div className="w-auto cursor-pointer justify-center rounded-sm">
                <div className="text-sm font-semibold text-red-500 md:text-base">
                  탈퇴하기
                </div>
              </div>
            </div>
            <div className="text-sm text-zinc-400 md:text-base">
              탈퇴 시 작성한 게시글 및 댓글이 모두 삭제되며 복구되지 않습니다.
            </div>
          </section>
        </div>
      </form>
    </Form>
  )
}

export default MyPage
