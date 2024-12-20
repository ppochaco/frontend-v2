import { Login, LoginRequestDto } from '@/models'
import { BACKEND_API } from '@/servicetest/config'

const loginApi = new Login({ axiosInstance: BACKEND_API.instance })

export const login = async ({ userId, password }: LoginRequestDto) => {
  const response = await loginApi.signIn1({ userId, password })

  const accessToken = response.headers['authorization']

  return { token: accessToken }
}
