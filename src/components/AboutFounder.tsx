import React from 'react';
import { motion } from 'motion/react';
import { Users, TrendingUp, Target, Brain, Award, Globe, Sparkles } from 'lucide-react';
import profileImage from 'figma:asset/4b80bd29b897c1911dba186e1bc13b4c6e79c0f0.png';

interface AboutFounderProps {
  scrollToSection: (id: string) => void;
  openModal: (modal: string) => void;
}

export function AboutFounder({ scrollToSection, openModal }: AboutFounderProps) {
  const cards = [
    {
      icon: TrendingUp,
      title: '6+ Years Experience',
      description: 'Growth Strategy, Branding, and Talent Intelligence across SaaS, Healthcare, EdTech, and Technology',
      color: 'from-indigo-500 to-blue-500',
      detail: 'experience'
    },
    {
      icon: Users,
      title: 'Team Builder',
      description: 'Built and led cross-functional teams from 0 to 100+ members with excellence',
      color: 'from-purple-500 to-pink-500',
      detail: 'team'
    },
    {
      icon: Target,
      title: 'Data-Driven Leader',
      description: 'Aligning people, systems, and business outcomes through strategic insights',
      color: 'from-amber-500 to-orange-500',
      detail: 'leadership'
    },
    {
      icon: Brain,
      title: 'Strategic Thinker',
      description: 'Expert in workforce planning, employer branding, and digital transformation',
      color: 'from-cyan-500 to-teal-500',
      detail: 'strategy'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Proven track record in improving efficiency by 40% and reducing costs by 30%',
      color: 'from-rose-500 to-red-500',
      detail: 'achievements'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Experience across USA, APAC, LATAM, and Canada markets',
      color: 'from-violet-500 to-purple-500',
      detail: 'global'
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Enhanced Profile Picture with 3D Effects */}
          <div className="mb-12">
            <motion.div
              className="relative inline-block"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
            >
              {/* Outer Glow Rings */}
              <motion.div
                className="absolute inset-0 -m-8"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 blur-sm" />
                <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 blur-md transform rotate-45" />
                <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 blur-lg transform rotate-90" />
              </motion.div>

              {/* Orbiting Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`orbit-${i}`}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((i / 6) * Math.PI * 2) * 140,
                    y: Math.sin((i / 6) * Math.PI * 2) * 140,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.5,
                  }}
                >
                  <motion.div
                    className={`w-3 h-3 rounded-full ${
                      i % 3 === 0 ? 'bg-indigo-400' :
                      i % 3 === 1 ? 'bg-purple-400' :
                      'bg-amber-400'
                    } shadow-lg`}
                    animate={{
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        '0 0 10px rgba(99, 102, 241, 0.5)',
                        '0 0 30px rgba(139, 92, 246, 0.8)',
                        '0 0 10px rgba(99, 102, 241, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                </motion.div>
              ))}

              {/* Main Profile Picture */}
              <motion.div
                className="relative w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 15,
                  rotateX: 5,
                }}
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(99, 102, 241, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)',
                    '0 0 60px rgba(139, 92, 246, 0.8), 0 0 100px rgba(251, 191, 36, 0.5)',
                    '0 0 40px rgba(99, 102, 241, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)',
                  ],
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300,
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                  }
                }}
              >
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 mix-blend-overlay"
                  style={{
                    background: 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.2), transparent, rgba(251, 191, 36, 0.2))',
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                
                <img 
                  src={profileImage} 
                  alt="Aashika Nethaji" 
                  className="w-full h-full object-cover relative z-10"
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: [-280, 280],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  style={{
                    transform: 'skewX(-20deg)',
                  }}
                />
              </motion.div>

              {/* Sparkle Badge */}
              <motion.div
                className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-amber-600 p-3 rounded-full shadow-lg"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.3, rotate: 360 }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>

              {/* Bottom Glow */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 blur-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            About the Founder
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A visionary leader transforming organizations through strategic growth, innovative branding, and human-centric intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.button
              key={index}
              onClick={() => openModal(card.detail)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl overflow-hidden text-left"
              style={{
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                rotateX: 5,
                z: 50,
              }}
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl" />
              
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.color} mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                  {card.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {card.description}
                </p>

                {/* Click indicator */}
                <motion.div
                  className="mt-6 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Click to learn more →
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={() => scrollToSection('philosophy')}
            className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-lg text-indigo-300 group-hover:text-white transition-colors">
              View Leadership Philosophy →
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}