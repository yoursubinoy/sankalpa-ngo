import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SANKALPA - A Non-Profitable Public Charitable Trust',
  description: 'Promoting harmonious renaissance of ideas through simple technological initiatives in underdeveloped regions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

