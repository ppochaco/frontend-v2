import { ProcessCard } from './card'

export const RecruitProcess = () => {
  return (
    <div className="flex flex-col items-center gap-10 bg-white pb-10 pt-20">
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-4xl font-bold lg:text-5xl"
      >
        모집 일정
      </div>
      <div className="flex w-screen justify-center px-5 sm:px-10">
        <div className="flex w-fit gap-4 overflow-y-hidden overflow-x-scroll pb-6">
          {RECRUIT_PROCESS.map(({ title, detail }, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 50}
              key={index}
            >
              <ProcessCard title={title} detail={detail} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const RECRUIT_PROCESS = [
  {
    title: '서류접수',
    detail: '02.26.(화) ~ 03.03.(월)',
  },
  {
    title: '서류 발표',
    detail: '03.05.(수)',
  },
  {
    title: '오프라인 면접',
    detail: '03.06.(목) ~ 03.9.(일)',
  },
  {
    title: '최종 발표',
    detail: '03.11.(화) ~ 03.12.(수)',
  },
]
