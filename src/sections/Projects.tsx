import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Luxury Villa Flooring',
    category: 'Residential',
    location: 'Mumbai, Maharashtra',
    description:
      'Complete marble flooring installation across 8,000 sq ft using Italian Statuario marble with custom medallion inlay design in the grand foyer and living areas.',
    image: '/images/marble_flooring.jpg',
    materials: ['Italian Statuario', 'Custom Medallion', 'Polished Finish'],
    year: '2024',
  },
  {
    id: 2,
    number: '02',
    title: '5-Star Hotel Lobby',
    category: 'Hospitality',
    location: 'Jaipur, Rajasthan',
    description:
      'Premium floor-to-ceiling marble installation for a luxury resort lobby, featuring Makrana White marble with intricate gold inlay patterns and a dramatic curved reception desk.',
    image: '/images/marble_flooring.jpg',
    materials: ['Makrana White', 'Gold Inlay', 'Honed Finish'],
    year: '2024',
  },
  {
    id: 3,
    number: '03',
    title: 'Modern Kitchen Countertop',
    category: 'Kitchen',
    location: 'Delhi NCR',
    description:
      'Custom Black Galaxy granite countertops with waterfall edges for a premium penthouse kitchen. Includes matching backsplash and integrated marble island with bookmatched veining.',
    image: '/images/granite_countertop.jpg',
    materials: ['Black Galaxy Granite', 'Waterfall Edge', 'Bookmatched'],
    year: '2023',
  },
  {
    id: 4,
    number: '04',
    title: 'Marble Temple',
    category: 'Religious',
    location: 'Vrindavan, UP',
    description:
      'Handcrafted white Makrana marble temple with intricate carved deity panels, floral motifs, and traditional shikhar architecture. A 2-year masterpiece of artisanship.',
    image: '/images/marble_temple.jpg',
    materials: ['Makrana Marble', 'Hand-carved', 'Traditional Design'],
    year: '2023',
  },
  {
    id: 5,
    number: '05',
    title: 'Corporate Reception',
    category: 'Commercial',
    location: 'Pune, Maharashtra',
    description:
      'Imposing Calacatta marble reception wall and matching floor for a corporate headquarters. Features backlit marble panels creating a dramatic glowing effect.',
    image: '/images/italian_marble_slab.jpg',
    materials: ['Calacatta Marble', 'Backlit Panels', 'Bookmatched'],
    year: '2024',
  },
  {
    id: 6,
    number: '06',
    title: 'Premium Staircase',
    category: 'Residential',
    location: 'Ahmedabad, Gujarat',
    description:
      'Sweeping curved marble staircase in pure white Carrara marble with custom brass-inlaid nosing and polished balustrade columns for a luxury villa.',
    image: '/images/marble_flooring.jpg',
    materials: ['Carrara White', 'Brass Inlay', 'Custom Balustrade'],
    year: '2023',
  },
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="section-padding bg-[#0C0C0C] relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C8A96A]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <FadeIn>
              <span className="text-[#C8A96A] font-kanit font-light text-sm tracking-[0.35em] uppercase">
                Portfolio
              </span>
            </FadeIn>
            <div className="mt-4">
              <AnimatedText
                text="Our Projects"
                className="font-kanit font-black text-5xl md:text-6xl text-[#D7E2EA] leading-tight"
                delay={0.1}
                mode="words"
              />
            </div>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-[#8A9BAB] font-kanit font-light text-base max-w-sm leading-relaxed">
              A selection of our finest completed projects across residential, commercial, and religious spaces.
            </p>
          </FadeIn>
        </div>

        {/* Sticky Cards Stack */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <StickyProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  materials: string[];
  year: string;
}

const StickyProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.9]);

  return (
    <motion.div
      ref={cardRef}
      className="sticky-card"
      style={{
        top: `${90 + index * 10}px`,
        zIndex: index + 1,
        scale,
        opacity,
      }}
    >
      <div className="marble-card overflow-hidden group">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-80 lg:w-96 h-56 md:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141414]/50 md:block hidden" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-[#C8A96A] text-[#0C0C0C] font-kanit font-semibold text-xs tracking-wider rounded-full">
                {project.category}
              </span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="text-[#C8A96A]/50 font-kanit font-black text-4xl">{project.number}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#8A9BAB] font-kanit font-light text-sm">
                  📍 {project.location}
                </span>
                <span className="text-[#C8A96A] font-kanit font-light text-sm border border-[#C8A96A]/20 px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>

              <h3 className="font-kanit font-bold text-2xl md:text-3xl text-[#D7E2EA] mb-4">
                {project.title}
              </h3>

              <p className="text-[#8A9BAB] font-kanit font-light text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Materials */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.materials.map((mat) => (
                  <span
                    key={mat}
                    className="px-3 py-1 bg-[#C8A96A]/8 border border-[#C8A96A]/15 rounded-full text-[#C8A96A] font-kanit font-light text-xs tracking-wider"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <div className="h-px bg-[#C8A96A]/10 mb-6" />
              <motion.button
                className="flex items-center gap-2 text-[#C8A96A] font-kanit font-medium text-sm hover:gap-4 transition-all duration-300 group/btn"
                whileHover={{ x: 4 }}
              >
                <span>View Gallery</span>
                <ExternalLink size={14} className="transition-transform group-hover/btn:scale-110" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
