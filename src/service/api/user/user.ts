import { queryOptions } from '@tanstack/react-query'

import { AUTHORIZATION_API } from '@/service/config'
import { Users } from '@/service/models'

const getUsers = async () => {
  const userClient = new Users(AUTHORIZATION_API)
  const response = await userClient.getUsers()

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
      queryFn: async () => {},
    }),
}
