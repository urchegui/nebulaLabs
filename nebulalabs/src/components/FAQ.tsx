import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Minus, Plus } from 'lucide-react';
import { sectionHref } from '../config/routes';
import { useRoute } from '../lib/route';
import { ctaClick } from '../lib/leadIntent';
import { SectionHeader } from './ui';

interface FAQProps {
  /** i18n key prefix holding { [key]: { q, a } } */
  itemsKey: string;
  keys: readonly string[];
  id?: string;
  badgeKey?: string;
  titleKey: string;
  subtitleKey?: string;
  showContactCta?: boolean;
}

// Accordion: button + aria-expanded + aria-controls. Answers stay in the HTML (hidden attribute)
// so search engines and AI crawlers read them without running JavaScript.
export default function FAQ({
  itemsKey,
  keys,
  id = 'faq',
  badgeKey,
  titleKey,
  subtitleKey,
  showContactCta = true,
}: FAQProps) {
  const { t } = useTranslation();
  const { lang } = useRoute();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          id={`${id}-title`}
          badge={badgeKey ? t(badgeKey) : t('faq.badge')}
          title={t(titleKey)}
          subtitle={subtitleKey ? t(subtitleKey) : undefined}
          className="mb-12"
        />

        <div className="divide-y divide-white/[0.06]">
          {keys.map((key) => {
            const isOpen = open === key;
            const buttonId = `${id}-q-${key}`;
            const panelId = `${id}-a-${key}`;
            return (
              <div key={key}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="w-full flex items-start justify-between gap-4 sm:gap-6 py-5 text-left group"
                  >
                    <span className={`text-sm font-medium transition-colors ${isOpen ? 'text-white' : 'text-[#a1a1aa] group-hover:text-white'}`}>
                      {t(`${itemsKey}.${key}.q`)}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded flex items-center justify-center ${isOpen ? 'text-white' : 'text-[#8a8a93] group-hover:text-[#a1a1aa]'}`}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                  <p className="text-[#8a8a93] text-sm leading-relaxed pb-5">{t(`${itemsKey}.${key}.a`)}</p>
                </div>
              </div>
            );
          })}
        </div>

        {showContactCta && (
          <div className="text-center mt-10">
            <a
              href={sectionHref(lang, 'contact')}
              onClick={() => ctaClick('faq_contact', { source: 'faq' })}
              className="text-sm text-[#8a8a93] hover:text-white transition-colors border-b border-white/[0.15] hover:border-white pb-px"
            >
              {t('faq.stillQuestions')} <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
