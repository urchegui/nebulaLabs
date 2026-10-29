import type { CSSProperties } from 'react';

/** Delay for CSS-driven animations (read by the `.aic-a` rule in styles/landing.css) */
export const delay = (seconds: number) => ({ '--a-delay': `${seconds}s` }) as CSSProperties;
