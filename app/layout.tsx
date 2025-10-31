import type { Metadata } from 'next'
import './globals.css'
import './i18n'


export const metadata: Metadata = {
  title: 'Ivo Pereira Dantas',
  icons: {
    icon: '/images/Su3rn0va_green.png',
    shortcut: '/images/Su3rn0va_green.png',
    apple: '/images/Su3rn0va_green.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
