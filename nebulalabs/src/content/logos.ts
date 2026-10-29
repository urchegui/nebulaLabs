// Logo wall data. approved: false = not rendered in production.
// The founder sets approved: true once written permission is confirmed for each logo.
// Assets in /public/logos/: SVG when available, otherwise WebP exported at 2x the display height.
// They already come in grey (#A6A6B4) on transparent: no color filter is applied.
// Do NOT add these names to JSON-LD, llms.txt, meta tags or any copy as "Nebula clients".
export interface Logo {
  name: string;
  src: string;
  approved: boolean;
  /** Optical height in px on desktop (mobile renders at ~85%) */
  height: number;
  /** Intrinsic width / height, so the <img> gets explicit dimensions (no layout shift) */
  ratio: number;
  /** Opacity at rest (default 0.7) for visually lighter assets */
  restOpacity?: number;
}

export interface LogoGroups {
  clients: Logo[];
  team: Logo[];
}

// Order here = order on the page
export const LOGOS: LogoGroups = {
  clients: [],
  team: [
    { name: 'CaixaBank', src: '/logos/caixabank.webp', approved: true, height: 26, ratio: 894 / 200 },
    { name: 'Air Liquide', src: '/logos/air-liquide.svg', approved: true, height: 24, ratio: 168 / 32 },
    { name: 'Adolfo Domínguez', src: '/logos/adolfo-dominguez.svg', approved: true, height: 22, ratio: 320 / 34 },
    { name: 'Autocontrol', src: '/logos/autocontrol.webp', approved: true, height: 48, ratio: 161 / 200 },
    { name: 'Scuffers', src: '/logos/scuffers.svg', approved: false, height: 22, ratio: 1222 / 196 },
    { name: 'Token City', src: '/logos/token-city.webp', approved: true, height: 22, ratio: 1751 / 200 },
    { name: 'EME Studios', src: '/logos/eme-studios.webp', approved: false, height: 22, ratio: 1418 / 200 },
    { name: 'Prosol', src: '/logos/prosol.webp', approved: true, height: 29, ratio: 731 / 200, restOpacity: 0.85 },
    { name: 'LZ Insurance', src: '/logos/lz-insurance.webp', approved: true, height: 48, ratio: 165 / 200 },
    { name: 'Mardu Exclusivas', src: '/logos/mardu-exclusivas.webp', approved: true, height: 35, ratio: 514 / 200, restOpacity: 0.85 },
  ],
};
