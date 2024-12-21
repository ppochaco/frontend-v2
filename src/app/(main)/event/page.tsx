'use client'

import { useState } from 'react'

import { EventBoardHero, EventGallery, EventHero } from './_components'

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

const EventViewSelector = ({
  view,
  setView,
}: {
  view: View
  setView: (view: View) => void
}) => {
  return (
    <div className="flex w-full justify-end gap-3 py-3">
      <span
        className={`pointer-events-auto cursor-pointer text-sm ${
          view === '갤러리' ? 'text-primary' : 'text-gray-400'
        }`}
        onClick={() => setView('갤러리')}
      >
        갤러리
      </span>
      <span
        className={`pointer-events-auto cursor-pointer text-sm ${
          view === '리스트' ? 'text-primary' : 'text-gray-400'
        }`}
        onClick={() => setView('리스트')}
      >
        리스트
      </span>
    </div>
  )
}
