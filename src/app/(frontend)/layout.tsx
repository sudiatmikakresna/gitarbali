import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
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
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
