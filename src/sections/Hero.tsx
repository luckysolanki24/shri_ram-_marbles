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

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const headingWords = ['SHRI', 'RAM', 'MARBLES'];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0C0C0C]"
    >
      {/* Background marble image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/85 to-[#0C0C0C]/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/60 z-10" />
        <img
          src="/images/marble_hero.jpg"
          alt="Premium Italian Marble"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Decorative gold orbs */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#C8A96A]/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#C8A96A]/8 rounded-full blur-2xl pointer-events-none z-0" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container-custom w-full pt-28 md:pt-20"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-2 md:mb-3"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#C8A96A" className="text-[#C8A96A]" />
              ))}
            </div>
            <span className="text-[#C8A96A] font-kanit font-light text-sm tracking-[0.3em] uppercase">
              Premium Stone Supplier
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="overflow-hidden mb-2">
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
                  className={`font-kanit font-black leading-[0.95] tracking-tight block whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-[100px] ${
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-[#8A9BAB] font-kanit font-light text-base md:text-lg leading-relaxed max-w-xl mt-4 mb-6"
          >
            Premium supplier of marble, granite, temples, statues, flooring, countertops, and
            customized stone solutions for{' '}
            <span className="text-[#C8A96A]">homes, villas, hotels,</span> and commercial spaces.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
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
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-wrap gap-8 md:gap-12 mt-6 pt-5 border-t border-[#C8A96A]/10"
          >
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '15+', label: 'Years Experience' },
              { value: '50+', label: 'Marble Varieties' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="text-gradient-gold font-kanit font-black text-2xl md:text-3xl">{stat.value}</div>
                <div className="text-[#8A9BAB] font-kanit font-light text-[10px] md:text-xs tracking-widest uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — bottom right, away from stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-[#8A9BAB] font-kanit font-light text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-[#C8A96A]"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Owner photo panel — right side, fully contained */}
      <div className="absolute right-0 top-0 w-[42%] max-w-[400px] h-full z-10 pointer-events-none hidden lg:block overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-16 bottom-16 right-8 left-4"
        >
          {/* Photo frame */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden gold-glow">
            <img
              src="/images/owner.jpg"
              alt="Mukul Solanki — Owner, Shri Ram Marbles"
              className="w-full h-full object-cover object-top"
              style={{ filter: 'brightness(0.92) contrast(1.05)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/65 via-transparent to-[#0C0C0C]/10" />
            {/* Owner name badge */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-kanit font-semibold text-[#D7E2EA] text-sm">Mukul Solanki</div>
              <div className="font-kanit font-light text-[#C8A96A] text-xs tracking-widest uppercase mt-0.5">Founder &amp; Owner</div>
            </div>
          </div>
          {/* Gold border accent frame — offset slightly */}
          <div className="absolute -bottom-2 -right-2 -left-2 top-2 rounded-3xl border border-[#C8A96A]/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
