import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { FLAGS } from '../config/site';
import { LOGOS, type Logo, type LogoGroups } from '../content/logos';

// Logo wall (FLAGS.showLogoWall). Home, between the hero and "What we do".
// Static grid, no carousel, no links to the companies' websites.
function Group({ label, logos }: { label: string; logos: Logo[] }) {
  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-[11px] font-mono text-[#8a8a93] uppercase tracking-[0.15em]">{label}</p>
      {/* Desktop: 5 per row. Mobile: 2 columns, 3 from 400 px */}
      <ul className="grid grid-cols-2 min-[400px]:grid-cols-3 md:grid-cols-5 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10 items-center justify-items-center w-full">
        {logos.map((logo) => (
          <li key={logo.name} className="flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.name}
              width={Math.round(logo.height * logo.ratio)}
              height={logo.height}
              loading="lazy"
              decoding="async"
              style={
                {
                  '--logo-h': `${logo.height}px`,
                  '--logo-h-mobile': `${Math.round(logo.height * 0.85)}px`,
                  '--logo-rest': logo.restOpacity ?? 0.7,
                } as CSSProperties
              }
              // Assets already come in grey (#A6A6B4): no colour filter. Hover keeps the grey (no brand colours),
              // and touch devices get no hover state.
              className="w-auto max-w-full h-[var(--logo-h-mobile)] md:h-[var(--logo-h)] opacity-[var(--logo-rest)] [@media(hover:hover)]:hover:opacity-100 transition-opacity duration-200"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

// Local review only: build with VITE_PREVIEW_ALL_LOGOS=true to see every logo.
// Never set in CI, so production only renders approved logos.
const showAll = import.meta.env.VITE_PREVIEW_ALL_LOGOS === 'true';
const visible = (list: Logo[]) => (showAll ? list : list.filter((l) => l.approved));

export default function LogoWall({ logos = LOGOS }: { logos?: LogoGroups }) {
  const { t } = useTranslation();
  if (!FLAGS.showLogoWall) return null;
  const clients = FLAGS.showClientsGroup ? visible(logos.clients) : [];
  const team = FLAGS.showTeamGroup ? visible(logos.team) : [];
  if (!clients.length && !team.length) return null;

  return (
    <section aria-label={team.length ? t('logoWall.team') : t('logoWall.clients')} className="relative z-10 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {clients.length > 0 && <Group label={t('logoWall.clients')} logos={clients} />}
        {clients.length > 0 && team.length > 0 && <hr className="border-white/[0.06]" />}
        {team.length > 0 && <Group label={t('logoWall.team')} logos={team} />}
      </div>
    </section>
  );
}
