import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import { Content } from '@/components/common'
import { Button } from '@/components/ui'

export const RecruitSection = () => {
  return (
    <Content className="w-full bg-gradient-to-b from-[#010238] via-[#010238]/50 to-yellow-100 py-28 md:px-10">
      <div className="flex w-full flex-1 flex-col gap-10 text-lg text-white">
        <div className="flex flex-col items-center px-12">
          <p
            className="bg-gradient-to-r from-yellow-400 via-slate-100 to-yellow-600 bg-clip-text text-center text-2xl font-semibold leading-snug text-transparent md:text-3xl lg:text-4xl"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            해달과 함께 성장해갈{' '}
            <span className="hidden md:inline">동아리원을 모집합니다!</span>
            <span className="inline md:hidden">
              <br /> 동아리원을 모집합니다!
            </span>
          </p>
          <Image
            src="/haedal-laptop.png"
            width={0}
            height={0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-auto sm:w-1/2 lg:w-1/3"
            alt="Haedal laptop"
          />
          <p className="text-center text-slate-600">
            지금은 모집 기간이 아닙니다.
            <br />
            2025년 1학기 모집 때 다시 만나요🌝
          </p>
          <Button
            variant="secondary"
            className="mt-6 h-fit gap-2 text-lg font-semibold text-yellow-400 md:text-xl lg:text-2xl"
            onClick={() => (window.location.href = '/recruit')}
          >
            <span>더 알아보기</span>
            <ArrowRightIcon className="h-auto w-6" />
          </Button>
        </div>
      </div>
    </Content>
  )
}
