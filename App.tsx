
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Features from './components/Features';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen flex flex-col`}>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustIndicators />
        <Features />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
