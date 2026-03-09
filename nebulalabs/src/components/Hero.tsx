import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-dots"
    >
      {/* Top center glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,163,255,0.3), transparent)' }}
      />

      {/* Faint radial at center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,163,255,0.04) 0%, transparent 60%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a3ff]" />
            <span className="text-[11px] font-mono text-[#71717a] tracking-[0.15em] uppercase">
              {t('hero.badge')}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[82px] font-bold leading-[1.05] tracking-[-0.02em] mb-5 sm:mb-6"
        >
          <span className="text-white">{t('hero.title1')}</span>
          <br />
          <span className="text-gradient">{t('hero.title2')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-[#71717a] max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo('#services')}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-black bg-white hover:bg-[#00a3ff] transition-colors duration-200"
          >
            {t('hero.cta')}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() => scrollTo('#docs')}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-[#a1a1aa] hover:text-white border border-white/[0.08] hover:border-white/20 transition-all duration-200"
          >
            <FileText size={14} />
            {t('hero.ctaSecondary')}
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 sm:mt-20 flex items-center justify-center gap-6 sm:gap-10 flex-wrap"
        >
          {[
            { value: '4', label: 'Focus areas' },
            { value: '∞', label: 'Research depth' },
            { value: '0→1', label: 'Built from scratch' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
              <div className="text-xs text-[#52525b] mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollTo('#services')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3f3f46] hover:text-[#71717a] transition-colors"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
