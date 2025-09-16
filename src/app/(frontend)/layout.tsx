import React from 'react'
import { Navbar } from '@/components/navbar'
import './styles.css'

export const metadata = {
  description: 'Gitar Bali - Handcrafted guitars from Bali',
  title: 'Gitar Bali',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
