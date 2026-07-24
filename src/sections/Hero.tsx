import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Phone, Star } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const headingWords = ['SHRI', 'RAM', 'MARBLES'];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0C0C0C] py-24 lg:py-0"
    >
      {/* Background marble image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/85 to-[#0C0C0C]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/60 z-10" />
        <img
          src="/images/marble_hero.jpg"
          alt="Premium Italian Marble"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Decorative gold background glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C8A96A]/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#C8A96A]/8 rounded-full blur-2xl pointer-events-none z-0" />

      {/* Main Container - 12 Column Grid Layout */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container-custom w-full pt-20 lg:pt-28 pb-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, CTAs & Stats (7 Cols = ~60% Width) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#C8A96A" className="text-[#C8A96A]" />
                ))}
              </div>
              <span className="text-[#C8A96A] font-kanit font-light text-xs sm:text-sm tracking-[0.3em] uppercase">
                Premium Stone Supplier
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="overflow-hidden mb-3">
              {headingWords.map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + i * 0.15,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className={`font-kanit font-black leading-[0.95] tracking-tight block whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-[85px] xl:text-[96px] ${
                      i === 1
                        ? 'text-gradient-gold'
                        : 'text-[#D7E2EA]'
                    }`}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[#8A9BAB] font-kanit font-light text-base md:text-lg leading-relaxed max-w-xl mb-8"
            >
              Premium supplier of marble, granite, temples, statues, flooring, countertops, and
              customized stone solutions for{' '}
              <span className="text-[#C8A96A]">homes, villas, hotels,</span> and commercial spaces.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Magnetic CTA */}
              <MagneticButton strength={0.4}>
                <motion.button
                  id="hero-get-quote-btn"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3.5 bg-[#C8A96A] text-[#0C0C0C] font-kanit font-bold text-sm tracking-wider rounded-full hover:bg-[#E2C98A] transition-all duration-300 shadow-2xl shadow-[#C8A96A]/30 hover:shadow-[#C8A96A]/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Quote
                </motion.button>
              </MagneticButton>

              {/* Phone CTA */}
              <motion.a
                href="tel:+919829095295"
                className="flex items-center gap-3 px-5 py-3 glass gold-border rounded-full hover:border-[#C8A96A]/50 transition-all duration-300 group"
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-7 h-7 bg-[#C8A96A]/10 rounded-full flex items-center justify-center group-hover:bg-[#C8A96A]/20 transition-colors">
                  <Phone size={13} className="text-[#C8A96A]" />
                </div>
                <div>
                  <div className="text-[#8A9BAB] font-kanit font-light text-[9px] tracking-widest uppercase">Call Us</div>
                  <div className="text-[#D7E2EA] font-kanit font-medium text-xs">+91 98290 95295</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-10 pt-6 border-t border-[#C8A96A]/10"
            >
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '15+', label: 'Years Experience' },
                { value: '50+', label: 'Marble Varieties' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-gradient-gold font-kanit font-black text-2xl sm:text-3xl">{stat.value}</div>
                  <div className="text-[#8A9BAB] font-kanit font-light text-[10px] sm:text-xs tracking-widest uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Founder Photo Card (5 Cols = ~40% Width) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-[380px] lg:max-w-none h-[420px] sm:h-[480px] lg:h-[540px]"
            >
              {/* Main photo frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden gold-border gold-glow">
                <img
                  src="/images/owner.jpg"
                  alt="Mukul Solanki — Owner, Shri Ram Marbles"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'brightness(0.92) contrast(1.05)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-[#0C0C0C]/10" />
                
                {/* Founder name badge */}
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl gold-border">
                  <div className="font-kanit font-bold text-[#D7E2EA] text-base">Mukul Solanki</div>
                  <div className="font-kanit font-light text-[#C8A96A] text-xs tracking-widest uppercase mt-0.5">Founder &amp; Owner</div>
                </div>
              </div>

              {/* Offset Gold Border Accent Frame */}
              <div className="absolute -bottom-3 -right-3 -left-3 top-3 rounded-3xl border border-[#C8A96A]/20 pointer-events-none -z-10" />
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 hidden lg:flex"
      >
        <span className="text-[#8A9BAB] font-kanit font-light text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-[#C8A96A]"
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
