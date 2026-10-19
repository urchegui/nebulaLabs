import type en from './en';

// UI strings (ES). Same shape as en.ts (checked by the type). "PROVISIONAL" = pending @marketing.
const es: typeof en = {
  meta: {
    home: {
      title: 'Nebula Labs · Software, IA, automatización e I+D cuántica',
      description:
        'Software a medida, agentes de IA, automatización integral y CTO externo, con un equipo de matemáticos e ingenieros. Remote-first, global.',
    },
    aiCentral: {
      title: 'Todo tu software en una sola capa de datos · Nebula Labs',
      description:
        'Conecta CRM, ERP y herramientas de operaciones en una sola capa. Unifica datos de todas tus fuentes y decide desde un único lugar.',
    },
    // PROVISIONAL
    legalNotice: { title: 'Aviso legal y términos de uso · Nebula Labs', description: 'Aviso legal y términos de uso de nebulalabs.es, titularidad de NEBULA LABS SL.' },
    privacy: { title: 'Política de privacidad · Nebula Labs', description: 'Cómo trata Nebula Labs los datos personales en nebulalabs.es.' },
    cookies: { title: 'Política de cookies · Nebula Labs', description: 'Cookies que usa nebulalabs.es y cómo gestionar tu consentimiento.' },
    notFound: { title: 'Página no encontrada · Nebula Labs', description: 'Esta página no existe.' },
    ogAlt: 'Nebula Labs — Software, IA, automatización e I+D cuántica',
  },
  a11y: {
    skipToContent: 'Saltar al contenido', // PROVISIONAL
    mainNav: 'Navegación principal',
    home: 'Nebula Labs, inicio', // PROVISIONAL
    logoAlt: 'Logotipo de Nebula Labs',
    isotypeAlt: 'Isotipo de Nebula Labs',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    externalLink: '(se abre en una pestaña nueva)',
  },
  nav: {
    services: 'Servicios',
    products: 'Productos',
    research: 'Investigación',
    about: 'Nosotros',
    contact: 'Contacto',
    getInTouch: 'Hablemos',
    switchTo: 'View in English',
    langLabel: 'Idioma',
  },
  hero: {
    badge: 'Computación Cuántica · IA · Software · I+D · Consultoría',
    title1: 'Deep tech',
    title2: 'aplicada a tu negocio',
    subtitle:
      'Un laboratorio boutique de matemáticos e ingenieros: construimos software e IA hoy, y las capacidades cuánticas que necesitarás mañana.',
    cta: 'Cuéntanos tu proyecto',
    ctaSecondary: 'Ver qué hacemos',
    scroll: 'Desliza para descubrir',
    stats: [],
  },
  // PROVISIONAL (título de sección y descripciones de columna)
  whatWeDo: {
    badge: 'Qué hacemos',
    title: 'Tres formas de trabajar contigo',
    items: {
      services: {
        title: 'Servicios',
        description: 'Automatización, CTO externo, software a medida, IA aplicada, computación cuántica y consultoría.',
      },
      products: {
        title: 'Productos',
        description: 'Software propio, construido a partir de lo que aprendemos en cada proyecto.',
      },
      research: {
        title: 'Open source e investigación',
        description: 'Herramientas open source e investigación que compartimos con la comunidad.',
      },
    },
    more: 'Ver más',
  },
  logoWall: {
    clients: 'Clientes con los que construimos',
    team: 'Antes de Nebula, nuestros fundadores trabajaron para',
  },
  services: {
    badge: 'Servicios',
    title: 'Cómo ayudamos a tu empresa', // PROVISIONAL
    subtitle:
      'Desde circuitos cuánticos hasta software en producción, operamos en todo el stack de tecnología avanzada.',
    cta: 'Hablemos de esto', // PROVISIONAL
    items: {
      automation: {
        title: 'Automatización integral',
        description: 'Mapeamos tus procesos y los automatizamos de principio a fin, de la operación al reporting.',
        tags: ['Mapeo de procesos', 'Integraciones', 'Flujos de trabajo', 'Reporting'], // PROVISIONAL
      },
      cto: {
        title: 'CTO externo',
        description: 'Liderazgo técnico sin contratar a tiempo completo: arquitectura, roadmap, proveedores y equipo.',
        tags: ['Arquitectura', 'Roadmap', 'Proveedores', 'Equipo'], // PROVISIONAL
      },
      software: {
        title: 'Software a medida',
        description: 'Sistemas distribuidos, APIs y productos cloud native, construidos para durar.',
        tags: ['Sistemas Distribuidos', 'APIs', 'Cloud Native', 'DevOps'],
      },
      ai: {
        title: 'IA aplicada',
        description: 'LLMs, agentes autónomos y MLOps, del prototipo a producción.',
        tags: ['LLMs', 'Redes Neuronales', 'Agentes', 'MLOps'],
      },
      quantum: {
        title: 'Computación cuántica',
        description: 'Algoritmos cuánticos y arquitecturas híbridas clásico-cuánticas, aplicadas donde tienen sentido.',
        tags: ['Circuitos Cuánticos', 'VQE', 'QAOA', 'Corrección de Errores'],
      },
      consulting: {
        title: 'Consultoría tecnológica',
        description: 'Criterio técnico independiente para decidir qué construir, qué comprar y qué descartar.',
        tags: ['Construir o comprar', 'Estrategia tecnológica', 'Revisión independiente'], // PROVISIONAL
      },
    },
  },
  // PROVISIONAL (descripciones de los pasos)
  howWeWork: {
    badge: 'Cómo trabajamos',
    title: 'Del diagnóstico al traspaso',
    steps: {
      diagnose: { title: 'Diagnóstico', text: 'Estudiamos tus procesos, sistemas y objetivos antes de proponer nada.' },
      build: { title: 'Construcción', text: 'Construimos en iteraciones cortas, revisando el avance contigo.' },
      run: { title: 'Operación y traspaso', text: 'Lo operamos en producción y lo traspasamos a tu equipo, documentado.' },
    },
  },
  products: {
    badge: 'Productos',
    title: 'Productos que construimos', // PROVISIONAL
    aiCentral: {
      tagline: 'Todo tu software, una sola capa de datos',
      cta: 'Saber más',
    },
    slr: {
      name: 'SLR — Systematic Literature Review',
      description:
        'Encuentra los papers más adecuados para tu revisión sistemática, siguiendo PRISMA, y descarga la documentación.',
      badge: 'Open source',
      repoCta: 'Ver en GitHub',
    },
  },
  about: {
    badge: 'Quiénes somos',
    title: 'Un laboratorio obsesionado con los problemas difíciles',
    subtitle:
      'Somos científicos, ingenieros y constructores. Creemos que la tecnología más importante de la próxima década vive en la intersección de la física cuántica, la inteligencia de las máquinas y la artesanía rigurosa del software.',
    unified: 'Servicios, productos e investigación abierta bajo un mismo techo, con el mismo equipo detrás.',
    values: [
      {
        title: 'Rigor sobre hype',
        description: 'Preferimos la precisión matemática a los buzzwords de marketing. Cada afirmación que hacemos está respaldada por evidencia.',
      },
      {
        title: 'Investigación abierta',
        description: 'Publicamos nuestros hallazgos. La ciencia avanza cuando el conocimiento se comparte, no cuando se acapara.',
      },
      {
        title: 'Pensamiento a largo plazo',
        description: 'Trabajamos en problemas que importarán en 10 años, no solo en el próximo trimestre.',
      },
      {
        title: 'Colaboración radical',
        description: 'Los mejores avances ocurren en los bordes entre disciplinas. Construimos puentes.',
      },
    ],
    team: {
      title: 'Construido por un equipo multidisciplinar',
      description:
        'Nuestro equipo reúne matemáticos, doctores e ingenieros unidos por la pasión por los problemas difíciles y las soluciones elegantes.',
    },
  },
  research: {
    badge: 'Investigación',
    title: 'Open source e investigación',
    subtitle: 'Herramientas open source y notas de investigación, compartidas conforme avanzamos.', // PROVISIONAL
    repo: {
      label: 'Repositorio open source', // PROVISIONAL
      name: 'Systematic-Literature-Review',
      description: 'El código de SLR, nuestra herramienta para revisiones sistemáticas de literatura siguiendo PRISMA.', // PROVISIONAL
      license: 'AGPL-3.0',
      language: 'JavaScript',
    },
    comingSoon: 'Papers próximamente',
    comingSoonDesc: 'Estamos preparando nuestras primeras publicaciones. Síguenos para saber cuándo llegan.', // PROVISIONAL
    follow: 'Sigue nuestra investigación en GitHub / LinkedIn',
    collaborations: {
      title: 'Colaboraciones académicas', // PROVISIONAL
      items: [],
    },
  },
  faq: {
    badge: 'FAQ',
    title: 'Preguntas frecuentes',
    subtitle: '¿No encuentras lo que buscas? Contáctanos directamente.',
    stillQuestions: '¿Más preguntas? Contáctanos', // PROVISIONAL
    items: {
      projects: {
        q: '¿Qué tipo de proyectos realiza Nebula Labs?',
        a: 'Trabajamos en proyectos en la frontera de la computación cuántica, la IA y la ingeniería de software avanzada. Esto incluye contratos de I+D, consultoría, desarrollo de software personalizado y colaboraciones de investigación con socios académicos o industriales.',
      },
      fractionalCto: {
        q: '¿Cómo funciona el servicio de CTO externo?',
        a: 'Asumimos el liderazgo técnico a tiempo parcial: definimos la arquitectura y el roadmap, te ayudamos a elegir proveedores y formamos o guiamos a tu equipo. El alcance y la dedicación se acuerdan con cada empresa.', // PROVISIONAL
      },
      automation: {
        q: '¿Automatizáis una empresa entera o procesos concretos?',
        a: 'Ambas cosas. Podemos empezar por un proceso concreto o mapear toda la operación y automatizarla de principio a fin, paso a paso.', // PROVISIONAL
      },
      products: {
        q: '¿Hacéis productos propios o solo servicios?',
        a: 'Ambas cosas. La mayor parte de nuestro trabajo son servicios, y también construimos productos propios, como IA Central y SLR.', // PROVISIONAL
      },
      collaborate: {
        q: '¿Puedo colaborar con el laboratorio como investigador?',
        a: 'Sí. Buscamos activamente colaboraciones con investigadores de universidades y otras instituciones. Si estás trabajando en algo en la intersección de nuestras áreas de enfoque, contáctanos a través del formulario de contacto.',
      },
      consulting: {
        q: '¿Ofrecéis servicios de consultoría?',
        a: 'Sí. Ya sea que necesites ayuda para evaluar la preparación cuántica, implementar un pipeline de IA o diseñar arquitecturas de software escalables, nuestro equipo puede ayudarte. Contáctanos para discutir tus necesidades específicas.',
      },
      papers: {
        q: '¿Dónde se publican vuestros papers?',
        a: 'Nuestra investigación se publica en revistas y conferencias revisadas por pares en los campos de la información cuántica, el aprendizaje automático y las ciencias de la computación. Los enlaces a todas las publicaciones están disponibles en nuestra sección de Investigación.',
      },
      progress: {
        q: '¿Cómo puedo seguir el progreso de vuestra investigación?',
        a: 'Síguenos en GitHub y LinkedIn, donde compartimos novedades conforme avanza nuestra investigación.', // PROVISIONAL
      },
      startups: {
        q: '¿Trabajáis con startups o solo con grandes organizaciones?',
        a: 'Trabajamos con equipos de todos los tamaños — desde startups en etapa temprana explorando la ventaja cuántica hasta empresas integrando IA a escala. Lo que nos importa es la calidad y ambición del problema.',
      },
    },
  },
  contact: {
    badge: 'Contacto',
    title: 'Cuéntanos qué frena a tu empresa. Te contamos cómo lo resolveríamos.',
    subtitle:
      'Si tienes una idea de investigación, un proyecto en mente o simplemente quieres hablar sobre el futuro de la computación — queremos escucharte.',
    form: {
      name: 'Nombre completo',
      namePlaceholder: 'María García', // PROVISIONAL
      email: 'Correo electrónico',
      emailPlaceholder: 'maria@empresa.com', // PROVISIONAL
      organization: 'Organización (opcional)',
      organizationPlaceholder: 'Tu empresa o institución',
      need: '¿Qué necesitas?',
      needPlaceholder: 'Selecciona una opción', // PROVISIONAL
      needs: {
        automation: 'Automatización',
        'fractional-cto': 'CTO externo',
        software: 'Software',
        ai: 'IA',
        quantum: 'Cuántica',
        product: 'Producto',
        'research-collaboration': 'Colaboración en investigación',
      },
      subject: 'Asunto',
      subjectPlaceholder: '¿De qué trata esto?',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto, idea o pregunta...',
      privacyInfo:
        'Responsable: NEBULA LABS SL. Finalidad: atender tu solicitud. Legitimación: tu consentimiento. Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad, como se explica en la',
      privacyInfoLink: 'política de privacidad',
      privacyCheckbox: 'He leído y acepto la política de privacidad',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Nos pondremos en contacto pronto.',
      error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
      // PROVISIONAL (validación)
      errors: {
        required: 'Este campo es obligatorio.',
        email: 'Introduce un correo electrónico válido.',
        tooLong: 'Máximo {{max}} caracteres.',
        tooShort: 'Mínimo {{min}} caracteres.',
        privacy: 'Debes aceptar la política de privacidad para enviar el formulario.',
        summary: 'Revisa los campos marcados.',
      },
    },
    info: {
      title: 'Otras formas de contactarnos',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      responseLabel: 'Respuesta',
      email: 'hello@nebulalabs.es',
      location: 'Remote-first · Global',
      response: 'Normalmente respondemos en 48 horas.',
    },
  },
  footer: {
    tagline: 'Cuántica · IA · Software · I+D',
    description:
      'Nebula Labs es un laboratorio deep-tech que empuja los límites de la computación cuántica, la inteligencia artificial y la ingeniería de software.',
    links: {
      company: 'Empresa',
      about: 'Nosotros',
      services: 'Servicios',
      products: 'Productos',
      contact: 'Contacto',
      resources: 'Recursos',
      research: 'Investigación',
      faq: 'FAQ',
      legal: 'Legal',
      legalNotice: 'Aviso legal',
      privacy: 'Política de Privacidad',
      cookies: 'Política de Cookies',
      terms: 'Términos de Uso',
      cookieSettings: 'Configurar cookies',
    },
    copyright: '© {{year}} Nebula Labs. Todos los derechos reservados.',
    madeWith: 'Hecho con precisión.',
  },
  aiCentralPage: {
    badge: 'Producto',
    title: 'Todo tu software, una sola capa de datos',
    subtitle:
      'Conectamos CRM, ERP, finanzas y operaciones en una capa única para que decidas con datos unificados, no con hojas de cálculo.',
    ctaDemo: 'Solicita una demo',
    ctaBeta: 'Únete a la beta',
    integrationsTitle: 'Integraciones', // PROVISIONAL
    integrations: [],
    howTitle: 'Cómo funciona', // PROVISIONAL
    // PROVISIONAL (textos de los pasos)
    how: {
      connect: { title: 'Conecta', text: 'Conecta las herramientas que tu empresa ya usa.' },
      unify: { title: 'Unifica', text: 'Reúne sus datos en una sola capa.' },
      decide: { title: 'Decide', text: 'Toma decisiones desde un único lugar, con todos tus datos.' },
    },
    featuresTitle: 'Funcionalidades', // PROVISIONAL
    features: [],
    securityTitle: 'Seguridad y datos', // PROVISIONAL
    security: [],
    custom: {
      title: '¿Lo necesitas a medida?',
      text: 'Si tu caso necesita una solución a medida, nuestro servicio de automatización integral puede construirla contigo.', // PROVISIONAL
      cta: 'Ver automatización integral', // PROVISIONAL
    },
    finalTitle: '¿Quieres verlo con tus propios datos?', // PROVISIONAL
    faqTitle: 'Preguntas frecuentes',
    // PROVISIONAL (respuestas)
    faq: {
      what: {
        q: '¿Qué es IA Central?',
        a: 'Una capa que centraliza el software de tu empresa para que decidas con datos de todas tus fuentes.',
      },
      custom: {
        q: '¿Se puede adaptar a mi empresa?',
        a: 'Sí. Cuéntanos qué herramientas usas y qué necesitas decidir, y te diremos cómo lo plantearíamos.',
      },
    },
  },
  caseStudy: {
    challenge: 'Reto',
    approach: 'Enfoque',
    result: 'Resultado',
    stack: 'Stack',
  },
  notFound: {
    title: 'Página no encontrada',
    text: 'La página que buscas no existe o ha cambiado de dirección.', // PROVISIONAL
    back: 'Volver al inicio', // PROVISIONAL
  },
  legalUi: {
    draftBanner: 'Borrador pendiente de revisión legal',
    lastUpdated: 'Última actualización',
    backHome: 'Volver al inicio',
    configureCookies: 'Configurar cookies',
  },
  cookieBanner: {
    // PROVISIONAL (todo el texto del banner)
    title: 'Usamos cookies',
    description:
      'Usamos cookies técnicas propias para que la web funcione y, solo si lo aceptas, cookies de Google Analytics para medir las visitas. Puedes aceptarlas, rechazarlas o configurarlas.',
    acceptAll: 'Aceptar',
    rejectAll: 'Rechazar',
    configure: 'Configurar',
    save: 'Guardar preferencias',
    close: 'Cerrar',
    prefsTitle: 'Configuración de cookies',
    necessaryTitle: 'Cookies técnicas (siempre activas)',
    necessaryDesc: 'Necesarias para que la web funcione y para recordar tu elección sobre cookies.',
    analyticsTitle: 'Cookies analíticas',
    analyticsDesc: 'Google Analytics 4: estadísticas anónimas sobre el uso de la web. Solo con tu consentimiento.',
    moreInfo: 'Más información en nuestra',
    policyLink: 'política de cookies',
  },
};

export default es;
