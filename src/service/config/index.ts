import { initInstance } from '@/lib/axios-instance'
import { useAuthStore } from '@/store/auth'

import authErrorInterceptor from './authErrorInterceptor'

const BASE_URL = 'https://www.knu-haedal.com/api'

export const BACKEND_API = initInstance({
  baseURL: BASE_URL,
})

const AUTHORIZATION_API = initInstance({
  baseURL: BASE_URL,
  withCredentials: true,
})

AUTHORIZATION_API.interceptors.request.use(
  (request) => {
    const accessToken = useAuthStore.getState().accessToken

    if (accessToken) {
      request.headers.Authorization = accessToken
    }

    return request
  },
  (error) => error,
)

AUTHORIZATION_API.interceptors.response.use(
  (response) => response,
  authErrorInterceptor,
)

export { AUTHORIZATION_API }
