import { useTranslation } from 'react-i18next';
import { useOnceInView } from '../../hooks/useOnceInView';
import { SectionHeader } from '../ui';
import { Nebula } from './parts';
import { delay } from './delay';

// Adoption in four steps. The line between steps draws once when the list enters the viewport
// (horizontal on desktop, vertical on mobile).
export default function PhaseTimeline() {
  const { t } = useTranslation();
  const steps = t('aiCentralPage.phases.steps', { returnObjects: true }) as { title: string; text: string; deliverable: string }[];
  const phaseLabel = t('aiCentralPage.phases.phaseLabel');
  const [ref, played] = useOnceInView<HTMLDivElement>(0.4);

  return (
    <section aria-labelledby="phases-title" className="aic-cv relative py-20 sm:py-28 px-4 sm:px-6">
      <Nebula tone="light" position="bottom" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader id="phases-title" badge={t('aiCentralPage.phases.eyebrow')} title={t('aiCentralPage.phases.title')} className="mb-12" />
        <div ref={ref} className={`aic-anim ${played ? 'is-played' : ''} relative`}>
          {/* track + drawn line */}
          <div aria-hidden="true" className="absolute left-[11px] top-3 bottom-3 w-px md:left-3 md:right-3 md:top-[11px] md:bottom-auto md:w-auto md:h-px bg-white/[0.1]">
            <span className="aic-a aic-grow-y md:hidden absolute inset-0 origin-top bg-[#00a3ff]" style={delay(0.1)} />
            <span className="aic-a aic-grow-x hidden md:block absolute inset-0 origin-left bg-[#00a3ff]" style={delay(0.1)} />
          </div>
          <ol className="relative grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative pl-10 md:pl-0 md:pt-10">
              <span
                aria-hidden="true"
                className="aic-a aic-pop absolute left-0 top-0 w-6 h-6 rounded-full border border-[#00a3ff]/60 bg-black flex items-center justify-center text-[10px] font-mono text-[#7ec8ff]"
                style={delay(0.1 + i * 0.2)}
              >
                {i + 1}
              </span>
              <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#7ec8ff] mb-1.5">
                {phaseLabel} {i + 1}
              </p>
              <h3 className="text-white font-semibold text-lg mb-1.5">{step.title}</h3>
              <p className="text-[#8a8a93] text-sm leading-relaxed mb-2">{step.text}</p>
              <p className="text-[#d4d4d8] text-sm leading-relaxed">
                <span aria-hidden="true" className="text-[#00a3ff] mr-1.5">→</span>
                {step.deliverable}
              </p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
