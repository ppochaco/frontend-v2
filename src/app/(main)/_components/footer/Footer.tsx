import Image from 'next/image'

import { FooterDetail } from './FooterDetail'
import { LinkIcon } from './LinkIcon'

export const Footer = () => {
  return (
    <div className="relative flex w-full flex-col gap-8 px-12 py-8">
      <div className="flex w-full flex-col items-start gap-2">
        <Image
          width={0}
          height={0}
          src="/logo-dark.svg"
          alt="logo-dark"
          sizes="100vw"
          priority
          className="w-32"
        />
        <p className="text-sm font-semibold">
          경북대학교 IT대학 학술동아리 해달
        </p>
      </div>
      <FooterDetail />
      <p className="text-xs">© 2024 해달. All rights reserved.</p>
      <LinkIcon />
    </div>
  )
}

// const [itemCount, setItemCount] = useState(12)

// useEffect(() => {
//   const updateItemCount = () => {
//     if (window.innerWidth < 640) {
//       setItemCount(9)
//     } else {
//       setItemCount(12)
//     }
//   }

//   updateItemCount()
//   window.addEventListener('resize', updateItemCount)

//   return () => {
//     window.removeEventListener('resize', updateItemCount)
//   }
// }, [])
