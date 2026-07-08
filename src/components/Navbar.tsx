const NAV_ITEMS = [
  { label: 'Início', active: true },
  { label: 'Origens', active: false },
  { label: 'Como comprar', active: false },
  { label: 'Sobre Nós', active: false },
  { label: 'Contato', active: false },
]

export default function Navbar() {
  return (
    <nav className="relative z-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        {/* Logotipo */}
        <a
          href="#"
          className="font-serif text-3xl tracking-tight text-ink"
          style={{ color: '#000000' }}
        >
          Way Coffee
        </a>

        {/* Itens de menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="text-sm transition-colors duration-200 hover:text-ink"
                style={{ color: item.active ? '#000000' : '#8B5A2B' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão CTA */}
        <a
          href="#"
          className="rounded-full px-6 py-2.5 text-sm text-white transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: '#1F1611' }}
        >
          Comece a Jornada
        </a>
      </div>
    </nav>
  )
}
