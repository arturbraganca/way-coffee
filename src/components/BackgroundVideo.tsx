import { useEffect, useRef } from 'react'

/**
 * Vídeo de fundo da hero (Higgsfield AI — grãos verdes → torrados) com loop
 * manual e transições de fade suaves.
 *
 * - requestAnimationFrame monitora continuamente currentTime / duration
 * - fade-in nos primeiros 0,5s (opacidade 0 → 1)
 * - fade-out nos últimos 0,5s (opacidade 1 → 0)
 * - no evento `ended`: opacidade 0 → aguarda 100ms → currentTime = 0 → play()
 *
 * Arquivo em /public/video/cafe.mp4.
 */
const FADE_DURATION = 0.5 // segundos

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true

    const tick = () => {
      const { currentTime, duration } = video
      if (duration && !Number.isNaN(duration)) {
        let opacity = 1
        if (currentTime < FADE_DURATION) {
          opacity = currentTime / FADE_DURATION
        } else if (currentTime > duration - FADE_DURATION) {
          opacity = Math.max(0, (duration - currentTime) / FADE_DURATION)
        }
        video.style.opacity = String(opacity)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const handleEnded = () => {
      video.style.opacity = '0'
      window.setTimeout(() => {
        video.currentTime = 0
        void video.play()
      }, 100)
    }

    const startPlayback = () => {
      void video.play().catch(() => {
        /* autoplay bloqueado — ignora silenciosamente */
      })
    }

    video.addEventListener('ended', handleEnded)
    video.addEventListener('loadedmetadata', startPlayback)
    if (video.readyState >= 1) startPlayback()

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('loadedmetadata', startPlayback)
    }
  }, [])

  return (
    <div
      className="pointer-events-none absolute z-0"
      style={{ top: '300px', inset: 'auto 0 0 0' }}
    >
      <div className="relative h-[60vh] w-full">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{ opacity: 0, transition: 'opacity 60ms linear' }}
          src="/video/cafe.mp4"
          muted
          playsInline
          autoPlay
          preload="auto"
          aria-hidden="true"
        />
        {/* Sobreposições de gradiente sobre o vídeo */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    </div>
  )
}
