import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Documentation from './components/Documentation';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import MouseGlow from './components/MouseGlow';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-black text-white">
        <ParticleField />
        <MouseGlow />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Documentation />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
