import { useEffect, useRef, type ReactNode } from 'react'

type Variant = 'rise' | 'blur' | 'scale' | 'left' | 'right'

type RevealProps = {
  children: ReactNode
  /** Escalona a entrada (0.08s por unidade). */
  delay?: 1 | 2 | 3 | 4 | 5 | 6
  /** Tipo de transição de entrada. */
  variant?: Variant
  /** Elemento HTML a renderizar (default div). */
  as?: 'div' | 'li' | 'section' | 'span'
  className?: string
}

/**
 * Revela o conteúdo (transição suave) quando entra na viewport, uma única vez.
 * Só anima transform/opacity/filter (GPU-friendly). Respeita
 * prefers-reduced-motion via CSS (.reveal).
 */
export default function Reveal({
  children,
  delay,
  variant = 'rise',
  as: Tag = 'div',
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: sem IntersectionObserver, revela imediatamente.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${variant} ${className}`}
      data-delay={delay}
    >
      {children}
    </Tag>
  )
}
