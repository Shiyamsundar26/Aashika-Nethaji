import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Quote } from 'lucide-react';

interface PhilosophyProps {
  openModal: (modal: string) => void;
}

export function Philosophy({ openModal }: PhilosophyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const philosophies = [
    {
      quote: "Technology should assist thinking, not replace it.",
      context: "Human Intelligence First",
      description: "In an age of AI dependency, true leadership comes from enhancing human cognitive capacity, not outsourcing it.",
      color: 'from-indigo-500 to-blue-500',
      detail: 'tech-philosophy'
    },
    {
      quote: "Clarity is the highest form of intelligence.",
      context: "Conscious Leadership",
      description: "Clear thinking drives better decisions. Mental clarity is not a luxury—it's the foundation of strategic excellence.",
      color: 'from-purple-500 to-pink-500',
      detail: 'clarity-philosophy'
    },
    {
      quote: "Build systems that empower people, not control them.",
      context: "Human-Centric Systems",
      description: "Technology and processes should liberate human potential, enabling creativity and strategic thought.",
      color: 'from-cyan-500 to-teal-500',
      detail: 'systems-philosophy'
    },
    {
      quote: "Growth is not just about scaling—it's about sustainable impact.",
      context: "Strategic Growth",
      description: "True success is measured not by rapid expansion, but by lasting value creation and meaningful transformation.",
      color: 'from-amber-500 to-orange-500',
      detail: 'growth-philosophy'
    },
  ];

  return (
    <section id="philosophy" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Parallax backgrounds */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Leadership Philosophy
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Core principles that guide strategic thinking, decision-making, and transformational leadership
          </p>
        </motion.div>

        <div className="space-y-16">
          {philosophies.map((philosophy, index) => (
            <motion.button
              key={index}
              onClick={() => openModal(philosophy.detail)}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative w-full"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative p-10 md:p-12 rounded-3xl overflow-hidden text-left">
                {/* Glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl" />
                
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${philosophy.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${philosophy.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Quote icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${philosophy.color} mb-8 shadow-xl`}
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Quote */}
                  <blockquote className="mb-6">
                    <p className="text-3xl md:text-4xl font-serif text-white leading-relaxed group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                      "{philosophy.quote}"
                    </p>
                  </blockquote>

                  {/* Context */}
                  <div className={`inline-block px-6 py-2 mb-6 rounded-full bg-gradient-to-r ${philosophy.color} bg-opacity-20 border border-white/20`}>
                    <span className={`text-sm bg-gradient-to-r ${philosophy.color} bg-clip-text text-transparent`}>
                      {philosophy.context}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed max-w-4xl mb-6">
                    {philosophy.description}
                  </p>

                  {/* Click indicator */}
                  <motion.div
                    className="text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span>Explore this philosophy in depth</span>
                    <span>→</span>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${philosophy.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}
                />
                <motion.div
                  className={`absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr ${philosophy.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}
                />

                {/* Animated border accent */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)`,
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: 'Integrity', icon: '🎯' },
            { value: 'Innovation', icon: '💡' },
            { value: 'Impact', icon: '⚡' },
            { value: 'Intelligence', icon: '🧠' },
          ].map((item, index) => (
            <motion.button
              key={index}
              onClick={() => openModal('core-values')}
              className="group p-6 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl hover:border-indigo-500/50 transition-all text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                {item.value}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => openModal('manifesto')}
            className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-lg text-indigo-300 group-hover:text-white transition-colors">
              Read Full Leadership Manifesto →
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}