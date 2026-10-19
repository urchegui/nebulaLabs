import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FLAGS } from '../config/site';
import { sectionHref } from '../config/routes';
import { useRoute } from '../lib/route';
import { ctaClick } from '../lib/leadIntent';
import { CodeWindow, kw, str } from './ui';

export default function Hero() {
  const { t } = useTranslation();
  const { lang } = useRoute();
  const stats = t('hero.stats', { returnObjects: true }) as { value: string; label: string }[];

  // H1 and subtitle render visible from the first paint (no entrance animation) to keep LCP fast
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-dots pt-24 pb-28"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,163,255,0.3), transparent)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,163,255,0.04) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a3ff]" aria-hidden="true" />
            <span className="text-[11px] font-mono text-[#8a8a93] tracking-[0.15em] uppercase">{t('hero.badge')}</span>
          </div>
        </div>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[82px] font-bold leading-[1.05] tracking-[-0.02em] mb-5 sm:mb-6"
        >
          <span className="text-white">{t('hero.title1')}</span>
          <br />
          <span className="text-gradient">{t('hero.title2')}</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#8a8a93] max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={sectionHref(lang, 'contact')}
            onClick={() => ctaClick('hero_primary', { source: 'hero' })}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-black bg-white hover:bg-[#00a3ff] transition-colors duration-200"
          >
            {t('hero.cta')}
            <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={sectionHref(lang, 'services')}
            onClick={() => ctaClick('hero_secondary')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-[#a1a1aa] hover:text-white border border-white/[0.08] hover:border-white/20 transition-colors duration-200"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-14 max-w-md mx-auto"
        >
          <CodeWindow>
            <p>
              <span className={kw}>const</span> <span className="text-white">company</span> ={' '}
              <span className={kw}>await</span> <span className="text-white">nebula.</span>
              <span className={kw}>audit</span>(<span className={str}>"operations"</span>);
            </p>
            <p>
              <span className={kw}>await</span> <span className="text-white">company.</span>
              <span className={kw}>automate</span>({'{ '}scope: <span className={str}>"end-to-end"</span>{' }'});
            </p>
          </CodeWindow>
        </motion.div>

        {FLAGS.showHeroStats && stats.length > 0 && (
          <dl className="mt-14 sm:mt-20 flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-xs text-[#8a8a93] mt-1 tracking-wide order-2">{stat.label}</dt>
                <dd className="text-2xl font-bold text-white font-mono">{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <a
        href="#what-we-do"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8a8a93] hover:text-white transition-colors"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">{t('hero.scroll')}</span>
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </a>
    </section>
  );
}
