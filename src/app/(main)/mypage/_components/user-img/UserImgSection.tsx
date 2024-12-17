import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components/ui'

interface UserImgSectionProps {
  name: string
  role: string
  studentId: string
  profileImage?: string
}

export const UserImgSection = ({
  name,
  role,
  studentId,
  profileImage,
}: UserImgSectionProps) => {
  return (
    <section className="flex h-full w-full flex-col md:flex-row md:space-x-8">
      <div className="space-y-5">
        <Avatar className="md:h-35 md:w-35 mx-auto flex h-32 w-32 items-center justify-center rounded-full">
          <AvatarImage src={profileImage} />
          <AvatarFallback>
            <div className="md:h-35 md:w-35 mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gray-300">
              이미지
            </div>
          </AvatarFallback>
        </Avatar>

        <div className="flex w-full flex-col gap-3 text-center md:flex-col">
          <Button
            className="mx-auto rounded-sm px-3 py-1 md:px-5 md:py-2"
            variant="yellow"
          >
            이미지 업로드
          </Button>
          <Button className="mx-auto text-sm font-semibold" variant="ghost">
            이미지 제거
          </Button>
        </div>
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
