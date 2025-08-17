import { useQuery } from '@tanstack/react-query'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { profileQueries } from '@/service/api'
import { BASE_URL } from '@/service/config'

interface ProfileAvatarProps {
  userId: string
}

export const ProfileAvatar = ({ userId }: ProfileAvatarProps) => {
  const {
    data: profile,
    status,
    error,
  } = useQuery(profileQueries.profile({ userId }))

  if (status === 'pending' || error)
    return (
      <Avatar className="h-12 w-12">
        <AvatarFallback />
      </Avatar>
    )

  return (
    <Avatar className="h-12 w-12">
      <AvatarImage
        src={`${BASE_URL}${profile.profileImageUrl}`}
        className="rounded-full border-[1px] border-zinc-50 bg-white"
      />
      <AvatarFallback />
    </Avatar>
  )
}
