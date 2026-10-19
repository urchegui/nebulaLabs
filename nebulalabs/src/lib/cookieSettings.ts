/** Reopens the cookie preferences panel (loads the consent module on demand). */
export function openCookieSettings() {
  import('./consent').then((m) => m.showCookiePreferences());
}
