import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui';

const STEPS = ['diagnose', 'build', 'run'] as const;

export default function HowWeWork() {
  const { t } = useTranslation();
  return (
    <section id="how-we-work" aria-labelledby="how-we-work-title" className="relative py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader id="how-we-work-title" badge={t('howWeWork.badge')} title={t('howWeWork.title')} className="mb-12" />
        <ol className="grid md:grid-cols-3 gap-4">
          {STEPS.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <span className="block text-xs font-mono text-[#00a3ff] mb-3" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-white font-semibold text-lg mb-2">{t(`howWeWork.steps.${step}.title`)}</h3>
              <p className="text-[#8a8a93] text-sm leading-relaxed">{t(`howWeWork.steps.${step}.text`)}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
