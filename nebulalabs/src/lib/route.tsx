import { createContext, useContext, type ReactNode } from 'react';
import type { Route } from '../config/routes';

const RouteContext = createContext<Route>({ page: 'home', lang: 'en', path: '/' });

export function RouteProvider({ route, children }: { route: Route; children: ReactNode }) {
  return <RouteContext.Provider value={route}>{children}</RouteContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useRoute = () => useContext(RouteContext);
