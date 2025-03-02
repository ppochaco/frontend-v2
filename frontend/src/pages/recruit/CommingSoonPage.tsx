import { Footer, Header } from '@/components/feature'

import {
  RecruitBootCamp,
  RecruitClosedHero,
  RecruitEvent,
  RecruitTrack,
} from './components'

export default function RecruitCommingSoonPage() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="w-full flex-1 pt-16">
        <RecruitClosedHero />
        <RecruitEvent />
        <RecruitBootCamp />
        <div className="h-40 bg-gradient-to-t from-[#E9EDFF] to-[#FFF]" />
        <RecruitTrack />
        <div className="h-40 bg-gradient-to-b from-[#E9EDFF] to-[#FFF]" />
      </div>
      <Footer />
    </main>
  )
}
