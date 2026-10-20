import { useTranslation } from 'react-i18next';
import { Github, Linkedin } from 'lucide-react';
import logoNebula from '../assets/LOGO.svg';
import { SOCIALS } from '../config/site';
import { pathFor, sectionHref, TERMS_ANCHOR } from '../config/routes';
import { useRoute } from '../lib/route';
import { openCookieSettings } from '../lib/cookieSettings';
import { ExternalLink } from './ui';

// No X/Twitter account: only real profiles are linked
const SOCIAL_LINKS = [
  { icon: Github, href: SOCIALS.github, label: 'GitHub' },
  { icon: Linkedin, href: SOCIALS.linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  const { t } = useTranslation();
  const { lang } = useRoute();

  const columns = [
    {
      title: t('footer.links.company'),
      links: [
        { label: t('footer.links.about'), href: sectionHref(lang, 'about') },
        { label: t('footer.links.services'), href: sectionHref(lang, 'services') },
        { label: t('footer.links.products'), href: sectionHref(lang, 'products') },
        { label: t('footer.links.contact'), href: sectionHref(lang, 'contact') },
      ],
    },
    {
      title: t('footer.links.resources'),
      links: [
        { label: t('footer.links.research'), href: sectionHref(lang, 'research') },
        { label: t('footer.links.faq'), href: sectionHref(lang, 'faq') },
      ],
    },
    {
      title: t('footer.links.legal'),
      links: [
        { label: t('footer.links.legalNotice'), href: pathFor('legalNotice', lang) },
        { label: t('footer.links.privacy'), href: pathFor('privacy', lang) },
        { label: t('footer.links.terms'), href: `${pathFor('legalNotice', lang)}#${TERMS_ANCHOR[lang]}` },
        { label: t('footer.links.cookies'), href: pathFor('cookies', lang) },
      ],
    },
  ];

  const linkClass = 'text-[13px] text-[#8a8a93] hover:text-white transition-colors';

  return (
    <footer className="relative border-t border-white/[0.06] pt-10 sm:pt-14 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-10 sm:mb-14">
          <div className="col-span-2 md:col-span-1">
            <img src={logoNebula} alt={t('a11y.logoAlt')} width={144} height={32} className="nebulaLabs-logo w-36 h-auto mb-4" />
            <p className="text-[#8a8a93] text-xs leading-relaxed mb-5">{t('footer.description')}</p>
            <ul className="flex gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <ExternalLink
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-md border border-white/[0.08] hover:border-white/20 flex items-center justify-center text-[#8a8a93] hover:text-white transition-colors"
                  >
                    <Icon size={14} aria-hidden="true" />
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[10px] font-mono text-[#8a8a93] uppercase tracking-[0.15em] mb-4">{column.title}</h2>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
                {column.title === t('footer.links.legal') && (
                  <li>
                    <button type="button" onClick={openCookieSettings} className={`${linkClass} text-left`}>
                      {t('footer.links.cookieSettings')}
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#8a8a93]">{t('footer.copyright', { year: __BUILD_YEAR__ })}</p>
          <p className="text-[11px] text-[#8a8a93] font-mono">{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}
