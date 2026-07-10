const NAV_ITEMS = [
  { label: 'Início', href: '#', active: true },
  { label: 'Origens', href: '#origens', active: false },
  { label: 'Parceiros', href: '#parceiros', active: false },
  { label: 'Sobre Nós', href: '#historia', active: false },
  { label: 'Contato', href: '#contato', active: false },
]

export default function Navbar() {
  return (
    <nav className="relative z-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        {/* Logotipo */}
        <a href="#" className="flex items-center" aria-label="Way Coffee">
          <img
            src="/logo-waycoffee.png"
            alt="Way Coffee"
            className="h-9 w-auto md:h-10"
          />
        </a>

        {/* Itens de menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
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

        {/* Botão CTA */}
        <a
          href="#contato"
          className="rounded-full px-6 py-2.5 text-sm text-white transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: '#1F1611' }}
        >
          Comece a Jornada
        </a>
      </div>
    </nav>
  )
}
