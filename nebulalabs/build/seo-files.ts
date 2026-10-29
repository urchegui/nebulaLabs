import type { Plugin } from 'vite';
import en from '../src/i18n/en';
import { AI_CENTRAL, AI_DISTRIBUTION, CONTACT_EMAIL, FLAGS, INDEXNOW_KEY, SERVICE_ORDER, SITE_URL, SOCIALS } from '../src/config/site';
import { indexablePages, pathFor } from '../src/config/routes';
import { AI_CENTRAL_FAQ, visibleHomeFaq } from '../src/content/faq';
import { findForbidden } from './forbidden-terms';

// Generates files derived from the same config as the app, so they never drift:
// sitemap.xml (indexable pages + hreflang alternates), llms-full.txt and the IndexNow key file.

const xmlEscape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function sitemap(lastmod: string): string {
  const urls = indexablePages().flatMap(({ paths }) =>
    Object.values(paths).map((path) => {
      const alternates = Object.entries(paths)
        .map(([lang, p]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${xmlEscape(SITE_URL + p)}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(SITE_URL + paths.en)}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${xmlEscape(SITE_URL + path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`;
    }),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

/** Visible text of the AI Central landing (EN). The build fails if it contains a forbidden term. */
function aiCentralSection(): string[] {
  const p = en.aiCentralPage;
  const lines = [
    `## ${AI_CENTRAL.en.name}: ${p.hero.title}`,
    '',
    `Page: ${SITE_URL}${pathFor('aiCentral', 'en')} · Spanish: ${SITE_URL}${pathFor('aiCentral', 'es')}`,
    '',
    p.hero.subtitle,
    '',
    `${p.systems.title}: ${p.systems.chips.join(', ')}.`,
    '',
    `### ${p.problem.title}`,
    '',
    ...p.problem.cards.map((c) => `- **${c.title}**: ${c.text}`),
    '',
    `### ${p.how.title}`,
    '',
    p.how.subtitle,
    '',
    ...p.how.steps.map((s, i) => `${i + 1}. **${s.title}**: ${s.text}`),
    '',
    `### ${p.principles.title1} ${p.principles.title2}`,
    '',
    p.principles.subtitle,
    '',
    ...p.principles.cards.map((c) => `- **${c.title}**: ${c.text}`),
    '',
    `### ${p.teams.title}`,
    '',
    ...p.teams.items.map((item) => `- **${item.label}**: ${item.text}`),
    '',
    p.teams.note,
    '',
    ...(FLAGS.showAiDistribution
      ? [`### ${p.aiDistribution.title}`, '', p.aiDistribution.subtitle, '', ...p.aiDistribution.capabilities.map((c) => `- **${c.title}**: ${c.text}`), '']
      : []),
    `### ${p.cto.title}`,
    '',
    ...p.cto.areas.map((a) => `- **${a.title}**: ${a.text}`),
    `- **${p.cto.bandTitle}**: ${p.cto.bandText}`,
    '',
    `### ${p.faqTitle}`,
    '',
    ...AI_CENTRAL_FAQ.flatMap((key) => [`#### ${p.faq[key].q}`, '', p.faq[key].a, '']),
    p.final.note,
    '',
  ];
  const found = findForbidden(lines.join(' '));
  if (found.length) throw new Error(`AI Central llms-full section contains forbidden terms: ${found.join(', ')}`);
  return lines;
}

function llmsFull(): string {
  const services = SERVICE_ORDER.map((key) => en.services.items[key]);
  const faq = visibleHomeFaq().map((key) => en.faq.items[key]);
  const lines = [
    '# Nebula Labs',
    '',
    `> ${en.meta.home.description}`,
    '',
    `Full text of the home page (English). Spanish version: ${SITE_URL}${pathFor('home', 'es')}`,
    '',
    `## ${en.hero.title1} ${en.hero.title2}`,
    '',
    en.hero.subtitle,
    '',
    `## ${en.services.badge}`,
    '',
    ...services.map((s) => `- **${s.title}**: ${s.description} (${s.tags.join(', ')})`),
    '',
    `## ${en.products.badge}`,
    '',
    `- **${AI_CENTRAL.en.name}**: ${en.products.aiCentral.tagline}.`,
    `- **${AI_DISTRIBUTION.en.name}** (${en.products.aiDistribution.badge}): ${en.products.aiDistribution.description}`,
    ...en.aiCentralPage.aiDistribution.capabilities.map((c) => `  - ${c.title}: ${c.text}`),
    `- **${en.products.slr.name}** (${en.products.slr.badge}): ${en.products.slr.description}`,
    '',
    `## ${en.research.title}`,
    '',
    `- Open-source repository: ${en.research.repo.name} (${en.research.repo.language}, ${en.research.repo.license}).`,
    `- ${en.research.follow}: ${SOCIALS.github} · ${SOCIALS.linkedin}`,
    '',
    `## ${en.about.title}`,
    '',
    en.about.subtitle,
    '',
    en.about.unified,
    '',
    ...en.about.values.map((v) => `- **${v.title}**: ${v.description}`),
    '',
    en.about.team.description,
    '',
    `## ${en.faq.title}`,
    '',
    ...faq.flatMap((item) => [`### ${item.q}`, '', item.a, '']),
    `## ${en.contact.badge}`,
    '',
    `- Email: ${CONTACT_EMAIL}`,
    `- ${en.contact.info.response}`,
    `- ${en.contact.info.location}`,
    `- Contact form: ${SITE_URL}/#contact`,
    '',
    ...(FLAGS.showAiCentralLink ? aiCentralSection() : []),
  ];
  return lines.join('\n');
}

export function seoFiles(): Plugin {
  return {
    name: 'nebula-seo-files',
    apply: 'build',
    generateBundle() {
      const lastmod = new Date().toISOString().slice(0, 10);
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap(lastmod) });
      this.emitFile({ type: 'asset', fileName: 'llms-full.txt', source: llmsFull() });
      this.emitFile({ type: 'asset', fileName: `${INDEXNOW_KEY}.txt`, source: INDEXNOW_KEY });
    },
  };
}
