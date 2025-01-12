import { Content } from '@/components/common'

import { Carousel } from './carousel'

export const Section2 = () => {
  return (
    <Content className="w-full bg-white py-20 md:px-10">
      <div className="flex w-full flex-1 flex-col items-center gap-10 text-lg text-primary">
        <Carousel />
      </div>
    </Content>
  )
}
