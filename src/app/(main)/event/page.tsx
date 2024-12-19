// import Link from 'next/link'
// import { Button } from '@/components/ui'
// import { EventCarousel, EventHero } from './_components'
import { EventHero } from './_components'
import { EventBoardHero } from './board/_components'

const EventPage = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center pb-20">
      <EventHero />
      <EventBoardHero />
      {/* <div className="flex w-full flex-col px-20">
        <EventCarousel />
        <div className="flex justify-end">
          <Link href="/event/board">
            <Button variant="link" className="h-fit p-0 text-primary/60">
              더 보기
            </Button>
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default EventPage
