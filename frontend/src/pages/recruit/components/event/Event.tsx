import { DescriptionCard } from './description-card'

export const RecruitEvent = () => {
  return (
    <div className="flex flex-col items-center bg-black py-20">
      <div className="text-4xl font-bold text-white lg:text-5xl">주요 행사</div>
      <div className="grid w-full min-w-0 max-w-screen-lg grid-flow-row grid-cols-2 gap-4 px-5 py-10 sm:grid-cols-3 sm:px-10 md:px-20 lg:px-32">
        {EVENTS_DETAIL.map(({ id, title, description, backgroundColor }) => (
          <DescriptionCard
            key={id}
            title={title}
            description={description}
            backgroundColor={backgroundColor}
          />
        ))}
      </div>
    </div>
  )
}

const EVENTS_DETAIL = [
  {
    id: 0,
    title: '개강 총회\n& 종강 총회',
    description: '해달 구성원들의 만남, 네트워킹으로 시작되는 해달의 묘미',
    backgroundColor: '#F7CDF7',
  },
  {
    id: 1,
    title: '해크닉\n& MT',
    description:
      '준회원들의 시간인 해크닉과, 모두가 함께 즐기는 MT도 준비 완료',
    backgroundColor: '#FFD7C4',
  },
  {
    id: 2,
    title: '아이디어톤 &\n 해커톤',
    description:
      '우리의 멋있는 아이디어를 빌드업하고 제대로 구현해볼 수 있는 기회',
    backgroundColor: '#A1E6D4',
  },
  {
    id: 3,
    title: '슬기로운\n 해달생활',
    description:
      '해달에서 지켜주는 맛있는 시험기간입니다. 공부 인증형 간식 마차',
    backgroundColor: '#97CBFF',
  },
  {
    id: 4,
    title: '진로 특강 \n& 취업 특강',
    description: '학기마다 열리는 진로를 탐색 및 취업 시장 파악의 기회',
    backgroundColor: '#FFF3CD',
  },
  {
    id: 5,
    title: '성과 공유회',
    description: '한 학기 동안의 활동을 공유하는 회고의 시간',
    backgroundColor: '#CAC4FF',
  },
]
