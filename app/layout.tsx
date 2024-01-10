import type { Metadata } from 'next'
import { Open_Sans, Merriweather, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { MotionConfig } from 'framer-motion'
import { Providers } from './providers'

const open_sans = Open_Sans({ subsets: ['latin'], variable: '--font-body'})
const merriweather = Merriweather({weight: ["300","400","700","900"], subsets: ['latin'], variable: '--font-display'})
const roboto_mono = Roboto_Mono({subsets:['latin'], variable: '--font-mono'})

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
    <html lang="en" className='w-full scroll-smooth'>
      <body className={`w-full ${open_sans.variable} ${merriweather.variable}`}>
          <Providers>
            {children}  
          </Providers>
        </body>
    </html>
  )
}
