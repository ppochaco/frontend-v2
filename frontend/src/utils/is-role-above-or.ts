import { Role } from '@/types'

type RoleIndex = {
  index: number
  role: Role
}

function getRolesAboveOrEqual(role: Role): Role[] {
  const roleIndex = roles.find((r) => r.role === role)?.index

  if (roleIndex)
    return roles.filter((r) => r.index <= roleIndex).map((r) => r.role)
  return []
}

export default function isRoleAboveOrEqual(target: Role, user?: Role): boolean {
  if (!user) return false
  return getRolesAboveOrEqual(target).includes(user)
}

const roles: RoleIndex[] = [
  {
    index: 0,
    role: 'ROLE_WEB_MASTER',
  },
  {
    index: 1,
    role: 'ROLE_ADMIN',
  },
  {
    index: 2,
    role: 'ROLE_TEAM_LEADER',
  },
  {
    index: 3,
    role: 'ROLE_MEMBER',
  },
] as const
