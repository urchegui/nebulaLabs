import { useTranslation } from 'react-i18next';
import { FLAGS } from '../../config/site';
import { useOnceInView } from '../../hooks/useOnceInView';
import { CodeWindow, kw, str } from '../ui';
import { IllustrativeTag, LockIcon, Nebula, Tag } from './parts';
import { delay } from './delay';

// "AI explains. Your data decides." Exactly three nodes: question → system (permissions) → AI explains,
// then the answer with the four kinds of label. One pulse runs along the path when it enters view.
function Connector({ at }: { at: number }) {
  return (
    <div aria-hidden="true" className="relative flex-shrink-0 w-px h-8 md:h-px md:w-auto md:flex-1 bg-white/[0.1] overflow-hidden">
      <span className="aic-a aic-grow-y md:hidden absolute inset-0 origin-top bg-[#00a3ff]" style={delay(at)} />
      <span className="aic-a aic-grow-x hidden md:block absolute inset-0 origin-left bg-[#00a3ff]" style={delay(at)} />
    </div>
  );
}

function Diagram() {
  const { t } = useTranslation();
  const [ref, played] = useOnceInView<HTMLDivElement>(0.5);
  const kinds = t('aiCentralPage.principles.kinds', { returnObjects: true }) as string[];
  const node = 'rounded-xl border bg-[#0a0a0a] px-4 py-3 text-sm text-center';

  return (
    <div ref={ref} role="img" aria-label={t('aiCentralPage.principles.diagram.aria')} className={`aic-anim ${played ? 'is-played' : ''}`}>
      <div aria-hidden="true">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-3">
          <div className={`${node} border-white/[0.12] text-white w-full md:w-auto md:min-w-[9rem]`}>{t('aiCentralPage.principles.diagram.question')}</div>
          <Connector at={0.2} />
          <div className={`${node} border-[#00a3ff]/40 text-white w-full md:w-auto md:max-w-[15rem] flex items-center justify-center gap-2`}>
            <LockIcon className="text-[#7ec8ff] flex-shrink-0" />
            {t('aiCentralPage.principles.diagram.system')}
          </div>
          <Connector at={0.9} />
          <div className={`${node} border-white/[0.12] text-white w-full md:w-auto md:min-w-[9rem]`}>{t('aiCentralPage.principles.diagram.ai')}</div>
        </div>
        <div className="flex justify-center">
          <Connector at={1.6} />
        </div>
        <div className="aic-a rounded-xl border border-white/[0.08] bg-black/60 p-4 max-w-xl mx-auto md:mt-3" style={delay(2.2)}>
          <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#a1a1aa] mb-3">{t('aiCentralPage.principles.diagram.answer')}</p>
          <div className="flex flex-wrap gap-1.5">
            {kinds.map((kind, i) => (
              <Tag key={kind} tone={i === 0 ? 'accent' : i === 3 ? 'dashed' : 'default'}>
                {kind}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Principles() {
  const { t } = useTranslation();
  const cards = t('aiCentralPage.principles.cards', { returnObjects: true }) as { title: string; text: string }[];

  return (
    <section aria-labelledby="principles-title" className="aic-cv relative py-20 sm:py-28 px-4 sm:px-6">
      <Nebula tone="deep" position="right" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-mono text-[#8a8a93] tracking-[0.15em] uppercase mb-4">{t('aiCentralPage.principles.eyebrow')}</p>
          <h2 id="principles-title" className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">{t('aiCentralPage.principles.title1')}</span>{' '}
            <span className="text-gradient">{t('aiCentralPage.principles.title2')}</span>
          </h2>
          <p className="text-[#8a8a93] text-base max-w-2xl mx-auto">{t('aiCentralPage.principles.subtitle')}</p>
        </div>

        <div className="mb-14">
          <Diagram />
        </div>

        <div className={`grid gap-8 ${FLAGS.showCodeSnippet ? 'lg:grid-cols-[1fr_minmax(0,26rem)]' : ''} items-start`}>
          <ul className="grid sm:grid-cols-2 gap-4">
            {cards.map((card) => (
              <li key={card.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-[#8a8a93] text-sm leading-relaxed">{card.text}</p>
              </li>
            ))}
          </ul>

          {FLAGS.showCodeSnippet && (
            <div>
              <div className="flex justify-end mb-2">
                <IllustrativeTag />
              </div>
              <CodeWindow>
                <p className="text-[#a1a1aa]">{t('aiCentralPage.principles.snippetLabel')}</p>
                <p>
                  <span className={kw}>const</span> <span className="text-white">answer</span> = <span className={kw}>await</span>{' '}
                  <span className="text-white">central.</span>
                  <span className={kw}>ask</span>(
                </p>
                <p className="pl-4 break-words">
                  <span className={str}>"Which customers might need restocking this week?"</span>,
                </p>
                <p className="pl-4">
                  {'{ '}as: <span className={str}>"sales"</span>
                  {' }'}
                </p>
                <p>);</p>
                <p>&nbsp;</p>
                <p className="whitespace-pre"><span className="text-white">answer.kind;</span>    <span className="text-[#a1a1aa]">// "observed"</span></p>
                <p className="whitespace-pre"><span className="text-white">answer.source;</span>  <span className="text-[#a1a1aa]">// "ERP · Orders"</span></p>
                <p className="whitespace-pre"><span className="text-white">answer.scope;</span>   <span className="text-[#a1a1aa]">// "your accounts only"</span></p>
                <p className="whitespace-pre"><span className="text-white">answer.action;</span>  <span className="text-[#a1a1aa]">// "needs your approval"</span></p>
              </CodeWindow>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
