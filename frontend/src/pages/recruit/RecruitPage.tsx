import { Footer, Header } from '@/components/feature'

import { RecruitHero, RecruitMarquee } from './components'

export default function RecruitPage() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="relative w-full flex-1 pt-16">
        <RecruitHero />
        <RecruitMarquee />
      </div>
      <Footer />
    </main>
  )
}
