import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnswerCard, IllustrativeTag, TypedText } from './parts';
import { delay } from './delay';

// Hero product mock (HTML/CSS). Plays once on load: question types in, answer and tags appear,
// then the approval button. Total under 4 s. The H1 next to it paints first and is the LCP.
export default function ProductMock() {
  const { t } = useTranslation();
  const [played, setPlayed] = useState(false);
  const sources = t('aiCentralPage.hero.mock.sources', { returnObjects: true }) as string[];
  const tags = t('aiCentralPage.hero.mock.tags', { returnObjects: true }) as string[];
  const question = t('aiCentralPage.hero.mock.question');
  const typingEnd = 0.3 + Array.from(question).length * 0.022;

  // Start on the first frame after hydration
  useEffect(() => {
    const id = requestAnimationFrame(() => setPlayed(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      role="img"
      aria-label={t('aiCentralPage.hero.mock.aria')}
      className={`aic-anim ${played ? 'is-played' : ''} relative w-full rounded-2xl border border-white/[0.08] bg-black/60 backdrop-blur-sm overflow-hidden`}
    >
      <div aria-hidden="true">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-white/10" />
              <span className="w-2 h-2 rounded-full bg-white/10" />
              <span className="w-2 h-2 rounded-full bg-white/10" />
            </div>
            <span className="text-[11px] font-mono text-[#a1a1aa] truncate">{t('aiCentralPage.hero.mock.route')}</span>
          </div>
          <IllustrativeTag />
        </div>

        <div className="grid sm:grid-cols-[9rem_1fr]">
          {/* Sources */}
          <div className="border-b sm:border-b-0 sm:border-r border-white/[0.06] p-3 sm:p-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#a1a1aa] mb-2.5">{t('aiCentralPage.hero.mock.sourcesLabel')}</p>
            <ul className="flex sm:flex-col flex-wrap gap-1.5">
              {sources.map((s, i) => (
                <li key={s} className="aic-a aic-fade flex items-center gap-2 text-[11px] font-mono text-[#d4d4d8]" style={delay(i * 0.06)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a3ff]/80" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Conversation */}
          <div className="p-3 sm:p-5 flex flex-col gap-3 min-h-[19rem] sm:min-h-[20rem]">
            <div className="self-end max-w-[92%] rounded-xl rounded-br-sm bg-white/[0.06] border border-white/[0.08] px-3 py-2 text-[13px] sm:text-sm text-white">
              <TypedText text={question} start={0.3} step={0.022} />
            </div>
            <AnswerCard
              tags={tags}
              text={t('aiCentralPage.hero.mock.answer')}
              startAt={typingEnd + 0.2}
              footer={
                <div className="aic-a mt-3 pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2" style={delay(typingEnd + 1.1)}>
                  <span className="text-[12px] sm:text-[13px] text-white">{t('aiCentralPage.hero.mock.recommendation')}</span>
                  <span className="aic-a aic-pop text-[11px] font-mono rounded-md border border-[#00a3ff]/50 text-[#7ec8ff] px-2 py-1" style={delay(typingEnd + 1.5)}>
                    {t('aiCentralPage.hero.mock.approval')}
                  </span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
