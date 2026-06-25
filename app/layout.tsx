import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bharath Malayalam - Software Developer & DevOps Engineer',
  description: 'Professional portfolio showcasing software development, DevOps, and cloud solutions expertise. Building scalable applications and cloud infrastructure.',
  generator: 'v0.app',
  openGraph: {
    title: 'Bharath Malayalam - Software Developer & DevOps Engineer',
    description: 'Building scalable applications and cloud solutions',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f0f1e' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f1e' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
