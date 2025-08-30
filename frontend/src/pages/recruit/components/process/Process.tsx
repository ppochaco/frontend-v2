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
    detail: '08.30.(토) ~ 09.05.(금)',
  },
  {
    title: '서류 발표',
    detail: '09.07.(일)',
  },
  {
    title: '오프라인 면접',
    detail: '09.08.(월) ~ 09.10.(수)',
  },
  {
    title: '최종 발표',
    detail: '09.12.(금)',
  },
  {
    title: '신규 부원 OT',
    detail: '09.16.(화)',
  },
]
