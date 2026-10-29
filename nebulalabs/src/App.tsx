import type { ComponentType } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import MouseGlow from './components/MouseGlow';

function App({ Page }: { Page: ComponentType }) {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen bg-black text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-black focus:text-sm"
      >
        {t('a11y.skipToContent')}
      </a>
      <ParticleField />
      <MouseGlow />
      <Navbar />
      <main id="main" tabIndex={-1} className="relative z-10 focus:outline-none">
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
