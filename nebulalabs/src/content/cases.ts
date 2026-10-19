import type { Lang } from '../config/site';

// Case studies. Template: Challenge → Approach → Result → Stack.
// A case only gets a page (/cases/{slug}, /es/casos/{slug}) when `approved` is true.
// Pages are noindex, out of the sitemap and not linked from anywhere.
export interface CaseStudy {
  slug: string;
  approved: boolean;
  content: Record<Lang, { title: string; client: string; challenge: string; approach: string; result: string }>;
  stack: string[];
}

export const CASES: CaseStudy[] = [];

export const approvedCases = () => CASES.filter((c) => c.approved);

export const CASE_BASE: Record<Lang, string> = { en: '/cases', es: '/es/casos' };
