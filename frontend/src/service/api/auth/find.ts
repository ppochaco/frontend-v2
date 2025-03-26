import { BACKEND_API } from '@/service/config'
import { GetUserIdRequest, Users } from '@/service/model'

export const findApi = async ({ studentNumber, name }: GetUserIdRequest) => {
  const findClient = new Users(BACKEND_API)
  const response = await findClient.getUserId({ studentNumber, name })

  return response.data
}
