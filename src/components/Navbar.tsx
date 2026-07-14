import { useLang } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useLang()

  const items = [
    { label: t.nav.inicio, href: '#', active: true },
    { label: t.nav.origens, href: '#origens', active: false },
    { label: t.nav.parceiros, href: '#parceiros', active: false },
    { label: t.nav.sobre, href: '#historia', active: false },
    { label: t.nav.contato, href: '#contato', active: false },
  ]

  return (
    <nav className="relative z-50">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-8 py-6 md:justify-between">
        {/* Logotipo */}
        <a href="#" className="flex items-center" aria-label="Way Coffee">
          <img
            src="/logo-waycoffee.png"
            alt="Way Coffee"
            className="h-9 w-auto md:h-10"
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
            className="hidden rounded-full px-6 py-2.5 text-sm text-white transition-transform duration-200 hover:scale-[1.03] md:inline-block"
            style={{ backgroundColor: '#1F1611' }}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
