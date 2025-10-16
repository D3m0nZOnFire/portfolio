'use client'

import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import commonFr from '../resources/resources-fr.json'
import commonEn from '../resources/resources-en.json'

const resources = {
  en: { common: commonEn },
  fr: { common: commonFr },
}


if (!i18next.isInitialized) {
  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'fr',
      supportedLngs: ['en', 'fr'],
      ns: ['common'],
      defaultNS: 'common',
      detection: {
        order: ['path'],
        lookupFromPathIndex: 0,
      },
      interpolation: { escapeValue: false },
      debug: false,
    })
}

export default i18next
