import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Camada de vídeo de fundo (z-0) + gradiente */}
      <BackgroundVideo />

      {/* Barra de navegação (z-10) */}
      <Navbar />

      {/* Seção principal (z-10) */}
      <Hero />
    </div>
  )
}
