import { useNavigate } from 'react-router'

import { Button } from '@/components/ui'

export const NotFoundError = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center py-20 text-primary/90">
      <div className="pb-2 text-9xl">404</div>
      <div className="text-xl">해당 페이지를 찾을 수 없습니다.</div>
      <div className="flex justify-center gap-4 pt-4">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          이전으로
        </Button>
        <Button onClick={() => navigate('/', { replace: true })}>
          메인으로
        </Button>
      </div>
    </div>
  )
}
