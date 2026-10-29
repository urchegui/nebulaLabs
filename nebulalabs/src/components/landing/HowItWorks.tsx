import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { track } from '../../lib/analytics';
import { useOnceInView } from '../../hooks/useOnceInView';
import { SectionHeader } from '../ui';
import ConstellationScene from './ConstellationScene';
import { Nebula } from './parts';

type Stage = 1 | 2 | 3;
const STAGES: Stage[] = [1, 2, 3];

let completeSent = false;
const markComplete = () => {
  if (completeSent) return;
  completeSent = true;
  track('how_it_works_complete');
};

/** Mobile: one vignette per step, animated once when it enters the viewport */
function Vignette({ stage }: { stage: Stage }) {
  const [ref, played] = useOnceInView<HTMLDivElement>(0.4);
  useEffect(() => {
    if (played && stage === 3) markComplete();
  }, [played, stage]);
  return (
    <div ref={ref} className="lg:hidden mt-6 max-w-[420px] mx-auto">
      <ConstellationScene stage={stage} played={played ? STAGES.filter((s) => s <= stage) : []} baseStatic={stage > 1} only={stage} />
    </div>
  );
}

export default function HowItWorks({ id }: { id: string }) {
  const { t } = useTranslation();
  const steps = t('aiCentralPage.how.steps', { returnObjects: true }) as { title: string; text: string }[];
  // Server render: final state (stage 3, everything played). On the client it restarts at stage 1
  // and advances with the step in the middle of the viewport.
  const [stage, setStage] = useState<Stage>(3);
  const [played, setPlayed] = useState<number[]>([1, 2, 3]);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Restart from stage 1 on the first frame after hydration (the section is off-screen by then)
    const frame = requestAnimationFrame(() => {
      setStage(1);
      setPlayed([]);
    });
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const next = (Number((entry.target as HTMLElement).dataset.step) || 1) as Stage;
          setStage(next);
          setPlayed((p) => (p.includes(next) ? p : [...p, next]));
          if (next === 3 && window.matchMedia('(min-width: 1024px)').matches) markComplete();
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, []);

  return (
    <section id={id} aria-labelledby="how-title" className="relative py-20 sm:py-28 px-4 sm:px-6 scroll-mt-14">
      <Nebula tone="light" position="left" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader id="how-title" badge={t('aiCentralPage.how.eyebrow')} title={t('aiCentralPage.how.title')} subtitle={t('aiCentralPage.how.subtitle')} className="mb-14 lg:mb-6" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <ol className="lg:py-[18vh]">
            {steps.map((step, i) => {
              const n = (i + 1) as Stage;
              const active = stage === n;
              return (
                <li
                  key={step.title}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-step={n}
                  className="py-8 lg:py-0 lg:min-h-[52vh] lg:flex lg:flex-col lg:justify-center border-t border-white/[0.06] lg:border-0 first:border-0"
                >
                  <span className="block font-mono text-sm text-[#00a3ff] mb-3" aria-hidden="true">
                    {String(n).padStart(2, '0')}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-300 ${active ? 'text-white' : 'text-white lg:text-[#8a8a93]'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-base leading-relaxed max-w-md transition-colors duration-300 ${active ? 'text-[#a1a1aa]' : 'text-[#a1a1aa] lg:text-[#77777f]'}`}>
                    {step.text}
                  </p>
                  <Vignette stage={n} />
                </li>
              );
            })}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-[calc(50vh-15rem)] w-full max-w-[30rem] mx-auto">
              <ConstellationScene stage={stage} played={played} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
