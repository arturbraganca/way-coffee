import Reveal from '../Reveal'
import SplitWords from '../SplitWords'
import useParallax from '../../hooks/useParallax'

type Parceiro = {
  slug: string
  region: string
  year: string
  name: string
  subtitle: string
  image: string
  gradient: string
  paragraphs: string[]
  highlight: string | null
}

const PARCEIROS: Parceiro[] = [
  {
    slug: 'cooxupe',
    region: 'Minas Gerais',
    year: '1932',
    name: 'Cooxupé',
    subtitle: 'Mais de 90 anos de tradição cafeeira',
    image: '/images/parceiros/cooxupe.jpg',
    gradient:
      'linear-gradient(135deg, #2a1e17 0%, #1F1611 52%, #3a2313 100%)',
    paragraphs: [
      'Fundada em 1932, a Cooxupé tornou-se a maior cooperativa de cafés do mundo, reunindo milhares de famílias produtoras nas principais regiões de Minas Gerais.',
      'Reconhecida internacionalmente pela sua excelência, rastreabilidade e compromisso com a sustentabilidade, representa uma das maiores referências mundiais na produção de café de qualidade.',
    ],
    highlight: 'Milhares de famílias produtoras · Rastreabilidade total',
  },
  {
    slug: 'nakamura',
    region: 'Chapada de Minas',
    year: '1986',
    name: 'Fazenda Nakamura',
    subtitle: 'Herança japonesa, excelência brasileira',
    image: '/images/parceiros/nakamura.png',
    gradient:
      'linear-gradient(135deg, #23301f 0%, #1b2417 52%, #2f2015 100%)',
    paragraphs: [
      'A história da família Nakamura começou no Japão e encontrou nas montanhas brasileiras o lugar ideal para desenvolver um café especial cheio de alma.',
      'Ao longo das gerações, a família construiu uma produção baseada na dedicação, disciplina e respeito constante pela qualidade — valores que atravessam oceanos e chegam a cada chávena.',
    ],
    highlight: 'Chapada de Minas Gerais · Tradição familiar de gerações',
  },
  {
    slug: 'cooabriel',
    region: 'Espírito Santo',
    year: '1963',
    name: 'Cooabriel',
    subtitle: 'A referência do Robusta brasileiro',
    image: '/images/parceiros/cooabriel.jpg',
    gradient:
      'linear-gradient(135deg, #2a1e17 0%, #1F1611 52%, #402a12 100%)',
    paragraphs: [
      'Localizada no Espírito Santo, a Cooabriel é uma das maiores cooperativas de cafés Robusta do Brasil e uma das principais referências mundiais nesta variedade.',
      'Os seus cooperados investem continuamente em tecnologia e práticas sustentáveis, e os cafés Robusta especiais ganham espaço entre as exigências dos mercados internacionais.',
    ],
    highlight: null,
  },
]

function PartnerVisual({ p }: { p: Parceiro }) {
  const imgRef = useParallax<HTMLImageElement>(0.05)
  return (
    <div className="partner-visual" style={{ background: p.gradient }}>
      <img
        ref={imgRef}
        src={p.image}
        alt={`Cafezal do parceiro ${p.name}, em ${p.region}`}
        className="partner-photo"
        loading="lazy"
      />
      <div className="partner-scrim" aria-hidden="true" />
      <span className="partner-region">{p.region}</span>
      <span className="partner-year">Desde {p.year}</span>
    </div>
  )
}

export default function Parceiros() {
  return (
    <section id="parceiros" className="w-full bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Quem cultiva</span>
          </Reveal>
          <Reveal delay={1} variant="blur">
            <h2
              className="mt-5 font-serif text-4xl font-normal text-espresso sm:text-6xl"
              style={{ lineHeight: 1, letterSpacing: '-0.025em' }}
            >
              <SplitWords
                segments={[
                  { text: 'Os parceiros por trás de cada ' },
                  { text: 'safra', em: true, color: '#8B5A2B' },
                  { text: '.' },
                ]}
              />
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p
              className="mt-8 text-lg leading-relaxed"
              style={{ color: '#5c4a3a' }}
            >
              A Way Coffee trabalha lado a lado com cooperativas e produtores
              brasileiros que carregam décadas de tradição, tecnologia e
              compromisso com a qualidade. Cada parceria é construída sobre
              confiança — e cada café carrega essa história.
            </p>
          </Reveal>
        </div>

        {/* Cards grandes alternados */}
        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {PARCEIROS.map((p, i) => {
            const visualLeft = i % 2 === 0
            return (
              <div
                key={p.slug}
                className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                {/* Painel visual */}
                <Reveal
                  variant={visualLeft ? 'left' : 'right'}
                  className={visualLeft ? '' : 'md:order-2'}
                >
                  <PartnerVisual p={p} />
                </Reveal>

                {/* Texto */}
                <Reveal variant={visualLeft ? 'right' : 'left'}>
                  <div>
                    <span
                      className="eyebrow"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.16em' }}
                    >
                      Desde {p.year} · {p.region}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl text-espresso sm:text-4xl">
                      {p.name}
                    </h3>
                    <p
                      className="mt-1 font-serif text-xl italic"
                      style={{ color: '#8B5A2B' }}
                    >
                      {p.subtitle}
                    </p>
                    <div className="mt-6 space-y-4">
                      {p.paragraphs.map((para, idx) => (
                        <p
                          key={idx}
                          className="leading-relaxed"
                          style={{ color: '#5c4a3a' }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {p.highlight && (
                      <div className="partner-highlight">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{p.highlight}</span>
                      </div>
                    )}
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
