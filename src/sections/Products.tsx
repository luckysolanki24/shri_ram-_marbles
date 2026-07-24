import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const products = [
  {
    id: 1,
    name: 'Italian Marble',
    description: 'Pristine Statuario and Calacatta slabs imported directly from Italian quarries, featuring dramatic grey and gold veining.',
    image: '/images/italian_marble_slab.jpg',
    tag: 'Imported',
    accent: '#C8A96A',
  },
  {
    id: 2,
    name: 'Makrana Marble',
    description: 'The legendary white marble from Rajasthan, India — same source that built the Taj Mahal. Pure, lustrous, and timeless.',
    image: 'https://images.unsplash.com/photo-1567225557594-88d73398014a?w=600&q=80',
    tag: 'Indian',
    accent: '#D7E2EA',
  },
  {
    id: 3,
    name: 'Premium Granite',
    description: 'Durable and elegant granite in Black Galaxy, Kashmir White, and Rajasthan Pink finishes for countertops and flooring.',
    image: '/images/granite_countertop.jpg',
    tag: 'Durable',
    accent: '#8A9BAB',
  },
  {
    id: 4,
    name: 'Marble Temple',
    description: 'Hand-carved ornate marble temples in traditional Rajasthani and South Indian styles — crafted by master artisans.',
    image: '/images/marble_temple.jpg',
    tag: 'Custom',
    accent: '#C8A96A',
  },
  {
    id: 5,
    name: 'Marble Statue',
    description: 'Exquisite handcrafted marble statues of Hindu deities, garden sculptures, and portrait carvings in pristine white marble.',
    image: '/images/marble_statue.jpg',
    tag: 'Handcrafted',
    accent: '#D7E2EA',
  },
  {
    id: 6,
    name: 'Quartz Surfaces',
    description: 'Engineered quartz in 50+ colors and patterns — zero maintenance, scratch-resistant, ideal for modern kitchens and baths.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    tag: 'Engineered',
    accent: '#8A9BAB',
  },
  {
    id: 7,
    name: 'Sandstone',
    description: 'Classic Jodhpur pink and Agra red sandstone for exterior facades, garden features, and heritage restoration projects.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    tag: 'Exterior',
    accent: '#C8A96A',
  },
  {
    id: 8,
    name: 'Kitchen Countertops',
    description: 'Bespoke marble and granite countertops measured, cut, and installed by our precision fabrication team.',
    image: '/images/granite_countertop.jpg',
    tag: 'Custom-cut',
    accent: '#D7E2EA',
  },
];

const Products: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="products" className="section-padding bg-[#0C0C0C] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#C8A96A]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-[#C8A96A] font-kanit font-light text-sm tracking-[0.35em] uppercase">
              What We Supply
            </span>
          </FadeIn>
          <div className="mt-4">
            <AnimatedText
              text="Our Products"
              className="font-kanit font-black text-5xl md:text-6xl text-[#D7E2EA] leading-tight"
              delay={0.1}
              mode="words"
            />
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[#8A9BAB] font-kanit font-light text-lg mt-6 max-w-xl mx-auto">
              From quarry to installation — a curated selection of the finest natural stones.
            </p>
          </FadeIn>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.07} direction="up">
              <motion.div
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-80"
                onHoverStart={() => setHovered(product.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src = '/images/marble_hero.jpg';
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/40 to-transparent transition-all duration-500 group-hover:via-[#0C0C0C]/60" />

                {/* Gold border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border"
                  animate={{ borderColor: hovered === product.id ? 'rgba(200,169,106,0.5)' : 'rgba(200,169,106,0.1)' }}
                  transition={{ duration: 0.3 }}
                />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0C0C0C]/70 backdrop-blur-sm border border-[#C8A96A]/30 rounded-full text-[#C8A96A] font-kanit font-light text-xs tracking-widest uppercase">
                    {product.tag}
                  </span>
                </div>

                {/* Arrow icon */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#C8A96A] flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: hovered === product.id ? 1 : 0, scale: hovered === product.id ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight size={14} className="text-[#0C0C0C]" />
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-kanit font-bold text-xl text-[#D7E2EA] mb-2">{product.name}</h3>

                  <motion.p
                    className="font-kanit font-light text-sm text-[#8A9BAB] leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hovered === product.id ? 1 : 0, y: hovered === product.id ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.description}
                  </motion.p>

                  <div className="w-8 h-0.5 bg-[#C8A96A] mt-3 transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
