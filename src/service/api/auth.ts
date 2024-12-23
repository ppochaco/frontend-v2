import { useAuthStore } from '@/store/auth'

import { BACKEND_API } from '../config'
import {
  Join,
  JoinRequestDto,
  Login,
  LoginRequestDto,
  Reissue,
} from '../models'

export const login = async ({ userId, password }: LoginRequestDto) => {
  const loginApi = new Login(BACKEND_API)
  const response = await loginApi.signIn1({ userId, password })

  const accessToken = response.headers['authorization']

  return accessToken
}

export const reissue = async () => {
  const accessToken = useAuthStore.getState().accessToken
  const setAccessToken = useAuthStore.getState().setAccessToken

  const reissueApi = new Reissue(BACKEND_API)
  const response = await reissueApi.reissue({
    headers: { Authorization: accessToken },
  })

  const newAccessToken = response.headers['authorization']
  setAccessToken(newAccessToken)

  return newAccessToken
}

export const signup = async ({
  userId,
  password,
  email,
  studentNumber,
  userName,
}: JoinRequestDto) => {
  const signupApi = new Join(BACKEND_API)
  const response = await signupApi.resisterUser({
    userId,
    password,
    email,
    studentNumber: Number(studentNumber),
    userName,
  })

  return { status: response.status, message: response.data.message }
}

export const checkUserId = async (userId: string) => {
  const signupApi = new Join(BACKEND_API)
  const response = await signupApi.checkUserIdDuplicate({ userId })

  return response.data
}

export const checkStudentNumber = async (studentNumber: number) => {
  const signupApi = new Join(BACKEND_API)
  const response = await signupApi.checkStudentNumberDuplicate({
    studentNumber,
  })

  return response.data
}
