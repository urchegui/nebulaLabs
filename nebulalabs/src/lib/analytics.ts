import { GA_MEASUREMENT_ID } from '../config/site';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;
let loaded = false;
let granted = false;

/** Consent Mode v2 defaults: everything denied until the visitor accepts analytics. */
export function initAnalytics() {
  if (initialized) return;
  initialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag requires the `arguments` object itself, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
}

/** gtag.js is only downloaded after consent, so GA writes no cookies before it. */
export function setAnalyticsConsent(on: boolean) {
  initAnalytics();
  granted = on;
  window.gtag('consent', 'update', { analytics_storage: on ? 'granted' : 'denied' });
  if (!on || loaded) return;
  loaded = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

/** No-op without consent. Never pass PII (name, email, message). */
export function track(event: string, params: Record<string, string | undefined> = {}) {
  if (!granted || typeof window === 'undefined') return;
  window.gtag('event', event, params);
}
