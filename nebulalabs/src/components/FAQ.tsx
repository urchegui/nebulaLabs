import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: { q: string; a: string }[] = t('faq.items', {
    returnObjects: true,
  }) as { q: string; a: string }[];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-mono text-[#52525b] tracking-[0.15em] uppercase mb-4">
            {t('faq.badge')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-[#71717a] text-base">{t('faq.subtitle')}</p>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-white/[0.05]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-4 sm:gap-6 py-5 text-left group"
              >
                <span className={`text-sm font-medium transition-colors ${
                  openIndex === i ? 'text-white' : 'text-[#a1a1aa] group-hover:text-white'
                }`}>
                  {item.q}
                </span>
                <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded flex items-center justify-center transition-all ${
                  openIndex === i ? 'text-white' : 'text-[#52525b] group-hover:text-[#a1a1aa]'
                }`}>
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#71717a] text-sm leading-relaxed pb-5">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-[#52525b] hover:text-white transition-colors border-b border-[#27272a] hover:border-white pb-px"
          >
            Still have questions? Contact us →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
