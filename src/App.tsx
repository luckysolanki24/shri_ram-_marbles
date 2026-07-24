import React from 'react';
import './index.css';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyChooseUs from './sections/WhyChooseUs';
import Services from './sections/Services';
import Products from './sections/Products';

import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Back-to-top button
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#C8A96A] rounded-full flex items-center justify-center text-[#0C0C0C] shadow-2xl shadow-[#C8A96A]/30 hover:bg-[#E2C98A] transition-colors duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen font-kanit">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
