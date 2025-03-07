import { Separator } from '@/components/ui'
import { ProfileResponseDto } from '@/service/model'
import { convertRoleName } from '@/utils'

interface ProfileInfoProps {
  profile: ProfileResponseDto
}

export const ProfileInfo = ({ profile }: ProfileInfoProps) => {
  return (
    <div className="flex flex-col gap-3 pt-10 md:pt-4">
      <Separator className="my-2 sm:my-3 md:hidden" />
      <div className="flex flex-row items-center gap-3">
        <div className="text-xl font-bold sm:text-2xl md:text-3xl">
          {profile.userName}
        </div>
        <div className="rounded-full border border-primary px-2 py-0.5 text-sm sm:px-3 sm:text-base md:text-lg">
          {convertRoleName(profile.role)}
        </div>
      </div>
      <div className="text-base sm:text-lg md:text-xl">
        {profile.studentNumber}
      </div>
      <Separator className="my-2 sm:my-3 md:hidden" />
    </div>
  )
}
