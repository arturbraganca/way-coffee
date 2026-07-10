import { useEffect, useRef } from 'react'

/**
 * Parallax sutil para camadas DECORATIVAS (nunca texto corrido).
 * Move o elemento com translate3d proporcional à distância do centro da
 * viewport — só transform, rAF-throttled, passivo.
 *
 * speed: 0.05–0.15 recomendado (delta pequeno, sem desorientar).
 * Respeita prefers-reduced-motion (não move nada).
 */
export default function useParallax<T extends HTMLElement>(speed = 0.1) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) return

    let raf = 0
    let ticking = false

    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const raw = (elementCenter - viewportCenter) * speed
      // Delta pequeno (diretriz da skill): nunca desloca mais que 60px
      const offset = Math.max(-60, Math.min(60, raw))
      el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return ref
}
