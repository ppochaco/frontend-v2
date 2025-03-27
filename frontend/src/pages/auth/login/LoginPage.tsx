import { LinkButton } from '@/components/common'

import { AuthCardLayout } from '../components'
import { LoginForm } from './components'

export default function LoginPage() {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <AuthCardLayout title="Sign in to HAEDAL">
        <LoginForm />
      </AuthCardLayout>
      <div className="flex w-full items-center justify-center gap-28">
        <LinkButton linkTo="/auth/signup">
          <div>회원가입</div>
        </LinkButton>
        <LinkButton linkTo="/auth/find">
          <div>회원정보 찾기</div>
        </LinkButton>
      </div>
    </div>
  )
}
