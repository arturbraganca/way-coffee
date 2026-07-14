import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { label: t.nav.inicio, href: '#', active: true },
    { label: t.nav.origens, href: '#origens', active: false },
    { label: t.nav.parceiros, href: '#parceiros', active: false },
    { label: t.nav.sobre, href: '#historia', active: false },
    { label: t.nav.contato, href: '#contato', active: false },
  ]

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300"
      style={
        scrolled
          ? {
              backgroundColor: 'rgba(245, 239, 230, 0.88)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 6px 24px rgba(31, 22, 17, 0.08)',
            }
          : undefined
      }
    >
      <div
        className={`relative mx-auto flex max-w-7xl items-center justify-center px-8 transition-all duration-300 md:justify-between ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        {/* Logotipo — encolhe ao rolar */}
        <a href="#" className="flex items-center" aria-label="Way Coffee">
          <img
            src="/logo-waycoffee.png"
            alt="Way Coffee"
            className={`w-auto transition-all duration-300 ${
              scrolled ? 'h-7 md:h-8' : 'h-9 md:h-10'
            }`}
          />
        </a>

        {/* Itens de menu (desktop) */}
        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.href + item.label}>
              <a
                href={item.href}
                className="nav-link text-sm transition-colors duration-200 hover:text-ink"
                style={{ color: item.active ? '#000000' : '#8B5A2B' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Cluster à direita: idioma + CTA.
            Mobile: posicionado no canto (logo permanece centralizado). */}
        <div className="absolute right-6 top-1/2 flex -translate-y-1/2 items-center gap-3 md:static md:translate-y-0">
          <LanguageSwitcher tone="dark" />
          <a
            href="#contato"
            className={`hidden rounded-full text-sm text-white transition-all duration-300 hover:scale-[1.03] md:inline-block ${
              scrolled ? 'px-5 py-2' : 'px-6 py-2.5'
            }`}
            style={{ backgroundColor: '#1F1611' }}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
