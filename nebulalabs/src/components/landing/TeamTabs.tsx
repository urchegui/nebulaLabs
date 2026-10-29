import { useRef, useState, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../ui';
import { AnswerCard, IllustrativeTag, Nebula } from './parts';

interface Team {
  label: string;
  text: string;
  question: string;
  tags: string[];
}

// Accessible tabs (WAI-ARIA tabs pattern): arrow keys, Home and End, roving tabindex.
export default function TeamTabs() {
  const { t } = useTranslation();
  const teams = t('aiCentralPage.teams.items', { returnObjects: true }) as Team[];
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    const next = (i + teams.length) % teams.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, () => void> = {
      ArrowRight: () => select(active + 1),
      ArrowLeft: () => select(active - 1),
      Home: () => select(0),
      End: () => select(teams.length - 1),
    };
    if (keys[e.key]) {
      e.preventDefault();
      keys[e.key]();
    }
  };

  return (
    <section aria-labelledby="teams-title" className="aic-cv relative py-20 sm:py-28 px-4 sm:px-6">
      <Nebula tone="cyan" position="top" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader id="teams-title" badge={t('aiCentralPage.teams.eyebrow')} title={t('aiCentralPage.teams.title')} className="mb-10" />

        <div role="tablist" aria-label={t('aiCentralPage.teams.tabsLabel')} className="flex gap-2 overflow-x-auto pb-2 mb-8 sm:justify-center">
          {teams.map((item, i) => (
            <button
              key={item.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`team-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-controls={`team-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                active === i ? 'bg-white text-black border-white' : 'text-[#a1a1aa] border-white/[0.1] hover:text-white hover:border-white/25'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {teams.map((item, i) => (
          <div
            key={item.label}
            id={`team-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`team-tab-${i}`}
            hidden={active !== i}
            tabIndex={0}
            className="grid md:grid-cols-2 gap-6 md:gap-10 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3ff] rounded-xl"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.label}</h3>
              <p className="text-[#a1a1aa] leading-relaxed">{item.text}</p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-black/60 p-4">
              <div className="flex justify-end mb-3">
                <IllustrativeTag />
              </div>
              <p className="ml-auto w-fit max-w-[92%] rounded-xl rounded-br-sm bg-white/[0.06] border border-white/[0.08] px-3 py-2 text-sm text-white mb-3">
                {item.question}
              </p>
              <AnswerCard tags={item.tags} />
            </div>
          </div>
        ))}

        <p className="text-xs text-[#8a8a93] text-center max-w-2xl mx-auto mt-10">{t('aiCentralPage.teams.note')}</p>
      </div>
    </section>
  );
}
