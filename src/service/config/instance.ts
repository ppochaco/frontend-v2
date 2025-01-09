import { initInstance } from '@/lib/axios-instance'
import { useAuthStore } from '@/store/auth'

import authErrorInterceptor from './auth-error-interceptor'

const BACKEND_API = initInstance({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const AUTHORIZATION_API = initInstance({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
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

export { BACKEND_API, AUTHORIZATION_API }
