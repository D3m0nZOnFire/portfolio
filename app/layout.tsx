import type { Metadata } from 'next'
import './globals.css'
import './i18n'


export const metadata: Metadata = {
  title: 'Ivo Pereira Dantas',
  description: 'Portfolio de Ivo Pereira Dantas',
  generator: 'v0.dev',
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
