import { FLAGS } from '../config/site';

// Order of the home FAQ (keys under faq.items). Shared by the FAQ section and the FAQPage JSON-LD,
// so the structured data only lists questions that are actually rendered.
const HOME_FAQ = [
  'projects',
  'fractionalCto',
  'automation',
  'products',
  'collaborate',
  'consulting',
  'papers',
  'progress',
  'startups',
] as const;

export type HomeFaqKey = (typeof HOME_FAQ)[number];

export const visibleHomeFaq = (): HomeFaqKey[] =>
  HOME_FAQ.filter((key) => key !== 'papers' || FLAGS.showPapersFaq);

export const AI_CENTRAL_FAQ = ['what', 'custom'] as const;
