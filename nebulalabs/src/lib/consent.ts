import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import '../styles/cookieconsent.css';
import i18n from '../i18n';
import { CONSENT_EXPIRES_DAYS, CONSENT_REVISION, type Lang } from '../config/site';
import { pathFor } from '../config/routes';
import { setAnalyticsConsent } from './analytics';

const sync = () => setAnalyticsConsent(CookieConsent.acceptedCategory('analytics'));

// Loaded lazily after hydration (main.tsx) so it stays off the critical rendering path
export function initConsent(lang: Lang) {
  const t = i18n.getFixedT(lang, 'translation', 'cookieBanner');
  const policyLink = `<a href="${pathFor('cookies', lang)}">${t('policyLink')}</a>`;

  CookieConsent.run({
    revision: CONSENT_REVISION,
    cookie: { name: 'cc_cookie', expiresAfterDays: CONSENT_EXPIRES_DAYS, sameSite: 'Lax' },
    guiOptions: {
      consentModal: { layout: 'box', position: 'bottom left', equalWeightButtons: true, flipButtons: false },
      preferencesModal: { layout: 'box', equalWeightButtons: true, flipButtons: false },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: { autoClear: { cookies: [{ name: /^_ga/ }] } },
    },
    onConsent: sync,
    onChange: sync,
    language: {
      default: lang,
      translations: {
        [lang]: {
          consentModal: {
            title: t('title'),
            description: `${t('description')} ${t('moreInfo')} ${policyLink}.`,
            acceptAllBtn: t('acceptAll'),
            acceptNecessaryBtn: t('rejectAll'),
            showPreferencesBtn: t('configure'),
          },
          preferencesModal: {
            title: t('prefsTitle'),
            acceptAllBtn: t('acceptAll'),
            acceptNecessaryBtn: t('rejectAll'),
            savePreferencesBtn: t('save'),
            closeIconLabel: t('close'),
            sections: [
              { title: t('necessaryTitle'), description: t('necessaryDesc'), linkedCategory: 'necessary' },
              { title: t('analyticsTitle'), description: t('analyticsDesc'), linkedCategory: 'analytics' },
              { description: `${t('moreInfo')} ${policyLink}.` },
            ],
          },
        },
      },
    },
  });
}

export function showCookiePreferences() {
  CookieConsent.showPreferences();
}
