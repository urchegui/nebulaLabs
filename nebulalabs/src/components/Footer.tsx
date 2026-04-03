import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import logoNebula from '../assets/LOGO.svg';

const SOCIALS = [
  { icon: Github, href: 'https://github.com/Nebula-Labs-SL', label: 'GitHub' },
  //{ icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/nebula-labs-sl', label: 'LinkedIn' },
];

export default function Footer() {
  const { t } = useTranslation();

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.05] pt-10 sm:pt-14 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-10 sm:mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-36 h-36 rounded-md flex items-center justify-center">
                <img src={logoNebula} alt="logo Nebula Labs" className='nebulaLabs-logo w-100 h-100' />
              </div>
            </div>
            <p className="text-[#3f3f46] text-xs leading-relaxed mb-5">
              {t('footer.description')}
            </p>
            <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-7 h-7 rounded-md border border-white/[0.07] hover:border-white/20 flex items-center justify-center text-[#3f3f46] hover:text-white transition-all"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-mono text-[#3f3f46] uppercase tracking-[0.15em] mb-4">
              {t('footer.links.company')}
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: t('footer.links.about'), href: '#about' },
                { label: t('footer.links.services'), href: '#services' },
                { label: t('footer.links.contact'), href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-[13px] text-[#52525b] hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[10px] font-mono text-[#3f3f46] uppercase tracking-[0.15em] mb-4">
              {t('footer.links.resources')}
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: t('footer.links.docs'), href: '#docs' },
                { label: t('footer.links.faq'), href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-[13px] text-[#52525b] hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-mono text-[#3f3f46] uppercase tracking-[0.15em] mb-4">
              {t('footer.links.legal')}
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: t('footer.links.privacy'), href: '#' },
                { label: t('footer.links.terms'), href: '#' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-[#52525b] hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05] pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] text-[#27272a]"
          >
            {t('footer.copyright')}
          </motion.p>
          <p className="text-[11px] text-[#27272a] font-mono">{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}
