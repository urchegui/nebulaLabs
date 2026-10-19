import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import i18n from './i18n'
import App from './App.tsx'

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (typeof window !== 'undefined') {
  const root = document.getElementById('root')!
  // The prerendered HTML is in English; hydrate only when the client language matches
  if (root.hasChildNodes() && i18n.language === 'en') {
    hydrateRoot(root, app)
  } else {
    root.innerHTML = ''
    createRoot(root).render(app)
  }
}

// Called at build time by vite-prerender-plugin to generate static HTML
export async function prerender() {
  // The edge build: the browser one opens a MessageChannel that keeps Node alive after the build
  const { renderToString } = await import('react-dom/server.edge')
  return { html: renderToString(app) }
}
