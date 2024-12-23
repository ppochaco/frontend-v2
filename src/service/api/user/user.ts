import { queryOptions } from '@tanstack/react-query'

import { AUTHORIZATION_API } from '@/service/config'
import { Private, Users } from '@/service/models'

const getUsers = async () => {
  const userClient = new Private(AUTHORIZATION_API)
  const response = await userClient.getUser()

  return response.data
}

const getUsersMe = async () => {
  const userClient = new Users(AUTHORIZATION_API)
  const response = await userClient.getMe()

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
