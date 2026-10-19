import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import type { Lang } from '../config/site';

// The language comes from the URL (/ = EN, /es/ = ES), never from browser storage,
// so the prerendered HTML and the hydrated app always match.
// Each page only downloads its own language, and the legal texts only on legal pages.
i18n.use(initReactI18next).init({
  resources: {},
  lng: 'en',
  fallbackLng: false,
  initAsync: false,
  showSupportNotice: false,
  interpolation: { escapeValue: false },
});

const UI = { en: () => import('./en'), es: () => import('./es') };
const LEGAL = { en: () => import('./legal.en'), es: () => import('./legal.es') };

export async function setLanguage(lang: Lang, { legal = false } = {}) {
  if (!i18n.hasResourceBundle(lang, 'translation')) {
    i18n.addResourceBundle(lang, 'translation', (await UI[lang]()).default);
  }
  if (legal && !i18n.hasResourceBundle(lang, 'legal')) {
    i18n.addResourceBundle(lang, 'legal', (await LEGAL[lang]()).default);
  }
  if (i18n.language !== lang) await i18n.changeLanguage(lang);
}

export default i18n;
