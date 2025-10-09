import type { Metadata } from 'next'
import '../globals.css';
import { TranslationProvider } from '@/hooks/useTranslation';

export const metadata: Metadata = {
  title: 'Ivo Pereira Dantas',
  description: 'Portfolio de Ivo Pereira Dantas',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params?.lang === "en" ? "en" : "fr";
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
          <TranslationProvider lang={lang}>{children}</TranslationProvider>
        </body>
    </html>
  )
}
