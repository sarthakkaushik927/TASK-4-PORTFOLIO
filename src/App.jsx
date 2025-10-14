import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import AboutMeSection from './components/AboutMeSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar  />
      <main>
        <HeroSection />
        <SkillsSection />
        <AboutMeSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;