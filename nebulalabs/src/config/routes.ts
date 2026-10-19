import { AI_CENTRAL, FLAGS, type Lang } from './site';
import { LEGAL } from './legal';
import { approvedCases, CASE_BASE } from '../content/cases';

export type PageId = 'home' | 'aiCentral' | 'legalNotice' | 'privacy' | 'cookies' | 'caseStudy' | 'notFound';
type StaticPageId = Exclude<PageId, 'caseStudy' | 'notFound'>;

export interface Route {
  page: PageId;
  lang: Lang;
  path: string;
  /** Case study slug (page === 'caseStudy') */
  slug?: string;
}

const PATHS: Record<StaticPageId, Record<Lang, string>> = {
  home: { en: '/', es: '/es/' },
  aiCentral: { en: `/${AI_CENTRAL.en.slug}`, es: `/es/${AI_CENTRAL.es.slug}` },
  legalNotice: { en: '/legal-notice', es: '/es/aviso-legal' },
  privacy: { en: '/privacy', es: '/es/privacidad' },
  cookies: { en: '/cookies', es: '/es/cookies' },
};

export const NOT_FOUND_PATH = '/404.html';

// Anchor of the terms of use, merged into the legal notice
export const TERMS_ANCHOR: Record<Lang, string> = { en: 'terms', es: 'terminos' };

export function pathFor(page: StaticPageId, lang: Lang): string {
  return PATHS[page][lang];
}

export function sectionHref(lang: Lang, section: string): string {
  return `${PATHS.home[lang]}#${section}`;
}

const casePath = (slug: string, lang: Lang) => `${CASE_BASE[lang]}/${slug}`;

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

export function resolveRoute(pathname: string): Route {
  const wanted = normalize(pathname);
  for (const [page, byLang] of Object.entries(PATHS) as [StaticPageId, Record<Lang, string>][]) {
    for (const lang of Object.keys(byLang) as Lang[]) {
      if (normalize(byLang[lang]) === wanted) return { page, lang, path: byLang[lang] };
    }
  }
  for (const c of approvedCases()) {
    for (const lang of Object.keys(CASE_BASE) as Lang[]) {
      if (casePath(c.slug, lang) === wanted) return { page: 'caseStudy', lang, path: wanted, slug: c.slug };
    }
  }
  const lang: Lang = wanted === '/es' || wanted.startsWith('/es/') ? 'es' : 'en';
  return { page: 'notFound', lang, path: NOT_FOUND_PATH };
}

export function alternatesFor(route: Route): Partial<Record<Lang, string>> {
  if (route.page === 'notFound') return {};
  if (route.page === 'caseStudy' && route.slug) {
    return { en: casePath(route.slug, 'en'), es: casePath(route.slug, 'es') };
  }
  return PATHS[route.page as StaticPageId];
}

export function isIndexable(page: PageId): boolean {
  switch (page) {
    case 'home':
      return true;
    case 'aiCentral':
      return FLAGS.showAiCentralLink;
    case 'legalNotice':
    case 'privacy':
    case 'cookies':
      return LEGAL.legalReviewed;
    case 'caseStudy':
    case 'notFound':
      return false;
  }
}

/** Every route the prerender generates (indexable or not) */
export function allPrerenderPaths(): string[] {
  const cases = approvedCases().flatMap((c) => [casePath(c.slug, 'en'), casePath(c.slug, 'es')]);
  return [...Object.values(PATHS).flatMap((byLang) => Object.values(byLang)), ...cases, NOT_FOUND_PATH];
}

/** Indexable pages for the sitemap */
export function indexablePages(): { page: StaticPageId; paths: Record<Lang, string> }[] {
  return (Object.keys(PATHS) as StaticPageId[])
    .filter(isIndexable)
    .map((page) => ({ page, paths: PATHS[page] }));
}
