const ITEMS = [
  'Cafés verdes especiais',
  'Do campo à chávena',
  'Brasil ⇄ Europa',
  'Origem rastreável',
  'Parcerias diretas',
]

function Sequence() {
  return (
    <>
      {ITEMS.map((item) => (
        <span key={item} className="marquee-item font-serif">
          <span aria-hidden="true" className="marquee-dot" />
          {item}
        </span>
      ))}
    </>
  )
}

/**
 * Faixa marquee editorial — texto serifado deslizando continuamente.
 * Conteúdo duplicado para loop contínuo; aria-hidden na cópia; pausa no
 * hover; vira estática com reduced-motion.
 */
export default function Marquee() {
  return (
    <div
      className="marquee-band"
      role="marquee"
      aria-label={ITEMS.join(' · ')}
    >
      <div className="marquee-track">
        <div className="marquee-content">
          <Sequence />
        </div>
        <div className="marquee-content" aria-hidden="true">
          <Sequence />
        </div>
      </div>
    </div>
  )
}
