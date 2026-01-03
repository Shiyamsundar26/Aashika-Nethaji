import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sparkles, Activity, Users, GraduationCap, Zap } from 'lucide-react';

interface ExpertiseProps {
  openModal: (modal: string) => void;
}

export function Expertise({ openModal }: ExpertiseProps) {
  const skills = [
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      subtitle: 'Market Expansion',
      description: 'Strategic planning, market analysis, and scalable growth frameworks',
      color: 'from-indigo-500 to-blue-500',
      detail: 'growth-strategy'
    },
    {
      icon: Sparkles,
      title: 'Branding',
      subtitle: 'Employer Branding',
      description: 'Brand positioning, employer value proposition, and digital presence',
      color: 'from-purple-500 to-pink-500',
      detail: 'branding'
    },
    {
      icon: Activity,
      title: 'SaaS & Healthcare',
      subtitle: 'Operations',
      description: 'Healthcare SaaS verticals, compliance, and operational excellence',
      color: 'from-cyan-500 to-teal-500',
      detail: 'saas-healthcare'
    },
    {
      icon: Users,
      title: 'Talent Acquisition',
      subtitle: 'Workforce Strategy',
      description: 'Full-cycle recruitment, talent pipelines, and workforce planning',
      color: 'from-amber-500 to-orange-500',
      detail: 'talent'
    },
    {
      icon: GraduationCap,
      title: 'Academic Partnerships',
      subtitle: 'Industry Collaboration',
      description: '100+ college partnerships, curriculum development, and placement',
      color: 'from-rose-500 to-red-500',
      detail: 'partnerships'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      subtitle: 'Automation',
      description: 'Workflow optimization, AI integration, and process automation',
      color: 'from-violet-500 to-purple-500',
      detail: 'transformation'
    },
  ];

  return (
    <section id="expertise" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Core Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic competencies spanning growth, branding, technology, and human capital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.button
              key={index}
              onClick={() => openModal(skill.detail)}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              style={{ perspective: '1000px' }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50,
              }}
            >
              <div className="relative p-8 rounded-2xl overflow-hidden h-full" style={{ transformStyle: 'preserve-3d' }}>
                {/* Glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl" />
                
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon container */}
                  <motion.div
                    className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} mb-6 shadow-lg overflow-hidden`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className="w-8 h-8 text-white relative z-10" />
                    
                    {/* Icon glow */}
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                    {skill.title}
                  </h3>

                  {/* Subtitle */}
                  <div className={`text-sm bg-gradient-to-r ${skill.color} bg-clip-text text-transparent mb-4`}>
                    {skill.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-6">
                    {skill.description}
                  </p>

                  {/* Click indicator */}
                  <motion.div
                    className="text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span>Explore case studies</span>
                    <span>→</span>
                  </motion.div>
                </div>

                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{
                      top: `${20 + i * 25}%`,
                      right: `${10 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}

                {/* Corner accent */}
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${skill.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Strategic', count: 'Leadership' },
            { label: 'Operational', count: 'Excellence' },
            { label: 'Analytical', count: 'Insights' },
            { label: 'Interpersonal', count: 'Impact' },
          ].map((category, index) => (
            <motion.button
              key={index}
              onClick={() => openModal('skill-categories')}
              className="group p-6 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl hover:border-indigo-500/50 transition-all text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
              }}
            >
              <div className="text-sm text-indigo-400 mb-2">{category.label}</div>
              <div className="text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                {category.count}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
