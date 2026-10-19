import { useTranslation } from 'react-i18next';
import { FLAGS } from '../config/site';
import { LOGOS, type Logo, type LogoGroups } from '../content/logos';

// Logo wall, built but hidden (FLAGS.showLogoWall). Planned spot: home, between the hero and "What we do".
function Group({ label, logos }: { label: string; logos: Logo[] }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-[11px] font-mono text-[#8a8a93] uppercase tracking-[0.15em]">{label}</p>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((logo) => (
          <li key={logo.name}>
            <img
              src={logo.src}
              alt={logo.name}
              height={28}
              className="h-7 w-auto grayscale opacity-60 [@media(hover:hover)]:hover:grayscale-0 [@media(hover:hover)]:hover:opacity-100 transition"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LogoWall({ logos = LOGOS }: { logos?: LogoGroups }) {
  const { t } = useTranslation();
  if (!FLAGS.showLogoWall) return null;
  const clients = FLAGS.showClientsGroup ? logos.clients.filter((l) => l.approved) : [];
  const team = FLAGS.showTeamGroup ? logos.team.filter((l) => l.approved) : [];
  if (!clients.length && !team.length) return null;

  return (
    <section aria-label={t('logoWall.clients')} className="py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {clients.length > 0 && <Group label={t('logoWall.clients')} logos={clients} />}
        {clients.length > 0 && team.length > 0 && <hr className="border-white/[0.06]" />}
        {team.length > 0 && <Group label={t('logoWall.team')} logos={team} />}
      </div>
    </section>
  );
}
