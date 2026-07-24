import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Gem, Mountain, Shapes, Layers, Building2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const services = [
  {
    id: '01',
    icon: Gem,
    title: 'Premium Marble',
    subtitle: 'Italian & Indian Marble',
    description:
      'High-quality imported and Indian marble for residential and commercial projects. We offer an extensive range including Statuario, Carrara, Makrana White, Katni, and more — in polished, honed, and brushed finishes.',
    image: '/images/italian_marble_slab.jpg',
    tags: ['Italian Marble', 'Makrana White', 'Katni Marble', 'Onyx'],
  },
  {
    id: '02',
    icon: Mountain,
    title: 'Granite Supply',
    subtitle: 'Durable Natural Granite',
    description:
      'Durable granite available in multiple colors and finishes. From classic Black Galaxy and Absolute Black to exotic varieties — perfect for countertops, flooring, and exterior cladding.',
    image: '/images/granite_countertop.jpg',
    tags: ['Black Galaxy', 'Absolute Black', 'Kashmir White', 'Rajasthan Pink'],
  },
  {
    id: '03',
    icon: Shapes,
    title: 'Marble Statues',
    subtitle: 'Custom Handcrafted Sculptures',
    description:
      'Custom handcrafted marble statues, temples, fountains, and decorative sculptures. Our master artisans bring your vision to life in pristine Makrana or Italian marble with exceptional detail.',
    image: '/images/marble_statue.jpg',
    tags: ['Hindu Deities', 'Marble Temples', 'Garden Fountains', 'Decorative Sculptures'],
  },
  {
    id: '04',
    icon: Layers,
    title: 'Flooring & Installation',
    subtitle: 'Professional Stone Laying',
    description:
      'Professional cutting, polishing, installation, and finishing for all stone types. Our installation teams handle everything from site preparation to the final polish and sealing.',
    image: '/images/marble_flooring.jpg',
    tags: ['Floor Installation', 'Polishing', 'Waterproofing', 'Restoration'],
  },
  {
    id: '05',
    icon: Building2,
    title: 'Custom Stone Work',
    subtitle: 'Architectural Stone Solutions',
    description:
      'Countertops, staircases, wall cladding, monuments, and architectural stone solutions. We design and fabricate any stone element for residential, commercial, or monumental projects.',
    image: '/images/marble_flooring.jpg',
    tags: ['Countertops', 'Staircases', 'Wall Cladding', 'Monuments'],
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-[#0C0C0C] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C8A96A]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <FadeIn>
              <span className="text-[#C8A96A] font-kanit font-light text-sm tracking-[0.35em] uppercase">
                What We Offer
              </span>
            </FadeIn>
            <div className="mt-4">
              <AnimatedText
                text="Our Services"
                className="font-kanit font-black text-5xl md:text-6xl text-[#D7E2EA] leading-tight"
                delay={0.1}
                mode="words"
              />
            </div>
          </div>
          <FadeIn delay={0.2} direction="left">
            <p className="text-[#8A9BAB] font-kanit font-light text-lg leading-relaxed lg:text-right">
              From raw stone supply to complete installation, we provide end-to-end marble and granite solutions tailored to your project requirements.
            </p>
          </FadeIn>
        </div>

        {/* Service list */}
        <div className="space-y-4">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1}>
              <motion.div
                className={`marble-card overflow-hidden cursor-pointer transition-all duration-500 ${
                  activeIndex === i ? 'border-[#C8A96A]/40 shadow-2xl shadow-[#C8A96A]/10' : ''
                }`}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                layout
              >
                {/* Header row */}
                <div className="p-6 md:p-8 flex items-center gap-6">
                  {/* Number */}
                  <span className="font-kanit font-black text-6xl md:text-7xl text-gradient-gold opacity-60 leading-none flex-shrink-0 w-24 whitespace-nowrap">
                    {service.id}
                  </span>

                  {/* Icon + title */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#C8A96A]/10 flex items-center justify-center">
                        <service.icon size={15} className="text-[#C8A96A]" />
                      </div>
                      <span className="text-[#C8A96A] font-kanit font-light text-xs tracking-widest uppercase">
                        {service.subtitle}
                      </span>
                    </div>
                    <h3 className="font-kanit font-bold text-2xl md:text-3xl text-[#D7E2EA]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Toggle arrow */}
                  <motion.div
                    animate={{ rotate: activeIndex === i ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="flex-shrink-0 w-10 h-10 rounded-full border border-[#C8A96A]/30 flex items-center justify-center text-[#C8A96A]"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                          <p className="text-[#8A9BAB] font-kanit font-light text-base leading-relaxed mb-6">
                            {service.description}
                          </p>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1.5 bg-[#C8A96A]/10 border border-[#C8A96A]/20 rounded-full text-[#C8A96A] font-kanit font-light text-xs tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Thumbnail */}
                        <div className="w-full md:w-60 h-48 md:h-44 rounded-2xl overflow-hidden flex-shrink-0">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
