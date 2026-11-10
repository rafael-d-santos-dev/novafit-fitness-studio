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
  metadataBase: new URL('https://novafit-fitness-studio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'NovaFit Fitness Studio | Portfolio Demo',
    template: '%s | NovaFit Fitness Studio',
  },
  description:
    'NovaFit is a fictional premium fitness studio built as a frontend portfolio demonstration: programs, coaches, a weekly schedule, membership plans and a demo trial request form.',
  icons: { icon: '/icon.svg' },
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'NovaFit Fitness Studio',
    title: 'NovaFit Fitness Studio | Portfolio Demo',
    description:
      'NovaFit is a fictional premium fitness studio built as a frontend portfolio demonstration: programs, coaches, a weekly schedule, membership plans and a demo trial request form.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1376,
        height: 768,
        type: 'image/jpeg',
        alt: 'NovaFit Fitness Studio training floor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaFit Fitness Studio | Portfolio Demo',
    description:
      'NovaFit is a fictional premium fitness studio built as a frontend portfolio demonstration: programs, coaches, a weekly schedule, membership plans and a demo trial request form.',
    images: ['/images/hero.jpg'],
  },
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
