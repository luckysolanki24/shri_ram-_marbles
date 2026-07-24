import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeItem {
  label: string;
  image: string;
}

const items: MarqueeItem[] = [
  { label: 'Italian Marble', image: '/images/italian_marble_slab.jpg' },
  { label: 'Makrana Marble', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { label: 'Premium Granite', image: '/images/granite_countertop.jpg' },
  { label: 'Marble Flooring', image: '/images/marble_flooring.jpg' },
  { label: 'Kitchen Countertops', image: '/images/granite_countertop.jpg' },
  { label: 'Marble Staircase', image: '/images/marble_flooring.jpg' },
  { label: 'Marble Temple', image: '/images/marble_temple.jpg' },
  { label: 'Marble Statue', image: '/images/marble_statue.jpg' },
  { label: 'Luxury Villa', image: '/images/marble_flooring.jpg' },
  { label: 'Hotel Lobby', image: '/images/marble_flooring.jpg' },
  { label: 'Wall Cladding', image: '/images/marble_hero.jpg' },
  { label: 'Stone Texture', image: '/images/italian_marble_slab.jpg' },
];

const MarqueeCard: React.FC<{ item: MarqueeItem }> = ({ item }) => (
  <motion.div
    className="relative flex-shrink-0 w-64 h-44 md:w-80 md:h-56 rounded-2xl overflow-hidden mx-3 group cursor-pointer"
    whileHover={{ scale: 1.03, y: -4 }}
    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
  >
    <img
      src={item.image}
      alt={item.label}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = '/images/marble_hero.jpg';
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-[#0C0C0C]/20 to-transparent" />
    {/* Gold border on hover */}
    <div className="absolute inset-0 rounded-2xl border border-[#C8A96A]/0 group-hover:border-[#C8A96A]/40 transition-all duration-500" />
    <div className="absolute bottom-4 left-4 right-4">
      <span className="font-kanit font-semibold text-sm text-[#D7E2EA] tracking-wider uppercase">
        {item.label}
      </span>
      <div className="w-8 h-0.5 bg-[#C8A96A] mt-1.5" />
    </div>
  </motion.div>
);

const MarqueeSection: React.FC = () => {
  const doubledItems = [...items, ...items];

  return (
    <section className="py-20 bg-[#0C0C0C] overflow-hidden relative">
      {/* Section header */}
      <div className="container-custom mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#C8A96A] font-kanit font-light text-sm tracking-[0.35em] uppercase">
            Our Gallery
          </span>
          <h2 className="font-kanit font-bold text-3xl md:text-4xl text-[#D7E2EA] mt-3">
            Explore Our{' '}
            <span className="text-gradient-gold">Stone Collection</span>
          </h2>
        </motion.div>
      </div>

      {/* Gold divider lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/20 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/20 to-transparent" />

      {/* Left / Right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      {/* Row 1 — left to right */}
      <div className="overflow-hidden mb-5">
        <div className="marquee-track">
          {doubledItems.map((item, i) => (
            <MarqueeCard key={`row1-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="overflow-hidden">
        <div className="marquee-track marquee-track-reverse">
          {[...doubledItems].reverse().map((item, i) => (
            <MarqueeCard key={`row2-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
