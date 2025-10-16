"use client";

import Link from "next/link"
import { useTranslation } from 'react-i18next';

export default function Header() {
  
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Ivo Pereiras Dantas
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#aboutme" className="hover:text-emerald-400 transition-colors">
            {t('aboutMe.aboutMeTitle')}
          </Link>
          <div className="border-l border-white/20 h-6"></div>
          <Link href="#projects" className="hover:text-emerald-400 transition-colors">
            {t('projects.projectsTitle')}
          </Link>
          <div className="border-l border-white/20 h-6"></div>
          <Link href="#skills" className="hover:text-emerald-400 transition-colors">
            {t('knowledge.knowledgeTitle')}
          </Link>
          <div className="border-l border-white/20 h-6"></div>
          <Link href="#certificates" className="hover:text-emerald-400 transition-colors">
            {t('certificates.certificatesTitle')}
          </Link>
          <div className="border-l border-white/20 h-6"></div>
          <Link href="#formations" className="hover:text-emerald-400 transition-colors">
            {t('formations.formationsTitle')}
          </Link>
        </div>
      </nav>
    </header>
  )
}