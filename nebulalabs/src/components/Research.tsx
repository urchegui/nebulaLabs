import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Github, GitBranch, Linkedin } from 'lucide-react';
import { FLAGS, SLR_REPO_URL, SOCIALS } from '../config/site';
import { ctaClick } from '../lib/leadIntent';
import { ExternalLink, SectionHeader } from './ui';
import NewsletterSignup from './NewsletterSignup';

// Replaces the former "Documentation" section. The sample papers with fictitious
// authors were removed: no paper is rendered until real publications exist.
export default function Research() {
  const { t } = useTranslation();
  const collaborations = t('research.collaborations.items', { returnObjects: true }) as string[];

  return (
    <section id="research" aria-labelledby="research-title" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="max-w-4xl mx-auto">
        <SectionHeader id="research-title" badge={t('research.badge')} title={t('research.title')} subtitle={t('research.subtitle')} className="mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 mb-4"
        >
          <p className="text-[10px] font-mono text-[#8a8a93] uppercase tracking-wider mb-3">{t('research.repo.label')}</p>
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.04] flex items-center justify-center">
              <GitBranch size={16} aria-hidden="true" className="text-[#a1a1aa]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-base mb-1 font-mono break-words">
                {FLAGS.showSlrRepoLink ? (
                  <ExternalLink href={SLR_REPO_URL} className="hover:text-[#00a3ff]">
                    {t('research.repo.name')}
                  </ExternalLink>
                ) : (
                  t('research.repo.name')
                )}
              </h3>
              <p className="text-[#8a8a93] text-sm leading-relaxed mb-3">{t('research.repo.description')}</p>
              <div className="flex gap-2 text-[11px] font-mono text-[#8a8a93]">
                <span className="border border-white/[0.08] rounded px-2 py-0.5">{t('research.repo.language')}</span>
                <span className="border border-white/[0.08] rounded px-2 py-0.5">{t('research.repo.license')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 text-center border border-white/[0.06] bg-white/[0.02]"
        >
          <FileText size={20} aria-hidden="true" className="text-[#00a3ff] mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-1.5">{t('research.comingSoon')}</h3>
          <p className="text-[#8a8a93] text-sm mb-6 max-w-sm mx-auto">{t('research.comingSoonDesc')}</p>
          <p className="text-sm text-white font-medium mb-4">{t('research.follow')}</p>
          <div className="flex justify-center gap-3">
            <ExternalLink
              href={SOCIALS.github}
              onClick={() => ctaClick('research_github')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/[0.08] text-[#a1a1aa] hover:text-white hover:border-white/20"
            >
              <Github size={14} aria-hidden="true" />
              GitHub
            </ExternalLink>
            <ExternalLink
              href={SOCIALS.linkedin}
              onClick={() => ctaClick('research_linkedin')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/[0.08] text-[#a1a1aa] hover:text-white hover:border-white/20"
            >
              <Linkedin size={14} aria-hidden="true" />
              LinkedIn
            </ExternalLink>
          </div>
          {FLAGS.showNewsletter && <NewsletterSignup />}
        </motion.div>

        {FLAGS.showCollaborations && collaborations.length > 0 && (
          <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-white font-semibold mb-3">{t('research.collaborations.title')}</h3>
            <ul className="list-disc pl-5 text-[#8a8a93] text-sm space-y-1">
              {collaborations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
