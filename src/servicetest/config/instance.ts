import { HttpClient } from '@/lib/http-client'
import { useAuthStore } from '@/store/auth'

import authErrorInterceptor from './auth-error-interceptor'

export const BACKEND_API = new HttpClient({
  baseURL: 'https://www.knu-haedal.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export const AUTHORIZATION_API = new HttpClient({
  baseURL: 'https://www.knu-haedal.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

AUTHORIZATION_API.instance.interceptors.request.use(
  (request) => {
    const accessToken = useAuthStore.getState().accessToken

    if (accessToken) {
      request.headers.Authorization = accessToken
    }

    return request
  },
  (error) => error,
)

AUTHORIZATION_API.instance.interceptors.response.use(
  (response) => response,
  authErrorInterceptor,
)
