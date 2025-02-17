import { ProfileResponseDto } from '@/service/model'
import { convertRoleName } from '@/utils'

interface ProfileInfoProps {
  profile: ProfileResponseDto
}

export const ProfileInfo = ({ profile }: ProfileInfoProps) => {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="flex flex-row items-center gap-3">
        <div className="text-2xl font-bold md:text-3xl">{profile.userName}</div>
        <div className="text-md rounded-full border border-primary px-3 py-0.5 md:text-lg">
          {convertRoleName(profile.role)}
        </div>
      </div>
      <div className="text-lg md:text-xl">{profile.studentNumber}</div>
    </div>
  )
}
