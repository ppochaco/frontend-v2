import { useSuspenseQuery } from '@tanstack/react-query'

import { UserQuries } from '@/service/api'
import { UserResponseDto } from '@/service/model'

import { MultipleMemberSelect } from './multiple-member-select'

type SelectMemberInputProps = {
  selectedMember: UserResponseDto[]
  setSelectedMember: (members: UserResponseDto[]) => void
}

export const SelectMemberInput = ({
  selectedMember,
  setSelectedMember,
}: SelectMemberInputProps) => {
  const { data: users } = useSuspenseQuery(UserQuries.list())

  if (!users) return <div>유저가 없습니다.</div>

  return (
    <MultipleMemberSelect
      options={users}
      onChange={(members) => setSelectedMember(members)}
      value={selectedMember}
    />
  )
}
