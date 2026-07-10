import Reveal from './Reveal'

const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'O caminho do café', href: '#historia' },
  { label: 'Regiões de origem', href: '#origens' },
  { label: 'Nossos parceiros', href: '#parceiros' },
  { label: 'Perfis de café', href: '#perfis' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

const WHATSAPP_DISPLAY = '+351 912 213 457'
const WHATSAPP_URL = 'https://wa.me/351912213457'
const INSTAGRAM_URL =
  'https://www.instagram.com/waycoffee.eu?igsh=dHcyejZ2d3pidXg2'
const EMAIL = 'comercial@waycoffee.eu'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.1.81.83-3.03-.19-.31a8.04 8.04 0 0 1-1.24-4.3c0-4.46 3.63-8.09 8.09-8.09zm4.67 11.5c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.03 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.14-1.19-.06-.11-.23-.17-.48-.3z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="w-full border-t"
      style={{ backgroundColor: '#17100c', borderColor: 'rgba(245,239,230,0.1)' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Marca */}
          <Reveal className="md:col-span-5">
            <img
              src="/logo-waycoffee-light.png"
              alt="Way Coffee"
              className="h-9 w-auto"
            />
            <p
              className="mt-6 max-w-sm leading-relaxed"
              style={{ color: 'rgba(245,239,230,0.6)' }}
            >
              Exportação de cafés verdes especiais do Brasil para o mercado
              europeu — uma cadeia curta, direta e rastreável, do campo à
              chávena.
            </p>
            <p
              className="mt-6 text-sm"
              style={{ color: 'rgba(245,239,230,0.4)' }}
            >
              Brasil&nbsp;&nbsp;⇄&nbsp;&nbsp;Europa
            </p>
          </Reveal>

          {/* Navegação */}
          <Reveal delay={1} className="md:col-span-3">
            <h3
              className="text-sm font-semibold uppercase"
              style={{ color: '#D9A66C', letterSpacing: '0.18em' }}
            >
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer-link text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contato */}
          <Reveal delay={2} className="md:col-span-4">
            <h3
              className="text-sm font-semibold uppercase"
              style={{ color: '#D9A66C', letterSpacing: '0.18em' }}
            >
              Contato
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
              >
                <WhatsAppIcon />
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="social-btn"
                aria-label={`E-mail ${EMAIL}`}
              >
                <MailIcon />
                <span>{EMAIL}</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram @waycoffee.eu"
              >
                <InstagramIcon />
                <span>@waycoffee.eu</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Barra inferior */}
        <div
          className="mt-14 flex flex-col items-start justify-between gap-4 border-t pt-8 text-sm sm:flex-row sm:items-center"
          style={{ borderColor: 'rgba(245,239,230,0.1)' }}
        >
          <p style={{ color: 'rgba(245,239,230,0.45)' }}>
            © {year} Way Coffee. Todos os direitos reservados.
          </p>
          <p style={{ color: 'rgba(245,239,230,0.45)' }}>
            Cafés verdes especiais · Origem rastreável
          </p>
        </div>
      </div>
    </footer>
  )
}
