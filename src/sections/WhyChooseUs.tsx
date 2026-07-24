import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Globe, Hammer, Palette, DollarSign, Clock, Wrench
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality Stone',
    description: 'Every slab is hand-selected and quality-checked before delivery.',
    color: 'from-[#C8A96A]/20 to-[#C8A96A]/5',
  },
  {
    icon: Globe,
    title: 'Imported & Indian Marble',
    description: 'Direct sourcing from Italian quarries and the finest Indian stone mines.',
    color: 'from-[#8A9BAB]/15 to-[#8A9BAB]/3',
  },
  {
    icon: Hammer,
    title: 'Expert Craftsmanship',
    description: 'Skilled artisans with decades of experience in stone carving and installation.',
    color: 'from-[#C8A96A]/20 to-[#C8A96A]/5',
  },
  {
    icon: Palette,
    title: 'Custom Marble Designs',
    description: 'Bespoke solutions tailored to your vision — from flooring to sculptural art.',
    color: 'from-[#8A9BAB]/15 to-[#8A9BAB]/3',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Luxury quality at transparent, fair market prices. No hidden costs.',
    color: 'from-[#C8A96A]/20 to-[#C8A96A]/5',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your timelines and ensure every project is delivered on schedule.',
    color: 'from-[#8A9BAB]/15 to-[#8A9BAB]/3',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'End-to-end installation by certified technicians using precision tools.',
    color: 'from-[#C8A96A]/20 to-[#C8A96A]/5',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding bg-[#0C0C0C] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C8A96A 0, #C8A96A 1px, transparent 0, transparent 50%)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C8A96A]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-[#C8A96A] font-kanit font-light text-sm tracking-[0.35em] uppercase">
              Our Advantage
            </span>
          </FadeIn>
          <div className="mt-4">
            <AnimatedText
              text="Why Choose Us"
              className="font-kanit font-black text-5xl md:text-6xl text-[#D7E2EA] leading-tight"
              delay={0.1}
              mode="words"
            />
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[#8A9BAB] font-kanit font-light text-lg mt-6 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern precision to deliver exceptional stone solutions.
            </p>
          </FadeIn>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feat, i) => (
            <FadeIn key={feat.title} delay={i * 0.08} direction="up">
              <motion.div
                className="marble-card p-6 h-full group relative overflow-hidden"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-[#C8A96A]/10 flex items-center justify-center mb-5 group-hover:bg-[#C8A96A]/20 transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <feat.icon size={22} className="text-[#C8A96A]" />
                  </motion.div>

                  {/* Gold checkmark badge */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#C8A96A]/15 flex items-center justify-center">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path d="M2 6l3 3 5-5" stroke="#C8A96A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-kanit font-semibold text-base text-[#D7E2EA] leading-tight">
                      {feat.title}
                    </h3>
                  </div>

                  <p className="font-kanit font-light text-sm text-[#8A9BAB] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
