// UI strings (EN, primary). Comments "PROVISIONAL" mark microcopy pending review by @marketing.
export default {
  meta: {
    home: {
      title: 'Nebula Labs · Software, AI, Automation & Quantum R&D',
      description:
        'Custom software, AI agents, end-to-end automation and external CTO services, backed by a team of mathematicians and engineers. Remote-first, global.',
    },
    aiCentral: {
      title: 'One data layer for all your business tools · Nebula Labs',
      description:
        'Connect your CRM, ERP and ops tools into one layer. Unify data from every source and make decisions from a single place. Built by Nebula Labs.',
    },
    // PROVISIONAL
    legalNotice: { title: 'Legal notice and terms of use · Nebula Labs', description: 'Legal notice and terms of use of nebulalabs.es, owned by NEBULA LABS SL.' },
    privacy: { title: 'Privacy policy · Nebula Labs', description: 'How Nebula Labs processes personal data on nebulalabs.es.' },
    cookies: { title: 'Cookie policy · Nebula Labs', description: 'Cookies used on nebulalabs.es and how to manage your consent.' },
    notFound: { title: 'Page not found · Nebula Labs', description: 'This page does not exist.' },
    ogAlt: 'Nebula Labs — Software, AI, automation and quantum R&D',
  },
  a11y: {
    skipToContent: 'Skip to content', // PROVISIONAL
    mainNav: 'Main navigation',
    home: 'Nebula Labs, home', // PROVISIONAL
    logoAlt: 'Nebula Labs logo',
    isotypeAlt: 'Nebula Labs isotype',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    externalLink: '(opens in a new tab)',
  },
  nav: {
    services: 'Services',
    products: 'Products',
    research: 'Research',
    about: 'About',
    contact: 'Contact',
    getInTouch: 'Get in touch',
    switchTo: 'Ver en español',
    langLabel: 'Language',
  },
  hero: {
    badge: 'Quantum · AI · Software · R&D · Consulting',
    title1: 'Deep tech,',
    title2: 'applied to your business',
    subtitle:
      "A boutique lab of mathematicians and engineers: we build software and AI today, and the quantum capabilities you'll need tomorrow.",
    cta: 'Tell us about your project',
    ctaSecondary: 'See what we do',
    scroll: 'Scroll to explore',
    stats: [] as { value: string; label: string }[],
  },
  // PROVISIONAL (section heading and column descriptions)
  whatWeDo: {
    badge: 'What we do',
    title: 'Three ways we work with you',
    items: {
      services: {
        title: 'Services',
        description: 'Automation, fractional CTO, custom software, applied AI, quantum computing and consulting.',
      },
      products: {
        title: 'Products',
        description: 'Our own software, built from what we learn with every project.',
      },
      research: {
        title: 'Open source & research',
        description: 'Open-source tools and research we share with the community.',
      },
    },
    more: 'Explore',
  },
  logoWall: {
    clients: "Clients we've built with",
    team: 'Before Nebula, our founders built for',
  },
  services: {
    badge: 'Services',
    title: 'How we help your company', // PROVISIONAL
    subtitle:
      'From quantum circuits to production software, we operate across the full stack of advanced technology.',
    cta: 'Talk to us about this', // PROVISIONAL
    items: {
      automation: {
        title: 'End-to-end automation',
        description: 'We map your processes and automate them end to end, from operations to reporting.',
        tags: ['Process mapping', 'Integrations', 'Workflows', 'Reporting'], // PROVISIONAL
      },
      cto: {
        title: 'Fractional CTO',
        description: 'Technical leadership without a full-time hire: architecture, roadmap, vendors and team.',
        tags: ['Architecture', 'Roadmap', 'Vendors', 'Team'], // PROVISIONAL
      },
      software: {
        title: 'Custom software',
        description: 'Distributed systems, APIs and cloud-native products, built to last.',
        tags: ['Distributed Systems', 'APIs', 'Cloud Native', 'DevOps'],
      },
      ai: {
        title: 'Applied AI',
        description: 'LLMs, autonomous agents and MLOps, taken from prototype to production.',
        tags: ['LLMs', 'Neural Networks', 'Agents', 'MLOps'],
      },
      quantum: {
        title: 'Quantum computing',
        description: 'Quantum algorithms and hybrid classical-quantum architectures, applied where they make sense.',
        tags: ['Quantum Circuits', 'VQE', 'QAOA', 'Error Correction'],
      },
      consulting: {
        title: 'Technology consulting',
        description: 'Independent technical judgment to decide what to build, buy or skip.',
        tags: ['Build vs. buy', 'Tech strategy', 'Independent review'], // PROVISIONAL
      },
    },
  },
  // PROVISIONAL (step descriptions)
  howWeWork: {
    badge: 'How we work',
    title: 'From diagnosis to hand-over',
    steps: {
      diagnose: { title: 'Diagnose', text: 'We study your processes, systems and goals before proposing anything.' },
      build: { title: 'Build', text: 'We build in short iterations, with you reviewing progress along the way.' },
      run: { title: 'Run & hand over', text: 'We run it in production and hand it over to your team, documented.' },
    },
  },
  products: {
    badge: 'Products',
    title: 'Products we build', // PROVISIONAL
    aiCentral: {
      tagline: 'One data layer for all your business tools',
      cta: 'Learn more',
    },
    slr: {
      name: 'SLR — Systematic Literature Review',
      description:
        'Find the most relevant papers for your systematic review, following PRISMA, and download the documentation.',
      badge: 'Open source',
      repoCta: 'View on GitHub',
    },
  },
  about: {
    badge: 'About us',
    title: 'A lab obsessed with hard problems',
    subtitle:
      "We're scientists, engineers, and builders. We believe the most important technology of the next decade lives at the intersection of quantum physics, machine intelligence, and rigorous software craftsmanship.",
    unified: 'Services, products and open research under one roof, with the same team behind all three.',
    values: [
      {
        title: 'Rigor over hype',
        description: 'We prefer mathematical precision to marketing buzzwords. Every claim we make is backed by evidence.',
      },
      {
        title: 'Open research',
        description: 'We publish our findings. Science advances when knowledge is shared, not hoarded.',
      },
      {
        title: 'Long-term thinking',
        description: "We work on problems that will matter in 10 years, not just the next quarter.",
      },
      {
        title: 'Radical collaboration',
        description: 'The best breakthroughs happen at the edges between disciplines. We build bridges.',
      },
    ],
    team: {
      title: 'Built by a multidisciplinary team',
      description:
        'Our team brings together mathematicians, PhDs and engineers united by a passion for hard problems and elegant solutions.',
    },
  },
  research: {
    badge: 'Research',
    title: 'Open source & research',
    subtitle: 'Open-source tools and research notes, shared as we make progress.', // PROVISIONAL
    repo: {
      label: 'Open-source repository', // PROVISIONAL
      name: 'Systematic-Literature-Review',
      description: 'The code behind SLR, our tool for systematic literature reviews following PRISMA.', // PROVISIONAL
      license: 'AGPL-3.0',
      language: 'JavaScript',
    },
    comingSoon: 'Papers coming soon',
    comingSoonDesc: "We're preparing our first publications. Follow us to know when new research lands.", // PROVISIONAL (was "subscribe to be notified")
    follow: 'Follow our research on GitHub / LinkedIn',
    collaborations: {
      title: 'Academic collaborations', // PROVISIONAL
      items: [] as string[],
    },
  },
  faq: {
    badge: 'FAQ',
    title: 'Frequently asked questions',
    subtitle: "Can't find what you're looking for? Contact us directly.",
    stillQuestions: 'Still have questions? Contact us', // PROVISIONAL (moved to i18n)
    items: {
      projects: {
        q: 'What kind of projects does Nebula Labs take on?',
        a: 'We work on projects at the frontier of quantum computing, AI, and advanced software engineering. This includes R&D contracts, consulting, custom software development, and research collaborations with academic or industry partners.',
      },
      fractionalCto: {
        q: 'What does a fractional CTO engagement look like?',
        a: 'We take technical leadership part-time: we define the architecture and the roadmap, help you choose vendors and build or guide your team. Scope and dedication are agreed with each company.', // PROVISIONAL
      },
      automation: {
        q: 'Can you automate a whole company, or only specific processes?',
        a: 'Both. We can start with a specific process or map the whole operation and automate it end to end, step by step.', // PROVISIONAL
      },
      products: {
        q: 'Do you build products or only services?',
        a: 'Both. Most of our work is services, and we also build our own products, such as AI Central and SLR.', // PROVISIONAL
      },
      collaborate: {
        q: 'Can I collaborate with the lab as a researcher?',
        a: "Yes. We actively seek collaborations with researchers from universities and other institutions. If you're working on something at the intersection of our focus areas, reach out via the contact form.",
      },
      consulting: {
        q: 'Do you offer consulting services?',
        a: 'Yes. Whether you need help evaluating quantum readiness, implementing an AI pipeline, or architecting scalable software systems, our team can help. Contact us to discuss your specific needs.',
      },
      papers: {
        q: 'Where are your papers published?',
        a: 'Our research is published in peer-reviewed journals and conferences across quantum information, machine learning, and computer science. Links to all publications are available in our Research section.',
      },
      progress: {
        q: 'How can I follow your research progress?',
        a: 'Follow us on GitHub and LinkedIn, where we share updates as our research progresses.', // PROVISIONAL (newsletter mention removed)
      },
      startups: {
        q: 'Do you work with startups or only large organizations?',
        a: "We work with teams of all sizes — from early-stage startups exploring quantum advantage to enterprises integrating AI at scale. What matters to us is the quality and ambition of the problem.",
      },
    },
  },
  contact: {
    badge: 'Contact',
    title: "Tell us what's slowing your company down. We'll tell you how we'd fix it.",
    subtitle:
      "Whether you have a research idea, a project in mind, or simply want to talk about the future of computing — we'd love to hear from you.",
    form: {
      name: 'Full name',
      namePlaceholder: 'Jane Smith', // PROVISIONAL (was a historical name)
      email: 'Email address',
      emailPlaceholder: 'jane@company.com', // PROVISIONAL
      organization: 'Organization (optional)',
      organizationPlaceholder: 'Your company or institution',
      need: 'What do you need?',
      needPlaceholder: 'Select an option', // PROVISIONAL
      needs: {
        automation: 'Automation',
        'fractional-cto': 'Fractional CTO',
        software: 'Software',
        ai: 'AI',
        quantum: 'Quantum',
        product: 'Product',
        'research-collaboration': 'Research collaboration',
      },
      subject: 'Subject',
      subjectPlaceholder: 'What is this about?',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project, idea, or question...',
      privacyInfo:
        'Data controller: NEBULA LABS SL. Purpose: answering your request. Legal basis: your consent. Rights: access, rectification, erasure, objection, restriction and portability, as explained in the',
      privacyInfoLink: 'privacy policy',
      privacyCheckbox: 'I have read and accept the privacy policy',
      send: 'Send message',
      sending: 'Sending...',
      success: "Message sent! We'll be in touch soon.",
      error: 'Something went wrong. Please try again.',
      // PROVISIONAL (validation)
      errors: {
        required: 'This field is required.',
        email: 'Enter a valid email address.',
        tooLong: 'Maximum {{max}} characters.',
        tooShort: 'Minimum {{min}} characters.',
        privacy: 'You must accept the privacy policy to send the form.',
        summary: 'Please review the highlighted fields.',
      },
    },
    info: {
      title: 'Other ways to reach us',
      emailLabel: 'Email',
      locationLabel: 'Location',
      responseLabel: 'Response',
      email: 'hello@nebulalabs.es',
      location: 'Remote-first · Global',
      response: 'We typically respond within 48 hours.',
    },
  },
  footer: {
    tagline: 'Quantum · AI · Software · R&D',
    description:
      'Nebula Labs is a deep-tech laboratory pushing the boundaries of quantum computing, artificial intelligence, and software engineering.',
    links: {
      company: 'Company',
      about: 'About',
      services: 'Services',
      products: 'Products',
      contact: 'Contact',
      resources: 'Resources',
      research: 'Research',
      faq: 'FAQ',
      legal: 'Legal',
      legalNotice: 'Legal notice',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      terms: 'Terms of Use',
      cookieSettings: 'Cookie settings',
    },
    copyright: '© {{year}} Nebula Labs. All rights reserved.',
    madeWith: 'Made with precision.',
  },
  aiCentralPage: {
    badge: 'Product',
    title: 'One data layer for all your business tools',
    subtitle:
      'Nebula connects your CRM, ERP, finance and ops software into a single layer, so decisions run on unified data.',
    ctaDemo: 'Book a demo',
    ctaBeta: 'Join the beta',
    integrationsTitle: 'Integrations', // PROVISIONAL
    integrations: [] as string[],
    howTitle: 'How it works', // PROVISIONAL
    // PROVISIONAL (step texts)
    how: {
      connect: { title: 'Connect', text: 'Connect the tools your company already uses.' },
      unify: { title: 'Unify', text: 'Bring their data together in a single layer.' },
      decide: { title: 'Decide', text: 'Make decisions from one place, with all your data.' },
    },
    featuresTitle: 'Features', // PROVISIONAL
    features: [] as { title: string; text: string }[],
    securityTitle: 'Security & data', // PROVISIONAL
    security: [] as string[],
    custom: {
      title: 'Need it built for you?', // PROVISIONAL
      text: 'If your case needs a custom solution, our end-to-end automation service can build it with you.', // PROVISIONAL
      cta: 'See end-to-end automation', // PROVISIONAL
    },
    finalTitle: 'Want to see it with your own data?', // PROVISIONAL
    faqTitle: 'Frequently asked questions',
    // PROVISIONAL (answers)
    faq: {
      what: {
        q: 'What is AI Central?',
        a: 'A layer that centralizes your company software so you can make decisions with data from all your sources.',
      },
      custom: {
        q: 'Can it be adapted to my company?',
        a: 'Yes. Tell us which tools you use and what you need to decide, and we will tell you how we would approach it.',
      },
    },
  },
  caseStudy: {
    challenge: 'Challenge',
    approach: 'Approach',
    result: 'Result',
    stack: 'Stack',
  },
  notFound: {
    title: 'Page not found',
    text: "The page you're looking for doesn't exist or has moved.", // PROVISIONAL
    back: 'Back to home', // PROVISIONAL
  },
  legalUi: {
    draftBanner: 'Draft pending legal review',
    lastUpdated: 'Last updated',
    backHome: 'Back to home',
    configureCookies: 'Configure cookies',
  },
  cookieBanner: {
    // PROVISIONAL (all banner copy)
    title: 'We use cookies',
    description:
      'We use our own technical cookies so the site works, and, only if you accept, Google Analytics cookies to measure visits. You can accept, reject or configure them.',
    acceptAll: 'Accept',
    rejectAll: 'Reject',
    configure: 'Configure',
    save: 'Save preferences',
    close: 'Close',
    prefsTitle: 'Cookie settings',
    necessaryTitle: 'Technical cookies (always active)',
    necessaryDesc: 'Required for the site to work and to remember your cookie choice.',
    analyticsTitle: 'Analytics cookies',
    analyticsDesc: 'Google Analytics 4: anonymous statistics on how the site is used. Only with your consent.',
    moreInfo: 'More information in our',
    policyLink: 'cookie policy',
  },
};
