import { useState, type FormEvent } from 'react'
import Reveal from '../Reveal'
import SplitWords from '../SplitWords'

export default function Contato() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Sem backend ainda — apenas feedback visual de sucesso.
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
                Proposta solicitada!
              </h3>
              <p className="mt-3" style={{ color: 'rgba(245,239,230,0.7)' }}>
                Recebemos os seus dados e retornaremos em breve.
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

              <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                Solicitar Proposta
              </button>

              <p
                className="mt-4 text-sm"
                style={{ color: 'rgba(245,239,230,0.5)' }}
              >
                Respondemos em até 24h úteis. Seus dados não serão compartilhados.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
