import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

type LinkIconData = {
  id: number
  href: string
  icon: JSX.Element
  alt: string
}

export const LinkIcon = () => {
  return (
    <div className="absolute bottom-8 right-12 flex gap-4">
      {linkIconData.map((linkIcon) => (
        <Link href={linkIcon.href} key={linkIcon.id}>
          {linkIcon.icon}
        </Link>
      ))}
    </div>
  )
}

const linkIconData: LinkIconData[] = [
  {
    id: 0,
    href: 'mailto:knu.haedal@gmail.com',
    icon: <EnvelopeClosedIcon className="h-6 w-6" />,
    alt: 'HAEDAL Email Link',
  },
  {
    id: 1,
    href: 'https://github.com/KNU-HAEDAL',
    icon: <GitHubLogoIcon className="h-6 w-6" />,
    alt: 'HAEDAL Github Link',
  },
  {
    id: 2,
    href: 'https://www.instagram.com/knu.haedal/',
    icon: <InstagramLogoIcon className="h-6 w-6" />,
    alt: 'HAEDAL Instagram Link',
  },
]
