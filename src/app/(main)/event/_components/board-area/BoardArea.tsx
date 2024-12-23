import { Suspense, useState } from 'react'

import {
  CreateEventPostButton,
  EventBoardHero,
  EventGallery,
  EventPostList,
  EventViewSelector,
} from '../../_components'

type View = '갤러리' | '리스트'

export const BoardArea = () => {
  const [view, setView] = useState<View>('갤러리')

  return (
    <div className="flex w-full flex-col px-12 pb-20 pt-4">
      <EventBoardHero />
      <EventViewSelector view={view} setView={setView} />
      {view === '갤러리' && <EventGallery />}
      {view === '리스트' && (
        <Suspense>
          <EventPostList />
        </Suspense>
      )}
      <div className="mt-8 flex w-full justify-end">
        <CreateEventPostButton />
      </div>
    </div>
  )
}
