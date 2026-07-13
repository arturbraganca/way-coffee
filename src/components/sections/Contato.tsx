import { useState, type FormEvent } from 'react'
import Reveal from '../Reveal'
import SplitWords from '../SplitWords'

const WHATSAPP_NUMBER = '351912213457'

export default function Contato() {
  const [sent, setSent] = useState(false)

  // Envio via WhatsApp (e-mail será reativado depois com a chave do Web3Forms).
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const val = (name: string) => {
      const el = form.elements.namedItem(name) as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement
        | null
      return el?.value?.trim() || '—'
    }
    const linha = (rotulo: string, valor: string) => `*${rotulo}:* ${valor}`
    const msg = [
      '*Nova solicitação de proposta — Way Coffee*',
      '',
      linha('Nome', val('nome')),
      linha('Empresa', val('empresa')),
      linha('E-mail', val('email')),
      linha('País', val('pais')),
      linha('Volume mensal', val('volume')),
      linha('Mensagem', val('mensagem')),
    ].join('\n')
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  return (
    <section id="contato" className="relative w-full overflow-hidden bg-espresso">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 80% at 15% 0%, rgba(139,90,43,0.22), transparent 60%), radial-gradient(70% 70% at 100% 100%, rgba(61,90,61,0.20), transparent 60%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        {/* Coluna de texto */}
        <div className="max-w-md">
          <Reveal>
            <span className="eyebrow" style={{ color: '#D9A66C' }}>
              Fale conosco
            </span>
          </Reveal>
          <Reveal delay={1} variant="blur">
            <h2
              className="mt-5 font-serif text-4xl font-normal text-cream sm:text-5xl md:text-6xl"
              style={{ lineHeight: 1, letterSpacing: '-0.025em' }}
            >
              <SplitWords
                segments={[
                  { text: 'Vamos construir esta ' },
                  { text: 'ponte', em: true, color: '#D9A66C' },
                  { text: ' juntos.' },
                ]}
              />
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p
              className="mt-8 text-lg leading-relaxed"
              style={{ color: 'rgba(245,239,230,0.75)' }}
            >
              Torrefação, importadora ou distribuidor especializado? Conte-nos
              sobre a sua operação e preparamos uma proposta sob medida — origem,
              volume e prazos alinhados à sua necessidade.
            </p>
          </Reveal>
        </div>

        {/* Coluna do formulário */}
        <Reveal delay={2}>
          {sent ? (
            <div
              role="status"
              className="flex h-full flex-col items-center justify-center rounded-[20px] border p-12 text-center"
              style={{
                borderColor: 'rgba(245,239,230,0.2)',
                background: 'rgba(245,239,230,0.05)',
              }}
            >
              <span
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ background: '#3D5A3D' }}
                aria-hidden="true"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5EFE6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <h3 className="font-serif text-2xl text-cream">
                Quase lá!
              </h3>
              <p className="mt-3" style={{ color: 'rgba(245,239,230,0.7)' }}>
                Abrimos o WhatsApp com os seus dados preenchidos. Toque em{' '}
                <strong style={{ color: '#F5EFE6' }}>enviar</strong> por lá para
                concluir a sua solicitação.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="form-label">
                    Nome <span style={{ color: '#D9A66C' }}>*</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    required
                    className="form-field"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="form-label">
                    Empresa <span style={{ color: '#D9A66C' }}>*</span>
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    required
                    className="form-field"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    E-mail <span style={{ color: '#D9A66C' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="form-field"
                    placeholder="voce@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="pais" className="form-label">
                    País
                  </label>
                  <select id="pais" name="pais" className="form-field" defaultValue="">
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option>Portugal</option>
                    <option>Espanha</option>
                    <option>Itália</option>
                    <option>França</option>
                    <option>Alemanha</option>
                    <option>Países Baixos</option>
                    <option>Bélgica</option>
                    <option>Reino Unido</option>
                    <option>Suíça</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="volume" className="form-label">
                    Volume mensal
                  </label>
                  <select
                    id="volume"
                    name="volume"
                    className="form-field"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione uma faixa
                    </option>
                    <option>Menos de 5 toneladas / mês</option>
                    <option>5 a 20 toneladas / mês</option>
                    <option>20 a 50 toneladas / mês</option>
                    <option>Mais de 50 toneladas / mês</option>
                    <option>Ainda a definir</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensagem" className="form-label">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    className="form-field"
                    placeholder="Conte-nos sobre a sua operação e o que procura."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary mt-8 w-full sm:w-auto"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  style={{ width: 18, height: 18, flexShrink: 0 }}
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.71 14.19c-.24.67-1.4 1.28-1.92 1.32-.49.04-.94.24-3.17-.66-2.68-1.08-4.38-3.84-4.51-4.02-.13-.17-1.08-1.44-1.08-2.75s.69-1.95.93-2.22c.24-.26.53-.33.71-.33l.51.01c.16.01.38-.06.6.46.23.55.77 1.9.84 2.04.07.13.11.29.02.46-.09.17-.13.28-.26.43l-.39.45c-.13.13-.27.28-.12.54.15.26.66 1.09 1.42 1.76.97.87 1.79 1.14 2.05 1.27.26.13.41.11.56-.07.15-.17.65-.76.82-1.02.17-.26.35-.22.59-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.07.11.07.64-.17 1.31z" />
                </svg>
                Solicitar Proposta
              </button>

              <p
                className="mt-4 text-sm"
                style={{ color: 'rgba(245,239,230,0.5)' }}
              >
                Ao solicitar, abrimos o WhatsApp com os seus dados —
                respondemos em até 24h úteis.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
