'use client'

import { useState } from 'react'

import {
  EventBoardHero,
  EventGallery,
  EventHero,
  EventViewSelector,
} from './_components'

// import Link from 'next/link'
// import { Button } from '@/components/ui'

type View = '갤러리' | '리스트'

const EventPage = () => {
  const [view, setView] = useState<View>('갤러리')

  return (
    <div className="flex h-full w-full flex-1 flex-col items-center pb-20">
      <EventHero />
      <div className="flex w-full flex-col px-12">
        <EventBoardHero />
        <EventViewSelector view={view} setView={setView} />
        {view === '갤러리' && <EventGallery />}
        {view === '리스트' && <></>}
        {/* <Link href="/event/board"> */}
      </div>
    </div>
  )
}

export default EventPage
