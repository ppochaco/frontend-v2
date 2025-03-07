import { ProfileResponseDto } from '@/service/model'
import { convertRoleName } from '@/utils'

interface ProfileInfoProps {
  profile: ProfileResponseDto
}

export const ProfileInfo = ({ profile }: ProfileInfoProps) => {
  return (
    <div className="mb-10 flex flex-col gap-3">
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
    </div>
  )
}
