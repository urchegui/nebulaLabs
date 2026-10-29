import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';
import { LEGAL } from '../config/legal';
import { COOKIES, CONSENT_COOKIE_DAYS } from '../config/cookies';
import { SITE_URL } from '../config/site';
import { pathFor } from '../config/routes';
import type { LegalSection } from '../i18n/legal.es';
import { useRoute } from '../lib/route';
import { openCookieSettings } from '../lib/cookieSettings';

type Doc = 'legalNotice' | 'privacy' | 'cookies';

// Values shared by every legal text, from the central legal config
const VALUES: Record<string, string> = {
  companyName: LEGAL.companyName,
  taxId: LEGAL.taxId,
  address: LEGAL.addressLine,
  email: LEGAL.email,
  registry: LEGAL.registry,
  privacyContact: LEGAL.privacyContactName,
  hosting: LEGAL.hosting,
  jurisdiction: LEGAL.jurisdiction,
  web3forms: LEGAL.web3formsTransfers,
  site: SITE_URL.replace('https://', ''),
  days: String(CONSENT_COOKIE_DAYS),
};

const fill = (text: string) => text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => VALUES[key] ?? `{{${key}}}`);

function Sections({ sections }: { sections: LegalSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title} id={section.id} aria-labelledby={section.id ? `${section.id}-title` : undefined} className="mb-10 scroll-mt-24">
          <h2 id={section.id ? `${section.id}-title` : undefined} className="text-xl font-semibold text-white mb-4">
            {fill(section.title)}
          </h2>
          {section.paragraphs.map((p) => (
            <p key={p} className="text-[#a1a1aa] text-sm leading-relaxed mb-3">
              {fill(p)}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}

function CookieTable() {
  const { t } = useTranslation('legal');
  const col = (key: string) => t(`cookies.table.${key}`);
  return (
    // Focusable scroll container so keyboard users can scroll the table on small screens
    <div tabIndex={0} role="region" aria-label={t('cookies.tableTitle')} className="overflow-x-auto mb-10 rounded-lg border border-white/[0.08] focus:outline focus:outline-2 focus:outline-[#00a3ff]">
      <table className="w-full text-left text-sm min-w-[640px]">
        <thead className="bg-white/[0.03] text-[#a1a1aa] text-xs font-mono uppercase">
          <tr>
            {['name', 'provider', 'party', 'category', 'purpose', 'duration'].map((key) => (
              <th key={key} scope="col" className="px-4 py-3 font-medium">{col(key)}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.06] text-[#a1a1aa]">
          {COOKIES.map((c) => (
            <tr key={c.name}>
              <th scope="row" className="px-4 py-3 font-mono text-white font-normal">{c.name}</th>
              <td className="px-4 py-3">{c.provider}</td>
              <td className="px-4 py-3">{col(`parties.${c.party}`)}</td>
              <td className="px-4 py-3">{col(`categories.${c.category}`)}</td>
              <td className="px-4 py-3">{col(`purposes.${c.purpose}`)}</td>
              <td className="px-4 py-3 whitespace-nowrap">{fill(col(`durations.${c.duration}`))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LegalPage() {
  const { t } = useTranslation();
  const { t: tl } = useTranslation('legal');
  const { lang, page } = useRoute();
  const doc = page as Doc;
  const sections = tl(`${doc}.sections`, { returnObjects: true }) as LegalSection[];

  return (
    <article aria-labelledby="legal-title" className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      {!LEGAL.legalReviewed && (
        <p role="note" className="flex items-center gap-2 text-sm text-[#ffd27a] border border-[#ffd27a]/30 bg-[#ffd27a]/[0.06] rounded-lg px-4 py-3 mb-8">
          <AlertTriangle size={15} aria-hidden="true" />
          {t('legalUi.draftBanner')}
        </p>
      )}

      <h1 id="legal-title" className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">{tl(`${doc}.title`)}</h1>
      <p className="text-xs font-mono text-[#8a8a93] mb-8">
        {t('legalUi.lastUpdated')}: {LEGAL.lastUpdated}
      </p>
      <p className="text-[#a1a1aa] text-sm leading-relaxed mb-10">{fill(tl(`${doc}.intro`))}</p>

      <Sections sections={sections} />

      {doc === 'cookies' && (
        <>
          <h2 className="text-xl font-semibold text-white mb-4">{tl('cookies.tableTitle')}</h2>
          <CookieTable />
          <Sections sections={tl('cookies.afterTable', { returnObjects: true }) as LegalSection[]} />
          <button
            type="button"
            onClick={openCookieSettings}
            className="px-4 py-2 rounded-lg text-sm font-medium text-black bg-white hover:bg-[#00a3ff] transition-colors"
          >
            {t('legalUi.configureCookies')}
          </button>
        </>
      )}

      <p className="mt-12">
        <a href={pathFor('home', lang)} className="text-sm text-[#a1a1aa] hover:text-white border-b border-white/[0.15] hover:border-white pb-px">
          {t('legalUi.backHome')}
        </a>
      </p>
    </article>
  );
}
