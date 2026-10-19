import { useTranslation } from 'react-i18next';
import { pathFor } from '../config/routes';
import { useRoute } from '../lib/route';

export default function NotFoundPage() {
  const { t } = useTranslation();
  const { lang } = useRoute();
  return (
    <section aria-labelledby="not-found-title" className="min-h-[70vh] flex items-center justify-center px-6 pt-24 pb-16 text-center">
      <div>
        <p className="font-mono text-[#00a3ff] text-sm mb-4" aria-hidden="true">404</p>
        <h1 id="not-found-title" className="text-3xl md:text-5xl font-bold text-white mb-4">{t('notFound.title')}</h1>
        <p className="text-[#8a8a93] mb-8">{t('notFound.text')}</p>
        <a href={pathFor('home', lang)} className="inline-flex px-5 py-2.5 rounded-lg text-sm font-medium text-black bg-white hover:bg-[#00a3ff] transition-colors">
          {t('notFound.back')}
        </a>
      </div>
    </section>
  );
}
