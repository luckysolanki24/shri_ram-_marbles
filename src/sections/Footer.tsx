import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

const products = [
  { label: 'Italian Marble', href: '#products' },
  { label: 'Makrana Marble', href: '#products' },
  { label: 'Premium Granite', href: '#products' },
  { label: 'Marble Statues', href: '#products' },
  { label: 'Marble Temples', href: '#products' },
  { label: 'Quartz Surfaces', href: '#products' },
];

const socialLinks = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
];

const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0C0C] border-t border-[#C8A96A]/10 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(45deg, #C8A96A 25%, transparent 25%), linear-gradient(-45deg, #C8A96A 25%, transparent 25%)',
          backgroundSize: '4px 4px',
        }}
      />

      <div className="container-custom relative z-10 pt-20 pb-10">
        {/* Main footer grid — 4 equal columns, all top-aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 items-start">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C8A96A] to-[#A08545] flex items-center justify-center flex-shrink-0">
                <Diamond size={16} className="text-[#0C0C0C]" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="text-[#D7E2EA] font-kanit font-bold text-lg tracking-wide">Shri Ram</div>
                <div className="text-[#C8A96A] font-kanit font-light text-xs tracking-[0.2em] uppercase">Marbles</div>
              </div>
            </div>

            <p className="text-[#8A9BAB] font-kanit font-light text-sm leading-relaxed mb-6">
              Premium marble, granite &amp; stone supplier — serving homes, villas, hotels, temples, and commercial spaces across India.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#C8A96A]/15 flex items-center justify-center text-[#8A9BAB] hover:text-[#C8A96A] hover:border-[#C8A96A]/40 hover:bg-[#C8A96A]/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-kanit font-semibold text-[#D7E2EA] text-base tracking-wider mb-1">
              Quick Links
            </h4>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#C8A96A] to-transparent rounded-full mb-4" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#8A9BAB] font-kanit font-light text-sm hover:text-[#C8A96A] transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]/40 group-hover:bg-[#C8A96A] transition-colors flex-shrink-0" />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-kanit font-semibold text-[#D7E2EA] text-base tracking-wider mb-1">
              Products
            </h4>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#C8A96A] to-transparent rounded-full mb-4" />
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.label}>
                  <motion.button
                    onClick={() => scrollTo(product.href)}
                    className="text-[#8A9BAB] font-kanit font-light text-sm hover:text-[#C8A96A] transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]/40 group-hover:bg-[#C8A96A] transition-colors flex-shrink-0" />
                    {product.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-kanit font-semibold text-[#D7E2EA] text-base tracking-wider mb-1">
              Contact Info
            </h4>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#C8A96A] to-transparent rounded-full mb-4" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C8A96A] mt-0.5 flex-shrink-0" />
                <span className="text-[#8A9BAB] font-kanit font-light text-sm leading-relaxed">
                  Plot No. 42, Marble Market Road,<br />
                  Kishangarh, Ajmer — 305801<br />
                  Rajasthan, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+919829095295"
                  className="flex items-center gap-3 text-[#8A9BAB] hover:text-[#C8A96A] transition-colors font-kanit font-light text-sm"
                >
                  <Phone size={14} className="text-[#C8A96A] flex-shrink-0" />
                  +91 98290 95295
                </a>
              </li>
              <li>
                <a
                  href="tel:+919509095295"
                  className="flex items-center gap-3 text-[#8A9BAB] hover:text-[#C8A96A] transition-colors font-kanit font-light text-sm"
                >
                  <Phone size={14} className="text-[#C8A96A] flex-shrink-0" />
                  +91 95090 95295
                </a>
              </li>
              <li>
                <a
                  href="mailto:mukulsolanki456@gmail.com"
                  className="flex items-center gap-3 text-[#8A9BAB] hover:text-[#C8A96A] transition-colors font-kanit font-light text-sm"
                >
                  <Mail size={14} className="text-[#C8A96A] flex-shrink-0" />
                  mukulsolanki456@gmail.com
                </a>
              </li>
            </ul>

            {/* CTA */}
            <motion.button
              onClick={() => scrollTo('#contact')}
              className="mt-6 flex items-center gap-2 px-5 py-2.5 border border-[#C8A96A]/30 rounded-full text-[#C8A96A] font-kanit font-medium text-sm hover:bg-[#C8A96A] hover:text-[#0C0C0C] hover:border-[#C8A96A] transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              Get a Quote
              <ArrowUpRight size={13} />
            </motion.button>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C8A96A]/30 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[#8A9BAB] font-kanit font-light text-sm">
            © {new Date().getFullYear()} Shri Ram Marbles. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-[#8A9BAB] hover:text-[#C8A96A] font-kanit font-light text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-[#8A9BAB] hover:text-[#C8A96A] font-kanit font-light text-sm transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
