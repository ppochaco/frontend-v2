import { ReactNode } from 'react'

import { Footer } from './footer'
import { Header } from './header'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex w-full flex-1 justify-center">
        <div className="mt-16 max-w-screen-2xl flex-1">{children}</div>
      </div>
      <Footer />
    </main>
  )
}
