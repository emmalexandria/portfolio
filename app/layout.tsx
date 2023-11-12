import type { Metadata } from 'next'
import { Open_Sans, Merriweather } from 'next/font/google'
import './globals.css'

const open_sans = Open_Sans({ subsets: ['latin'], variable: '--font-body'})
const merriweather = Merriweather({weight: ["300","400","700","900"], subsets: ['latin'], variable: '--font-display'})

export const metadata: Metadata = {
  title: 'Emma Alexandria',
  description: 'Full-stack web developer, writer, and some other things.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='w-full'>
      <body className={`w-full ${open_sans.variable} ${merriweather.variable}`}>{children}</body>
    </html>
  )
}
