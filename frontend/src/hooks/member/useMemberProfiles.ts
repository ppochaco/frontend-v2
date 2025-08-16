import { useMemo } from 'react'

import { useProfileSuspensePaging } from '@/service/api'

export const useMemberProfiles = (joinSemester?: string) => {
  const {
    data: memberData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProfileSuspensePaging({
    roles: ['ROLE_WEB_MASTER', 'ROLE_TEAM_LEADER', 'ROLE_MEMBER'],
    joinSemester,
  })

  const memberProfiles = useMemo(() => {
    return memberData?.pages.flatMap((page) => page.profiles) || []
  }, [memberData])

  return {
    memberProfiles,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  }
}
