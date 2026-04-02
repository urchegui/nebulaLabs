import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Atom, Brain, Code2, FlaskConical } from 'lucide-react';
import { useCardSpotlight } from '../hooks/useCardSpotlight';

const ICONS = [Atom, Brain, Code2, FlaskConical];
const SERVICE_KEYS = ['quantum', 'ai', 'software', 'rd'] as const;

function ServiceCard({ cardKey, index }: { cardKey: typeof SERVICE_KEYS[number]; index: number }) {
  const { t } = useTranslation();
  const { ref, onMouseMove, onMouseLeave } = useCardSpotlight();
  const Icon = ICONS[index];
  const tags: string[] = t(`services.${cardKey}.tags`, { returnObjects: true }) as string[];

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="spotlight-card group relative p-5 sm:p-8 bg-black hover:bg-[#0a0a0a] transition-colors duration-200 cursor-default"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[#00a3ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-[1]">
        <div className="inline-flex p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.06] mb-5">
          <Icon size={18} className="text-[#a1a1aa] group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-white font-semibold text-lg mb-2.5">
          {t(`services.${cardKey}.title`)}
        </h3>
        <p className="text-[#71717a] text-sm leading-relaxed mb-5">
          {t(`services.${cardKey}.description`)}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-[#52525b] border border-white/[0.06] rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-mono text-[#52525b] tracking-[0.15em] uppercase mb-4">
            {t('services.badge')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('services.title')}
          </h2>
          <p className="text-[#71717a] text-base max-w-lg mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {SERVICE_KEYS.map((key, i) => (
            <ServiceCard key={key} cardKey={key} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
