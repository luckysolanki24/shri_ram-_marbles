import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Diamond } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'products', label: 'Products', href: '#products' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.replace('#', ''));
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0C0C0C]/90 backdrop-blur-xl border-b border-[#C8A96A]/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C8A96A] to-[#A08545] flex items-center justify-center">
                <Diamond size={16} className="text-[#0C0C0C]" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="text-[#D7E2EA] font-kanit font-bold text-lg tracking-wide group-hover:text-[#C8A96A] transition-colors duration-300">
                  Shri Ram
                </div>
                <div className="text-[#C8A96A] font-kanit font-light text-xs tracking-[0.25em] uppercase">
                  Marbles
                </div>
              </div>
            </motion.a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-5 py-2 font-kanit font-light text-sm tracking-wider transition-all duration-300 rounded-full ${
                    activeSection === link.id
                      ? 'text-[#C8A96A]'
                      : 'text-[#8A9BAB] hover:text-[#D7E2EA]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[#C8A96A]/10 border border-[#C8A96A]/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:block">
              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="px-6 py-2.5 bg-[#C8A96A] text-[#0C0C0C] font-kanit font-semibold text-sm tracking-wider rounded-full hover:bg-[#E2C98A] transition-all duration-300 shadow-lg shadow-[#C8A96A]/20"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 text-[#D7E2EA] hover:text-[#C8A96A] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-20 left-0 right-0 z-40 glass border-b border-[#C8A96A]/10 py-6"
          >
            <div className="container-custom flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 font-kanit font-light text-lg text-[#D7E2EA] hover:text-[#C8A96A] hover:bg-[#C8A96A]/5 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleNavClick('#contact')}
                className="mt-2 px-6 py-3 bg-[#C8A96A] text-[#0C0C0C] font-kanit font-semibold tracking-wider rounded-full text-center"
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
