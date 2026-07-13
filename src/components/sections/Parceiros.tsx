import Reveal from '../Reveal'
import SplitWords from '../SplitWords'
import useParallax from '../../hooks/useParallax'
import { useLang } from '../../i18n/LanguageContext'

// Dados fixos (nomes próprios + assets) — não traduzidos.
const META = [
  {
    slug: 'cooxupe',
    region: 'Minas Gerais',
    year: '1932',
    name: 'Cooxupé',
    image: '/images/parceiros/cooxupe.jpg',
    gradient: 'linear-gradient(135deg, #2a1e17 0%, #1F1611 52%, #3a2313 100%)',
  },
  {
    slug: 'nakamura',
    region: 'Chapada de Minas',
    year: '1986',
    name: 'Fazenda Nakamura',
    image: '/images/parceiros/nakamura.png',
    gradient: 'linear-gradient(135deg, #23301f 0%, #1b2417 52%, #2f2015 100%)',
  },
  {
    slug: 'cooabriel',
    region: 'Espírito Santo',
    year: '1963',
    name: 'Cooabriel',
    image: '/images/parceiros/cooabriel.jpg',
    gradient: 'linear-gradient(135deg, #2a1e17 0%, #1F1611 52%, #402a12 100%)',
  },
]

type Meta = (typeof META)[number]

function PartnerVisual({ m, since }: { m: Meta; since: string }) {
  const imgRef = useParallax<HTMLImageElement>(0.05)
  return (
    <div className="partner-visual" style={{ background: m.gradient }}>
      <img
        ref={imgRef}
        src={m.image}
        alt={`${m.name} — ${m.region}`}
        className="partner-photo"
        loading="lazy"
      />
      <div className="partner-scrim" aria-hidden="true" />
      <span className="partner-region">{m.region}</span>
      <span className="partner-year">
        {since} {m.year}
      </span>
    </div>
  )
}

export default function Parceiros() {
  const { t } = useLang()
  return (
    <section id="parceiros" className="w-full bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{t.parceiros.eyebrow}</span>
          </Reveal>
          <Reveal delay={1} variant="blur">
            <h2
              className="mt-5 font-serif text-4xl font-normal text-espresso sm:text-6xl"
              style={{ lineHeight: 1, letterSpacing: '-0.025em' }}
            >
              <SplitWords emColor="#8B5A2B" segments={t.parceiros.title} />
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p
              className="mt-8 text-lg leading-relaxed"
              style={{ color: '#5c4a3a' }}
            >
              {t.parceiros.intro}
            </p>
          </Reveal>
        </div>

        {/* Cards grandes alternados */}
        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {META.map((m, i) => {
            const item = t.parceiros.items[i]
            const visualLeft = i % 2 === 0
            return (
              <div
                key={m.slug}
                className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <Reveal
                  variant={visualLeft ? 'left' : 'right'}
                  className={visualLeft ? '' : 'md:order-2'}
                >
                  <PartnerVisual m={m} since={t.parceiros.since} />
                </Reveal>

                <Reveal variant={visualLeft ? 'right' : 'left'}>
                  <div>
                    <span
                      className="eyebrow"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.16em' }}
                    >
                      {t.parceiros.since} {m.year} · {m.region}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl text-espresso sm:text-4xl">
                      {m.name}
                    </h3>
                    <p
                      className="mt-1 font-serif text-xl italic"
                      style={{ color: '#8B5A2B' }}
                    >
                      {item.subtitle}
                    </p>
                    <div className="mt-6 space-y-4">
                      {item.paragraphs.map((para, idx) => (
                        <p
                          key={idx}
                          className="leading-relaxed"
                          style={{ color: '#5c4a3a' }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {item.highlight && (
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
                        <span>{item.highlight}</span>
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
