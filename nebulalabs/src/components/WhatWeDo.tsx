import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Boxes, FlaskConical, Wrench } from 'lucide-react';
import { sectionHref } from '../config/routes';
import { useRoute } from '../lib/route';
import { useCardSpotlight } from '../hooks/useCardSpotlight';
import { SectionHeader } from './ui';

const COLUMNS = [
  { key: 'services', icon: Wrench, target: 'services' },
  { key: 'products', icon: Boxes, target: 'products' },
  { key: 'research', icon: FlaskConical, target: 'research' },
] as const;

function Column({ column, index }: { column: (typeof COLUMNS)[number]; index: number }) {
  const { t } = useTranslation();
  const { lang } = useRoute();
  const { ref, onMouseMove, onMouseLeave } = useCardSpotlight<HTMLLIElement>();
  const Icon = column.icon;

  return (
    <motion.li
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="spotlight-card group rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-colors"
    >
      <a href={sectionHref(lang, column.target)} className="relative z-[1] block p-6 h-full">
        <div className="inline-flex p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.06] mb-5">
          <Icon size={18} aria-hidden="true" className="text-[#a1a1aa] group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{t(`whatWeDo.items.${column.key}.title`)}</h3>
        <p className="text-[#8a8a93] text-sm leading-relaxed mb-4">{t(`whatWeDo.items.${column.key}.description`)}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa] group-hover:text-white">
          {t('whatWeDo.more')}
          <ArrowRight size={12} aria-hidden="true" />
        </span>
      </a>
    </motion.li>
  );
}

export default function WhatWeDo() {
  const { t } = useTranslation();
  return (
    <section id="what-we-do" aria-labelledby="what-we-do-title" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader id="what-we-do-title" badge={t('whatWeDo.badge')} title={t('whatWeDo.title')} className="mb-12" />
        <ul className="grid md:grid-cols-3 gap-4">
          {COLUMNS.map((column, i) => (
            <Column key={column.key} column={column} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
