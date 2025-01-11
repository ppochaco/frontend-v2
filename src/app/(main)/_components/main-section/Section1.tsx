import Image from 'next/image'

import { Content } from '@/components/common'

export const Section1 = () => {
  return (
    <>
      <Image
        src="/haedal-background.png"
        width={0}
        height={0}
        className="h-auto w-full"
        alt="Haedal Background"
      />
      <Content
        style={{ backgroundColor: '#010238' }}
        className="flex flex-col items-center px-10 py-40 text-white"
      >
        <div className="flex w-full flex-1 flex-col gap-10">
          <div className="flex w-full flex-col gap-2">
            <div className="text-4xl">경북대학교 IT대학 학술동아리 </div>
            <div className="text-5xl">HAEDAL</div>
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <div>
              <strong>해달</strong>은{' '}
              <strong className="bg-yellow-400 px-1 text-primary">
                SW 가치 확산
              </strong>
              이라는 목표를 가지고 다양한 코딩 행사를 진행하는 동아리입니다.
            </div>
            <div>
              비전공자도 상관없이 코딩에 관심이 있는 사람이라면{' '}
              <strong className="bg-yellow-400 px-1 text-primary">
                누구나
              </strong>{' '}
              함께하실 수 있습니다.
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}
