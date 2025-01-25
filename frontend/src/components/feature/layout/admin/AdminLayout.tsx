import { ReactNode } from 'react'

import { Footer, Header } from '../main'
import { AdminSidebar } from './sidebar'

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex h-full min-h-screen w-full flex-1 flex-col">
      <Header />
      <div className="mt-16 flex w-full flex-1 justify-center">
        <div className="flex max-w-screen-xl flex-1">
          <AdminSidebar />
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
