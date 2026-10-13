import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'pt' | 'en'
export type Bilingual = { pt: string; en: string }

type LanguageContextValue = { lang: Lang; setLang: (lang: Lang) => void }

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'pt',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
