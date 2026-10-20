import type { LogoGroups } from '../content/logos';

// Example data for local development only. Not imported by the app, so it never reaches
// the production bundle. Generic placeholders: no real client or company.
// Usage: temporarily render <LogoWall logos={LOGO_WALL_FIXTURE} /> with the flags on.
const placeholder = (label: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="112" height="28"><rect width="112" height="28" rx="4" fill="#27272a"/><text x="56" y="18" font-family="monospace" font-size="11" fill="#a1a1aa" text-anchor="middle">${label}</text></svg>`,
  )}`;

export const LOGO_WALL_FIXTURE: LogoGroups = {
  clients: [1, 2, 3, 4].map((n) => ({ name: `Client ${n}`, src: placeholder(`CLIENT ${n}`), approved: true, height: 28, ratio: 4 })),
  team: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({ name: `Company ${n}`, src: placeholder(`CO ${n}`), approved: true, height: 28, ratio: 4 })),
};
