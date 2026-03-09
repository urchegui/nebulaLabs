import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormData>({
    name: '', email: '', organization: '', subject: '', message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `[Nebula Labs] ${form.subject}`,
          from_name: form.name,
          replyto: form.email,
          organization: form.organization || '—',
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', organization: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm bg-white/[0.03] border border-white/[0.07] rounded-lg text-white placeholder-[#3f3f46] focus:outline-none focus:border-white/25 focus:bg-white/[0.05] transition-all';

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-mono text-[#52525b] tracking-[0.15em] uppercase mb-4">
            {t('contact.badge')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-[#71717a] text-base max-w-lg mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5 sm:space-y-8"
          >
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-white">{t('contact.info.title')}</h3>
              {[
                { icon: Mail, label: 'Email', value: t('contact.info.email') },
                { icon: MapPin, label: 'Location', value: t('contact.info.location') },
                { icon: Clock, label: 'Response', value: t('contact.info.response') },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg border border-white/[0.07] bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-[#71717a]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#3f3f46] uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-[#a1a1aa] text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Code snippet */}
            <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-5 font-mono text-[11px] hidden lg:block">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
              </div>
              <div className="space-y-0.5 leading-5">
                <p><span className="text-[#00a3ff]">const</span> <span className="text-white">reach</span> = <span className="text-[#00a3ff]">async</span> {'() => {'}</p>
                <p className="pl-4"><span className="text-[#00a3ff]">const</span> res = <span className="text-[#00a3ff]">await</span></p>
                <p className="pl-8 text-white">nebulaLabs.<span className="text-[#00a3ff]">contact</span>{'({'}</p>
                <p className="pl-12 text-[#52525b]">subject: <span className="text-[#71717a]">"Let's talk"</span>,</p>
                <p className="pl-12 text-[#52525b]">intent: <span className="text-[#71717a]">"build"</span></p>
                <p className="pl-8 text-white">{'});'}</p>
                <p className="pl-4"><span className="text-[#00a3ff]">return</span> <span className="text-[#71717a]">"we'll reply"</span>;</p>
                <p className="text-white">{'};'}</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#52525b] uppercase tracking-wider mb-1.5">
                      {t('contact.form.name')}
                    </label>
                    <input name="name" type="text" required value={form.name}
                      onChange={handleChange} placeholder={t('contact.form.namePlaceholder')}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-[#52525b] uppercase tracking-wider mb-1.5">
                      {t('contact.form.email')}
                    </label>
                    <input name="email" type="email" required value={form.email}
                      onChange={handleChange} placeholder={t('contact.form.emailPlaceholder')}
                      className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#52525b] uppercase tracking-wider mb-1.5">
                    {t('contact.form.organization')}
                  </label>
                  <input name="organization" type="text" value={form.organization}
                    onChange={handleChange} placeholder={t('contact.form.organizationPlaceholder')}
                    className={inputClass} />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#52525b] uppercase tracking-wider mb-1.5">
                    {t('contact.form.subject')}
                  </label>
                  <input name="subject" type="text" required value={form.subject}
                    onChange={handleChange} placeholder={t('contact.form.subjectPlaceholder')}
                    className={inputClass} />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#52525b] uppercase tracking-wider mb-1.5">
                    {t('contact.form.message')}
                  </label>
                  <textarea name="message" required rows={5} value={form.message}
                    onChange={handleChange} placeholder={t('contact.form.messagePlaceholder')}
                    className={`${inputClass} resize-none`} />
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 text-sm text-white bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5"
                  >
                    <CheckCircle size={14} className="text-[#00a3ff]" />
                    {t('contact.form.success')}
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 text-sm text-[#a1a1aa] bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-2.5"
                  >
                    <AlertCircle size={14} className="text-[#71717a]" />
                    {t('contact.form.error')}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm text-black bg-white hover:bg-[#00a3ff] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
                  {status !== 'sending' && (
                    <Send size={13} className="transition-transform group-hover:translate-x-0.5" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
