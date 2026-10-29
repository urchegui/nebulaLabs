import type { CSSProperties, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { delay } from './delay';

// Building blocks shared by the AI Central landing visuals.

export function IllustrativeTag({ className = '' }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <span className={`text-[10px] font-mono uppercase tracking-[0.15em] text-[#a1a1aa] border border-white/[0.1] rounded px-1.5 py-0.5 ${className}`}>
      {t('aiCentralPage.illustrative')}
    </span>
  );
}

/** Text that "types" in when its container plays (one span per character, opacity only) */
export function TypedText({ text, start = 0, step = 0.025 }: { text: string; start?: number; step?: number }) {
  return (
    <>
      {Array.from(text).map((ch, i) => (
        <span key={i} className="aic-a aic-char" style={delay(start + i * step)}>
          {ch}
        </span>
      ))}
    </>
  );
}

export function Tag({ children, tone = 'default', className = '', style }: { children: ReactNode; tone?: 'default' | 'accent' | 'muted' | 'dashed'; className?: string; style?: CSSProperties }) {
  const tones = {
    default: 'border-white/[0.12] text-[#d4d4d8] bg-white/[0.03]',
    accent: 'border-[#00a3ff]/40 text-[#7ec8ff] bg-[#00a3ff]/[0.06]',
    muted: 'border-white/[0.1] text-[#a1a1aa]',
    dashed: 'border-dashed border-white/[0.2] text-[#a1a1aa]',
  };
  return (
    <span className={`inline-flex items-center text-[10px] sm:text-[11px] font-mono border rounded px-1.5 py-0.5 ${tones[tone]} ${className}`} style={style}>
      {children}
    </span>
  );
}

export function LockIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="7" width="10" height="7" rx="1.5" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
    </svg>
  );
}

/** Answer card used in the hero mock and in "For every team" */
export function AnswerCard({
  tags,
  text,
  footer,
  startAt = 0,
}: {
  tags: string[];
  text?: string;
  footer?: ReactNode;
  startAt?: number;
}) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-3 sm:p-4">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag, i) => (
          <Tag key={tag} tone={i === 0 ? 'accent' : 'default'} className="aic-a aic-pop" style={delay(startAt + i * 0.18)}>
            {tag}
          </Tag>
        ))}
      </div>
      {text && (
        <p className="aic-a text-[13px] sm:text-sm text-[#d4d4d8] leading-relaxed" style={delay(startAt + tags.length * 0.18 + 0.1)}>
          {text}
        </p>
      )}
      {footer}
    </div>
  );
}

/** Soft nebula glow behind a section (decorative). Tones come from the site accent family. */
export function Nebula({ tone = 'cyan', position = 'top' }: { tone?: 'cyan' | 'light' | 'deep'; position?: 'top' | 'left' | 'right' | 'bottom' }) {
  const colors = { cyan: 'rgba(0,163,255,0.06)', light: 'rgba(126,200,255,0.05)', deep: 'rgba(0,102,204,0.08)' };
  const at = { top: '50% 0%', left: '0% 40%', right: '100% 40%', bottom: '50% 100%' };
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0"
      style={{ background: `radial-gradient(ellipse 60% 50% at ${at[position]}, ${colors[tone]}, transparent 70%)` }}
    />
  );
}
