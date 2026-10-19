import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Shared building blocks reused across sections (header, chip, external link, code window).

export function SectionHeader({
  id,
  badge,
  title,
  subtitle,
  className = 'mb-16',
}: {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center ${className}`}
    >
      <p className="text-[11px] font-mono text-[#8a8a93] tracking-[0.15em] uppercase mb-4">{badge}</p>
      <h2 id={id} className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-[#8a8a93] text-base max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="text-[11px] font-mono text-[#8a8a93] border border-white/[0.08] rounded px-2 py-0.5">
      {children}
    </span>
  );
}

export function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { t } = useTranslation();
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> {t('a11y.externalLink')}</span>
    </a>
  );
}

/** Decorative code window (aria-hidden: the code is a visual resource, not content) */
export function CodeWindow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 font-mono text-[11px] sm:text-xs text-left ${className}`}
    >
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
      </div>
      <div className="space-y-0.5 leading-5">{children}</div>
    </div>
  );
}

export const kw = 'text-[#00a3ff]';
export const str = 'text-[#a1a1aa]';
