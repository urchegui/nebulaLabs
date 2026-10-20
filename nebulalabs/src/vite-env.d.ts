/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_KEY: string;
  /** Local review only: show every logo in the logo wall, approved or not */
  readonly VITE_PREVIEW_ALL_LOGOS?: string;
}

/** Year of the build, injected by vite.config.ts (keeps prerender and hydration in sync) */
declare const __BUILD_YEAR__: number;
