"use client";
import { createContext, useContext, useMemo } from "react";
import fr from "@/resources/resources-fr.json";
import en from "@/resources/resources-en.json";

type Lang = "fr" | "en";

const translations = { fr, en };

const TranslationContext = createContext({
  t: (key: string) => key,
  lang: "fr" as Lang,
});

export function TranslationProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const t = useMemo(() => {
    const dict = (translations[lang] || translations.fr) as Record<string, any>;
    return (key: string) =>
        key.split(".").reduce((o, i) => (o ? o[i] : key), dict) as unknown as string;
  }, [lang]);

  return (
    <TranslationContext.Provider value={{ t, lang }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);
