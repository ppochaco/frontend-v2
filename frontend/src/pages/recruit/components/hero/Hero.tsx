import { haedalLaptop } from '@/assets/images'

export const RecruitHero = () => {
  return (
    <div className="flex justify-center bg-gradient-to-b from-[#0F172B] to-[#5e89f5] text-white">
      <div className="relative flex w-full max-w-screen-lg flex-col gap-6 px-5 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-2 font-extrabold">
          <div className="text-xl text-white/70 sm:text-2xl md:text-3xl 2xl:text-4xl">
            해달은 지금,
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl">
            준회원 모집 중
          </div>
        </div>
        <div className="absolute -bottom-10 right-0 z-30 sm:-bottom-12 md:-bottom-16 lg:-bottom-20">
          <img
            src={haedalLaptop}
            alt="haedal logo"
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-60 lg:w-60"
          />
        </div>
      </div>
    </div>
  )
}
