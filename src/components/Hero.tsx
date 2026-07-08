export default function Hero() {
  return (
    <main className="relative z-10">
      <section
        className="flex flex-col items-center justify-center px-6 pb-40 text-center"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        {/* Título */}
        <h1
          className="animate-fade-rise max-w-7xl font-serif text-5xl font-normal sm:text-7xl md:text-8xl"
          style={{
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
            color: '#000000',
          }}
        >
          Da <em style={{ color: '#8B5A2B' }}>origem</em> ao{' '}
          <em style={{ color: '#8B5A2B' }}>seu destino</em>.
        </h1>

        {/* Descrição */}
        <p
          className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: '#8B5A2B' }}
        >
          Exportação e importação de cafés verdes especiais, conectando
          produtores brasileiros aos melhores compradores do mundo.
        </p>

        {/* Botão CTA principal */}
        <a
          href="#"
          className="animate-fade-rise-delay-2 mt-12 rounded-full px-14 py-5 text-base text-white transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: '#1F1611', color: '#FFFFFF' }}
        >
          Comece a jornada
        </a>
      </section>
    </main>
  )
}
