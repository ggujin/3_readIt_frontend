'use client'

import React from 'react'
import { Sidebar } from '@/components/common/sidebar'
import { Toaster } from 'react-hot-toast'

const MainUiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex h-screen w-screen gap-4 p-4">
      {/**gradation layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#d1b3ff] via-[#b266ff] to-[#b266ff]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-[#ff6f91] to-transparent opacity-70 mix-blend-overlay" />
      <Sidebar />
      {children}
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: 'white',
            color: 'black',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
          },
        }}
      />
    </main>
  )
}

export default MainUiLayout
