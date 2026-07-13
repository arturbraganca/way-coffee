export type Lang = 'pt' | 'en' | 'es' | 'fr' | 'it'

export const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'it', label: 'IT', name: 'Italiano' },
]

export type Seg = { text: string; em?: boolean }

export type Dict = {
  nav: { inicio: string; origens: string; parceiros: string; sobre: string; contato: string; cta: string }
  hero: { title: Seg[]; description: string; cta: string }
  caminho: {
    eyebrow: string
    title: Seg[]
    p1: string
    p2: string
    quote: [string, string, string]
  }
  regioes: {
    eyebrow: string
    title: Seg[]
    cards: { eyebrow: string; title: string; body: string }[]
  }
  parceiros: {
    eyebrow: string
    title: Seg[]
    intro: string
    since: string
    items: { subtitle: string; paragraphs: [string, string]; highlight: string | null }[]
  }
  perfis: {
    eyebrow: string
    title: Seg[]
    cards: { title: string; body: string }[]
  }
  diferenciais: {
    eyebrow: string
    title: Seg[]
    support: string
    items: { label: string; desc: string }[]
  }
  contato: {
    eyebrow: string
    title: Seg[]
    description: string
    labels: { nome: string; empresa: string; email: string; pais: string; volume: string; mensagem: string }
    placeholders: { nome: string; empresa: string; email: string; pais: string; volume: string; mensagem: string }
    countries: string[]
    volumes: string[]
    submit: string
    microcopy: string
    success: { title: string; body: string }
  }
  footer: {
    tagline: string
    axis: string
    navHeading: string
    navLinks: string[]
    contactHeading: string
    rights: string
    bottomTagline: string
  }
}

