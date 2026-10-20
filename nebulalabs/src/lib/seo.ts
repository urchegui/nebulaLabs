import i18n from '../i18n';
import headingFont from '../assets/fonts/GoodTimesRg.otf?url';
import { AI_CENTRAL, AI_DISTRIBUTION, FLAGS, SEARCH_VERIFICATION, SERVICE_ORDER, SITE_NAME, SITE_URL, SOCIALS, type Lang } from '../config/site';
import { LEGAL } from '../config/legal';
import { alternatesFor, isIndexable, pathFor, type Route } from '../config/routes';
import { visibleHomeFaq } from '../content/faq';

type HeadElement = { type: string; props: Record<string, string>; children?: string };

const OG_LOCALE: Record<Lang, string> = { en: 'en_US', es: 'es_ES' };
const abs = (path: string) => `${SITE_URL}${path}`;

function ogImage(route: Route): string {
  return route.page === 'aiCentral' ? `/og/ai-central-${route.lang}.png` : `/og/home-${route.lang}.png`;
}

function metaKey(route: Route): string {
  return route.page === 'caseStudy' ? 'notFound' : route.page;
}

function organization(lang: Lang) {
  const t = i18n.getFixedT(lang);
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL.companyName,
    taxID: LEGAL.taxId,
    url: SITE_URL,
    logo: abs('/logo.svg'),
    email: LEGAL.email,
    description: t('meta.home.description'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: LEGAL.address.street,
      postalCode: LEGAL.address.postalCode,
      addressLocality: LEGAL.address.locality,
      addressRegion: LEGAL.address.region,
      addressCountry: LEGAL.address.country,
    },
    sameAs: [SOCIALS.github, SOCIALS.linkedin],
    knowsAbout: [
      'Quantum computing',
      'Artificial intelligence',
      'Large language models',
      'Autonomous agents',
      'MLOps',
      'Process automation',
      'Distributed systems',
    ],
    areaServed: 'Worldwide',
  };
}

// AI Distribution (built on AI Central): card description + the 6 confirmed capabilities
function aiDistribution(lang: Lang) {
  const t = i18n.getFixedT(lang);
  const capabilities = t('aiCentralPage.aiDistribution.capabilities', { returnObjects: true }) as { title: string; text: string }[];
  return {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#ai-distribution`,
    name: AI_DISTRIBUTION[lang].name,
    description: t('products.aiDistribution.description'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: lang,
    featureList: capabilities.map((c) => `${c.title}: ${c.text}`),
    ...(FLAGS.showAiCentralLink && { url: abs(`${pathFor('aiCentral', lang)}#${AI_DISTRIBUTION[lang].anchor}`) }),
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

function homeGraph(lang: Lang) {
  const t = i18n.getFixedT(lang);
  const url = abs(pathFor('home', lang));
  return [
    organization(lang),
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: ['en', 'es'],
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#professional-service`,
      name: SITE_NAME,
      url,
      email: LEGAL.email,
      description: t('meta.home.description'),
      areaServed: 'Worldwide',
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('services.badge'),
        itemListElement: SERVICE_ORDER.map((key) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t(`services.items.${key}.title`),
            description: t(`services.items.${key}.description`),
            provider: { '@id': `${SITE_URL}/#organization` },
          },
        })),
      },
    },
    aiDistribution(lang),
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: lang,
      mainEntity: visibleHomeFaq().map((key) => ({
        '@type': 'Question',
        name: t(`faq.items.${key}.q`),
        acceptedAnswer: { '@type': 'Answer', text: t(`faq.items.${key}.a`) },
      })),
    },
  ];
}

function aiCentralGraph(lang: Lang) {
  const t = i18n.getFixedT(lang);
  return [
    organization(lang),
    {
      '@type': 'SoftwareApplication',
      name: AI_CENTRAL[lang].name,
      url: abs(pathFor('aiCentral', lang)),
      description: t('meta.aiCentral.description'),
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      inLanguage: lang,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    aiDistribution(lang),
  ];
}

function jsonLd(route: Route) {
  if (route.page === 'home') return homeGraph(route.lang);
  if (route.page === 'aiCentral' && FLAGS.showAiCentralLink) return aiCentralGraph(route.lang);
  if (route.page === 'notFound' || route.page === 'caseStudy') return null;
  return [organization(route.lang)];
}

/** <head> for one route, consumed by vite-prerender-plugin */
export function buildHead(route: Route) {
  const t = i18n.getFixedT(route.lang);
  const key = metaKey(route);
  const title = t(`meta.${key}.title`);
  const description = t(`meta.${key}.description`);
  const indexable = isIndexable(route.page);
  const url = abs(route.path);
  const image = abs(ogImage(route));
  const otherLang: Lang = route.lang === 'en' ? 'es' : 'en';

  const meta = (attr: 'name' | 'property', key: string, content: string): HeadElement => ({
    type: 'meta',
    props: { [attr]: key, content },
  });

  const elements: HeadElement[] = [
    // The heading font is referenced from CSS, so the browser finds it late: preload it for LCP
    { type: 'link', props: { rel: 'preload', as: 'font', type: 'font/otf', href: headingFont, crossorigin: 'anonymous' } },
    meta('name', 'description', description),
    meta('name', 'robots', indexable ? 'index, follow' : 'noindex, follow'),
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:title', title),
    meta('property', 'og:description', description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', image),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', t('meta.ogAlt')),
    meta('property', 'og:locale', OG_LOCALE[route.lang]),
    meta('property', 'og:locale:alternate', OG_LOCALE[otherLang]),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', description),
    meta('name', 'twitter:image', image),
    meta('name', 'twitter:image:alt', t('meta.ogAlt')),
    { type: 'link', props: { rel: 'alternate', type: 'text/plain', title: 'llms.txt', href: '/llms.txt' } },
    { type: 'link', props: { rel: 'alternate', type: 'text/plain', title: 'llms-full.txt', href: '/llms-full.txt' } },
  ];

  if (route.page !== 'notFound') elements.push({ type: 'link', props: { rel: 'canonical', href: url } });

  if (indexable) {
    const alternates = alternatesFor(route);
    for (const [lang, path] of Object.entries(alternates)) {
      elements.push({ type: 'link', props: { rel: 'alternate', hreflang: lang, href: abs(path) } });
    }
    if (alternates.en) elements.push({ type: 'link', props: { rel: 'alternate', hreflang: 'x-default', href: abs(alternates.en) } });
  }

  if (SEARCH_VERIFICATION.google) elements.push(meta('name', 'google-site-verification', SEARCH_VERIFICATION.google));
  if (SEARCH_VERIFICATION.bing) elements.push(meta('name', 'msvalidate.01', SEARCH_VERIFICATION.bing));

  const graph = jsonLd(route);
  if (graph) {
    elements.push({
      type: 'script',
      props: { type: 'application/ld+json' },
      // Escape "<" so no string can close the script element
      children: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c'),
    });
  }

  return { lang: route.lang, title, elements: new Set(elements) };
}
