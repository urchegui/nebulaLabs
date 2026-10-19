import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Atom, Brain, Code2, Compass, Network, Workflow } from 'lucide-react';
import type { Need } from '../config/site';
import { sectionHref } from '../config/routes';
import { useRoute } from '../lib/route';
import { ctaClick } from '../lib/leadIntent';
import { useCardSpotlight } from '../hooks/useCardSpotlight';
import { Chip, SectionHeader } from './ui';

// The first two are the featured services
const SERVICES: { key: string; icon: typeof Atom; need?: Need; featured?: boolean }[] = [
  { key: 'automation', icon: Workflow, need: 'automation', featured: true },
  { key: 'cto', icon: Compass, need: 'fractional-cto', featured: true },
  { key: 'software', icon: Code2, need: 'software' },
  { key: 'ai', icon: Brain, need: 'ai' },
  { key: 'quantum', icon: Atom, need: 'quantum' },
  { key: 'consulting', icon: Network },
];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const { t } = useTranslation();
  const { lang } = useRoute();
  const { ref, onMouseMove, onMouseLeave } = useCardSpotlight<HTMLLIElement>();
  const Icon = service.icon;
  const tags = t(`services.items.${service.key}.tags`, { returnObjects: true }) as string[];
  const titleId = `service-${service.key}`;

  return (
    <motion.li
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`spotlight-card group relative bg-black hover:bg-[#0a0a0a] transition-colors duration-200 ${
        service.featured ? 'lg:col-span-6 p-6 sm:p-10' : 'lg:col-span-3 p-5 sm:p-7'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[#00a3ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-[1] flex flex-col h-full">
        <div className="inline-flex self-start p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.06] mb-5">
          <Icon size={service.featured ? 22 : 18} aria-hidden="true" className="text-[#a1a1aa] group-hover:text-white transition-colors" />
        </div>
        <h3 id={titleId} className={`text-white font-semibold mb-2.5 ${service.featured ? 'text-2xl' : 'text-lg'}`}>
          {t(`services.items.${service.key}.title`)}
        </h3>
        <p className={`text-[#8a8a93] leading-relaxed mb-5 ${service.featured ? 'text-base' : 'text-sm'}`}>
          {t(`services.items.${service.key}.description`)}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <a
          href={sectionHref(lang, 'contact')}
          aria-describedby={titleId}
          onClick={() => ctaClick(`services_${service.key}`, { source: `services-${service.key}`, need: service.need })}
          className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa] hover:text-white transition-colors"
        >
          {t('services.cta')}
          <ArrowRight size={12} aria-hidden="true" />
        </a>
      </div>
    </motion.li>
  );
}

export default function Services() {
  const { t } = useTranslation();
  return (
    <section id="services" aria-labelledby="services-title" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader id="services-title" badge={t('services.badge')} title={t('services.title')} subtitle={t('services.subtitle')} />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-12 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.key} service={service} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
