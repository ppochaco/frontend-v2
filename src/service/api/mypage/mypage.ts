import { queryOptions } from '@tanstack/react-query'

import { AUTHORIZATION_API } from '@/service/config'
import {
  GetUserRequest,
  ProfileRequestDto,
  RequestParams,
  UpdateProfileImagePayload,
  Users,
} from '@/service/models'

// type UserProfile = {
//   userId: UserInfo
//   data: 'data'
//   params: 'params'
// }
const userClient = new Users(AUTHORIZATION_API)

const getUserInfo = async ({ userId }: GetUserRequest) => {
  const response = await userClient.getUser(userId)
  return response.data
}

const getUserProfile = async ({ userId }: GetUserRequest) => {
  const response = await userClient.getProfile(userId)
  return response.data
}

// const putUpdateProfileImage = async ({ userId, data, params }: UserProfile) => {
//   const response = await userClient.updateProfileImage(userId, data, params)
//   return response.data
// }

export const userQueries = {
  all: () => ['users'],
  userInfos: ({ userId }: GetUserRequest) => [
    ...userQueries.all(),
    'info',
    userId,
  ],
  userInfo: ({ userId }: GetUserRequest) =>
    queryOptions({
      queryKey: [...userQueries.userInfos({ userId })],
      queryFn: async () => getUserInfo({ userId }),
    }),

  profiles: ({ userId }: GetUserRequest) => [
    ...userQueries.all(),
    'profile',
    userId,
  ],
  profile: ({ userId }: GetUserRequest) =>
    queryOptions({
      queryKey: [...userQueries.profiles({ userId })],
      queryFn: async () => getUserProfile({ userId }),
    }),

  // updateProfileImage: ({
  //   userId,
  //   data,
  //   params,
  // }: {
  //   userId: string
  //   data: unknown
  //   params: unknown
  // }) =>
  //   queryOptions({
  //     queryFn: async () => putUpdateProfileImage({ userId, data, params }),
  //   }),
}
type UpdateProfileRequest = {
  userId: string
  profileData: ProfileRequestDto
  params: RequestParams
}

export const putUpdateProfileApi = async ({
  userId,
  profileData,
  params,
}: UpdateProfileRequest) => {
  const response = await userClient.updateProfile(userId, profileData, params)
  return response.data
}

export const putUpdateProfileImageApi = async ({
  userId,
  file,
  params,
}: {
  userId: string
  file: File
  params?: RequestParams
}) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await userClient.updateProfileImage(
    userId,
    formData as unknown as UpdateProfileImagePayload,
    params || {},
  )
  return response.data
}
