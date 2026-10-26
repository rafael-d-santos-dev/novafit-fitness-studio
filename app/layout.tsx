import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  axes: ['wdth'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NovaFit Fitness Studio | Portfolio Demo',
    template: '%s | NovaFit Fitness Studio',
  },
  description:
    'NovaFit is a fictional premium fitness studio built as a frontend portfolio demonstration: programs, coaches, a weekly schedule, membership plans and a demo trial request form.',
  icons: { icon: '/icon.svg' },
  robots: { index: false, follow: false },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
