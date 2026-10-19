import { useTranslation } from 'react-i18next';
import { CASES } from '../content/cases';
import { useRoute } from '../lib/route';
import { Chip } from '../components/ui';
import NotFoundPage from './NotFoundPage';

// Case study template: Challenge → Approach → Result → Stack.
// Only rendered for approved cases (see content/cases.ts); none exist today.
const PARTS = ['challenge', 'approach', 'result'] as const;

export default function CaseStudyPage() {
  const { t } = useTranslation();
  const { lang, slug } = useRoute();
  const study = CASES.find((c) => c.slug === slug && c.approved);
  if (!study) return <NotFoundPage />;
  const content = study.content[lang];

  return (
    <article aria-labelledby="case-title" className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <p className="text-[11px] font-mono text-[#8a8a93] uppercase tracking-[0.15em] mb-3">{content.client}</p>
      <h1 id="case-title" className="text-3xl md:text-5xl font-bold text-white mb-10">{content.title}</h1>
      {PARTS.map((part) => (
        <section key={part} className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">{t(`caseStudy.${part}`)}</h2>
          <p className="text-[#a1a1aa] leading-relaxed">{content[part]}</p>
        </section>
      ))}
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">{t('caseStudy.stack')}</h2>
        <ul className="flex flex-wrap gap-2">
          {study.stack.map((s) => (
            <li key={s}><Chip>{s}</Chip></li>
          ))}
        </ul>
      </section>
    </article>
  );
}
