import Reveal from '../Reveal'
import SplitWords from '../SplitWords'
import useParallax from '../../hooks/useParallax'

export default function CaminhoDoCafe() {
  const bgRef = useParallax<HTMLDivElement>(0.08)
  return (
    <section
      id="historia"
      className="relative w-full overflow-hidden bg-espresso"
    >
      {/* Camada de textura: gradientes quentes + foto opcional de cafezal.
          Se /images/cafezal.jpg existir, enriquece o fundo; senão, os
          gradientes sozinhos já entregam profundidade. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% -10%, rgba(139,90,43,0.30), transparent 60%), radial-gradient(80% 70% at 85% 115%, rgba(61,90,61,0.24), transparent 60%), linear-gradient(180deg, #241a14 0%, #1F1611 55%, #17100c 100%)',
        }}
      />
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-12 inset-x-0 bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/cafezal.jpg')" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-28 md:py-40">
        <Reveal>
          <span className="eyebrow" style={{ color: '#D9A66C' }}>
            Histórias que ligam o Brasil à Europa
          </span>
        </Reveal>

        <Reveal delay={1} variant="blur">
          <h2
            className="mt-6 font-serif text-4xl font-normal text-cream sm:text-6xl md:text-7xl"
            style={{ lineHeight: 0.98, letterSpacing: '-0.025em' }}
          >
            <SplitWords
              segments={[
                { text: 'O caminho do ' },
                { text: 'café', em: true, color: '#D9A66C' },
                { text: '.' },
              ]}
            />
          </h2>
        </Reveal>

        <div className="mt-10 max-w-2xl space-y-6">
          <Reveal delay={2}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(245,239,230,0.8)' }}
            >
              Nas montanhas de Minas Gerais e nas terras altas do Espírito
              Santo, onde o nascer do sol ilumina os cafezais e o aroma do café
              faz parte da vida cotidiana, nasce uma história de união,
              dedicação e confiança.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(245,239,230,0.8)' }}
            >
              Cada colheita, cada grão e cada safra ajudam a construir uma ponte
              entre produtores brasileiros e torrefações europeias — uma cadeia
              curta, direta e rastreável, do campo à chávena.
            </p>
          </Reveal>
        </div>

        {/* Citação de destaque */}
        <Reveal delay={3}>
          <blockquote className="quote-draw mt-16 border-l-2 pl-6 md:mt-20 md:pl-10" style={{ borderColor: '#8B5A2B' }}>
            <p
              className="font-serif text-3xl italic sm:text-4xl md:text-5xl"
              style={{ color: '#F5EFE6', lineHeight: 1.15 }}
            >
              Cada café tem uma origem.
              <br />
              Cada origem tem uma história.
              <br />
              <span style={{ color: '#D9A66C' }}>
                E cada história merece ser partilhada.
              </span>
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
