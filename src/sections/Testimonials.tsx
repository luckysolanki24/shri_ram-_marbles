import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const testimonials = [
  {
    id: 1,
    name: 'Rajiv Malhotra',
    role: 'Interior Designer',
    location: 'Mumbai',
    rating: 5,
    text: 'Shree Marble & Stone delivered exceptional quality Italian marble for our luxury villa project. The veining was bookmatched perfectly and the installation was flawless. Highly professional team from start to finish.',
    project: 'Luxury Villa Flooring',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Temple Committee Chair',
    location: 'Vrindavan',
    rating: 5,
    text: 'The marble temple crafted by Shree Marble is an absolute masterpiece. Every detail of the carving reflects true devotion and artisanship. The Makrana marble quality is pristine and the delivery was on schedule.',
    project: 'Marble Temple Construction',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=100&q=80',
  },
  {
    id: 3,
    name: 'Anand Verma',
    role: 'Hotel General Manager',
    location: 'Jaipur',
    rating: 5,
    text: 'We chose Shree Marble for our 5-star hotel lobby and the result exceeded all expectations. The floor-to-ceiling marble installation transformed the space into something truly palatial. Competitive pricing too.',
    project: '5-Star Hotel Lobby',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
];

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-1">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={14} fill="#C8A96A" className="text-[#C8A96A]" />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-[#0C0C0C] relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8A96A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8A96A]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-[#C8A96A] font-kanit font-light text-sm tracking-[0.35em] uppercase">
              Client Stories
            </span>
          </FadeIn>
          <div className="mt-4">
            <AnimatedText
              text="What Our Clients Say"
              className="font-kanit font-black text-4xl md:text-5xl text-[#D7E2EA] leading-tight"
              delay={0.1}
              mode="words"
            />
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[#8A9BAB] font-kanit font-light text-lg mt-6 max-w-xl mx-auto">
              Trusted by homeowners, architects, interior designers, hotels, and temple committees across India.
            </p>
          </FadeIn>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.15} direction="up">
              <motion.div
                className="marble-card p-8 h-full flex flex-col group relative overflow-hidden"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#C8A96A]/10 flex items-center justify-center mb-6">
                    <Quote size={18} className="text-[#C8A96A]" />
                  </div>

                  {/* Stars */}
                  <StarRating count={t.rating} />

                  {/* Review text */}
                  <p className="text-[#8A9BAB] font-kanit font-light text-base leading-relaxed mt-5 mb-6 flex-1 italic">
                    "{t.text}"
                  </p>

                  {/* Project tag */}
                  <div className="mb-6">
                    <span className="px-3 py-1.5 bg-[#C8A96A]/10 border border-[#C8A96A]/20 rounded-full text-[#C8A96A] font-kanit font-light text-xs tracking-wider">
                      {t.project}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#C8A96A]/10 mb-6" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C8A96A]/30">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.style.display = 'none';
                          const parent = el.parentElement;
                          if (parent) {
                            parent.style.background = 'rgba(200,169,106,0.2)';
                            parent.style.display = 'flex';
                            parent.style.alignItems = 'center';
                            parent.style.justifyContent = 'center';
                            parent.innerHTML = `<span style="color:#C8A96A;font-family:Kanit;font-weight:700;font-size:18px">${t.name[0]}</span>`;
                          }
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-kanit font-semibold text-[#D7E2EA] text-base">{t.name}</div>
                      <div className="font-kanit font-light text-[#8A9BAB] text-sm">
                        {t.role} · {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
