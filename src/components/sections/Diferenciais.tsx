import Reveal from '../Reveal'
import SplitWords from '../SplitWords'
import type { ReactNode } from 'react'
import { useLang } from '../../i18n/LanguageContext'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const ICONS: ReactNode[] = [
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  <svg {...iconProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  <svg {...iconProps}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>,
  <svg {...iconProps}>
    <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z" />
  </svg>,
  <svg {...iconProps}>
    <path d="M14 17V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1" />
    <path d="M14 9h4l3 3v5a1 1 0 0 1-1 1h-1" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>,
]

export default function Diferenciais() {
  const { t } = useLang()
  return (
    <section id="diferenciais" className="w-full bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Cabeçalho editorial em duas colunas */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">{t.diferenciais.eyebrow}</span>
            </Reveal>
            <Reveal delay={1} variant="blur">
              <h2
                className="mt-5 font-serif text-4xl font-normal text-espresso sm:text-6xl"
                style={{ lineHeight: 1, letterSpacing: '-0.025em' }}
              >
                <SplitWords emColor="#8B5A2B" segments={t.diferenciais.title} />
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2} variant="right">
            <p
              className="leading-relaxed md:max-w-sm md:justify-self-end"
              style={{ color: '#5c4a3a' }}
            >
              {t.diferenciais.support}
            </p>
          </Reveal>
        </div>

        {/* Lista editorial com linhas que se desenham ao rolar */}
        <ul className="mt-16 md:mt-20">
          {t.diferenciais.items.map((d, i) => (
            <Reveal
              key={i}
              as="li"
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="diff-row"
            >
              <span className="diff-num font-serif" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="diff-ring" aria-hidden="true">
                {ICONS[i]}
              </span>
              <div>
                <h3 className="diff-label font-serif text-2xl text-espresso sm:text-3xl">
                  {d.label}
                </h3>
                <p className="diff-desc mt-1.5 text-sm leading-relaxed sm:text-base">
                  {d.desc}
                </p>
              </div>
              <span className="diff-arrow" aria-hidden="true">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
