import Marquee from 'react-fast-marquee'

import { RecruitMarqueeItem } from './item'

export const RecruitMarquee = () => {
  return (
    <Marquee className="gap-20 bg-black text-white md:gap-40">
      <div className="flex w-full gap-20 overflow-hidden md:gap-40">
        <RecruitMarqueeItem />
        <RecruitMarqueeItem />
        <RecruitMarqueeItem />
        <RecruitMarqueeItem />
      </div>
    </Marquee>
  )
}
