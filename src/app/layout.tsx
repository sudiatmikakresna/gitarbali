import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gitar Bali',
  description: 'Handcrafted guitars from Bali',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
