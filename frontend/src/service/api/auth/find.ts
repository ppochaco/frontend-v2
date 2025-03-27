import { BACKEND_API } from '@/service/config'
import {
  GetUserIdRequest,
  ResetPasswordRequest,
  Users,
  VerifyResetPasswordCodeRequest,
} from '@/service/model'

export const findUserIdApi = async ({
  studentNumber,
  name,
}: GetUserIdRequest) => {
  const findClient = new Users(BACKEND_API)
  const response = await findClient.getUserId({ studentNumber, name })

  return response.data
}

export const resetPasswordApi = async ({
  userId,
  studentNumber,
}: ResetPasswordRequest) => {
  const resetPasswordClient = new Users(BACKEND_API)
  const response = await resetPasswordClient.resetPassword({
    userId,
    studentNumber,
  })

  return response.data
}

export const verifyResetPasswordCodeApi = async ({
  userId,
  code,
}: VerifyResetPasswordCodeRequest) => {
  const verifyResetPasswordCodeClient = new Users(BACKEND_API)
  const response = await verifyResetPasswordCodeClient.verifyResetPasswordCode({
    userId,
    code,
  })

  return response.data
}
