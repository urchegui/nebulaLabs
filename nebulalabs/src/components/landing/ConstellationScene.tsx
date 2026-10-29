import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { LockIcon, Tag, TypedText } from './parts';
import { delay } from './delay';

// "Constellation → Core → Answer". Shows results only: scattered systems, one record with its
// origin, an answer with source and permissions. The core is an opaque glow with no labels.
// Coordinates are percentages of a square scene, so it scales to any width.
const NODES = [
  { x: 50, y: 13 },
  { x: 82, y: 31 },
  { x: 82, y: 69 },
  { x: 50, y: 87 },
  { x: 18, y: 69 },
  { x: 18, y: 31 },
];

export interface SceneProps {
  /** Stage shown: 1 connect, 2 unify, 3 decide */
  stage: 1 | 2 | 3;
  /** Stages whose animations have been released */
  played: number[];
  /** Base constellation already in place (mobile vignettes 2 and 3) */
  baseStatic?: boolean;
  /** Render only this stage's overlay (mobile vignettes); the desktop scene renders all */
  only?: 1 | 2 | 3;
  className?: string;
}

export default function ConstellationScene({ stage, played, baseStatic = false, only, className = '' }: SceneProps) {
  const { t } = useTranslation();
  const chips = t('aiCentralPage.how.scene.chips', { returnObjects: true }) as string[];
  const answerTags = t('aiCentralPage.how.scene.answerTags', { returnObjects: true }) as string[];
  const aria = t('aiCentralPage.how.aria', { returnObjects: true }) as string[];
  const question = t('aiCentralPage.how.scene.question');

  const classes = ['aic-scene', 'relative', 'aspect-square', 'w-full', 'select-none', className];
  played.forEach((n) => classes.push(`played-${n}`));
  if (baseStatic) classes.push('aic-base-static');

  return (
    <div role="img" aria-label={aria[stage - 1]} data-stage={stage} className={classes.join(' ')}>
      <div aria-hidden="true" className="absolute inset-0">
        {/* Stage 1: systems, lines and travelling light */}
        <div className="aic-l1 absolute inset-0">
          <svg viewBox="0 0 100 100" className="aic-dim absolute inset-0 w-full h-full overflow-visible">
            {NODES.map((n, i) => (
              <line
                key={i}
                x1={n.x}
                y1={n.y}
                x2={50}
                y2={50}
                pathLength={1}
                strokeDasharray="1"
                className="aic-a aic-draw"
                style={delay(0.2 + i * 0.12)}
                stroke="rgba(126,200,255,0.4)"
                strokeWidth="0.35"
              />
            ))}
            {NODES.map((n, i) => (
              <circle
                key={`p${i}`}
                cx={n.x}
                cy={n.y}
                r="0.9"
                fill="#7ec8ff"
                opacity="0"
                className="aic-a aic-travel"
                style={{ ...delay(1.1 + i * 0.15), '--dx': `${50 - n.x}px`, '--dy': `${50 - n.y}px` } as CSSProperties}
              />
            ))}
          </svg>
          {NODES.map((n, i) => (
            <div key={chips[i]} className="aic-dim absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
              <span
                className="aic-a aic-fade-up block text-[10px] sm:text-[11px] font-mono text-white whitespace-nowrap border border-white/[0.14] bg-black rounded-full px-2 py-1"
                style={delay(i * 0.08)}
              >
                {chips[i]}
              </span>
            </div>
          ))}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24%] aspect-square">
            <div className="aic-a aic-pop aic-core w-full h-full rounded-full" style={delay(0.6)} />
          </div>
        </div>

        {/* Stage 2: two mismatched records enter the core, one record comes out with its origin */}
        {(!only || only === 2) && (
        <div className="aic-layer aic-l2 absolute inset-0">
          <div
            className="aic-a aic-merge absolute left-[3%] top-1/2 -translate-y-1/2 w-[40%] rounded-lg border border-white/[0.14] bg-[#0a0a0a] px-2 py-1.5 text-[10px] sm:text-[11px] font-mono text-white"
            style={{ ...delay(0.1), '--mx': '58%' } as CSSProperties}
          >
            <span className="block text-[9px] text-[#a1a1aa] mb-0.5">ERP</span>
            {t('aiCentralPage.how.scene.recordA')}
          </div>
          <div
            className="aic-a aic-merge absolute right-[3%] top-1/2 -translate-y-1/2 w-[40%] rounded-lg border border-white/[0.14] bg-[#0a0a0a] px-2 py-1.5 text-[10px] sm:text-[11px] font-mono text-white"
            style={{ ...delay(0.1), '--mx': '-58%' } as CSSProperties}
          >
            <span className="block text-[9px] text-[#a1a1aa] mb-0.5">CRM</span>
            {t('aiCentralPage.how.scene.recordB')}
          </div>
          <div
            className="aic-a absolute left-1/2 top-[66%] -translate-x-1/2 w-[70%] rounded-xl border border-[#00a3ff]/40 bg-[#05070d] p-2.5 sm:p-3"
            style={{ ...delay(1.5), '--a-name': 'aic-fade' } as CSSProperties}
          >
            <p className="text-[12px] sm:text-sm text-white font-semibold mb-0.5">{t('aiCentralPage.how.scene.unifiedName')}</p>
            <p className="text-[11px] sm:text-[12px] font-mono text-[#d4d4d8] mb-1.5">{t('aiCentralPage.how.scene.unifiedValue')}</p>
            <Tag tone="accent">{t('aiCentralPage.how.scene.origin')}</Tag>
          </div>
        </div>

        )}

        {/* Stage 3: a question, an answer with source and scope, and a locked source */}
        {(!only || only === 3) && (
        <div className="aic-layer aic-l3 absolute inset-0">
          <div className="absolute left-1/2 top-[3%] -translate-x-1/2 w-[94%] rounded-lg border border-white/[0.14] bg-[#0a0a0a] px-2.5 py-2 text-[11px] sm:text-[12px] text-white">
            <TypedText text={question} start={0.1} step={0.02} />
          </div>
          <div
            className="aic-a absolute left-[3%] top-[64%] w-[58%] rounded-xl border border-[#00a3ff]/40 bg-[#05070d] p-2.5"
            style={delay(1.4)}
          >
            <div className="flex flex-wrap gap-1">
              {answerTags.map((tag, i) => (
                <Tag key={tag} tone={i === 0 ? 'accent' : 'default'}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
          <div
            className="aic-a absolute right-[3%] top-[64%] w-[34%] rounded-xl border border-dashed border-white/[0.2] bg-[#0a0a0a] p-2.5 text-[10px] sm:text-[11px] font-mono text-[#a1a1aa]"
            style={delay(1.8)}
          >
            <LockIcon className="mb-1 text-[#a1a1aa]" />
            {t('aiCentralPage.how.scene.locked')}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
