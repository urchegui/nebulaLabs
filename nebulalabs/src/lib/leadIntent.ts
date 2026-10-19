import type { Need } from '../config/site';
import { track } from './analytics';

// Which CTA brought the visitor to the contact form (sent to Web3Forms as `source`)
export interface LeadIntent {
  source: string;
  need?: Need;
}

let current: LeadIntent = { source: 'direct' };
const listeners = new Set<(intent: LeadIntent) => void>();

export function getLeadIntent() {
  return current;
}

export function subscribeLeadIntent(listener: (intent: LeadIntent) => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Records a CTA click (GA4 `cta_click`) and, when given, the intent for the contact form. */
export function ctaClick(location: string, intent?: LeadIntent) {
  track('cta_click', { location });
  if (!intent) return;
  current = intent;
  listeners.forEach((listener) => listener(intent));
}
