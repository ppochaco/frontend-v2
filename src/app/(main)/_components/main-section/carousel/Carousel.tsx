'use client'

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
import { EVENTS_WHOLE_YEAR as Events } from '@/constant/annualEvents'

export const Carousel = () => {
  return (
    <CarouselComponent
      opts={{ loop: true }}
      className="w-full max-w-52 xs:max-w-sm sm:max-w-xl"
    >
      <CarouselContent>
        {Events.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="cursor-pointer">
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
      <CarouselDots className="pt-4" />
      <CarouselPrevious />
      <CarouselNext />
    </CarouselComponent>
  )
}

const CarouselSkeleton = () => {
  return (
    <div className="flex justify-center pb-7">
      <Card className="w-full max-w-52 overflow-hidden xs:max-w-sm sm:max-w-xl">
        <CardContent className="flex aspect-video flex-col p-0">
          <div className="w-screen flex-1 animate-pulse bg-slate-50"></div>
          <div className="h-20 w-full bg-slate-100 p-4"></div>
        </CardContent>
      </Card>
    </div>
  )
}
