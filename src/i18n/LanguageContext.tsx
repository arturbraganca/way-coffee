import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Dict, type Lang } from './translations'

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'waycoffee-lang'
const VALID: Lang[] = ['pt', 'en', 'es', 'fr', 'it']

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'pt'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && VALID.includes(saved as Lang)) return saved as Lang
  return 'pt' // padrão: Português
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignora quota/privado */
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang deve ser usado dentro de LanguageProvider')
  return ctx
}
