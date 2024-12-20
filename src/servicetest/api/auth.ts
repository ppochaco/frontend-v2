import { Login, LoginRequestDto, Reissue } from '@/models'

import { useAuthStore } from '@/store/auth'

export const login = async ({ userId, password }: LoginRequestDto) => {
  const loginApi = new Login({})
  const response = await loginApi.signIn1({ userId, password })

  const accessToken = response.headers['authorization']

  return accessToken
}

export const reissue = async () => {
  const accessToken = useAuthStore.getState().accessToken
  const setAccessToken = useAuthStore.getState().setAccessToken

  const reissueApi = new Reissue({})
  const response = await reissueApi.reissue({
    headers: { Authorization: accessToken },
  })

  const newAccessToken = response.headers['authorization']
  setAccessToken(newAccessToken)

  return newAccessToken
}
