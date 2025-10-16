'use client'

import { useTranslation } from 'react-i18next';
import { Card } from "@/components/ui/card"

export default function AboutMeSection() {
  const { t } = useTranslation();

    return (
      <section id="aboutme" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('aboutMe.aboutMeTitle')}</h2>
            <Card className="bg-black/50 border-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-emerald-50">{t('aboutMe.personalInfosTitle')}</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>
                        <strong>{t('aboutMe.languages.languagesTitle')}</strong> {t('aboutMe.languages.languagesDescription')}
                      </li>
                      <li>
                        <strong>{t('aboutMe.birthInfo.birthdateTitle')}</strong> {t('aboutMe.birthInfo.birthdateDescription')}
                      </li>
                      <li>
                        <strong>{t('aboutMe.birthInfo.birthLocationTitle')}</strong> {t('aboutMe.birthInfo.birthLocationDescription')}
                      </li>
                      <li>
                        <strong>{t('aboutMe.contactInfo.phoneTitle')}</strong> +41 78 721 77 06
                      </li>
                      <li>
                        <strong>{t('aboutMe.contactInfo.MailTitle')}</strong> PereiraDI2005@outlook.com
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-emerald-50">{t('aboutMe.personalInterestsTitle')}</h3>
                    <ul className="space-y-2 text-gray-400">
                      {(t('aboutMe.personalInterests', { returnObjects: true }) as string[]).map(
                        (interest, index) => <li key={index}>{interest}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
    )
}