import SplitWords from './SplitWords'
import { useLang } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  return (
    <main className="relative z-10">
      <section
        className="flex flex-col items-center justify-center px-6 pb-40 text-center"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        {/* Título */}
        <h1
          className="hero-cascade max-w-7xl font-serif text-5xl font-normal sm:text-7xl md:text-8xl"
          style={{
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
            color: '#000000',
          }}
        >
          <SplitWords
            baseDelay={150}
            step={90}
            emColor="#8B5A2B"
            segments={t.hero.title}
          />
        </h1>

        {/* Descrição */}
        <p
          className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: '#8B5A2B' }}
        >
          {t.hero.description}
        </p>

        {/* Botão CTA principal */}
        <a
          href="#contato"
          className="animate-fade-rise-delay-2 mt-12 rounded-full px-14 py-5 text-base text-white transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: '#1F1611', color: '#FFFFFF' }}
        >
          {t.hero.cta}
        </a>
      </section>
    </main>
  )
}
