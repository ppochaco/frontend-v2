import { ComponentType } from 'react'

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types'
import Link from 'next/link'

type Channels = {
  id: number
  name: string
  href: string
  icon: ComponentType<IconProps>
}

export const ChannelIcons = () => {
  return (
    <div className="bottom-8 right-12 flex gap-4 sm:absolute">
      {channels.map((channel) => (
        <Link href={channel.href} key={channel.id}>
          <channel.icon className="h-6 w-6" />
        </Link>
      ))}
    </div>
  )
}

const channels: Channels[] = [
  {
    id: 0,
    name: 'HAEDAL Email',
    href: 'mailto:knu.haedal@gmail.com',
    icon: EnvelopeClosedIcon,
  },
  {
    id: 1,
    name: 'HAEDAL GitHub',
    href: 'https://github.com/KNU-HAEDAL',
    icon: GitHubLogoIcon,
  },
  {
    id: 2,
    name: 'HAEDAL Instagram',
    href: 'https://www.instagram.com/knu.haedal/',
    icon: InstagramLogoIcon,
  },
]
