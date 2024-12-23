import { Private, Users } from '@/models'
import { queryOptions } from '@tanstack/react-query'

import { AUTHORIZATION_API } from '../config'

const getUsers = async () => {
  const userApi = new Private(AUTHORIZATION_API)
  const response = await userApi.getUser()

  return response.data
}

const getUsersMe = async () => {
  const userApi = new Users(AUTHORIZATION_API)
  const response = await userApi.getMe()

  return response.data
}

export const UserQuries = {
  all: () => ['users'],
  list: () =>
    queryOptions({
      queryKey: [...UserQuries.all(), 'list'],
      queryFn: async () => getUsers(),
    }),
  me: () =>
    queryOptions({
      queryKey: [...UserQuries.all(), 'me'],
      queryFn: async () => getUsersMe(),
    }),
}
