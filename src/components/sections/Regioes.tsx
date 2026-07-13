import Reveal from '../Reveal'
import SplitWords from '../SplitWords'
import { useLang } from '../../i18n/LanguageContext'

export default function Regioes() {
  const { t } = useLang()
  return (
    <section id="origens" className="w-full bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{t.regioes.eyebrow}</span>
          </Reveal>
          <Reveal delay={1} variant="blur">
            <h2
              className="mt-5 font-serif text-4xl font-normal text-espresso sm:text-6xl"
              style={{ lineHeight: 1, letterSpacing: '-0.025em' }}
            >
              <SplitWords emColor="#8B5A2B" segments={t.regioes.title} />
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {t.regioes.cards.map((r, i) => (
            <Reveal
              key={i}
              as="li"
              delay={((i % 2) + 1) as 1 | 2}
              className="origin-card"
            >
              <span
                aria-hidden="true"
                className="font-serif text-2xl leading-none"
                style={{ color: 'rgba(139,90,43,0.4)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="eyebrow mt-5 block"
                style={{ letterSpacing: '0.16em', fontSize: '0.7rem' }}
              >
                {r.eyebrow}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-espresso sm:text-3xl">
                {r.title}
              </h3>
              <p className="mt-4 leading-relaxed" style={{ color: '#5c4a3a' }}>
                {r.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
