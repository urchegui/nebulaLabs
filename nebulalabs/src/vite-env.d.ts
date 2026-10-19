/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_KEY: string;
}

/** Year of the build, injected by vite.config.ts (keeps prerender and hydration in sync) */
declare const __BUILD_YEAR__: number;
