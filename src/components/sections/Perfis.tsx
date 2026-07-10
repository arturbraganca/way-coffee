import Reveal from '../Reveal'
import SplitWords from '../SplitWords'

const PERFIS = [
  {
    title: 'Frutado & Cítrico',
    body: 'Frutas amarelas, manga, laranja, acidez cítrica, corpo cremoso.',
    color: '#D9A66C',
  },
  {
    title: 'Doce & Encorpado',
    body: 'Notas de chocolate, frutos secos, doçura equilibrada, final limpo.',
    color: '#8B5A2B',
  },
  {
    title: 'Floral & Complexo',
    body: 'Frutado, frutas amarelas, notas florais, damasco, final doce.',
    color: '#3D5A3D',
  },
  {
    title: 'Aromático & Cítrico',
    body: 'Compota de laranja, avelã e nectarina.',
    color: '#B07B4F',
  },
]

export default function Perfis() {
  return (
    <section id="perfis" className="w-full bg-sand">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Perfis de café</span>
          </Reveal>
          <Reveal delay={1} variant="blur">
            <h2
              className="mt-5 font-serif text-4xl font-normal text-espresso sm:text-6xl"
              style={{ lineHeight: 1, letterSpacing: '-0.025em' }}
            >
              <SplitWords
                segments={[
                  { text: 'Notas que contam a ' },
                  { text: 'origem', em: true, color: '#8B5A2B' },
                  { text: '.' },
                ]}
              />
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERFIS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              variant="scale"
              className="perfil-card flex h-full flex-col rounded-[20px] border border-espresso/10 bg-cream p-8"
            >
              <span
                aria-hidden="true"
                className="mb-6 inline-block h-3 w-3 rounded-full"
                style={{
                  backgroundColor: p.color,
                  boxShadow: `0 0 0 4px ${p.color}22`,
                }}
              />
              <h3 className="font-serif text-2xl text-espresso">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: '#5c4a3a' }}>
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
