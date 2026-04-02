import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, BookOpen, Telescope, GitMerge } from 'lucide-react';
import { useCardSpotlight } from '../hooks/useCardSpotlight';
import isotipo from '../assets/ISOTIPO.svg';

const VALUE_ICONS = [Shield, BookOpen, Telescope, GitMerge];

function ValueCard({ value, i }: { value: { title: string; description: string }; i: number }) {
  const { ref, onMouseMove, onMouseLeave } = useCardSpotlight();
  const Icon = VALUE_ICONS[i];
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className="spotlight-card group rounded-xl p-5 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-200"
    >
      <div className="relative z-[1]">
        <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4">
          <Icon size={15} className="text-[#71717a] group-hover:text-white transition-colors" />
        </div>
        <h3 className="font-semibold text-white text-sm mb-1.5">{value.title}</h3>
        <p className="text-[#71717a] text-xs leading-relaxed">{value.description}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { ref: teamRef, onMouseMove: teamMove, onMouseLeave: teamLeave } = useCardSpotlight();

  const values: { title: string; description: string }[] = t('about.values', {
    returnObjects: true,
  }) as { title: string; description: string }[];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-mono text-[#52525b] tracking-[0.15em] uppercase mb-4">
            {t('about.badge')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('about.title')}
          </h2>
          <p className="text-[#71717a] text-base max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {values.map((value, i) => (
            <ValueCard key={i} value={value} i={i} />
          ))}
        </motion.div>

        {/* Team block — also gets spotlight */}
        <motion.div
          ref={teamRef}
          onMouseMove={teamMove}
          onMouseLeave={teamLeave}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="spotlight-card relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-10 md:p-14"
        >
          {/* Static top-left glow */}
          <div
            className="absolute -top-32 -left-32 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,163,255,0.06), transparent 60%)' }}
          />

          <div className="relative z-[1] flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-12">
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                {t('about.team.title')}
              </h3>
              <p className="text-[#71717a] leading-relaxed">
                {t('about.team.description')}
              </p>
            </div>

            {/* Orbital diagram */}
            <div className="flex-shrink-0 w-64 h-64 sm:w-40 sm:h-40 md:w-44 md:h-44 relative">
              {['Q', 'A', 'I', 'S', 'R', 'D'].map((l, i) => {
                const angle = (i / 6) * 2 * Math.PI;
                const r = 66;
                const cx = 88, cy = 88;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                return (
                  <motion.div
                    key={l}
                    className="absolute w-7 h-7 rounded-full border border-white/10 bg-black flex items-center justify-center"
                    style={{ left: x - 14, top: y - 14 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.35 }}
                  >
                    <span className="text-[10px] font-mono text-[#71717a]">{l}</span>
                  </motion.div>
                );
              })}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-12 rounded-full flex items-center justify-center">
                <img className="text-black font-bold text-base font-mono" src={isotipo} alt="isotipo nebula labs" />
              </div>

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full border border-white/[0.06]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[132px] h-[132px] rounded-full border border-white/[0.04]"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