export const translations: Record<Lang, Dict> = {
  // ---------------------------------------------------------------- PT
  pt: {
    nav: { inicio: 'Início', origens: 'Origens', parceiros: 'Parceiros', sobre: 'Sobre Nós', contato: 'Contato', cta: 'Comece a Jornada' },
    hero: {
      title: [{ text: 'Da ' }, { text: 'origem', em: true }, { text: ' ao ' }, { text: 'seu destino', em: true }, { text: '.' }],
      description: 'Exportação e importação de cafés verdes especiais, conectando produtores brasileiros aos melhores compradores do mundo.',
      cta: 'Comece a jornada',
    },
    caminho: {
      eyebrow: 'Histórias que ligam o Brasil à Europa',
      title: [{ text: 'O caminho do ' }, { text: 'café', em: true }, { text: '.' }],
      p1: 'Nas montanhas de Minas Gerais e nas terras altas do Espírito Santo, onde o nascer do sol ilumina os cafezais e o aroma do café faz parte da vida cotidiana, nasce uma história de união, dedicação e confiança.',
      p2: 'Cada colheita, cada grão e cada safra ajudam a construir uma ponte entre produtores brasileiros e torrefações europeias — uma cadeia curta, direta e rastreável, do campo à chávena.',
      quote: ['Cada café tem uma origem.', 'Cada origem tem uma história.', 'E cada história merece ser partilhada.'],
    },
    regioes: {
      eyebrow: 'Nossas regiões',
      title: [{ text: 'De onde vêm os ' }, { text: 'nossos cafés', em: true }, { text: '.' }],
      cards: [
        { eyebrow: 'Sul de Minas & Cerrado Mineiro', title: 'Cafés de altitude', body: 'Cultivados entre 900 e 1250 metros de altitude, em regiões reconhecidas mundialmente pela tradição cafeeira e pelo compromisso com a sustentabilidade.' },
        { eyebrow: 'Matas de Minas & Mogiana', title: 'Microlotes selecionados', body: 'Cultivados a mais de 1300 metros de altitude, em lotes de produção rigorosamente controlada, com foco absoluto em qualidade.' },
        { eyebrow: 'Chapada de Minas', title: 'Tradição familiar', body: 'Café cultivado entre 900 e 930 metros acima do nível do mar, com processos especiais que resultam em perfis sensoriais únicos.' },
        { eyebrow: 'Espírito Santo', title: 'Robusta especial', body: 'Uma das principais referências mundiais na produção de café Robusta especial, com investimento contínuo em tecnologia e práticas sustentáveis.' },
      ],
    },
    parceiros: {
      eyebrow: 'Quem cultiva',
      title: [{ text: 'Os parceiros por trás de cada ' }, { text: 'safra', em: true }, { text: '.' }],
      intro: 'A Way Coffee trabalha lado a lado com cooperativas e produtores brasileiros que carregam décadas de tradição, tecnologia e compromisso com a qualidade. Cada parceria é construída sobre confiança — e cada café carrega essa história.',
      since: 'Desde',
      items: [
        { subtitle: 'Mais de 90 anos de tradição cafeeira', paragraphs: ['Fundada em 1932, a Cooxupé tornou-se a maior cooperativa de cafés do mundo, reunindo milhares de famílias produtoras nas principais regiões de Minas Gerais.', 'Reconhecida internacionalmente pela sua excelência, rastreabilidade e compromisso com a sustentabilidade, representa uma das maiores referências mundiais na produção de café de qualidade.'], highlight: 'Milhares de famílias produtoras · Rastreabilidade total' },
        { subtitle: 'Herança japonesa, excelência brasileira', paragraphs: ['A história da família Nakamura começou no Japão e encontrou nas montanhas brasileiras o lugar ideal para desenvolver um café especial cheio de alma.', 'Ao longo das gerações, a família construiu uma produção baseada na dedicação, disciplina e respeito constante pela qualidade — valores que atravessam oceanos e chegam a cada chávena.'], highlight: 'Chapada de Minas Gerais · Tradição familiar de gerações' },
        { subtitle: 'A referência do Robusta brasileiro', paragraphs: ['Localizada no Espírito Santo, a Cooabriel é uma das maiores cooperativas de cafés Robusta do Brasil e uma das principais referências mundiais nesta variedade.', 'Os seus cooperados investem continuamente em tecnologia e práticas sustentáveis, e os cafés Robusta especiais ganham espaço entre as exigências dos mercados internacionais.'], highlight: null },
      ],
    },
    perfis: {
      eyebrow: 'Perfis de café',
      title: [{ text: 'Notas que contam a ' }, { text: 'origem', em: true }, { text: '.' }],
      cards: [
        { title: 'Frutado & Cítrico', body: 'Frutas amarelas, manga, laranja, acidez cítrica, corpo cremoso.' },
        { title: 'Doce & Encorpado', body: 'Notas de chocolate, frutos secos, doçura equilibrada, final limpo.' },
        { title: 'Floral & Complexo', body: 'Frutado, frutas amarelas, notas florais, damasco, final doce.' },
        { title: 'Aromático & Cítrico', body: 'Compota de laranja, avelã e nectarina.' },
      ],
    },
    diferenciais: {
      eyebrow: 'Por que a Way Coffee',
      title: [{ text: 'O que nos ' }, { text: 'diferencia', em: true }, { text: '.' }],
      support: 'Todos os cafés são exportados diretamente por produtores brasileiros selecionados, com acompanhamento comercial dedicado do primeiro contato à entrega.',
      items: [
        { label: 'Exportação direta', desc: 'Do produtor ao porto, sem intermediários desnecessários — negociação transparente do início ao fim.' },
        { label: 'Rastreabilidade', desc: 'Cada lote documentado da fazenda ao contêiner, com origem verificável em todas as etapas.' },
        { label: 'Parcerias diretas', desc: 'Relações de longo prazo com as cooperativas e famílias que cultivam cada safra.' },
        { label: 'Qualidade certificada', desc: 'Amostras avaliadas e aprovadas antes de cada embarque, com classificação rigorosa.' },
        { label: 'Suporte comercial', desc: 'Acompanhamento dedicado do primeiro contato à entrega, em cada mercado europeu.' },
      ],
    },
    contato: {
      eyebrow: 'Fale conosco',
      title: [{ text: 'Vamos construir esta ' }, { text: 'ponte', em: true }, { text: ' juntos.' }],
      description: 'Torrefação, importadora ou distribuidor especializado? Conte-nos sobre a sua operação e preparamos uma proposta sob medida — origem, volume e prazos alinhados à sua necessidade.',
      labels: { nome: 'Nome', empresa: 'Empresa', email: 'E-mail', pais: 'País', volume: 'Volume mensal', mensagem: 'Mensagem' },
      placeholders: { nome: 'Seu nome', empresa: 'Nome da empresa', email: 'voce@empresa.com', pais: 'Selecione', volume: 'Selecione uma faixa', mensagem: 'Conte-nos sobre a sua operação e o que procura.' },
      countries: ['Portugal', 'Espanha', 'Itália', 'França', 'Alemanha', 'Países Baixos', 'Bélgica', 'Reino Unido', 'Suíça', 'Outro'],
      volumes: ['Menos de 5 toneladas / mês', '5 a 20 toneladas / mês', '20 a 50 toneladas / mês', 'Mais de 50 toneladas / mês', 'Ainda a definir'],
      submit: 'Solicitar Proposta',
      microcopy: 'Ao solicitar, abrimos o WhatsApp com os seus dados — respondemos em até 24h úteis.',
      success: { title: 'Quase lá!', body: 'Abrimos o WhatsApp com os seus dados preenchidos. Toque em enviar por lá para concluir a sua solicitação.' },
    },
    footer: {
      tagline: 'Exportação de cafés verdes especiais do Brasil para o mercado europeu — uma cadeia curta, direta e rastreável, do campo à chávena.',
      axis: 'Brasil   ⇄   Europa',
      navHeading: 'Navegação',
      navLinks: ['Início', 'O caminho do café', 'Regiões de origem', 'Nossos parceiros', 'Perfis de café', 'Diferenciais', 'Contato'],
      contactHeading: 'Contato',
      rights: 'Todos os direitos reservados.',
      bottomTagline: 'Cafés verdes especiais · Origem rastreável',
    },
  },

  // ---------------------------------------------------------------- EN
  en: {
    nav: { inicio: 'Home', origens: 'Origins', parceiros: 'Partners', sobre: 'About', contato: 'Contact', cta: 'Start the Journey' },
    hero: {
      title: [{ text: 'From ' }, { text: 'origin', em: true }, { text: ' to ' }, { text: 'your destination', em: true }, { text: '.' }],
      description: 'Export and import of specialty green coffees, connecting Brazilian producers with the finest buyers in the world.',
      cta: 'Start the journey',
    },
    caminho: {
      eyebrow: 'Stories that link Brazil to Europe',
      title: [{ text: 'The journey of ' }, { text: 'coffee', em: true }, { text: '.' }],
      p1: 'In the mountains of Minas Gerais and the highlands of Espírito Santo, where sunrise lights up the coffee fields and the aroma of coffee is part of everyday life, a story of unity, dedication and trust is born.',
      p2: 'Every harvest, every bean and every crop help build a bridge between Brazilian producers and European roasters — a short, direct and traceable chain, from field to cup.',
      quote: ['Every coffee has an origin.', 'Every origin has a story.', 'And every story deserves to be shared.'],
    },
    regioes: {
      eyebrow: 'Our regions',
      title: [{ text: 'Where our ' }, { text: 'coffees', em: true }, { text: ' come from.' }],
      cards: [
        { eyebrow: 'Sul de Minas & Cerrado Mineiro', title: 'High-altitude coffees', body: 'Grown between 900 and 1250 metres of altitude, in regions recognised worldwide for their coffee tradition and commitment to sustainability.' },
        { eyebrow: 'Matas de Minas & Mogiana', title: 'Selected microlots', body: 'Grown above 1300 metres of altitude, in rigorously controlled production lots, with an absolute focus on quality.' },
        { eyebrow: 'Chapada de Minas', title: 'Family tradition', body: 'Coffee grown between 900 and 930 metres above sea level, with special processes that result in unique sensory profiles.' },
        { eyebrow: 'Espírito Santo', title: 'Specialty Robusta', body: 'One of the world’s leading references in specialty Robusta production, with continuous investment in technology and sustainable practices.' },
      ],
    },
    parceiros: {
      eyebrow: 'Who grows it',
      title: [{ text: 'The partners behind every ' }, { text: 'harvest', em: true }, { text: '.' }],
      intro: 'Way Coffee works side by side with Brazilian cooperatives and producers who carry decades of tradition, technology and commitment to quality. Every partnership is built on trust — and every coffee carries that story.',
      since: 'Since',
      items: [
        { subtitle: 'Over 90 years of coffee tradition', paragraphs: ['Founded in 1932, Cooxupé became the largest coffee cooperative in the world, bringing together thousands of producing families across the main regions of Minas Gerais.', 'Internationally recognised for its excellence, traceability and commitment to sustainability, it is one of the world’s leading references in quality coffee production.'], highlight: 'Thousands of producing families · Full traceability' },
        { subtitle: 'Japanese heritage, Brazilian excellence', paragraphs: ['The Nakamura family’s story began in Japan and found in the Brazilian mountains the ideal place to develop a specialty coffee full of soul.', 'Across generations, the family built a production based on dedication, discipline and constant respect for quality — values that cross oceans and reach every cup.'], highlight: 'Chapada de Minas Gerais · Generations of family tradition' },
        { subtitle: 'The reference for Brazilian Robusta', paragraphs: ['Located in Espírito Santo, Cooabriel is one of the largest Robusta coffee cooperatives in Brazil and one of the world’s leading references for this variety.', 'Its members invest continuously in technology and sustainable practices, and specialty Robusta coffees are gaining ground among the demands of international markets.'], highlight: null },
      ],
    },
    perfis: {
      eyebrow: 'Coffee profiles',
      title: [{ text: 'Notes that tell the ' }, { text: 'origin', em: true }, { text: '.' }],
      cards: [
        { title: 'Fruity & Citrus', body: 'Yellow fruits, mango, orange, citric acidity, creamy body.' },
        { title: 'Sweet & Full-bodied', body: 'Chocolate notes, nuts, balanced sweetness, clean finish.' },
        { title: 'Floral & Complex', body: 'Fruity, yellow fruits, floral notes, apricot, sweet finish.' },
        { title: 'Aromatic & Citrus', body: 'Orange marmalade, hazelnut and nectarine.' },
      ],
    },
    diferenciais: {
      eyebrow: 'Why Way Coffee',
      title: [{ text: 'What sets us ' }, { text: 'apart', em: true }, { text: '.' }],
      support: 'All coffees are exported directly by selected Brazilian producers, with dedicated commercial support from first contact to delivery.',
      items: [
        { label: 'Direct export', desc: 'From producer to port, with no unnecessary middlemen — transparent negotiation from start to finish.' },
        { label: 'Traceability', desc: 'Every lot documented from farm to container, with verifiable origin at every step.' },
        { label: 'Direct partnerships', desc: 'Long-term relationships with the cooperatives and families that grow each harvest.' },
        { label: 'Certified quality', desc: 'Samples evaluated and approved before every shipment, with rigorous grading.' },
        { label: 'Commercial support', desc: 'Dedicated follow-up from first contact to delivery, in every European market.' },
      ],
    },
    contato: {
      eyebrow: 'Get in touch',
      title: [{ text: "Let's build this " }, { text: 'bridge', em: true }, { text: ' together.' }],
      description: 'Roaster, importer or specialty distributor? Tell us about your operation and we’ll prepare a tailored proposal — origin, volume and timelines aligned to your needs.',
      labels: { nome: 'Name', empresa: 'Company', email: 'Email', pais: 'Country', volume: 'Monthly volume', mensagem: 'Message' },
      placeholders: { nome: 'Your name', empresa: 'Company name', email: 'you@company.com', pais: 'Select', volume: 'Select a range', mensagem: 'Tell us about your operation and what you are looking for.' },
      countries: ['Portugal', 'Spain', 'Italy', 'France', 'Germany', 'Netherlands', 'Belgium', 'United Kingdom', 'Switzerland', 'Other'],
      volumes: ['Less than 5 tonnes / month', '5 to 20 tonnes / month', '20 to 50 tonnes / month', 'More than 50 tonnes / month', 'To be defined'],
      submit: 'Request a Proposal',
      microcopy: 'When you submit, we open WhatsApp with your details — we reply within 24 business hours.',
      success: { title: 'Almost there!', body: 'We’ve opened WhatsApp with your details filled in. Tap send there to complete your request.' },
    },
    footer: {
      tagline: 'Export of specialty green coffees from Brazil to the European market — a short, direct and traceable chain, from field to cup.',
      axis: 'Brazil   ⇄   Europe',
      navHeading: 'Navigation',
      navLinks: ['Home', 'The journey of coffee', 'Regions of origin', 'Our partners', 'Coffee profiles', 'Differentials', 'Contact'],
      contactHeading: 'Contact',
      rights: 'All rights reserved.',
      bottomTagline: 'Specialty green coffees · Traceable origin',
    },
  },

  // ---------------------------------------------------------------- ES
  es: {
    nav: { inicio: 'Inicio', origens: 'Orígenes', parceiros: 'Socios', sobre: 'Nosotros', contato: 'Contacto', cta: 'Comienza el viaje' },
    hero: {
      title: [{ text: 'Del ' }, { text: 'origen', em: true }, { text: ' a ' }, { text: 'su destino', em: true }, { text: '.' }],
      description: 'Exportación e importación de cafés verdes especiales, conectando a productores brasileños con los mejores compradores del mundo.',
      cta: 'Comienza el viaje',
    },
    caminho: {
      eyebrow: 'Historias que unen Brasil y Europa',
      title: [{ text: 'El camino del ' }, { text: 'café', em: true }, { text: '.' }],
      p1: 'En las montañas de Minas Gerais y en las tierras altas de Espírito Santo, donde el amanecer ilumina los cafetales y el aroma del café es parte de la vida cotidiana, nace una historia de unión, dedicación y confianza.',
      p2: 'Cada cosecha, cada grano y cada zafra ayudan a construir un puente entre los productores brasileños y los tostadores europeos — una cadena corta, directa y trazable, del campo a la taza.',
      quote: ['Cada café tiene un origen.', 'Cada origen tiene una historia.', 'Y cada historia merece ser compartida.'],
    },
    regioes: {
      eyebrow: 'Nuestras regiones',
      title: [{ text: 'De dónde vienen ' }, { text: 'nuestros cafés', em: true }, { text: '.' }],
      cards: [
        { eyebrow: 'Sul de Minas & Cerrado Mineiro', title: 'Cafés de altura', body: 'Cultivados entre 900 y 1250 metros de altitud, en regiones reconocidas mundialmente por su tradición cafetera y su compromiso con la sostenibilidad.' },
        { eyebrow: 'Matas de Minas & Mogiana', title: 'Microlotes seleccionados', body: 'Cultivados a más de 1300 metros de altitud, en lotes de producción rigurosamente controlada, con un enfoque absoluto en la calidad.' },
        { eyebrow: 'Chapada de Minas', title: 'Tradición familiar', body: 'Café cultivado entre 900 y 930 metros sobre el nivel del mar, con procesos especiales que dan lugar a perfiles sensoriales únicos.' },
        { eyebrow: 'Espírito Santo', title: 'Robusta especial', body: 'Una de las principales referencias mundiales en la producción de café Robusta especial, con inversión continua en tecnología y prácticas sostenibles.' },
      ],
    },
    parceiros: {
      eyebrow: 'Quién lo cultiva',
      title: [{ text: 'Los socios detrás de cada ' }, { text: 'cosecha', em: true }, { text: '.' }],
      intro: 'Way Coffee trabaja codo a codo con cooperativas y productores brasileños que atesoran décadas de tradición, tecnología y compromiso con la calidad. Cada alianza se construye sobre la confianza — y cada café lleva esa historia.',
      since: 'Desde',
      items: [
        { subtitle: 'Más de 90 años de tradición cafetera', paragraphs: ['Fundada en 1932, Cooxupé se convirtió en la mayor cooperativa de café del mundo, reuniendo a miles de familias productoras en las principales regiones de Minas Gerais.', 'Reconocida internacionalmente por su excelencia, trazabilidad y compromiso con la sostenibilidad, es una de las mayores referencias mundiales en la producción de café de calidad.'], highlight: 'Miles de familias productoras · Trazabilidad total' },
        { subtitle: 'Herencia japonesa, excelencia brasileña', paragraphs: ['La historia de la familia Nakamura comenzó en Japón y encontró en las montañas brasileñas el lugar ideal para desarrollar un café especial lleno de alma.', 'A lo largo de generaciones, la familia construyó una producción basada en la dedicación, la disciplina y el respeto constante por la calidad — valores que cruzan océanos y llegan a cada taza.'], highlight: 'Chapada de Minas Gerais · Tradición familiar de generaciones' },
        { subtitle: 'La referencia del Robusta brasileño', paragraphs: ['Ubicada en Espírito Santo, Cooabriel es una de las mayores cooperativas de café Robusta de Brasil y una de las principales referencias mundiales en esta variedad.', 'Sus asociados invierten continuamente en tecnología y prácticas sostenibles, y los cafés Robusta especiales ganan terreno entre las exigencias de los mercados internacionales.'], highlight: null },
      ],
    },
    perfis: {
      eyebrow: 'Perfiles de café',
      title: [{ text: 'Notas que cuentan el ' }, { text: 'origen', em: true }, { text: '.' }],
      cards: [
        { title: 'Afrutado & Cítrico', body: 'Frutas amarillas, mango, naranja, acidez cítrica, cuerpo cremoso.' },
        { title: 'Dulce & Con cuerpo', body: 'Notas de chocolate, frutos secos, dulzor equilibrado, final limpio.' },
        { title: 'Floral & Complejo', body: 'Afrutado, frutas amarillas, notas florales, albaricoque, final dulce.' },
        { title: 'Aromático & Cítrico', body: 'Mermelada de naranja, avellana y nectarina.' },
      ],
    },
    diferenciais: {
      eyebrow: 'Por qué Way Coffee',
      title: [{ text: 'Lo que nos ' }, { text: 'diferencia', em: true }, { text: '.' }],
      support: 'Todos los cafés se exportan directamente por productores brasileños seleccionados, con acompañamiento comercial dedicado desde el primer contacto hasta la entrega.',
      items: [
        { label: 'Exportación directa', desc: 'Del productor al puerto, sin intermediarios innecesarios — negociación transparente de principio a fin.' },
        { label: 'Trazabilidad', desc: 'Cada lote documentado de la finca al contenedor, con origen verificable en cada etapa.' },
        { label: 'Alianzas directas', desc: 'Relaciones a largo plazo con las cooperativas y familias que cultivan cada cosecha.' },
        { label: 'Calidad certificada', desc: 'Muestras evaluadas y aprobadas antes de cada embarque, con clasificación rigurosa.' },
        { label: 'Soporte comercial', desc: 'Acompañamiento dedicado desde el primer contacto hasta la entrega, en cada mercado europeo.' },
      ],
    },
    contato: {
      eyebrow: 'Hablemos',
      title: [{ text: 'Construyamos este ' }, { text: 'puente', em: true }, { text: ' juntos.' }],
      description: '¿Tostador, importador o distribuidor especializado? Cuéntanos sobre tu operación y preparamos una propuesta a medida — origen, volumen y plazos alineados con tu necesidad.',
      labels: { nome: 'Nombre', empresa: 'Empresa', email: 'Correo', pais: 'País', volume: 'Volumen mensual', mensagem: 'Mensaje' },
      placeholders: { nome: 'Tu nombre', empresa: 'Nombre de la empresa', email: 'tu@empresa.com', pais: 'Selecciona', volume: 'Selecciona un rango', mensagem: 'Cuéntanos sobre tu operación y lo que buscas.' },
      countries: ['Portugal', 'España', 'Italia', 'Francia', 'Alemania', 'Países Bajos', 'Bélgica', 'Reino Unido', 'Suiza', 'Otro'],
      volumes: ['Menos de 5 toneladas / mes', '5 a 20 toneladas / mes', '20 a 50 toneladas / mes', 'Más de 50 toneladas / mes', 'Por definir'],
      submit: 'Solicitar propuesta',
      microcopy: 'Al solicitar, abrimos WhatsApp con tus datos — respondemos en un plazo de 24 h hábiles.',
      success: { title: '¡Casi listo!', body: 'Hemos abierto WhatsApp con tus datos ya rellenados. Toca enviar allí para completar tu solicitud.' },
    },
    footer: {
      tagline: 'Exportación de cafés verdes especiales de Brasil al mercado europeo — una cadena corta, directa y trazable, del campo a la taza.',
      axis: 'Brasil   ⇄   Europa',
      navHeading: 'Navegación',
      navLinks: ['Inicio', 'El camino del café', 'Regiones de origen', 'Nuestros socios', 'Perfiles de café', 'Diferenciales', 'Contacto'],
      contactHeading: 'Contacto',
      rights: 'Todos los derechos reservados.',
      bottomTagline: 'Cafés verdes especiales · Origen trazable',
    },
  },

  // ---------------------------------------------------------------- FR
  fr: {
    nav: { inicio: 'Accueil', origens: 'Origines', parceiros: 'Partenaires', sobre: 'À propos', contato: 'Contact', cta: 'Commencer le voyage' },
    hero: {
      title: [{ text: 'De ' }, { text: "l'origine", em: true }, { text: ' à ' }, { text: 'votre destination', em: true }, { text: '.' }],
      description: 'Exportation et importation de cafés verts de spécialité, reliant les producteurs brésiliens aux meilleurs acheteurs du monde.',
      cta: 'Commencer le voyage',
    },
    caminho: {
      eyebrow: "Des histoires qui relient le Brésil à l'Europe",
      title: [{ text: 'Le voyage du ' }, { text: 'café', em: true }, { text: '.' }],
      p1: "Dans les montagnes du Minas Gerais et sur les hauteurs de l'Espírito Santo, où le lever du soleil illumine les caféières et où l'arôme du café fait partie du quotidien, naît une histoire d'union, de dévouement et de confiance.",
      p2: 'Chaque récolte, chaque grain et chaque saison contribuent à bâtir un pont entre les producteurs brésiliens et les torréfacteurs européens — une chaîne courte, directe et traçable, du champ à la tasse.',
      quote: ['Chaque café a une origine.', 'Chaque origine a une histoire.', "Et chaque histoire mérite d'être partagée."],
    },
    regioes: {
      eyebrow: 'Nos régions',
      title: [{ text: "D'où viennent " }, { text: 'nos cafés', em: true }, { text: '.' }],
      cards: [
        { eyebrow: 'Sul de Minas & Cerrado Mineiro', title: "Cafés d'altitude", body: "Cultivés entre 900 et 1250 mètres d'altitude, dans des régions mondialement reconnues pour leur tradition caféière et leur engagement envers la durabilité." },
        { eyebrow: 'Matas de Minas & Mogiana', title: 'Microlots sélectionnés', body: "Cultivés à plus de 1300 mètres d'altitude, dans des lots de production rigoureusement contrôlés, avec un souci absolu de la qualité." },
        { eyebrow: 'Chapada de Minas', title: 'Tradition familiale', body: 'Café cultivé entre 900 et 930 mètres au-dessus du niveau de la mer, avec des procédés spéciaux qui donnent des profils sensoriels uniques.' },
        { eyebrow: 'Espírito Santo', title: 'Robusta de spécialité', body: 'Une des principales références mondiales dans la production de Robusta de spécialité, avec un investissement continu dans la technologie et les pratiques durables.' },
      ],
    },
    parceiros: {
      eyebrow: 'Qui le cultive',
      title: [{ text: 'Les partenaires derrière chaque ' }, { text: 'récolte', em: true }, { text: '.' }],
      intro: "Way Coffee travaille aux côtés de coopératives et de producteurs brésiliens porteurs de décennies de tradition, de technologie et d'exigence de qualité. Chaque partenariat se bâtit sur la confiance — et chaque café porte cette histoire.",
      since: 'Depuis',
      items: [
        { subtitle: 'Plus de 90 ans de tradition caféière', paragraphs: ['Fondée en 1932, Cooxupé est devenue la plus grande coopérative de café au monde, réunissant des milliers de familles productrices dans les principales régions du Minas Gerais.', "Reconnue internationalement pour son excellence, sa traçabilité et son engagement envers la durabilité, elle est l'une des plus grandes références mondiales de la production de café de qualité."], highlight: 'Des milliers de familles productrices · Traçabilité totale' },
        { subtitle: 'Héritage japonais, excellence brésilienne', paragraphs: ["L'histoire de la famille Nakamura a commencé au Japon et a trouvé dans les montagnes brésiliennes l'endroit idéal pour développer un café de spécialité plein d'âme.", 'Au fil des générations, la famille a bâti une production fondée sur le dévouement, la discipline et un respect constant de la qualité — des valeurs qui traversent les océans et parviennent jusqu’à chaque tasse.'], highlight: 'Chapada de Minas Gerais · Tradition familiale de générations' },
        { subtitle: 'La référence du Robusta brésilien', paragraphs: ["Située dans l'Espírito Santo, Cooabriel est l'une des plus grandes coopératives de café Robusta du Brésil et l'une des principales références mondiales pour cette variété.", 'Ses coopérateurs investissent continuellement dans la technologie et les pratiques durables, et les cafés Robusta de spécialité gagnent du terrain face aux exigences des marchés internationaux.'], highlight: null },
      ],
    },
    perfis: {
      eyebrow: 'Profils de café',
      title: [{ text: "Des notes qui racontent l'" }, { text: 'origine', em: true }, { text: '.' }],
      cards: [
        { title: 'Fruité & Agrumes', body: 'Fruits jaunes, mangue, orange, acidité citrique, corps crémeux.' },
        { title: 'Doux & Corsé', body: 'Notes de chocolat, fruits secs, douceur équilibrée, finale nette.' },
        { title: 'Floral & Complexe', body: 'Fruité, fruits jaunes, notes florales, abricot, finale douce.' },
        { title: 'Aromatique & Agrumes', body: "Marmelade d'orange, noisette et nectarine." },
      ],
    },
    diferenciais: {
      eyebrow: 'Pourquoi Way Coffee',
      title: [{ text: 'Ce qui nous ' }, { text: 'distingue', em: true }, { text: '.' }],
      support: "Tous les cafés sont exportés directement par des producteurs brésiliens sélectionnés, avec un accompagnement commercial dédié du premier contact à la livraison.",
      items: [
        { label: 'Exportation directe', desc: "Du producteur au port, sans intermédiaires inutiles — une négociation transparente du début à la fin." },
        { label: 'Traçabilité', desc: "Chaque lot documenté de la ferme au conteneur, avec une origine vérifiable à chaque étape." },
        { label: 'Partenariats directs', desc: 'Des relations durables avec les coopératives et les familles qui cultivent chaque récolte.' },
        { label: 'Qualité certifiée', desc: 'Échantillons évalués et approuvés avant chaque expédition, avec un classement rigoureux.' },
        { label: 'Support commercial', desc: 'Un suivi dédié du premier contact à la livraison, sur chaque marché européen.' },
      ],
    },
    contato: {
      eyebrow: 'Contactez-nous',
      title: [{ text: 'Construisons ce ' }, { text: 'pont', em: true }, { text: ' ensemble.' }],
      description: 'Torréfacteur, importateur ou distributeur spécialisé ? Parlez-nous de votre activité et nous préparerons une proposition sur mesure — origine, volume et délais adaptés à vos besoins.',
      labels: { nome: 'Nom', empresa: 'Entreprise', email: 'E-mail', pais: 'Pays', volume: 'Volume mensuel', mensagem: 'Message' },
      placeholders: { nome: 'Votre nom', empresa: "Nom de l'entreprise", email: 'vous@entreprise.com', pais: 'Sélectionnez', volume: 'Sélectionnez une plage', mensagem: 'Parlez-nous de votre activité et de ce que vous recherchez.' },
      countries: ['Portugal', 'Espagne', 'Italie', 'France', 'Allemagne', 'Pays-Bas', 'Belgique', 'Royaume-Uni', 'Suisse', 'Autre'],
      volumes: ['Moins de 5 tonnes / mois', '5 à 20 tonnes / mois', '20 à 50 tonnes / mois', 'Plus de 50 tonnes / mois', 'À définir'],
      submit: 'Demander une proposition',
      microcopy: 'En envoyant, nous ouvrons WhatsApp avec vos informations — nous répondons sous 24 h ouvrées.',
      success: { title: 'Presque terminé !', body: 'Nous avons ouvert WhatsApp avec vos informations pré-remplies. Appuyez sur envoyer là-bas pour finaliser votre demande.' },
    },
    footer: {
      tagline: "Exportation de cafés verts de spécialité du Brésil vers le marché européen — une chaîne courte, directe et traçable, du champ à la tasse.",
      axis: 'Brésil   ⇄   Europe',
      navHeading: 'Navigation',
      navLinks: ['Accueil', 'Le voyage du café', "Régions d'origine", 'Nos partenaires', 'Profils de café', 'Atouts', 'Contact'],
      contactHeading: 'Contact',
      rights: 'Tous droits réservés.',
      bottomTagline: 'Cafés verts de spécialité · Origine traçable',
    },
  },

  // ---------------------------------------------------------------- IT
  it: {
    nav: { inicio: 'Home', origens: 'Origini', parceiros: 'Partner', sobre: 'Chi siamo', contato: 'Contatti', cta: 'Inizia il viaggio' },
    hero: {
      title: [{ text: "Dall'" }, { text: 'origine', em: true }, { text: ' alla ' }, { text: 'vostra destinazione', em: true }, { text: '.' }],
      description: 'Esportazione e importazione di caffè verdi speciali, collegando i produttori brasiliani ai migliori acquirenti del mondo.',
      cta: 'Inizia il viaggio',
    },
    caminho: {
      eyebrow: "Storie che collegano il Brasile all'Europa",
      title: [{ text: 'Il viaggio del ' }, { text: 'caffè', em: true }, { text: '.' }],
      p1: "Sulle montagne del Minas Gerais e sugli altipiani dell'Espírito Santo, dove l'alba illumina le piantagioni e l'aroma del caffè fa parte della vita quotidiana, nasce una storia di unione, dedizione e fiducia.",
      p2: 'Ogni raccolto, ogni chicco e ogni annata contribuiscono a costruire un ponte tra i produttori brasiliani e i torrefattori europei — una filiera corta, diretta e tracciabile, dal campo alla tazza.',
      quote: ['Ogni caffè ha un’origine.', 'Ogni origine ha una storia.', 'E ogni storia merita di essere condivisa.'],
    },
    regioes: {
      eyebrow: 'Le nostre regioni',
      title: [{ text: 'Da dove vengono i ' }, { text: 'nostri caffè', em: true }, { text: '.' }],
      cards: [
        { eyebrow: 'Sul de Minas & Cerrado Mineiro', title: "Caffè d'altitudine", body: "Coltivati tra i 900 e i 1250 metri di altitudine, in regioni riconosciute a livello mondiale per la tradizione del caffè e l'impegno verso la sostenibilità." },
        { eyebrow: 'Matas de Minas & Mogiana', title: 'Microlotti selezionati', body: 'Coltivati oltre i 1300 metri di altitudine, in lotti di produzione rigorosamente controllati, con un’attenzione assoluta alla qualità.' },
        { eyebrow: 'Chapada de Minas', title: 'Tradizione familiare', body: 'Caffè coltivato tra i 900 e i 930 metri sul livello del mare, con processi speciali che danno profili sensoriali unici.' },
        { eyebrow: 'Espírito Santo', title: 'Robusta speciale', body: 'Uno dei principali riferimenti mondiali nella produzione di Robusta speciale, con investimenti continui in tecnologia e pratiche sostenibili.' },
      ],
    },
    parceiros: {
      eyebrow: 'Chi lo coltiva',
      title: [{ text: 'I partner dietro ogni ' }, { text: 'raccolto', em: true }, { text: '.' }],
      intro: 'Way Coffee lavora fianco a fianco con cooperative e produttori brasiliani che portano con sé decenni di tradizione, tecnologia e impegno per la qualità. Ogni collaborazione si costruisce sulla fiducia — e ogni caffè porta con sé questa storia.',
      since: 'Dal',
      items: [
        { subtitle: 'Oltre 90 anni di tradizione del caffè', paragraphs: ['Fondata nel 1932, Cooxupé è diventata la più grande cooperativa di caffè al mondo, riunendo migliaia di famiglie produttrici nelle principali regioni del Minas Gerais.', "Riconosciuta a livello internazionale per l'eccellenza, la tracciabilità e l'impegno verso la sostenibilità, è uno dei maggiori riferimenti mondiali nella produzione di caffè di qualità."], highlight: 'Migliaia di famiglie produttrici · Tracciabilità totale' },
        { subtitle: 'Eredità giapponese, eccellenza brasiliana', paragraphs: ['La storia della famiglia Nakamura è iniziata in Giappone e ha trovato nelle montagne brasiliane il luogo ideale per sviluppare un caffè speciale pieno di anima.', 'Nel corso delle generazioni, la famiglia ha costruito una produzione basata su dedizione, disciplina e rispetto costante per la qualità — valori che attraversano gli oceani e arrivano in ogni tazza.'], highlight: 'Chapada de Minas Gerais · Tradizione familiare di generazioni' },
        { subtitle: 'Il riferimento del Robusta brasiliano', paragraphs: ["Situata nell'Espírito Santo, Cooabriel è una delle più grandi cooperative di caffè Robusta del Brasile e uno dei principali riferimenti mondiali per questa varietà.", 'I suoi soci investono di continuo in tecnologia e pratiche sostenibili, e i caffè Robusta speciali guadagnano spazio tra le esigenze dei mercati internazionali.'], highlight: null },
      ],
    },
    perfis: {
      eyebrow: 'Profili di caffè',
      title: [{ text: "Note che raccontano l'" }, { text: 'origine', em: true }, { text: '.' }],
      cards: [
        { title: 'Fruttato & Agrumato', body: 'Frutta gialla, mango, arancia, acidità citrica, corpo cremoso.' },
        { title: 'Dolce & Corposo', body: 'Note di cioccolato, frutta secca, dolcezza equilibrata, finale pulito.' },
        { title: 'Floreale & Complesso', body: 'Fruttato, frutta gialla, note floreali, albicocca, finale dolce.' },
        { title: 'Aromatico & Agrumato', body: 'Marmellata di arance, nocciola e nettarina.' },
      ],
    },
    diferenciais: {
      eyebrow: 'Perché Way Coffee',
      title: [{ text: 'Ciò che ci ' }, { text: 'distingue', em: true }, { text: '.' }],
      support: 'Tutti i caffè sono esportati direttamente da produttori brasiliani selezionati, con un supporto commerciale dedicato dal primo contatto alla consegna.',
      items: [
        { label: 'Esportazione diretta', desc: 'Dal produttore al porto, senza intermediari inutili — trattativa trasparente dall’inizio alla fine.' },
        { label: 'Tracciabilità', desc: 'Ogni lotto documentato dalla fazenda al container, con origine verificabile in ogni fase.' },
        { label: 'Partnership dirette', desc: 'Relazioni a lungo termine con le cooperative e le famiglie che coltivano ogni raccolto.' },
        { label: 'Qualità certificata', desc: 'Campioni valutati e approvati prima di ogni spedizione, con classificazione rigorosa.' },
        { label: 'Supporto commerciale', desc: 'Assistenza dedicata dal primo contatto alla consegna, in ogni mercato europeo.' },
      ],
    },
    contato: {
      eyebrow: 'Contattaci',
      title: [{ text: 'Costruiamo insieme questo ' }, { text: 'ponte', em: true }, { text: '.' }],
      description: 'Torrefazione, importatore o distributore specializzato? Raccontaci della tua attività e prepareremo una proposta su misura — origine, volume e tempi allineati alle tue esigenze.',
      labels: { nome: 'Nome', empresa: 'Azienda', email: 'E-mail', pais: 'Paese', volume: 'Volume mensile', mensagem: 'Messaggio' },
      placeholders: { nome: 'Il tuo nome', empresa: "Nome dell'azienda", email: 'tu@azienda.com', pais: 'Seleziona', volume: 'Seleziona una fascia', mensagem: 'Raccontaci della tua attività e di ciò che cerchi.' },
      countries: ['Portogallo', 'Spagna', 'Italia', 'Francia', 'Germania', 'Paesi Bassi', 'Belgio', 'Regno Unito', 'Svizzera', 'Altro'],
      volumes: ['Meno di 5 tonnellate / mese', 'Da 5 a 20 tonnellate / mese', 'Da 20 a 50 tonnellate / mese', 'Più di 50 tonnellate / mese', 'Da definire'],
      submit: 'Richiedi una proposta',
      microcopy: 'Al momento dell’invio apriamo WhatsApp con i tuoi dati — rispondiamo entro 24 ore lavorative.',
      success: { title: 'Ci siamo quasi!', body: 'Abbiamo aperto WhatsApp con i tuoi dati già compilati. Tocca invia lì per completare la tua richiesta.' },
    },
    footer: {
      tagline: 'Esportazione di caffè verdi speciali dal Brasile al mercato europeo — una filiera corta, diretta e tracciabile, dal campo alla tazza.',
      axis: 'Brasile   ⇄   Europa',
      navHeading: 'Navigazione',
      navLinks: ['Home', 'Il viaggio del caffè', "Regioni d'origine", 'I nostri partner', 'Profili di caffè', 'Punti di forza', 'Contatti'],
      contactHeading: 'Contatti',
      rights: 'Tutti i diritti riservati.',
      bottomTagline: 'Caffè verdi speciali · Origine tracciabile',
    },
  },
}
