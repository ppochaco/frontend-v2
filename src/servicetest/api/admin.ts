import { Admin, CreateActivityRequestDto } from '@/models'

import { AUTHORIZATION_API } from '../config'

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
