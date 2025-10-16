'use client'

import './i18n'
import Portfolio from './[lng]/page'

// Always render French version
export default function Home() {
  return <Portfolio lng="fr" />
}
