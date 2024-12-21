'use client'

import { useState } from 'react'

import { EventCarousel, EventHero } from './_components'
import { EventBoardHero } from './board/_components'

// import Link from 'next/link'
// import { Button } from '@/components/ui'

const EventPage = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center pb-20">
      <EventHero />
      <div className="flex w-full flex-col px-12">
        <EventBoardHero />
        <EventViewSelector />
        <EventCarousel />
        {/*
        <div className="flex justify-end">
          <Link href="/event/board">
            <Button variant="link" className="h-fit p-0 text-primary/60">
              더 보기
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default EventPage

const EventViewSelector = () => {
  const [view, setView] = useState<'갤러리' | '리스트'>('갤러리')

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
