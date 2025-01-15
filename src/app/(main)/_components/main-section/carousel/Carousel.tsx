'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui'
import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { EVENTS_WHOLE_YEAR as Events } from '../eventsData'

export const Carousel = () => {
  return (
    <CarouselComponent
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 2000 })]}
      className="flex w-full max-w-52 flex-col items-center xs:max-w-sm sm:max-w-xl"
    >
      <div className="flex flex-row items-center gap-3">
        <CarouselPrevious />
        <CarouselContent>
          {Events.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex aspect-video flex-col p-0">
                    <div className="flex w-full flex-1 items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        alt={item.title}
                        src={item.imageUrl}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 break-keep rounded-b-lg bg-gradient-to-t from-slate-100 via-slate-100/90 to-transparent px-6 pb-4 pt-8">
                      <strong className="absolute right-6 top-8 bg-yellow-400 px-0.5 text-primary">
                        {item.month}
                      </strong>
                      <p className="text-xl font-semibold leading-normal">
                        {item.title}
                      </p>
                      <p className="text-md text-slate-600 lg:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </div>
      <CarouselDots className="pt-4" />
    </CarouselComponent>
  )
}
