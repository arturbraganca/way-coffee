import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { LANGS } from '../i18n/translations'

/**
 * Seletor de idioma minimalista: globo + código atual (ex. "PT").
 * Ao clicar, abre um menu compacto com os 5 idiomas. Fecha ao clicar fora
 * ou com Esc. Usado tanto no desktop quanto no mobile.
 *
 * `tone`: 'dark' = texto escuro (sobre fundo claro / navbar padrão),
 *         'light' = texto claro (caso seja usado sobre fundo escuro).
 */
export default function LanguageSwitcher({
  tone = 'dark',
}: {
  tone?: 'dark' | 'light'
}) {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    // Usa 'click' (não 'mousedown'): assim a seleção da opção — que também é um
    // 'click' — dispara normalmente, sem o menu ser fechado no mousedown antes
    // do clique completar.
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0]

  return (
    <div ref={ref} className={`lang-switch lang-switch--${tone}`}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Idioma: ${current.name}`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9.5" />
          <path d="M2.5 12h19" />
          <path d="M12 2.5c2.6 2.5 4 5.9 4 9.5s-1.4 7-4 9.5c-2.6-2.5-4-5.9-4-9.5s1.4-7 4-9.5z" />
        </svg>
        <span className="lang-code">{current.label}</span>
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" aria-label="Selecionar idioma">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                className={`lang-option${l.code === lang ? ' is-active' : ''}`}
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
              >
                <span className="lang-option-code">{l.label}</span>
                <span className="lang-option-name">{l.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
