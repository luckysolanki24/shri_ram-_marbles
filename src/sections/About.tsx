import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Gem } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const stats = [
  { icon: Award, value: '15+', label: 'Years in Business' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Globe, value: '20+', label: 'Cities Served' },
  { icon: Gem, value: '50+', label: 'Stone Varieties' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-[#0C0C0C] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8A96A]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Image mosaic */}
          <FadeIn direction="left" delay={0.1}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden h-[500px] gold-border">
                <img
                  src="/images/marble_flooring.jpg"
                  alt="Luxury Marble Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/40 to-transparent rounded-3xl" />
              </div>

              {/* Floating accent card */}
              <motion.div
                className="absolute -bottom-8 -right-2 sm:-right-4 w-44 sm:w-52 h-44 sm:h-52 rounded-2xl overflow-hidden gold-border shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/images/marble_temple.jpg"
                  alt="Marble Temple Work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/50 to-transparent" />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -top-6 -left-6 bg-[#C8A96A] text-[#0C0C0C] rounded-2xl px-6 py-4 shadow-2xl shadow-[#C8A96A]/30"
                initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="font-kanit font-black text-3xl leading-none">15+</div>
                <div className="font-kanit font-medium text-xs tracking-wider uppercase mt-1">Years of</div>
                <div className="font-kanit font-medium text-xs tracking-wider uppercase">Excellence</div>
              </motion.div>

              {/* Decorative marble texture overlay */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 70% 20%, rgba(200,169,106,0.06) 0%, transparent 60%)',
                }} />
            </div>
          </FadeIn>

          {/* Right — Content */}
          <div>
            <FadeIn delay={0.1}>
              <span className="text-[#C8A96A] font-kanit font-light text-sm tracking-[0.35em] uppercase">
                Who We Are
              </span>
            </FadeIn>

            <div className="mt-4 mb-8">
              <AnimatedText
                text="About Us"
                className="font-kanit font-black text-5xl md:text-6xl text-[#D7E2EA] leading-tight"
                delay={0.15}
                mode="words"
              />
            </div>

            <FadeIn delay={0.3}>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C8A96A] to-transparent rounded-full mb-8" />
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-[#8A9BAB] font-kanit font-light text-lg leading-relaxed mb-6">
                With over 15 years of experience in the marble and natural stone industry, we specialize in supplying
                <span className="text-[#D7E2EA]"> premium-quality marble, granite, handcrafted marble statues,
                temples, flooring, countertops,</span> and customized stone solutions.
              </p>
              <p className="text-[#8A9BAB] font-kanit font-light text-lg leading-relaxed mb-10">
                Our focus is superior craftsmanship, competitive pricing, and complete customer satisfaction.
                We source the finest stones directly from quarries across India and Italy to deliver
                <span className="text-[#C8A96A]"> unmatched quality </span> to every project.
              </p>
            </FadeIn>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
                  <div className="marble-card p-5 group">
                    <div className="w-10 h-10 rounded-xl bg-[#C8A96A]/10 flex items-center justify-center mb-3 group-hover:bg-[#C8A96A]/20 transition-colors">
                      <stat.icon size={18} className="text-[#C8A96A]" />
                    </div>
                    <div className="font-kanit font-black text-2xl text-gradient-gold">{stat.value}</div>
                    <div className="font-kanit font-light text-sm text-[#8A9BAB] mt-1">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
