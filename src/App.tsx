import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaminhoDoCafe from './components/sections/CaminhoDoCafe'
import Regioes from './components/sections/Regioes'
import Parceiros from './components/sections/Parceiros'
import Perfis from './components/sections/Perfis'
import Diferenciais from './components/sections/Diferenciais'
import Contato from './components/sections/Contato'
import Footer from './components/Footer'
import Marquee from './components/Marquee'

export default function App() {
  return (
    <div className="w-full bg-background">
      {/* Hero em tela cheia (vídeo de fundo recortado a esta seção) */}
      <section className="relative min-h-screen w-full overflow-hidden bg-background">
        <BackgroundVideo />
        <Navbar />
        <Hero />
      </section>

      {/* Corpo da landing */}
      <CaminhoDoCafe />
      <Regioes />
      <Marquee />
      <Parceiros />
      <Perfis />
      <Diferenciais />
      <Contato />
      <Footer />
    </div>
  )
}
