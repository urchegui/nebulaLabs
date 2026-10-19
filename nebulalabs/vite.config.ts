import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import { seoFiles } from './build/seo-files'

export default defineConfig({
  define: {
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
  build: {
    // Never publish source maps
    sourcemap: false,
  },
  plugins: [
    react(),
    tailwindcss(),
    // Routes are discovered from the `links` returned by prerender() in src/main.tsx
    vitePrerenderPlugin({
      renderTarget: '#root',
    }),
    seoFiles(),
  ],
})
