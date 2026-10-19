import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { FLAGS } from '../config/site';
import { sectionHref } from '../config/routes';
import { AI_CENTRAL_FAQ } from '../content/faq';
import { useRoute } from '../lib/route';
import { ctaClick } from '../lib/leadIntent';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import { Chip, SectionHeader } from '../components/ui';

const HOW = ['connect', 'unify', 'decide'] as const;

// Integrations, features and security only render once confirmed [DATO] (empty lists = hidden).
// No client logos or mentions on this page.
export default function AiCentralPage() {
  const { t } = useTranslation();
  const { lang } = useRoute();
  const integrations = t('aiCentralPage.integrations', { returnObjects: true }) as string[];
  const features = t('aiCentralPage.features', { returnObjects: true }) as { title: string; text: string }[];
  const security = t('aiCentralPage.security', { returnObjects: true }) as string[];
  const ctaLabel = FLAGS.aiCentralCta === 'beta' ? t('aiCentralPage.ctaBeta') : t('aiCentralPage.ctaDemo');

  const cta = (location: string) => (
    <a
      href="#contact"
      onClick={() => ctaClick(location)}
      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-black bg-white hover:bg-[#00a3ff] transition-colors"
    >
      {ctaLabel}
      <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );

  return (
    <>
      <section aria-labelledby="ai-central-title" className="relative min-h-[80vh] flex items-center justify-center grid-dots pt-28 pb-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="inline-block text-[11px] font-mono text-[#8a8a93] tracking-[0.15em] uppercase border border-white/[0.08] bg-white/[0.03] rounded-full px-4 py-1.5 mb-8">
            {t('aiCentralPage.badge')}
          </p>
          <h1 id="ai-central-title" className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
            {t('aiCentralPage.title')}
          </h1>
          <p className="text-base md:text-lg text-[#8a8a93] max-w-xl mx-auto leading-relaxed mb-10">{t('aiCentralPage.subtitle')}</p>
          {cta('ai_central_hero')}
        </div>
      </section>

      {integrations.length > 0 && (
        <section aria-labelledby="ai-central-integrations" className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="ai-central-integrations" className="text-xl font-semibold text-white mb-6">{t('aiCentralPage.integrationsTitle')}</h2>
            <ul className="flex flex-wrap justify-center gap-2">
              {integrations.map((name) => (
                <li key={name}><Chip>{name}</Chip></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="ai-central-how" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader id="ai-central-how" badge={t('aiCentralPage.badge')} title={t('aiCentralPage.howTitle')} className="mb-12" />
          <ol className="grid md:grid-cols-3 gap-4">
            {HOW.map((step, i) => (
              <li key={step} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <span aria-hidden="true" className="block text-xs font-mono text-[#00a3ff] mb-3">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-white font-semibold text-lg mb-2">{t(`aiCentralPage.how.${step}.title`)}</h3>
                <p className="text-[#8a8a93] text-sm leading-relaxed">{t(`aiCentralPage.how.${step}.text`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {features.length > 0 && (
        <section aria-labelledby="ai-central-features" className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 id="ai-central-features" className="text-3xl font-bold text-white text-center mb-12">{t('aiCentralPage.featuresTitle')}</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <li key={f.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                  <p className="text-[#8a8a93] text-sm">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {security.length > 0 && (
        <section aria-labelledby="ai-central-security" className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 id="ai-central-security" className="text-2xl font-bold text-white mb-6">{t('aiCentralPage.securityTitle')}</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#8a8a93] text-sm">
              {security.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="ai-central-custom" className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
          <h2 id="ai-central-custom" className="text-2xl font-bold text-white mb-3">{t('aiCentralPage.custom.title')}</h2>
          <p className="text-[#8a8a93] text-sm mb-6 max-w-lg mx-auto">{t('aiCentralPage.custom.text')}</p>
          <a
            href={sectionHref(lang, 'services')}
            onClick={() => ctaClick('ai_central_custom')}
            className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-white border-b border-white/[0.15] hover:border-white pb-px"
          >
            {t('aiCentralPage.custom.cta')}
            <ArrowRight size={13} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section aria-labelledby="ai-central-final" className="py-16 px-4 sm:px-6 text-center">
        <h2 id="ai-central-final" className="text-3xl font-bold text-white mb-6">{t('aiCentralPage.finalTitle')}</h2>
        {cta('ai_central_final')}
      </section>

      <FAQ id="ai-central-faq" itemsKey="aiCentralPage.faq" keys={AI_CENTRAL_FAQ} titleKey="aiCentralPage.faqTitle" showContactCta={false} />
      <Contact defaultNeed="product" defaultSource="ai-central" />
    </>
  );
}
