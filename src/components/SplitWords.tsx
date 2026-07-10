import type { CSSProperties } from 'react'

export type WordSegment = {
  text: string
  /** Renderiza as palavras em itálico com a cor de ênfase. */
  em?: boolean
  color?: string
}

type SplitWordsProps = {
  segments: WordSegment[]
  /** Atraso base (ms) antes da primeira palavra. */
  baseDelay?: number
  /** Intervalo (ms) entre palavras. */
  step?: number
}

/**
 * Divide o texto em palavras para revelação em cascata (efeito "cortina").
 * Cada palavra sobe de dentro de uma máscara com overflow hidden quando o
 * ancestral .reveal ganha .is-visible (ou .hero-cascade no load da hero).
 *
 * Acessibilidade: o texto completo fica em aria-label; os spans decorativos
 * são aria-hidden — leitores de tela leem a frase inteira normalmente.
 */
export default function SplitWords({
  segments,
  baseDelay = 0,
  step = 55,
}: SplitWordsProps) {
  const fullText = segments.map((s) => s.text).join('')
  let wordIndex = 0

  return (
    <span aria-label={fullText} role="text">
      {segments.map((seg, si) => {
        const words = seg.text.split(/(\s+)/).filter(Boolean)
        return words.map((word, wi) => {
          if (/^\s+$/.test(word)) {
            return ' '
          }
          const delay = baseDelay + wordIndex * step
          wordIndex += 1
          const inner = (
            <span
              className="split-word-inner"
              style={{ '--wd': `${delay}ms` } as CSSProperties}
            >
              {word}
            </span>
          )
          return (
            <span
              key={`${si}-${wi}`}
              aria-hidden="true"
              className="split-word"
            >
              {seg.em ? (
                <em style={seg.color ? { color: seg.color } : undefined}>
                  {inner}
                </em>
              ) : (
                inner
              )}
            </span>
          )
        })
      })}
    </span>
  )
}
