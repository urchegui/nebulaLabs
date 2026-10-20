import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpenCheck, Layers, Share2 } from 'lucide-react';
import { AI_CENTRAL, AI_DISTRIBUTION, FLAGS, SLR_REPO_URL } from '../config/site';
import { pathFor } from '../config/routes';
import { useRoute } from '../lib/route';
import { ctaClick } from '../lib/leadIntent';
import { ExternalLink, SectionHeader } from './ui';

const cardClass = 'rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col scroll-mt-24';

export default function Products() {
  const { t } = useTranslation();
  const { lang } = useRoute();

  return (
    <section id="products" aria-labelledby="products-title" className="relative py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader id="products-title" badge={t('products.badge')} title={t('products.title')} className="mb-12" />
        <ul className="grid md:grid-cols-3 gap-4">
          <motion.li
            id="ai-central"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={cardClass}
          >
            <Layers size={18} aria-hidden="true" className="text-[#a1a1aa] mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">{AI_CENTRAL[lang].name}</h3>
            <p className="text-[#8a8a93] text-sm leading-relaxed mb-5">{t('products.aiCentral.tagline')}</p>
            {FLAGS.showAiCentralLink && (
              <a
                href={pathFor('aiCentral', lang)}
                onClick={() => ctaClick('products_ai_central')}
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa] hover:text-white"
              >
                {t('products.aiCentral.cta')}
                <span className="sr-only">: {AI_CENTRAL[lang].name}</span>
                <ArrowRight size={12} aria-hidden="true" />
              </a>
            )}
          </motion.li>

          <motion.li
            id="ai-distribution"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className={cardClass}
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <Share2 size={18} aria-hidden="true" className="text-[#a1a1aa] flex-shrink-0" />
              <span className="text-[10px] font-mono text-[#00a3ff] border border-[#00a3ff]/30 rounded px-2 py-0.5 text-right">
                {t('products.aiDistribution.badge')}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{AI_DISTRIBUTION[lang].name}</h3>
            <p className="text-[#8a8a93] text-sm leading-relaxed mb-5">{t('products.aiDistribution.description')}</p>
            {/* Links to its section on the AI Central landing, so it follows that page's publication flag */}
            {FLAGS.showAiCentralLink && (
              <a
                href={`${pathFor('aiCentral', lang)}#${AI_DISTRIBUTION[lang].anchor}`}
                onClick={() => ctaClick('products_ai_distribution')}
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa] hover:text-white"
              >
                {t('products.aiDistribution.cta')}
                <span className="sr-only">: {AI_DISTRIBUTION[lang].name}</span>
                <ArrowRight size={12} aria-hidden="true" />
              </a>
            )}
          </motion.li>

          <motion.li
            id="slr"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className={cardClass}
          >
            <div className="flex items-center justify-between mb-4">
              <BookOpenCheck size={18} aria-hidden="true" className="text-[#a1a1aa]" />
              <span className="text-[10px] font-mono text-[#00a3ff] border border-[#00a3ff]/30 rounded px-2 py-0.5">
                {t('products.slr.badge')}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{t('products.slr.name')}</h3>
            <p className="text-[#8a8a93] text-sm leading-relaxed mb-5">{t('products.slr.description')}</p>
            {FLAGS.showSlrRepoLink && (
              <ExternalLink
                href={SLR_REPO_URL}
                onClick={() => ctaClick('products_slr_repo')}
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa] hover:text-white"
              >
                {t('products.slr.repoCta')}
              </ExternalLink>
            )}
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
