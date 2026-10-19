import { StrictMode } from 'react'
import { MotionConfig } from 'framer-motion'
import App from './App.tsx'
import type { Route } from './config/routes'
import { RouteProvider } from './lib/route'

export default function Root({ route }: { route: Route }) {
  return (
    <StrictMode>
      <RouteProvider route={route}>
        {/* Honors prefers-reduced-motion for every framer-motion animation */}
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </RouteProvider>
    </StrictMode>
  )
}
