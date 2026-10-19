import { createRoot, hydrateRoot } from 'react-dom/client'
// Self-hosted JetBrains Mono, latin subset only (covers English and Spanish)
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import '@fontsource/jetbrains-mono/latin-600.css'
import './index.css'
import { setLanguage } from './i18n'
import Root from './Root.tsx'
import { allPrerenderPaths, resolveRoute } from './config/routes'
import { initAnalytics } from './lib/analytics'
import { buildHead } from './lib/seo'

const LEGAL_PAGES = ['legalNotice', 'privacy', 'cookies']

async function start() {
  const route = resolveRoute(window.location.pathname)
  await setLanguage(route.lang, { legal: LEGAL_PAGES.includes(route.page) })
  const root = document.getElementById('root')!
  // Hydrate only when the prerendered HTML matches this route's language
  // (e.g. /es/unknown is served the English 404 page and is rendered client-side in Spanish)
  if (root.hasChildNodes() && document.documentElement.lang === route.lang) {
    hydrateRoot(root, <Root route={route} />)
  } else {
    root.innerHTML = ''
    createRoot(root).render(<Root route={route} />)
  }
  document.documentElement.lang = route.lang
  initAnalytics()
  // Cookie banner + Consent Mode, off the critical path
  import('./lib/consent').then((m) => m.initConsent(route.lang))
}

if (typeof window !== 'undefined') start()

// Called at build time by vite-prerender-plugin, once per route
export async function prerender({ url }: { url: string }) {
  const route = resolveRoute(url)
  await setLanguage(route.lang, { legal: LEGAL_PAGES.includes(route.page) })
  // The edge build: the browser one opens a MessageChannel that keeps Node alive after the build
  const { renderToString } = await import('react-dom/server.edge')
  return {
    html: renderToString(<Root route={route} />),
    links: new Set(allPrerenderPaths()),
    head: buildHead(route),
  }
}
