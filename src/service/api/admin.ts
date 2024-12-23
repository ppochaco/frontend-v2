import { queryOptions } from '@tanstack/react-query'

import { AUTHORIZATION_API } from '../config'
import {
  Admin,
  CreateActivityRequestDto,
  UpdateRoleRequestDto,
} from '../models'

export const deleteSemester = async (semesterId: number) => {
  const adminApi = new Admin(AUTHORIZATION_API)
  const response = await adminApi.removeSemester(semesterId)

  return response.data
}

export const addSemester = async (semesterName: string) => {
  const adminApi = new Admin(AUTHORIZATION_API)
  const response = await adminApi.registerSemester({ semesterName })

  return response.data
}

export type DeleteActivityParams = {
  semesterId: number
  activityId: number
}

export const deleteActivity = async ({
  semesterId,
  activityId,
}: DeleteActivityParams) => {
  const adminApi = new Admin(AUTHORIZATION_API)
  const response = await adminApi.removeActivity(semesterId, activityId)

  return response.data
}

export type AddActivityRequest = {
  params: {
    semesterId: number
  }
  data: CreateActivityRequestDto
}

export const addActivity = async ({ params, data }: AddActivityRequest) => {
  const adminApi = new Admin(AUTHORIZATION_API)
  const response = await adminApi.registerActivity(params.semesterId, data)

  return response.data
}

export type ChangeRoleRequest = {
  userId: string
} & UpdateRoleRequestDto

export const changeRole = async ({ userId, role }: ChangeRoleRequest) => {
  const adminApi = new Admin(AUTHORIZATION_API)
  const response = await adminApi.changeUserRole(userId, { role })

  return response.data
}

type ApproveUserRequest = {
  userId: string
}

export const approveUser = async ({ userId }: ApproveUserRequest) => {
  const adminApi = new Admin(AUTHORIZATION_API)
  const response = await adminApi.approveUser(userId)

  return response.data
}

type RejectUserRequest = {
  userId: string
}

export const rejectUser = async ({ userId }: RejectUserRequest) => {
  const adminApi = new Admin(AUTHORIZATION_API)
  const response = await adminApi.rejectUser(userId)

  return response.data
}

type ExpelUserRequest = {
  userId: string
}

export const expelUser = async ({ userId }: ExpelUserRequest) => {
  const adminApi = new Admin(AUTHORIZATION_API)
  const response = await adminApi.expelUser(userId)

  return response.data
}

type GetAdminUsersRequest = {
  isActive: boolean
}

const getAdminUsers = async ({ isActive }: GetAdminUsersRequest) => {
  const adminApi = new Admin(AUTHORIZATION_API)
  const response = await adminApi.getUser1({ active: isActive })

  return response.data
}

export const AdminUserQuries = {
  all: () => ['admin', 'users'],
  filter: ({ isActive }: GetAdminUsersRequest) => [
    ...AdminUserQuries.all(),
    isActive,
  ],
  active: () =>
    queryOptions({
      queryKey: [...AdminUserQuries.filter({ isActive: true })],
      queryFn: () => getAdminUsers({ isActive: true }),
    }),
  inactive: () =>
    queryOptions({
      queryKey: [...AdminUserQuries.filter({ isActive: false })],
      queryFn: () => getAdminUsers({ isActive: false }),
    }),
}
