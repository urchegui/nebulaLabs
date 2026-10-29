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
      title: 'IA Central — Todo tu software en una sola capa de datos',
      description:
        'Conecta ERP, CRM, e-commerce e inventario en una capa gobernada. Pregunta, obtén respuestas trazables y decide con los datos de tu empresa.',
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
    team: 'Nuestro equipo ha trabajado con',
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
        description: 'LLMs, agentes autónomos y MLOps, del diseño de la IA a producción.',
        tags: ['LLMs', 'Redes Neuronales', 'Agentes', 'MLOps'],
      },
      quantum: {
        title: 'Computación cuántica',
        description: 'Algoritmos cuánticos y arquitecturas híbridas clásico-cuánticas, aplicadas donde tienen sentido.',
        tags: ['Circuitos Cuánticos', 'VQE', 'QAOA', 'Corrección de Errores'],
      },
      consulting: {
        title: 'Consultoría tecnológica',
        description: 'Análisis técnico independiente para decidir qué construir, comprar o descartar, y cuándo.',
        tags: ['Construir o comprar', 'Estrategia tecnológica', 'Revisión independiente'],
      },
    },
  },
  // PROVISIONAL (descripciones de los pasos)
  howWeWork: {
    badge: 'Cómo trabajamos',
    title: 'Del diagnóstico al traspaso',
    steps: {
      diagnose: { title: 'Diagnóstico', text: 'Analizamos tus procesos, objetivos y equipos, y te entregamos una hoja de ruta técnica para decidir con criterio.' },
      build: { title: 'Construcción', text: 'Construimos en iteraciones cortas, revisando el avance contigo.' },
      run: { title: 'Operación y traspaso', text: 'Lo llevamos a producción y te lo entregamos documentado, o seguimos operándolo y manteniéndolo por ti.' },
    },
  },
  products: {
    badge: 'Productos',
    title: 'Productos que construimos', // PROVISIONAL
    aiCentral: {
      tagline: 'Todo tu software, una sola capa de datos',
      cta: 'Saber más',
    },
    aiDistribution: {
      badge: 'Construido sobre IA Central',
      description:
        'Tu asistente comercial sobre IA Central: precios, stock, históricos y análisis prescriptivo, directamente desde tu ERP.',
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
      'Somos científicos e ingenieros que construyen. Creemos que la tecnología que más importa, hoy y durante la próxima década, está donde se cruzan la IA, la computación cuántica y la ingeniería de software rigurosa.',
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
    illustrative: 'Ilustrativo',
    hero: {
      badge: 'IA Central · Buscamos empresas piloto',
      eyebrow: 'IA Central · Piloto',
      title: 'Todo tu software, una sola capa de datos',
      subtitle:
        'IA Central conecta tu ERP, CRM, comercio electrónico, inventario y documentos en una capa gobernada para que cada equipo decida con datos fiables y trazables.',
      ctaPrimary: 'Reserva un taller de descubrimiento',
      ctaSecondary: 'Cómo funciona',
      mock: {
        aria: 'Vista ilustrativa del producto: un comercial pregunta qué clientes podrían necesitar reposición esta semana y obtiene una respuesta con su fuente, limitada a su cartera, y una recomendación pendiente de su aprobación.', // PROVISIONAL
        route: 'ia-central / ventas',
        sourcesLabel: 'Fuentes', // PROVISIONAL
        sources: ['ERP', 'CRM', 'E-commerce', 'Inventario', 'Documentos'],
        question: '¿Qué clientes podrían necesitar reposición esta semana?',
        tags: ['Dato observado', 'Fuente: ERP · Pedidos', 'Solo tu cartera'],
        answer: '[Cliente A] suele pedir cada 30 días. Su último pedido fue hace 47 días y el producto tiene stock.',
        recommendation: 'Recomendación: llamarle esta semana',
        approval: 'Pendiente de tu aprobación',
      },
    },
    systems: {
      title: 'Se conecta con los sistemas que ya usas',
      chips: ['ERP', 'CRM', 'E-commerce', 'Inventario', 'Finanzas', 'Documentos'],
    },
    problem: {
      eyebrow: 'El problema',
      title: 'Tu información crítica vive en demasiados sitios',
      cards: [
        { title: 'Fuentes dispersas', text: 'ERP, CRM, comercio electrónico, inventario y documentos, cada uno con su versión de los datos.' },
        { title: 'Cifras que no cuadran', text: 'Los equipos pierden tiempo conciliando datos antes de poder usarlos.' },
        { title: 'Del dato a la acción, a mano', text: 'Cada decisión obliga a consultar varias fuentes y rehacer la información manualmente.' },
      ],
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'Conecta. Unifica. Decide.',
      subtitle: 'No sustituimos tus sistemas. Los conectamos y añadimos encima una capa gobernada.',
      steps: [
        { title: 'Conecta', text: 'Incorporamos las fuentes relevantes sin interrumpir los sistemas que ya funcionan.' },
        { title: 'Unifica', text: 'Indicadores coherentes, con criterios de calidad y cada cifra trazable hasta su origen.' },
        { title: 'Decide', text: 'Cada equipo pregunta y obtiene respuestas desde una interfaz pensada para su trabajo.' },
      ],
      scene: {
        chips: ['ERP', 'CRM', 'E-commerce', 'Inventario', 'Finanzas', 'Documentos'],
        recordA: 'Cliente A · 1.240 €',
        recordB: 'CLIENTE A S.L. · 1240,00',
        unifiedName: 'Cliente A',
        unifiedValue: '1.240 € · últimos 30 días', // PROVISIONAL (periodo)
        origin: '✓ Origen: ERP · Pedidos',
        question: '¿Qué clientes podrían necesitar reposición esta semana?',
        answerTags: ['Dato observado', 'Fuente: ERP · Pedidos', 'Solo tu cartera'],
        locked: 'Finanzas · Sin acceso con tu perfil',
      },
      // PROVISIONAL (descripciones de las ilustraciones para lectores de pantalla)
      aria: [
        'Ilustración: seis sistemas de empresa (ERP, CRM, comercio electrónico, inventario, finanzas y documentos) se conectan a una capa central.',
        'Ilustración: dos fichas del mismo cliente que no coinciden se convierten en una sola ficha con su origen visible: ERP, Pedidos.',
        'Ilustración: una pregunta obtiene una respuesta etiquetada como dato observado, con su fuente y limitada a tu cartera. Los datos de finanzas quedan bloqueados para este perfil.',
      ],
    },
    principles: {
      eyebrow: 'Principios',
      title1: 'La IA explica.',
      title2: 'Tus datos deciden.',
      subtitle:
        'IA Central no es un chatbot que adivina sobre tus datos. La autoridad sobre datos, cálculos y permisos está siempre en el sistema.',
      diagram: {
        aria: 'Diagrama: tu pregunta llega al sistema, que calcula y aplica permisos; después la IA explica el resultado en la respuesta.', // PROVISIONAL
        question: 'Tu pregunta',
        system: 'El sistema calcula y aplica permisos',
        ai: 'La IA lo explica',
        answer: 'Respuesta', // PROVISIONAL
      },
      kinds: ['Dato observado', 'Predicción', 'Recomendación', 'Faltan datos para responder'],
      cards: [
        { title: 'Cifras calculadas, no inventadas', text: 'Los números salen del sistema, con su fuente y su periodo. La IA los explica.' },
        { title: 'Permisos en el sistema', text: 'Cada consulta se autoriza por perfil y ámbito. La IA nunca concede accesos.' },
        { title: 'Origen siempre visible', text: 'Cada indicador conserva de dónde viene y con qué criterio se calculó.' },
        { title: 'Sabe cuándo no sabe', text: 'Distingue dato, predicción y recomendación, y avisa cuando faltan datos.' },
      ],
      snippetLabel: '// Ilustrativo · no es una API pública',
    },
    teams: {
      eyebrow: 'Para cada equipo', // PROVISIONAL
      title: 'Una sola capa, una interfaz para cada equipo',
      tabsLabel: 'Equipos', // PROVISIONAL
      items: [
        {
          label: 'Comerciales',
          text: 'Historial de clientes y oportunidades sugeridas según patrones de compra.',
          question: '¿Qué compró esta cuenta el último trimestre?',
          tags: ['Dato observado', 'Fuente: ERP · Pedidos', 'Solo tu cartera'], // PROVISIONAL
        },
        {
          label: 'Dirección',
          text: 'Indicadores consistentes y explicaciones trazables sobre la evolución del negocio.',
          question: '¿Por qué ha cambiado el margen este mes?',
          tags: ['Dato observado', 'Fuente: Finanzas', 'Ámbito de dirección'], // PROVISIONAL
        },
        {
          label: 'Operaciones',
          text: 'Catálogos, estados y fuentes unificados, con el origen de cada registro a la vista.',
          question: '¿Qué productos no coinciden entre la tienda y el ERP?',
          tags: ['Dato observado', 'Fuente: E-commerce · ERP', 'Ámbito de operaciones'], // PROVISIONAL
        },
        {
          label: 'Administración',
          text: 'Consultas sensibles restringidas a usuarios autorizados, según la política de tu empresa.',
          question: '¿Qué facturas están vencidas?',
          tags: ['Dato observado', 'Fuente: Finanzas', 'Solo usuarios autorizados'], // PROVISIONAL
        },
      ],
      note: 'Las recomendaciones avanzadas requieren datos suficientes y una validación en piloto antes de declarar impacto o precisión.',
    },
    aiDistribution: {
      badge: 'Construido sobre IA Central',
      title: 'IA Distribución: todo lo que necesita tu equipo comercial, en una conversación',
      subtitle:
        'Conectada a tu ERP a través de IA Central, da a cada comercial precios, stock, históricos y recomendaciones sin salir de la conversación.',
      capabilities: [
        { title: 'Precios y stock', text: 'Directamente desde tu ERP.' },
        { title: 'Históricos', text: 'Pedidos y condiciones anteriores.' },
        { title: 'Información de clientes', text: 'Una cuenta, en una respuesta.' },
        { title: 'Qué vender y a quién', text: 'Productos y prioridades.' },
        { title: 'Análisis prescriptivo', text: 'Siguientes pasos recomendados.' },
        { title: 'Con tus permisos', text: 'Cada comercial ve su cartera.' },
      ],
      // PROVISIONAL — pendiente @marketing (snippet)
      snippet: ['¿Precio y stock del SKU-1042?', '¿Qué le ofrezco a esta cuenta ahora?'],
      snippetObject: 'distribucion',
    },
    cto: {
      eyebrow: 'Para tu CTO',
      title: 'Diseñada para pasar una revisión técnica',
      areas: [
        { title: 'Seguridad y aislamiento', text: 'Roles, atributos, segregación por organización y trazabilidad.' },
        { title: 'Datos', text: 'Reconciliación de fuentes, calidad, frescura y definiciones comunes.' },
        { title: 'IA', text: 'Exactitud, observabilidad, privacidad y control de costes.' },
        { title: 'Operación', text: 'Integraciones resilientes, escalado medido, recuperación y soporte.' },
      ],
      bandTitle: 'Tu infraestructura, tu decisión',
      bandText:
        'Se elige con tu CTO según política de datos, latencia, volumen y presupuesto: modelos autoalojados o proveedores gestionados, sin depender de un único modelo.',
      cta: 'Solicita el dossier técnico (bajo NDA)', // PROVISIONAL — pendiente @marketing
    },
    phases: {
      eyebrow: 'Adopción por fases',
      title: 'Empezar pequeño, medir y crecer',
      phaseLabel: 'Fase',
      steps: [
        { title: 'Descubrimiento', text: 'Objetivos, fuentes, permisos y métricas prioritarias.', deliverable: 'Alcance y criterios de éxito' },
        { title: 'Piloto de datos', text: 'Calidad de un primer conjunto de fuentes y entidades.', deliverable: 'Primer dashboard trazable' },
        { title: 'Piloto con IA', text: 'Preguntas reales, permisos y precisión.', deliverable: 'Asistente evaluado en entorno controlado' },
        { title: 'Extensión', text: 'Nuevas fuentes y recomendaciones.', deliverable: 'Plan de evolución medido' },
      ],
    },
    faqTitle: 'Preguntas frecuentes',
    faq: {
      replace: {
        q: '¿IA Central sustituye a nuestro ERP o CRM?',
        a: 'No. Se conecta con los sistemas que ya usas y añade una capa gobernada encima. Tus sistemas siguen siendo el origen de cada registro.',
      },
      numbers: {
        q: '¿Puede la IA inventarse cifras?',
        a: 'Las cifras las calcula el sistema, con su fuente y su periodo. La IA explica el resultado y avisa cuando faltan datos.',
      },
      access: {
        q: '¿Quién puede ver qué?',
        a: 'El acceso se define por perfil, ámbito y organización, y el sistema lo aplica en cada consulta. La IA nunca concede permisos.',
      },
      models: {
        q: '¿Qué modelos de IA usa y adónde van nuestros datos?',
        a: 'Lo decidimos contigo: modelos autoalojados o proveedores gestionados, según tu política de datos, latencia, volumen y presupuesto. La plataforma no depende de un único modelo.',
      },
      start: {
        q: '¿Cómo empezamos?',
        a: 'Con un taller de descubrimiento con negocio y tecnología. Acordamos una fuente inicial, dos o tres preguntas de alto valor, los controles de acceso y una definición medible de éxito, y a partir de ahí dimensionamos un piloto acotado.',
      },
    },
    final: {
      title: 'Empieza por una pregunta que importe',
      subtitle:
        'Cuéntanos qué herramientas usáis y qué pregunta se hace más tu equipo. Te enseñamos cómo se vería en una sola capa.',
      primary: 'Reserva un taller de descubrimiento',
      emailLabel: 'O escríbenos a', // PROVISIONAL
      note: 'Funciones, integraciones y resultados se validan en cada piloto y se concretan en el acuerdo de alcance.',
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
