import { StrictMode, type ComponentType } from 'react'
import { MotionConfig } from 'framer-motion'
import App from './App.tsx'
import type { Route } from './config/routes'
import { RouteProvider } from './lib/route'

export default function Root({ route, Page }: { route: Route; Page: ComponentType }) {
  return (
    <StrictMode>
      <RouteProvider route={route}>
        {/* Honors prefers-reduced-motion for every framer-motion animation */}
        <MotionConfig reducedMotion="user">
          <App Page={Page} />
        </MotionConfig>
      </RouteProvider>
    </StrictMode>
  )
}
