import { Content } from '@/components/common'
import { Button } from '@/components/ui'

export const RecruitSection = () => {
  return (
    <Content className="w-full bg-primary py-20 md:px-10">
      <div className="flex w-full flex-1 flex-col gap-10 text-lg text-white">
        <div className="recruit-area flex w-full flex-col items-center">
          <span
            className="bg-gradient-to-r from-yellow-400 via-slate-100 to-yellow-600 bg-clip-text text-4xl font-semibold leading-loose text-transparent"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            해달과 함께 성장해갈 동아리원을 모집합니다!
          </span>
          <span className="text-center text-slate-300">
            지금은 모집 기간이 아닙니다.
            <br />
            2025년 1학기 모집 때 다시 만나요🌝
          </span>
          <Button
            variant="secondary"
            className="mt-10 h-fit text-2xl text-yellow-400"
            onClick={() => (window.location.href = '/recruit')}
          >
            지원하기
          </Button>
        </div>
      </div>
    </Content>
  )
}
