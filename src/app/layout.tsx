import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader';
import SessionProviderComp from '@/components/nextauth/SessionProvider'
import { Session } from 'next-auth'

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SINERTEK Electronics - Прикладное оборудование под ключ',
  description: 'Разработка и производство измерительного оборудования, автономных датчиков и промышленных систем управления. Полный цикл: от инженерных расчетов до серийного производства.',
  icons: {
    icon: [
      { url: '/icon.svg?v=3', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg?v=3', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg?v=3', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg?v=3', type: 'image/svg+xml', sizes: '180x180' }
    ],
    shortcut: '/icon.svg?v=3',
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
        color: '#0066FF',
      },
    ],
  },
}
export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode
  session: Session | null
}>) {
  return (
    <html lang='ru'>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=3" />
        <link rel="apple-touch-icon" href="/apple-icon.svg?v=3" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0066FF" />
      </head>
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#07be8a" />
        <SessionProviderComp session={session}>
          <ThemeProvider
            attribute='class'
            enableSystem={true}
            defaultTheme='light'>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProviderComp>
      </body>
    </html>
  )
}
