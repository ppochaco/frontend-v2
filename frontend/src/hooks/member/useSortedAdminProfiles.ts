import { useMemo } from 'react'

import { LEADER_NAME } from '@/constant'
import { useProfileSuspensePaging } from '@/service/api'

export const useSortedAdminProfiles = () => {
  const { data: adminData } = useProfileSuspensePaging({
    roles: ['ROLE_ADMIN'],
  })

  const sortedAdminProfiles = useMemo(() => {
    if (!adminData) return []

    const profiles = adminData.pages.flatMap((page) => page.profiles)

    const leaderProfile = profiles.find(
      (profile) => profile.userName === LEADER_NAME,
    )

    if (leaderProfile) {
      return [
        leaderProfile,
        ...profiles.filter((p) => p.userName !== LEADER_NAME),
      ]
    }

    return profiles
  }, [adminData])

  return { adminProfiles: sortedAdminProfiles }
}
