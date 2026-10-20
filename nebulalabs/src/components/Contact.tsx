import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Clock, Mail, MapPin, Send } from 'lucide-react';
import { CONSENT_REVISION, NEED_OPTIONS, type Need } from '../config/site';
import { pathFor } from '../config/routes';
import { useRoute } from '../lib/route';
import { track } from '../lib/analytics';
import { getLeadIntent, subscribeLeadIntent } from '../lib/leadIntent';
import { CodeWindow, kw, str } from './ui';

type Field = 'name' | 'email' | 'organization' | 'need' | 'subject' | 'message';
type FormState = Record<Field, string> & { privacy: boolean; botcheck: boolean };
type Errors = Partial<Record<Field | 'privacy', string>>;
type Status = 'idle' | 'sending' | 'success' | 'error';

const LIMITS: Record<Field, { max: number; min?: number; required?: boolean }> = {
  name: { max: 100, required: true },
  email: { max: 254, required: true },
  organization: { max: 150 },
  need: { max: 40 },
  subject: { max: 150, required: true },
  message: { min: 10, max: 5000, required: true },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Strip control characters (keeps tabs and line breaks in the message)
// eslint-disable-next-line no-control-regex
const clean = (value: string) => value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
const COOLDOWN_MS = 30_000;

const empty = (need: Need | '' = ''): FormState => ({
  name: '', email: '', organization: '', need, subject: '', message: '', privacy: false, botcheck: false,
});

interface ContactProps {
  defaultNeed?: Need;
  defaultSource?: string;
}

export default function Contact({ defaultNeed, defaultSource }: ContactProps) {
  const { t } = useTranslation();
  const { lang } = useRoute();
  const [form, setForm] = useState<FormState>(() => empty(defaultNeed));
  const [source, setSource] = useState(defaultSource ?? getLeadIntent().source);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [coolingDown, setCoolingDown] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // CTAs on the page set the source (and sometimes the need) before scrolling here;
  // defaultSource only applies until one of them is clicked
  useEffect(
    () =>
      subscribeLeadIntent((intent) => {
        setSource(intent.source);
        if (intent.need) setForm((f) => ({ ...f, need: intent.need! }));
      }),
    [],
  );

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as Field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    for (const field of Object.keys(LIMITS) as Field[]) {
      const value = clean(form[field]);
      const { max, min, required } = LIMITS[field];
      if (required && !value) next[field] = t('contact.form.errors.required');
      else if (value.length > max) next[field] = t('contact.form.errors.tooLong', { max });
      else if (min && value && value.length < min) next[field] = t('contact.form.errors.tooShort', { min });
    }
    if (!next.email && !EMAIL_RE.test(clean(form.email))) next.email = t('contact.form.errors.email');
    if (form.need && !NEED_OPTIONS.includes(form.need as Need)) next.need = t('contact.form.errors.required');
    if (!form.privacy) next.privacy = t('contact.form.errors.privacy');
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending' || coolingDown) return;

    const found = validate();
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // Honeypot ticked: a bot. Pretend success without sending anything.
    if (form.botcheck) {
      setStatus('success');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `[Nebula Labs] ${clean(form.subject)}`,
          from_name: clean(form.name),
          replyto: clean(form.email),
          organization: clean(form.organization) || '—',
          need: form.need || '—',
          source,
          message: clean(form.message),
          language: lang,
          privacy_consent: 'accepted',
          privacy_consent_at: new Date().toISOString(),
          privacy_policy_version: CONSENT_REVISION,
          botcheck: false,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error('Submission failed');
      setStatus('success');
      track('generate_lead', { need: form.need || 'none', source });
      setForm(empty(defaultNeed));
      // Client-side rate limit: block a new submission for a while
      setCoolingDown(true);
      setTimeout(() => {
        setCoolingDown(false);
        setStatus('idle');
      }, COOLDOWN_MS);
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: Field) =>
    `w-full px-3.5 py-2.5 text-sm bg-white/[0.03] border rounded-lg text-white placeholder-[#6b6b74] focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-colors ${
      errors[field] ? 'border-[#ff6b6b]' : 'border-white/[0.1]'
    }`;
  const labelClass = 'block text-[11px] font-mono text-[#a1a1aa] uppercase tracking-wider mb-1.5';

  const fieldProps = (field: Field) => ({
    id: `contact-${field}`,
    name: field,
    value: form[field],
    maxLength: LIMITS[field].max,
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `contact-${field}-error` : undefined,
    className: inputClass(field),
  });

  const fieldError = (field: Field | 'privacy') =>
    errors[field] && (
      <p id={`contact-${field}-error`} className="mt-1.5 text-xs text-[#ff8a8a]">
        {errors[field]}
      </p>
    );

  const hasErrors = Object.values(errors).some(Boolean);
  const infoItems = [
    { icon: Mail, label: t('contact.info.emailLabel'), value: t('contact.info.email') },
    { icon: MapPin, label: t('contact.info.locationLabel'), value: t('contact.info.location') },
    { icon: Clock, label: t('contact.info.responseLabel'), value: t('contact.info.response') },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[11px] font-mono text-[#8a8a93] tracking-[0.15em] uppercase mb-4">{t('contact.badge')}</p>
          <h2 id="contact-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-4xl mx-auto">
            {t('contact.title')}
          </h2>
          <p className="text-[#8a8a93] text-base max-w-lg mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5 sm:space-y-8">
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-white">{t('contact.info.title')}</h3>
              <ul className="space-y-5">
                {infoItems.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                      <Icon size={13} aria-hidden="true" className="text-[#8a8a93]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#8a8a93] uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-[#a1a1aa] text-sm">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <CodeWindow className="hidden lg:block">
              <p><span className={kw}>const</span> <span className="text-white">reach</span> = <span className={kw}>async</span> {'() => {'}</p>
              <p className="pl-4"><span className={kw}>const</span> res = <span className={kw}>await</span></p>
              <p className="pl-8 text-white">nebulaLabs.<span className={kw}>contact</span>{'({'}</p>
              <p className="pl-12 text-[#8a8a93]">subject: <span className={str}>"Let's talk"</span>,</p>
              <p className="pl-12 text-[#8a8a93]">intent: <span className={str}>"build"</span></p>
              <p className="pl-8 text-white">{'});'}</p>
              <p className="pl-4"><span className={kw}>return</span> <span className={str}>"we'll reply"</span>;</p>
              <p className="text-white">{'};'}</p>
            </CodeWindow>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7">
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>{t('contact.form.name')}</label>
                    <input {...fieldProps('name')} type="text" required autoComplete="name"
                      placeholder={t('contact.form.namePlaceholder')} onChange={(e) => update('name', e.target.value)} />
                    {fieldError('name')}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>{t('contact.form.email')}</label>
                    <input {...fieldProps('email')} type="email" required autoComplete="email"
                      placeholder={t('contact.form.emailPlaceholder')} onChange={(e) => update('email', e.target.value)} />
                    {fieldError('email')}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-organization" className={labelClass}>{t('contact.form.organization')}</label>
                    <input {...fieldProps('organization')} type="text" autoComplete="organization"
                      placeholder={t('contact.form.organizationPlaceholder')} onChange={(e) => update('organization', e.target.value)} />
                    {fieldError('organization')}
                  </div>
                  <div>
                    <label htmlFor="contact-need" className={labelClass}>{t('contact.form.need')}</label>
                    <select {...fieldProps('need')} onChange={(e) => update('need', e.target.value)}>
                      <option value="">{t('contact.form.needPlaceholder')}</option>
                      {NEED_OPTIONS.map((need) => (
                        <option key={need} value={need} className="bg-black">
                          {t(`contact.form.needs.${need}`)}
                        </option>
                      ))}
                    </select>
                    {fieldError('need')}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className={labelClass}>{t('contact.form.subject')}</label>
                  <input {...fieldProps('subject')} type="text" required
                    placeholder={t('contact.form.subjectPlaceholder')} onChange={(e) => update('subject', e.target.value)} />
                  {fieldError('subject')}
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>{t('contact.form.message')}</label>
                  <textarea {...fieldProps('message')} required rows={5}
                    placeholder={t('contact.form.messagePlaceholder')} onChange={(e) => update('message', e.target.value)}
                    className={`${inputClass('message')} resize-none`} />
                  {fieldError('message')}
                </div>

                {/* Honeypot (Web3Forms botcheck): hidden from people and assistive tech */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  checked={form.botcheck}
                  onChange={(e) => update('botcheck', e.target.checked)}
                />
                <input type="hidden" name="source" value={source} />

                <p className="text-xs text-[#8a8a93] leading-relaxed">
                  {t('contact.form.privacyInfo')}{' '}
                  <a href={pathFor('privacy', lang)} className="underline text-[#a1a1aa] hover:text-white">
                    {t('contact.form.privacyInfoLink')}
                  </a>
                  .
                </p>

                <div>
                  <div className="flex items-start gap-2.5">
                    <input
                      id="contact-privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      checked={form.privacy}
                      aria-invalid={errors.privacy ? true : undefined}
                      aria-describedby={errors.privacy ? 'contact-privacy-error' : undefined}
                      onChange={(e) => update('privacy', e.target.checked)}
                      className="mt-0.5 h-4 w-4 accent-[#00a3ff] flex-shrink-0"
                    />
                    <label htmlFor="contact-privacy" className="text-sm text-[#a1a1aa]">
                      {t('contact.form.privacyCheckbox')}
                    </label>
                  </div>
                  {fieldError('privacy')}
                </div>

                <div aria-live="polite" role="status">
                  {hasErrors && status !== 'sending' && (
                    <p className="text-sm text-[#ff8a8a]">{t('contact.form.errors.summary')}</p>
                  )}
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 text-sm text-white bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5"
                    >
                      <CheckCircle size={14} aria-hidden="true" className="text-[#00a3ff]" />
                      {t('contact.form.success')}
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <p className="flex items-center gap-2.5 text-sm text-[#a1a1aa] bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2.5">
                      <AlertCircle size={14} aria-hidden="true" className="text-[#ff8a8a]" />
                      {t('contact.form.error')}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || coolingDown}
                  className="group w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm text-black bg-white hover:bg-[#00a3ff] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
                  {status !== 'sending' && <Send size={13} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
