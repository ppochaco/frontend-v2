'use client'

import { useRouter } from 'next/navigation'

import { Content } from '@/components/common'
import { Button } from '@/components/ui'

import { Footer, Header } from '../(main)/_components'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen w-full flex-col">
      <Content className="fixed z-40 h-16 w-full bg-primary text-white">
        <Header />
      </Content>
      <div className="mt-16 flex h-full flex-1 flex-col items-center pt-20 text-primary/90">
        <div className="pb-2 text-9xl">404</div>
        <div className="text-xl">해당 페이지를 찾을 수 없습니다.</div>
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="secondary" onClick={() => router.back()}>
            이전으로
          </Button>
          <Button onClick={() => router.replace('/')}>메인으로</Button>
        </div>
      </div>
      <Content className="bg-slate-100 text-primary">
        <Footer />
      </Content>
    </main>
  )
}
