import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Cross2Icon, UploadIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Form,
} from '@/components/ui'
import { CreateMypageProfile, CreateMypageProfileSchema } from '@/schema/mypage'

import HaedalLogo from '../../_assets/haedal-logo.png'

interface UserInfoSectionProps {
  name: string
  role: string
  studentId: string
  profileImage?: string
}

export const UserInfoSection = ({
  name,
  role,
  studentId,
  profileImage: initialProfileImage,
}: UserInfoSectionProps) => {
  const form = useForm<CreateMypageProfile>({
    resolver: zodResolver(CreateMypageProfileSchema),
  })

  const { register, handleSubmit, setValue, watch } = form

  const [previewImage, setPreviewImage] = useState<string | undefined>(
    initialProfileImage,
  )

  const profileImage = watch('profileImage')

  useEffect(() => {
    if (profileImage && profileImage instanceof File) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(profileImage)
    }
  }, [profileImage])

  const imageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setValue('profileImage', file)
    }
  }

  const uploadToButtonClick = () => {
    const fileInput =
      document.querySelector<HTMLInputElement>('input[type="file"]')
    fileInput?.click()
    form.handleSubmit(onSubmit)
  }

  const removeImage = () => {
    setValue('profileImage', undefined)
    setPreviewImage(undefined)
  }

  const onSubmit = (data: CreateMypageProfile) => {
    console.log('제출된 데이터:', data)
  }

  return (
    <section className="flex h-full w-full flex-col md:flex-row md:space-x-8">
      <div className="flex flex-col items-center justify-center space-y-5">
        <Avatar className="md:h-35 md:w-35 mx-auto flex h-32 w-32 items-center justify-center rounded-full">
          <AvatarImage src={previewImage} />
          <AvatarFallback>
            <Image
              src={HaedalLogo}
              alt="haedal-logo"
              className="h-full w-full"
            />
          </AvatarFallback>
        </Avatar>
        <div className="w-55 flex flex-row items-center gap-5 md:w-full md:gap-4">
          <Button
            onClick={uploadToButtonClick}
            className="text-md mx-auto my-auto h-full w-full rounded-full font-semibold"
            variant="outline"
            type="submit"
            size="default"
          >
            <UploadIcon className="h-4 w-4 text-blue-500" />
          </Button>
          <Button
            onClick={removeImage}
            className="text-md mx-auto my-auto rounded-full px-3 font-semibold md:h-full md:w-full"
            variant="destructive"
            type="submit"
            size="icon"
          >
            <Cross2Icon className="h-auto w-6 font-bold text-white md:h-5 md:w-5" />
          </Button>
        </div>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-3 text-center align-middle md:flex-col"
          >
            <input
              type="file"
              {...register('profileImage')}
              className="hidden"
              onChange={imageUpload}
            />
            <Button
              className="mx-auto rounded-sm px-3 py-1 md:px-5 md:py-2"
              variant="yellow"
              type="submit"
            >
              이미지 수정 완료
            </Button>
          </form>
        </Form>
      </div>
      <div className="mb-5 mt-10 border-t border-border md:hidden" />
      <div className="mt-5 space-y-3">
        <div className="flex flex-row items-center gap-3 md:gap-5">
          <div className="text-2xl font-bold md:text-3xl">{name}</div>
          <div className="text-md rounded-full border border-primary px-3 py-1 text-primary md:text-xl">
            {role}
          </div>
        </div>
        <div className="text-xl">{studentId}</div>
      </div>
    </section>
  )
}
