import { CheckCircledIcon } from '@radix-ui/react-icons'

interface FindSuccessMessageProps {
  userId: string
}
interface SendCodeMessageProps {
  sendCode: boolean
}

export const FindSuccessMessage = ({ userId }: FindSuccessMessageProps) => {
  if (!userId) return null

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-600">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <CheckCircledIcon />
          <p>가입된 아이디는 아래와 같습니다.</p>
        </div>
        <p>ID: {userId}</p>
      </div>
    </div>
  )
}

export const SendCodeMessage = ({ sendCode }: SendCodeMessageProps) => {
  if (!sendCode) return null

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-600">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <CheckCircledIcon />
          <p>이메일로 인증번호를 발송했습니다.</p>
        </div>
      </div>
    </div>
  )
}
