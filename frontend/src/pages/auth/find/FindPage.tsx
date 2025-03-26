import { useEffect } from 'react'
import { useSearchParams } from 'react-router'

import { LinkButton } from '@/components/common'

import { AuthCardLayout } from '../components'
import { FindForm, FindType, ResetPasswordForm } from './components'

export default function FindPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get('findType')) {
      setSearchParams({ findType: 'id' }, { replace: true })
    }
  }, [searchParams, setSearchParams])

  const handleFindType = (type: 'id' | 'password') => {
    setSearchParams({ findType: type }, { replace: true })
  }

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <AuthCardLayout title="회원정보 찾기 to HAEDAL">
        <FindType
          onChange={handleFindType}
          findType={searchParams.get('findType') || 'id'}
        />
        {searchParams.get('findType') === 'id' ? (
          <FindForm />
        ) : (
          <ResetPasswordForm />
        )}
      </AuthCardLayout>
      <LinkButton linkTo="/auth/login">
        <div>로그인하기</div>
      </LinkButton>
    </div>
  )
}
