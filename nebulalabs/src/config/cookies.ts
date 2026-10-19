import { CONSENT_EXPIRES_DAYS, GA_MEASUREMENT_ID } from './site';

// Real inventory of cookies set by the site (audit, PASO 0). Feeds the cookie policy table.
export type CookieCategory = 'necessary' | 'analytics';

export interface CookieInfo {
  name: string;
  provider: string;
  party: 'first' | 'third';
  category: CookieCategory;
  /** i18n key under legal.cookieTable.purposes */
  purpose: string;
  /** i18n key under legal.cookieTable.durations, with optional {{days}} */
  duration: string;
}

export const COOKIES: CookieInfo[] = [
  {
    name: 'cc_cookie',
    provider: 'Nebula Labs',
    party: 'first',
    category: 'necessary',
    purpose: 'consent',
    duration: 'days',
  },
  {
    name: '_ga',
    provider: 'Google Ireland Ltd. (Google Analytics 4)',
    party: 'third',
    category: 'analytics',
    purpose: 'gaUser',
    duration: 'twoYears',
  },
  {
    name: `_ga_${GA_MEASUREMENT_ID.replace(/^G-/, '')}`,
    provider: 'Google Ireland Ltd. (Google Analytics 4)',
    party: 'third',
    category: 'analytics',
    purpose: 'gaSession',
    duration: 'twoYears',
  },
];

export const CONSENT_COOKIE_DAYS = CONSENT_EXPIRES_DAYS;
