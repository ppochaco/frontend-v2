'use client'

import { Suspense, useState } from 'react'

import {
  CreateEventPostButton,
  EventBoardHero,
  EventGallery,
  EventHero,
  EventInstagram,
  EventPostList,
  EventViewSelector,
} from './_components'

type View = '갤러리' | '리스트'

const EventPage = () => {
  const [view, setView] = useState<View>('갤러리')

  return (
    <div className="flex h-full w-full flex-1 flex-col items-center">
      <EventHero />
      <div className="flex w-full flex-col px-12 pb-20">
        <EventBoardHero />
        <EventViewSelector view={view} setView={setView} />
        {view === '갤러리' && <EventGallery />}
        {view === '리스트' && (
          <Suspense>
            <EventPostList />
          </Suspense>
        )}
        <div className="flex w-full justify-end">
          <CreateEventPostButton />
        </div>
      </div>
      <EventInstagram />
    </div>
  )
}

export default EventPage
