// Single source of truth for site-wide constants and feature flags.
// Pure data: imported by the app, the prerender and vite.config.ts (sitemap, llms-full.txt).

export type Lang = 'en' | 'es';
export const LANGS: Lang[] = ['en', 'es'];
export const DEFAULT_LANG: Lang = 'en';

export const SITE_URL = 'https://nebulalabs.es';
export const SITE_NAME = 'Nebula Labs';
export const CONTACT_EMAIL = 'hello@nebulalabs.es';
export const GA_MEASUREMENT_ID = 'G-HWT8864LK9';

export const SOCIALS = {
  github: 'https://github.com/Nebula-Labs-SL',
  linkedin: 'https://www.linkedin.com/company/nebula-labs-sl',
} as const;

// Repo exists and is public, but the founder doesn't want it linked yet (showSlrRepoLink)
export const SLR_REPO_URL = 'https://github.com/Nebula-Labs-SL/Systematic-Literature-Review';

// Product name and slug, defined once per language
export const AI_CENTRAL = {
  en: { name: 'AI Central', slug: 'ai-central' },
  es: { name: 'IA Central', slug: 'ia-central' },
} as const;

// Product built on AI Central. `anchor` = its section on the AI Central landing.
export const AI_DISTRIBUTION = {
  en: { name: 'AI Distribution', anchor: 'ai-distribution' },
  es: { name: 'IA Distribución', anchor: 'ia-distribucion' },
} as const;

// Services order on the page, in the JSON-LD OfferCatalog and in llms(-full).txt
export const SERVICE_ORDER = ['ai', 'software', 'quantum', 'automation', 'cto', 'consulting'] as const;
export type ServiceKey = (typeof SERVICE_ORDER)[number];

export const FLAGS = {
  /** Hero stats strip. No verifiable figures today. */
  showHeroStats: false,
  /** Logo wall (home, between hero and "What we do") */
  showLogoWall: true,
  showClientsGroup: false,
  showTeamGroup: true,
  /** Academic collaborations block in #research */
  showCollaborations: false,
  /** AI Central landing: links from nav/products, indexing, sitemap and SoftwareApplication JSON-LD */
  showAiCentralLink: false,
  /** AI Central primary CTA: 'demo' ("Book a demo") or 'beta' ("Join the beta") */
  aiCentralCta: 'demo' as 'demo' | 'beta',
  /** FAQ "Where are your papers published?" until @marketing delivers new copy */
  showPapersFaq: false,
  /** Link to the SLR GitHub repo (SLR is mentioned without a link for now) */
  showSlrRepoLink: false,
  /** Research newsletter signup (double opt-in, tool pending) */
  showNewsletter: false,
};

// Values sent to Web3Forms: stable English values, only the labels are translated
export const NEED_OPTIONS = [
  'automation',
  'fractional-cto',
  'software',
  'ai',
  'quantum',
  'product',
  'research-collaboration',
] as const;
export type Need = (typeof NEED_OPTIONS)[number];

// Bump to ask every visitor for cookie consent again (e.g. when the cookie policy changes)
export const CONSENT_REVISION = 1;
// [DATO: consent renewal period; the AEPD guidance points to 24 months at most]
export const CONSENT_EXPIRES_DAYS = 365;

// Search engine verification metas (empty = not rendered). Set when verifying in GSC / Bing.
export const SEARCH_VERIFICATION = {
  google: '',
  bing: '',
};

// IndexNow key, served at /<key>.txt (see SEO_CHECKLIST.md)
export const INDEXNOW_KEY = 'a7c3e9f14b2d4e8f9c06d5b1e2f3a4c7';
