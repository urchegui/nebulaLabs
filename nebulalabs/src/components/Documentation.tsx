import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Bell, Search } from 'lucide-react';
import { useCardSpotlight } from '../hooks/useCardSpotlight';

const SAMPLE_PAPERS = [
  {
    id: 1,
    title: 'Hybrid Quantum-Classical Optimization for Large-Scale Combinatorial Problems',
    authors: ['A. Lovelace', 'T. Turing', 'R. Feynman'],
    date: '2025-Q1',
    tag: 'quantum',
    abstract:
      'We present a novel hybrid approach combining variational quantum eigensolvers with classical optimization heuristics, demonstrating a 40× speedup on benchmark instances with 500+ variables.',
    pages: 24,
  },
  {
    id: 2,
    title: 'Emergent Reasoning in Large Language Models: A Mechanistic Study',
    authors: ['S. Shannon', 'N. Wiener'],
    date: '2024-Q4',
    tag: 'ai',
    abstract:
      'A mechanistic interpretability study examining how chain-of-thought reasoning emerges in transformer architectures and its relation to in-context learning capabilities.',
    pages: 18,
  },
];

const TAG_STYLE: Record<string, string> = {
  quantum: 'text-[#00a3ff] border-[#00a3ff]/20 bg-[#00a3ff]/05',
  ai:      'text-[#a1a1aa] border-white/10 bg-white/[0.03]',
  software:'text-[#a1a1aa] border-white/10 bg-white/[0.03]',
  rd:      'text-[#a1a1aa] border-white/10 bg-white/[0.03]',
};

type Paper = typeof SAMPLE_PAPERS[number];

function PaperCard({ paper, index }: { paper: Paper; index: number }) {
  const { t } = useTranslation();
  const { ref, onMouseMove, onMouseLeave } = useCardSpotlight();
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="spotlight-card group rounded-xl p-6 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-200"
    >
      <div className="relative z-[1] flex flex-col md:flex-row md:items-start gap-5">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/[0.07] bg-white/[0.04] flex items-center justify-center">
          <FileText size={16} className="text-[#71717a]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-[10px] font-mono border rounded px-2 py-0.5 ${TAG_STYLE[paper.tag]}`}>
              {t(`docs.tags.${paper.tag}`)}
            </span>
            <span className="text-[11px] text-[#3f3f46] font-mono">{paper.date}</span>
            <span className="text-[11px] text-[#3f3f46] font-mono">{paper.pages}p</span>
          </div>
          <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-[#00a3ff] transition-colors">
            {paper.title}
          </h3>
          <p className="text-[#52525b] text-xs mb-2.5">{paper.authors.join(', ')}</p>
          <p className="text-[#71717a] text-sm leading-relaxed">{paper.abstract}</p>
        </div>
        <div className="flex md:flex-col gap-2 flex-shrink-0">
          <button className="flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white border border-white/[0.07] hover:border-white/20 rounded-lg px-3 py-1.5 transition-all">
            <ExternalLink size={11} />
            <span>{t('docs.readPaper')}</span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-[#52525b] hover:text-[#a1a1aa] border border-white/[0.05] hover:border-white/[0.10] rounded-lg px-3 py-1.5 transition-all">
            <Download size={11} />
            <span>{t('docs.download')}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Documentation() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  const filtered = SAMPLE_PAPERS.filter((p) => {
    const matchTag = filter ? p.tag === filter : true;
    const matchSearch =
      !search.trim() ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.some((a) => a.toLowerCase().includes(search.toLowerCase()));
    return matchTag && matchSearch;
  });

  return (
    <section id="docs" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-mono text-[#52525b] tracking-[0.15em] uppercase mb-4">
            {t('docs.badge')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('docs.title')}
          </h2>
          <p className="text-[#71717a] text-base max-w-lg mx-auto">
            {t('docs.subtitle')}
          </p>
        </motion.div>

        {/* Search + filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <div className="relative flex-1">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3f3f46]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search papers..."
              className="w-full pl-8 pr-4 py-2 text-sm bg-white/[0.03] border border-white/[0.07] rounded-lg text-white placeholder-[#3f3f46] focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {(['quantum', 'ai', 'software', 'rd'] as const).map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(filter === tag ? null : tag)}
                className={`px-3 py-2 text-[11px] font-mono rounded-lg border transition-all ${
                  filter === tag
                    ? 'text-white border-white/20 bg-white/[0.06]'
                    : 'text-[#52525b] border-white/[0.06] hover:border-white/[0.12] hover:text-[#a1a1aa]'
                }`}
              >
                {t(`docs.tags.${tag}`)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Papers list */}
        {filtered.length > 0 ? (
          <div className="space-y-3 mb-12">
            {filtered.map((paper, i) => (
              <PaperCard key={paper.id} paper={paper} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 mb-12">
            <FileText size={32} className="mx-auto mb-3 text-[#27272a]" />
            <p className="text-[#52525b] font-medium">{t('docs.comingSoon')}</p>
          </div>
        )}

        {/* Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 text-center border border-white/[0.06] bg-white/[0.02]"
        >
          <Bell size={20} className="text-[#00a3ff] mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-1.5">{t('docs.comingSoon')}</h3>
          <p className="text-[#71717a] text-sm mb-5 max-w-sm mx-auto">{t('docs.comingSoonDesc')}</p>
          {subscribed ? (
            <p className="text-[#00a3ff] text-sm font-medium">You're on the list.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col xs:flex-row gap-2 justify-center w-full max-w-xs mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-3 py-2 text-sm bg-white/[0.03] border border-white/[0.07] rounded-lg text-white placeholder-[#3f3f46] focus:outline-none focus:border-white/20 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-black bg-white hover:bg-[#00a3ff] rounded-lg transition-colors"
              >
                {t('docs.subscribe')}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
