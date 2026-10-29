// UI strings (EN, primary). Comments "PROVISIONAL" mark microcopy pending review by @marketing.
export default {
  meta: {
    home: {
      title: 'Nebula Labs · Software, AI, Automation & Quantum R&D',
      description:
        'Custom software, AI agents, end-to-end automation and external CTO services, backed by a team of mathematicians and engineers. Remote-first, global.',
    },
    aiCentral: {
      title: 'AI Central — One data layer for all your business tools',
      description:
        'Connect your ERP, CRM, e-commerce and inventory in one governed layer. Ask questions, get traceable answers and decide with your own data.',
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
    team: 'Our team has worked with',
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
        description: 'LLMs, autonomous agents and MLOps, from AI design to production.',
        tags: ['LLMs', 'Neural Networks', 'Agents', 'MLOps'],
      },
      quantum: {
        title: 'Quantum computing',
        description: 'Quantum algorithms and hybrid classical-quantum architectures, applied where they make sense.',
        tags: ['Quantum Circuits', 'VQE', 'QAOA', 'Error Correction'],
      },
      consulting: {
        title: 'Technology consulting',
        description: 'Independent technical discovery to decide what to build, buy or skip, and when.',
        tags: ['Build vs. buy', 'Tech strategy', 'Independent review'],
      },
    },
  },
  // PROVISIONAL (step descriptions)
  howWeWork: {
    badge: 'How we work',
    title: 'From diagnosis to hand-over',
    steps: {
      diagnose: { title: 'Diagnose', text: 'We assess your processes, goals and teams, and deliver a technical roadmap to guide your decisions.' },
      build: { title: 'Build', text: 'We build in short iterations, with you reviewing progress along the way.' },
      run: { title: 'Run & hand over', text: 'We take it to production and hand it over documented, or keep running and maintaining it for you.' },
    },
  },
  products: {
    badge: 'Products',
    title: 'Products we build', // PROVISIONAL
    aiCentral: {
      tagline: 'One data layer for all your business tools',
      cta: 'Learn more',
    },
    aiDistribution: {
      badge: 'Built on AI Central',
      description:
        'Your sales assistant on top of AI Central: prices, stock, account history and prescriptive analysis, straight from your ERP.',
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
      "We're scientists, engineers and builders. We believe the technology that matters most, today and over the next decade, lives where AI, quantum computing and rigorous software engineering meet.",
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
    illustrative: 'Illustrative',
    hero: {
      badge: 'AI Central · Pilot partners wanted',
      eyebrow: 'AI Central · Pilot',
      title: 'One data layer for all your business tools',
      subtitle:
        'AI Central connects your ERP, CRM, e-commerce, inventory and documents into one governed layer, so every team decides with reliable, traceable data.',
      ctaPrimary: 'Book a discovery workshop',
      ctaSecondary: 'See how it works',
      mock: {
        aria: 'Illustrative product view: a sales rep asks which customers might need restocking this week and gets an answer with its source, limited to their own accounts, and a recommendation that needs their approval.', // PROVISIONAL
        route: 'ai-central / sales',
        sourcesLabel: 'Sources', // PROVISIONAL
        sources: ['ERP', 'CRM', 'E-commerce', 'Inventory', 'Documents'],
        question: 'Which customers might need restocking this week?',
        tags: ['Observed data', 'Source: ERP · Orders', 'Your accounts only'],
        answer: '[Customer A] usually orders every 30 days. Their last order was 47 days ago, and the product is in stock.',
        recommendation: 'Recommendation: schedule a call this week',
        approval: 'Needs your approval',
      },
    },
    systems: {
      title: 'Connects the systems you already use',
      chips: ['ERP', 'CRM', 'E-commerce', 'Inventory', 'Finance', 'Documents'],
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Your critical information lives in too many places',
      cards: [
        { title: 'Scattered sources', text: 'ERP, CRM, e-commerce, inventory and documents, each with its own version of the truth.' },
        { title: "Numbers that don't match", text: 'Teams spend time reconciling figures before they can use them.' },
        { title: 'From data to action, by hand', text: 'Every decision means checking several sources and reworking the information manually.' },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'Connect. Unify. Decide.',
      subtitle: "We don't replace your systems. We connect them and add one governed layer on top.",
      steps: [
        { title: 'Connect', text: 'We bring in the sources that matter without disrupting the systems you already run.' },
        { title: 'Unify', text: 'Consistent metrics with quality criteria, and every figure traceable to its source.' },
        { title: 'Decide', text: 'Each team asks questions and gets answers from an interface built for its work.' },
      ],
      scene: {
        chips: ['ERP', 'CRM', 'E-commerce', 'Inventory', 'Finance', 'Documents'],
        recordA: 'Customer A · €1,240',
        recordB: 'CUSTOMER A LTD · 1240.00',
        unifiedName: 'Customer A',
        unifiedValue: '€1,240 · last 30 days', // PROVISIONAL (period label)
        origin: '✓ Origin: ERP · Orders',
        question: 'Which customers might need restocking this week?',
        answerTags: ['Observed data', 'Source: ERP · Orders', 'Your accounts only'],
        locked: 'Finance · No access with your profile',
      },
      // PROVISIONAL (descriptions of the illustrations for screen readers)
      aria: [
        'Illustration: six business systems (ERP, CRM, e-commerce, inventory, finance and documents) connect to one central layer.',
        'Illustration: two records of the same customer that do not match become one record with its origin shown: ERP, Orders.',
        'Illustration: a question gets an answer labelled as observed data, with its source and limited to your accounts. Finance data stays locked for this profile.',
      ],
    },
    principles: {
      eyebrow: 'Principles',
      title1: 'AI explains.',
      title2: 'Your data decides.',
      subtitle:
        'AI Central is not a chatbot guessing over your data. Authority over data, calculations and permissions always stays in the system.',
      diagram: {
        aria: 'Diagram: your question goes to the system, which calculates and applies permissions; then the AI explains the result in the answer.', // PROVISIONAL
        question: 'Your question',
        system: 'The system calculates and applies permissions',
        ai: 'The AI explains it',
        answer: 'Answer', // PROVISIONAL
      },
      kinds: ['Observed data', 'Prediction', 'Recommendation', 'Not enough data to answer'],
      cards: [
        { title: 'Calculated, not invented', text: 'Figures come from the system, with their source and period. The AI explains them.' },
        { title: 'Permissions in the system', text: 'Every query is authorized by role and scope. The AI never grants access.' },
        { title: 'Origin always visible', text: 'Each metric keeps where it came from and how it was calculated.' },
        { title: "Knows when it doesn't know", text: 'It separates data, predictions and recommendations, and says so when data is missing.' },
      ],
      snippetLabel: '// Illustrative · not a public API',
    },
    teams: {
      eyebrow: 'For every team', // PROVISIONAL
      title: 'One layer, an interface for each team',
      tabsLabel: 'Teams', // PROVISIONAL
      items: [
        {
          label: 'Sales',
          text: 'Customer history and suggested opportunities based on buying patterns.',
          question: 'What did this account buy last quarter?',
          tags: ['Observed data', 'Source: ERP · Orders', 'Your accounts only'], // PROVISIONAL
        },
        {
          label: 'Leadership',
          text: 'Consistent metrics and traceable explanations of how the business is evolving.',
          question: 'Why did margin change this month?',
          tags: ['Observed data', 'Source: Finance', 'Leadership scope'], // PROVISIONAL
        },
        {
          label: 'Operations',
          text: 'Catalogs, statuses and sources unified, with the origin of every record in view.',
          question: 'Which products differ between the shop and the ERP?',
          tags: ['Observed data', 'Source: E-commerce · ERP', 'Operations scope'], // PROVISIONAL
        },
        {
          label: 'Administration',
          text: "Sensitive queries restricted to authorized users, under your company's policy.",
          question: 'Which invoices are overdue?',
          tags: ['Observed data', 'Source: Finance', 'Authorized users only'], // PROVISIONAL
        },
      ],
      note: 'Advanced recommendations require enough data and validation in a pilot before any impact or accuracy is claimed.',
    },
    aiDistribution: {
      badge: 'Built on AI Central',
      title: 'AI Distribution: everything your sales team needs, in one conversation',
      subtitle:
        'Connected to your ERP through AI Central, it gives every sales rep prices, stock, history and recommendations without leaving the conversation.',
      capabilities: [
        { title: 'Prices & stock', text: 'Straight from your ERP.' },
        { title: 'Account history', text: 'Past orders and conditions.' },
        { title: 'Customer insight', text: 'An account, in one answer.' },
        { title: 'What to sell, to whom', text: 'Products and priorities.' },
        { title: 'Prescriptive analysis', text: 'Recommended next steps.' },
        { title: 'Your permissions', text: 'Each rep sees their own accounts.' },
      ],
      // PROVISIONAL — pendiente @marketing (snippet)
      snippet: ['Price and stock of SKU-1042?', 'What should I offer this account next?'],
      snippetObject: 'distribution',
    },
    cto: {
      eyebrow: 'For your CTO',
      title: 'Built to pass a technical review',
      areas: [
        { title: 'Security & isolation', text: 'Roles, attributes, per-organization segregation and audit trails.' },
        { title: 'Data', text: 'Source reconciliation, quality, freshness and shared definitions.' },
        { title: 'AI', text: 'Accuracy, observability, privacy and cost control.' },
        { title: 'Operations', text: 'Resilient integrations, measured scaling, recovery and support.' },
      ],
      bandTitle: 'Your infrastructure, your call',
      bandText:
        'Chosen with your CTO based on data policy, latency, volume and budget: self-hosted models or managed AI providers, never locked into a single model.',
      cta: 'Request the technical brief (under NDA)', // PROVISIONAL — pendiente @marketing
    },
    phases: {
      eyebrow: 'Adoption in phases',
      title: 'Start small, measure, then grow',
      phaseLabel: 'Phase',
      steps: [
        { title: 'Discovery', text: 'Goals, sources, permissions and priority metrics.', deliverable: 'Scope and success criteria' },
        { title: 'Data pilot', text: 'Quality of a first set of sources and entities.', deliverable: 'First traceable dashboard' },
        { title: 'AI pilot', text: 'Real questions, permissions and accuracy.', deliverable: 'Assistant evaluated in a controlled environment' },
        { title: 'Expansion', text: 'New sources and recommendations.', deliverable: 'Measured evolution plan' },
      ],
    },
    faqTitle: 'Frequently asked questions',
    faq: {
      replace: {
        q: 'Does AI Central replace our ERP or CRM?',
        a: 'No. It connects to the systems you already use and adds a governed layer on top. Your systems remain the source of each record.',
      },
      numbers: {
        q: 'Can the AI make up numbers?',
        a: 'Figures are calculated by the system, with their source and period. The AI explains the result and says so when data is missing.',
      },
      access: {
        q: 'Who can see what?',
        a: 'Access is defined by role, scope and organization, and enforced by the system on every query. The AI never grants permissions.',
      },
      models: {
        q: 'Which AI models does it use, and where does our data go?',
        a: 'You decide with us: self-hosted models or managed providers, according to your data policy, latency, volume and budget. The platform does not depend on a single model.',
      },
      start: {
        q: 'How do we get started?',
        a: 'With a discovery workshop for business and technology. We agree on one initial source, two or three high-value questions, access controls and a measurable definition of success, then scope a focused pilot.',
      },
    },
    final: {
      title: 'Start with one question that matters',
      subtitle:
        "Tell us which tools you use and the question your team asks most. We'll show you how it would look in one layer.",
      primary: 'Book a discovery workshop',
      emailLabel: 'Or write to us at', // PROVISIONAL
      note: 'Features, integrations and results are validated in each pilot and agreed in the scope.',
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
