import type { ComponentType } from 'react';
import type { PageId } from '../config/routes';

// Each page is its own chunk: main.tsx loads only the current page before rendering,
// so the home does not download the AI Central landing (and vice versa).
const LOADERS: Record<PageId, () => Promise<{ default: ComponentType }>> = {
  home: () => import('./HomePage'),
  aiCentral: () => import('./AiCentralPage'),
  legalNotice: () => import('./LegalPage'),
  privacy: () => import('./LegalPage'),
  cookies: () => import('./LegalPage'),
  caseStudy: () => import('./CaseStudyPage'),
  notFound: () => import('./NotFoundPage'),
};

export async function loadPage(page: PageId): Promise<ComponentType> {
  return (await LOADERS[page]()).default;
}
