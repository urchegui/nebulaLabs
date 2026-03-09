import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'docs', href: '#docs' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('nebula-lang', next);
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center group-hover:bg-[#00a3ff] transition-colors duration-200">
              <span className="text-black font-bold text-sm font-mono leading-none">N</span>
            </div>
            <span className="font-semibold text-white text-[15px] tracking-tight">
              nebula<span className="text-[#a1a1aa]">labs</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.href)}
                className="text-[13px] text-[#71717a] hover:text-white transition-colors duration-150 font-medium"
              >
                {t(`nav.${link.key}`)}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-[11px] font-mono text-[#52525b] hover:text-white transition-colors border border-white/[0.07] hover:border-white/20 rounded-md px-2.5 py-1.5"
            >
              <span className={i18n.language === 'en' ? 'text-white' : ''}>EN</span>
              <span className="text-[#27272a] mx-0.5">/</span>
              <span className={i18n.language === 'es' ? 'text-white' : ''}>ES</span>
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="text-[13px] font-medium text-black bg-white hover:bg-[#00a3ff] px-4 py-1.5 rounded-lg transition-colors duration-200"
            >
              {t('nav.getInTouch')}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#71717a] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed top-14 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/[0.06] px-4 sm:px-6 py-5 flex flex-col gap-4 max-h-[calc(100vh-3.5rem)] overflow-y-auto"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.href)}
                className="text-left text-[#a1a1aa] hover:text-white transition-colors text-base font-medium"
              >
                {t(`nav.${link.key}`)}
              </button>
            ))}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <button
                onClick={toggleLang}
                className="text-sm font-mono text-[#52525b] hover:text-white transition-colors"
              >
                {i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="text-sm font-medium text-black bg-white hover:bg-[#00a3ff] px-4 py-2 rounded-lg transition-colors"
              >
                {t('nav.getInTouch')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
