import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import Process from '../components/Process';
import About from '../components/About';
import Features from '../components/Features';

// Lazy load components that are below the fold
const Comparison = lazy(() => import('../components/Comparison'));
const Services = lazy(() => import('../components/Services'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Pricing = lazy(() => import('../components/Pricing'));
const FAQ = lazy(() => import('../components/FAQ'));
const PainPoints = lazy(() => import('../components/PainPoints'));
const Contact = lazy(() => import('../components/Contact'));

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Process />
      <Features />
      <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading section...</div>}>
        <PainPoints />
        <Comparison />
        <Services />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Contact />
      </Suspense>
    </main>
  );
};

export default Home;
