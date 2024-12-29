'use client'

import { z } from 'zod'

export const CreateMypageSocialInfoSchema = z.object({
  introduction: z
    .string()
    .min(1, { message: '한 줄 소개를 입력해주세요.' })
    .max(100, { message: '한 줄 소개는 15자 이내이어야 합니다.' }),

  githubInfo: z.string().optional(),
  instagramInfo: z.string().optional(),
})

export type CreateMypageSocialInfo = z.infer<
  typeof CreateMypageSocialInfoSchema
>

export const CreateMypageProfileSchema = z.object({
  profileImage: z
    .instanceof(File)
    .refine((file) => file.size < 5000000, {
      message: '프로필 이미지는 5MB 이하만 업로드할 수 있습니다.',
    })
    .refine((file) => !!file.name, {
      message: '프로필 이미지를 선택해주세요.',
    })
    .optional(),
})

export type CreateMypageProfile = z.infer<typeof CreateMypageProfileSchema>
