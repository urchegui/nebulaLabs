import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import logoNebula from '../assets/LOGO.svg';
import { AI_CENTRAL, FLAGS, type Lang } from '../config/site';
import { alternatesFor, pathFor, sectionHref } from '../config/routes';
import { useRoute } from '../lib/route';
import { track } from '../lib/analytics';
import { ctaClick } from '../lib/leadIntent';

const SECTIONS = ['services', 'research', 'about', 'contact'] as const;

export default function Navbar() {
  const { t } = useTranslation();
  const route = useRoute();
  const { lang } = route;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);

  const otherLang: Lang = lang === 'en' ? 'es' : 'en';
  const otherLangPath = alternatesFor(route)[otherLang] ?? pathFor('home', otherLang);

  const products = [
    {
      key: 'ai-central',
      label: AI_CENTRAL[lang].name,
      href: FLAGS.showAiCentralLink ? pathFor('aiCentral', lang) : sectionHref(lang, 'products'),
    },
    { key: 'slr', label: 'SLR', href: sectionHref(lang, 'products') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the products disclosure on outside click and on Escape
  useEffect(() => {
    if (!productsOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!productsRef.current?.contains(e.target as Node)) setProductsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProductsOpen(false);
        productsButtonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [productsOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const onLanguageSwitch = () => track('language_switch', { from: lang, to: otherLang });
  const onGetInTouch = () => {
    setMobileOpen(false);
    ctaClick('nav_get_in_touch', { source: 'nav' });
  };

  const linkClass = 'text-[13px] text-[#a1a1aa] hover:text-white transition-colors duration-150 font-medium';

  const langSwitch = (className: string) => (
    <a
      href={otherLangPath}
      hrefLang={otherLang}
      onClick={onLanguageSwitch}
      aria-label={t('nav.switchTo')}
      className={className}
    >
      <span className={lang === 'en' ? 'text-white' : ''}>EN</span>
      <span className="text-[#77777f] mx-0.5" aria-hidden="true">/</span>
      <span className={lang === 'es' ? 'text-white' : ''}>ES</span>
    </a>
  );

  return (
    <>
      <nav
        aria-label={t('a11y.mainNav')}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || mobileOpen ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href={pathFor('home', lang)} className="flex items-center w-36">
            <img src={logoNebula} alt={t('a11y.home')} width={144} height={32} className="nebulaLabs-logo w-full h-auto" />
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-7">
            <li>
              <a href={sectionHref(lang, 'services')} className={linkClass}>
                {t('nav.services')}
              </a>
            </li>
            <li>
              <div ref={productsRef} className="relative">
                <button
                  ref={productsButtonRef}
                  type="button"
                  aria-expanded={productsOpen}
                  aria-controls="nav-products-menu"
                  onClick={() => setProductsOpen((open) => !open)}
                  className={`${linkClass} inline-flex items-center gap-1`}
                >
                  {t('nav.products')}
                  <ChevronDown size={13} aria-hidden="true" className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                <ul
                  id="nav-products-menu"
                  hidden={!productsOpen}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 min-w-44 rounded-lg border border-white/[0.08] bg-black/95 backdrop-blur-xl p-1.5"
                >
                  {products.map((p) => (
                    <li key={p.key}>
                      <a
                        href={p.href}
                        onClick={() => {
                          setProductsOpen(false);
                          ctaClick(`nav_products_${p.key}`);
                        }}
                        className="block rounded-md px-3 py-2 text-[13px] text-[#a1a1aa] hover:text-white hover:bg-white/[0.05]"
                      >
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {SECTIONS.slice(1).map((key) => (
              <li key={key}>
                <a href={sectionHref(lang, key)} className={linkClass}>
                  {t(`nav.${key}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {langSwitch(
              'flex items-center gap-1 text-[11px] font-mono text-[#8a8a93] hover:text-white transition-colors border border-white/[0.08] hover:border-white/20 rounded-md px-2.5 py-1.5',
            )}
            <a
              href={sectionHref(lang, 'contact')}
              onClick={onGetInTouch}
              className="text-[13px] font-medium text-black bg-white hover:bg-[#00a3ff] px-4 py-1.5 rounded-lg transition-colors duration-200"
            >
              {t('nav.getInTouch')}
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-[#a1a1aa] hover:text-white transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="nav-mobile-menu"
            aria-label={mobileOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="nav-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed top-14 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/[0.06] px-4 sm:px-6 py-5 max-h-[calc(100vh-3.5rem)] overflow-y-auto"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <a href={sectionHref(lang, 'services')} onClick={() => setMobileOpen(false)} className="text-[#a1a1aa] hover:text-white text-base font-medium">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <p className="text-[11px] font-mono text-[#8a8a93] uppercase tracking-wider mb-2">{t('nav.products')}</p>
                <ul className="flex flex-col gap-3 pl-3 border-l border-white/[0.08]">
                  {products.map((p) => (
                    <li key={p.key}>
                      <a href={p.href} onClick={() => setMobileOpen(false)} className="text-[#a1a1aa] hover:text-white text-base">
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              {SECTIONS.slice(1).map((key) => (
                <li key={key}>
                  <a href={sectionHref(lang, key)} onClick={() => setMobileOpen(false)} className="text-[#a1a1aa] hover:text-white text-base font-medium">
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              {langSwitch('flex items-center gap-1 text-sm font-mono text-[#8a8a93] hover:text-white')}
              <a
                href={sectionHref(lang, 'contact')}
                onClick={onGetInTouch}
                className="text-sm font-medium text-black bg-white hover:bg-[#00a3ff] px-4 py-2 rounded-lg transition-colors"
              >
                {t('nav.getInTouch')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
