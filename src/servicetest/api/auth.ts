import { Login, LoginRequestDto } from '@/models'

export const login = async ({ userId, password }: LoginRequestDto) => {
  const loginApi = new Login({})
  const response = await loginApi.signIn1({ userId, password })

  const accessToken = response.headers['authorization']

  return accessToken
}
