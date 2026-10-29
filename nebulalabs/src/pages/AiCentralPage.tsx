import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail } from 'lucide-react';
import { AI_DISTRIBUTION, CONTACT_EMAIL, FLAGS, type Lang } from '../config/site';
import { AI_CENTRAL_FAQ } from '../content/faq';
import { useRoute } from '../lib/route';
import { ctaClick } from '../lib/leadIntent';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import { Chip, CodeWindow, SectionHeader, kw, str } from '../components/ui';
import ProductMock from '../components/landing/ProductMock';
import HowItWorks from '../components/landing/HowItWorks';
import Principles from '../components/landing/Principles';
import TeamTabs from '../components/landing/TeamTabs';
import { IllustrativeTag, Nebula } from '../components/landing/parts';

// AI Central / IA Central landing. Pilot phase: no figures, no clients, every mock labelled
// "Illustrative". It tells what the product does and guarantees, never how it is built.
const HOW_ID: Record<Lang, string> = { en: 'how', es: 'como' };

const btnPrimary =
  'group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-lg font-medium text-sm text-black bg-white hover:bg-[#00a3ff] transition-colors duration-200';
const btnSecondary =
  'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-lg font-medium text-sm text-[#a1a1aa] hover:text-white border border-white/[0.1] hover:border-white/25 transition-colors duration-200';

function ProblemVisual({ index }: { index: number }) {
  // Static, deliberately messy micro-visuals that contrast with the order of "How it works"
  if (index === 0) {
    return (
      <div aria-hidden="true" className="relative h-20 mb-5">
        {['ERP', 'CRM', 'Shop', 'Stock', 'PDF'].map((label, i) => (
          <span
            key={label}
            className="absolute text-[10px] font-mono text-[#a1a1aa] border border-white/[0.12] rounded px-1.5 py-0.5"
            style={{ left: `${[2, 38, 66, 18, 52][i]}%`, top: `${[8, 0, 30, 52, 60][i]}%`, transform: `rotate(${[-6, 4, -3, 7, -5][i]}deg)` }}
          >
            {label}
          </span>
        ))}
      </div>
    );
  }
  if (index === 1) {
    return (
      <div aria-hidden="true" className="h-20 mb-5 flex items-center gap-3 font-mono text-sm">
        <span className="border border-white/[0.12] rounded px-2 py-1 text-white">1.240 €</span>
        <span className="text-[#a1a1aa]">≠</span>
        <span className="border border-white/[0.12] rounded px-2 py-1 text-white">1240,00</span>
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="h-20 mb-5 flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-8 h-6 rounded border border-white/[0.12]" />
          {i < 2 && <span className="w-6 border-t border-dashed border-white/[0.3]" />}
        </div>
      ))}
    </div>
  );
}

