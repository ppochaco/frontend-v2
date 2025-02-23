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
        <RecruitEvent />
        <RecruitBootCamp />
        <div className="h-40 bg-gradient-to-t from-[#E9EDFF] to-[#FFF]" />
        <RecruitTrack />
        <RecruitLinkButton />
      </div>
      <Footer />
    </main>
  )
}
