'use client'

import { RecruitSection, Section1, Section2 } from './_components'

export default function Main() {
  return (
    <main className="flex h-full w-full flex-col">
      <Section1 />
      <Section2 />
      <RecruitSection />
    </main>
  )
}
