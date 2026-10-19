import Hero from '../components/Hero';
import LogoWall from '../components/LogoWall';
import WhatWeDo from '../components/WhatWeDo';
import Services from '../components/Services';
import HowWeWork from '../components/HowWeWork';
import Products from '../components/Products';
import About from '../components/About';
import Research from '../components/Research';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import { visibleHomeFaq } from '../content/faq';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoWall />
      <WhatWeDo />
      <Services />
      <HowWeWork />
      <Products />
      <About />
      <Research />
      <FAQ itemsKey="faq.items" keys={visibleHomeFaq()} titleKey="faq.title" subtitleKey="faq.subtitle" />
      <Contact />
    </>
  );
}
