import { Footer, Header } from '@/components/feature'

import {
  CountdownTimer,
  RecruitBootCamp,
  RecruitEvent,
  RecruitHero,
  RecruitLinkButton,
  RecruitMarquee,
  RecruitTrack,
} from './components'

export default function RecruitPage() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="relative w-full flex-1 pt-16">
        <RecruitHero />
        <RecruitMarquee />
        <CountdownTimer />
        <div className="flex justify-center bg-black">
          <RecruitLinkButton className="bg-white text-black hover:bg-slate-200" />
        </div>
        <RecruitEvent />
        <RecruitBootCamp />
        <div className="h-40 bg-gradient-to-t from-[#E9EDFF] to-[#FFF]" />
        <RecruitTrack />
        <div className="flex justify-center bg-[#E9EDFF]">
          <RecruitLinkButton className="bg-[#D9D9D9] text-black hover:bg-zinc-300" />
        </div>
        <div className="bg-gradient-to-t from-[#F1F5F9] to-[#E9EDFF] py-20" />
      </div>
      <Footer />
    </main>
  )
}
