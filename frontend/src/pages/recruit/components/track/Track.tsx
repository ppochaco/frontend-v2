import { DescriptionCard } from '@/components/feature'
import { Card } from '@/components/ui'

import { TrackDescriptionCard } from './description-card'

export const RecruitTrack = () => {
  return (
    <div className="flex flex-col items-center bg-[#E9EDFF] pb-20">
      <div className="text-4xl font-bold lg:text-5xl">트랙 & 소모임</div>
      <div className="flex flex-col gap-4 pt-10">
        <DescriptionCard
          title="트랙이란?"
          description="해달 정회원이 참여 가능한 코스로, 학술 분야의 내용을 탐구하기 위해 만들어진 모임입니다."
        />
        <DescriptionCard
          title="소모임이란?"
          description="해달 회원이면 모두 참여할 수 있는 모임으로, 학술 이외의 주제를 공유하며 네트워킹할 수 있습니다."
        />
        <div className="px-6 py-10">
          <Card className="w-full max-w-[1024px] border-none bg-[#BCB5C9] shadow-none">
            <div className="pb-4 pt-10 text-center text-2xl font-semibold text-white sm:text-3xl md:pb-6">
              현재 개설된 트랙 LIST
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 p-4 md:grid-cols-2">
              {TRACK_LIST.map(({ title, description, tags }) => (
                <TrackDescriptionCard
                  title={title}
                  description={description}
                  tags={tags}
                  key={title}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

type TrackList = {
  title: string
  tags: string[]
  description: string
}

const TRACK_LIST: TrackList[] = [
  {
    title: 'DATTO',
    tags: ['#AI', '#데이터분석'],
    description:
      '개인별 학습 목표 설정과 달성을 위한 지속적인 자율 공부를 독려하며, 그룹 활동을 통해 인사이트를 공유하고 성장할 수 있습니다.',
  },
  {
    title: '코드니노',
    tags: ['#임베디드'],
    description:
      '아두이노 기초 개념을 공부하고 사용 도구 학습과 실습을 지원합니다. 본인이 직접 구상한 아두이노 활용 프로젝트를 진행할 수 있습니다.',
  },
  {
    title: '파이코드',
    tags: ['#앱'],
    description:
      '파이썬을 활용해 실제 앱을 제작해보고 싶은 분들을 위한 실전 개발 과정 입니다. 실제로 동작하는 앱을 제작하면서 배운 이론을 바로 적용해볼 수 있습니다.',
  },
  {
    title: 'CORE',
    tags: ['#임베디드'],
    description:
      '라즈베리파이 피코를 활용하여 다양한 프로젝트를 수행하는 것을 목표로 하며, 프로젝트 경험과 함께 성장할 수 있는 기회를 잡을 수 있습니다.',
  },
  {
    title: '뉴럴 아카데미',
    tags: ['#AI'],
    description:
      '실용적인 AI모델을 제작해보고 싶은 사람들을 위한 개발 과정입니다. 신경망 모델을 만들 때 사용되는 함수와 용어 등을 실습 위주로 학습할 수 있습니다.',
  },
  {
    title: 'TEEMO',
    tags: ['#유니티', '#게임'],
    description:
      '해달의 유니티 게임 개발 트랙입니다. 주 1회 유니티 개발 스터디를 가지며, 소규모 게임잼 연습 프로젝트와 개인 프로젝트를 제작할 수 있습니다.',
  },
]
