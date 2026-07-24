import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Our Location',
    lines: ['Plot No. 42, Marble Market Road', 'Kishangarh, Ajmer — 305801', 'Rajasthan, India'],
  },
  {
    icon: Phone,
    label: 'Phone Numbers',
    lines: ['+91 98290 95295', '+91 95090 95295'],
    href: 'tel:+919829095295',
  },
  {
    icon: Mail,
    label: 'Email Address',
    lines: ['mukulsolanki456@gmail.com'],
    href: 'mailto:mukulsolanki456@gmail.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Monday – Saturday: 9:00 AM – 7:00 PM', 'Sunday: 10:00 AM – 4:00 PM'],
  },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const inputClasses = `w-full bg-[#1C1C1C] border border-[#C8A96A]/15 rounded-xl px-5 py-3.5 text-[#D7E2EA] font-kanit font-light text-sm placeholder-[#8A9BAB]/50 focus:outline-none focus:border-[#C8A96A]/50 focus:bg-[#1C1C1C] transition-all duration-300`;

  return (
    <section id="contact" className="section-padding bg-[#0C0C0C] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C8A96A]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-[#C8A96A] font-kanit font-light text-sm tracking-[0.35em] uppercase">
              Get In Touch
            </span>
          </FadeIn>
          <div className="mt-4">
            <AnimatedText
              text="Contact Us"
              className="font-kanit font-black text-5xl md:text-6xl text-[#D7E2EA] leading-tight"
              delay={0.1}
              mode="words"
            />
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[#8A9BAB] font-kanit font-light text-lg mt-6 max-w-xl mx-auto">
              Ready to start your marble project? Get in touch for a free consultation and custom quote.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <FadeIn key={info.label} delay={i * 0.1} direction="left">
                <motion.div
                  className="marble-card p-6 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#C8A96A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A96A]/20 transition-colors">
                      <info.icon size={18} className="text-[#C8A96A]" />
                    </div>
                    <div>
                      <div className="text-[#C8A96A] font-kanit font-light text-xs tracking-widest uppercase mb-2">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a href={info.href} className="block hover:text-[#C8A96A] transition-colors">
                          {info.lines.map((line, j) => (
                            <div key={j} className="text-[#D7E2EA] font-kanit font-light text-sm leading-relaxed">
                              {line}
                            </div>
                          ))}
                        </a>
                      ) : (
                        info.lines.map((line, j) => (
                          <div key={j} className="text-[#D7E2EA] font-kanit font-light text-sm leading-relaxed">
                            {line}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}

            {/* WhatsApp Button */}
            <FadeIn delay={0.4}>
              <motion.a
                href="https://wa.me/919829095295?text=Hello! I'm interested in marble products."                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-kanit font-semibold text-sm tracking-wider rounded-xl hover:bg-[#1fb359] transition-colors duration-300 shadow-lg shadow-[#25D366]/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </motion.a>
            </FadeIn>

            {/* Map placeholder */}
            <FadeIn delay={0.5}>
              <div className="rounded-2xl overflow-hidden gold-border h-48 bg-[#1C1C1C] flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(200,169,106,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.3) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="relative z-10 text-center">
                  <MapPin size={32} className="text-[#C8A96A] mx-auto mb-2" />
                  <div className="text-[#D7E2EA] font-kanit font-medium text-sm">Kishangarh, Rajasthan</div>
                  <div className="text-[#8A9BAB] font-kanit font-light text-xs mt-1">India's Marble Capital</div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#C8A96A] font-kanit font-medium text-xs border border-[#C8A96A]/30 px-4 py-1.5 rounded-full hover:border-[#C8A96A]/60 transition-colors"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Contact Form */}
          <FadeIn delay={0.2} direction="right" className="lg:col-span-3">
            <div className="marble-card p-8">
              <h3 className="font-kanit font-bold text-2xl text-[#D7E2EA] mb-2">Request a Quote</h3>
              <p className="text-[#8A9BAB] font-kanit font-light text-sm mb-8">
                Fill in the details below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C8A96A]/10 flex items-center justify-center">
                    <CheckCircle size={32} className="text-[#C8A96A]" />
                  </div>
                  <div className="text-[#D7E2EA] font-kanit font-bold text-xl text-center">
                    Message Received!
                  </div>
                  <div className="text-[#8A9BAB] font-kanit font-light text-sm text-center max-w-sm">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#8A9BAB] font-kanit font-light text-xs tracking-widest uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-[#8A9BAB] font-kanit font-light text-xs tracking-widest uppercase mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#8A9BAB] font-kanit font-light text-xs tracking-widest uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className="block text-[#8A9BAB] font-kanit font-light text-xs tracking-widest uppercase mb-2">
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClasses} cursor-pointer`}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="marble">Premium Marble Supply</option>
                      <option value="granite">Granite Supply</option>
                      <option value="statue">Marble Statue / Temple</option>
                      <option value="flooring">Flooring & Installation</option>
                      <option value="countertop">Kitchen Countertop</option>
                      <option value="custom">Custom Stone Work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#8A9BAB] font-kanit font-light text-xs tracking-widest uppercase mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project — area size, stone type preference, budget, timeline..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-[#C8A96A] text-[#0C0C0C] font-kanit font-bold text-sm tracking-wider rounded-xl hover:bg-[#E2C98A] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#C8A96A]/25"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={16} />
                    Send Quote Request
                  </motion.button>

                  <p className="text-[#8A9BAB] font-kanit font-light text-xs text-center">
                    We respond within 24 hours. Your information is kept private.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