export default function AiCentralPage() {
  const { t } = useTranslation();
  const { lang } = useRoute();
  const howId = HOW_ID[lang];
  const systems = t('aiCentralPage.systems.chips', { returnObjects: true }) as string[];
  const problems = t('aiCentralPage.problem.cards', { returnObjects: true }) as { title: string; text: string }[];
  const capabilities = t('aiCentralPage.aiDistribution.capabilities', { returnObjects: true }) as { title: string; text: string }[];
  const distQuestions = t('aiCentralPage.aiDistribution.snippet', { returnObjects: true }) as string[];
  const ctoAreas = t('aiCentralPage.cto.areas', { returnObjects: true }) as { title: string; text: string }[];
  const mailSubject = encodeURIComponent(lang === 'es' ? 'Taller de descubrimiento IA Central' : 'AI Central discovery workshop');

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="aic-hero-title" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 grid-dots">
        <Nebula tone="cyan" position="top" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            {/* Product name: the first thing read on this page */}
            <p className="flex items-center gap-3 sm:gap-4 mb-6">
              <span aria-hidden="true" className="aic-core shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.02em] bg-gradient-to-r from-white via-[#bfe3ff] to-[#00a3ff] bg-clip-text text-transparent">
                {t('aiCentralPage.hero.eyebrow')}
              </span>
            </p>
            {FLAGS.showPilotBadge && (
              <p className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] rounded-full px-4 py-1.5 mb-6 text-[11px] font-mono text-[#a1a1aa] tracking-[0.1em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a3ff]" aria-hidden="true" />
                {t('aiCentralPage.hero.badge')}
              </p>
            )}
            <h1 id="aic-hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
              {t('aiCentralPage.hero.title')}
            </h1>
            <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed mb-8 max-w-xl">{t('aiCentralPage.hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#cta" onClick={() => ctaClick('hero_primary', { source: 'ai-central', need: 'product' })} className={btnPrimary}>
                {t('aiCentralPage.hero.ctaPrimary')}
                <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={`#${howId}`} onClick={() => ctaClick('hero_secondary')} className={btnSecondary}>
                {t('aiCentralPage.hero.ctaSecondary')}
              </a>
            </div>
          </div>
          <ProductMock />
        </div>
      </section>

      {/* Systems strip */}
      <section aria-labelledby="aic-systems-title" className="relative px-4 sm:px-6 py-10 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <h2 id="aic-systems-title" className="text-sm text-[#a1a1aa] md:max-w-[14rem] flex-shrink-0">
            {t('aiCentralPage.systems.title')}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {systems.map((s) => (
              <li key={s}>
                <span className="aic-chip inline-block text-[12px] font-mono text-[#d4d4d8] border border-white/[0.1] rounded-md px-3 py-1.5">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The problem */}
      <section aria-labelledby="aic-problem-title" className="aic-cv relative py-20 sm:py-28 px-4 sm:px-6">
        <Nebula tone="deep" position="left" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader id="aic-problem-title" badge={t('aiCentralPage.problem.eyebrow')} title={t('aiCentralPage.problem.title')} className="mb-12" />
          <ul className="grid md:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <li key={p.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <ProblemVisual index={i} />
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-[#8a8a93] text-sm leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks id={howId} />
      <Principles />
      <TeamTabs />

      {/* Built on AI Central: AI Distribution (flag) */}
      {FLAGS.showAiDistribution && (
        <section id={AI_DISTRIBUTION[lang].anchor} aria-labelledby="aic-dist-title" className="relative py-20 sm:py-28 px-4 sm:px-6 scroll-mt-14">
          <Nebula tone="cyan" position="right" />
          <div className="relative max-w-6xl mx-auto">
            <SectionHeader
              id="aic-dist-title"
              badge={t('aiCentralPage.aiDistribution.badge')}
              title={t('aiCentralPage.aiDistribution.title')}
              subtitle={t('aiCentralPage.aiDistribution.subtitle')}
              className="mb-12"
            />
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {capabilities.map((c) => (
                <li key={c.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <h3 className="text-white font-semibold mb-2">{c.title}</h3>
                  <p className="text-[#8a8a93] text-sm leading-relaxed">{c.text}</p>
                </li>
              ))}
            </ul>
            <div className="max-w-xl mx-auto mb-10">
              <div className="flex justify-end mb-2">
                <IllustrativeTag />
              </div>
              <CodeWindow>
                {distQuestions.map((q) => (
                  <p key={q}>
                    <span className={kw}>await</span> <span className="text-white">nebula.{t('aiCentralPage.aiDistribution.snippetObject')}.</span>
                    <span className={kw}>ask</span>(<span className={str}>"{q}"</span>);
                  </p>
                ))}
              </CodeWindow>
            </div>
            <div className="text-center">
              <a href="#contact" onClick={() => ctaClick('ai_distribution', { source: 'ai-distribution', need: 'product' })} className={btnPrimary}>
                {t('aiCentralPage.final.primary')}
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* For your CTO */}
      <section aria-labelledby="aic-cto-title" className="aic-cv relative py-20 sm:py-28 px-4 sm:px-6">
        <Nebula tone="deep" position="top" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader id="aic-cto-title" badge={t('aiCentralPage.cto.eyebrow')} title={t('aiCentralPage.cto.title')} className="mb-12" />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {ctoAreas.map((area) => (
              <li key={area.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <Chip>{area.title}</Chip>
                <p className="text-[#a1a1aa] text-sm leading-relaxed mt-4">{area.text}</p>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-[#00a3ff]/25 bg-[#00a3ff]/[0.04] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">{t('aiCentralPage.cto.bandTitle')}</h3>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{t('aiCentralPage.cto.bandText')}</p>
            </div>
            <a href="#contact" onClick={() => ctaClick('cto_brief', { source: 'ai-central-cto', need: 'product' })} className={`${btnSecondary} lg:flex-shrink-0`}>
              {t('aiCentralPage.cto.cta')}
            </a>
          </div>
        </div>
      </section>


      <FAQ id="ai-central-faq" itemsKey="aiCentralPage.faq" keys={AI_CENTRAL_FAQ} titleKey="aiCentralPage.faqTitle" showContactCta={false} />

      {/* Final CTA */}
      <section id="cta" aria-labelledby="aic-final-title" className="aic-cv relative py-20 sm:py-28 px-4 sm:px-6 scroll-mt-14 text-center">
        <Nebula tone="cyan" position="bottom" />
        <div className="relative max-w-3xl mx-auto">
          {/* Core of the constellation at rest: static glow */}
          <div aria-hidden="true" className="aic-core w-28 h-28 sm:w-36 sm:h-36 rounded-full mx-auto mb-10 opacity-80" />
          <h2 id="aic-final-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('aiCentralPage.final.title')}
          </h2>
          <p className="text-[#a1a1aa] text-base max-w-xl mx-auto mb-8">{t('aiCentralPage.final.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href="#contact" onClick={() => ctaClick('final_primary', { source: 'ai-central', need: 'product' })} className={btnPrimary}>
              {t('aiCentralPage.final.primary')}
              <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${mailSubject}`} onClick={() => ctaClick('final_email')} className={btnSecondary}>
              <Mail size={14} aria-hidden="true" />
              <span>
                <span className="sr-only">{t('aiCentralPage.final.emailLabel')} </span>
                {CONTACT_EMAIL}
              </span>
            </a>
          </div>
          <p className="text-xs text-[#8a8a93] max-w-xl mx-auto">{t('aiCentralPage.final.note')}</p>
        </div>
      </section>

      <Contact defaultNeed="product" defaultSource="ai-central" />
    </>
  );
}
