import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Lightbulb, Users, Building2, GraduationCap, Target, Briefcase, TrendingUp, BookOpen, Sparkles, ChevronRight } from 'lucide-react';

interface ConsultingProps {
  openModal: (modal: string) => void;
  scrollToSection: (id: string) => void;
}

export function Consulting({ openModal, scrollToSection }: ConsultingProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const clientTypes = [
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Strategic branding & HI curriculum design',
      color: 'from-indigo-500 to-blue-500',
      detail: 'institutions'
    },
    {
      icon: Briefcase,
      title: 'Startup Founders & CEOs',
      description: 'Personal branding & strategic positioning',
      color: 'from-purple-500 to-pink-500',
      detail: 'founders'
    },
    {
      icon: Building2,
      title: 'Corporate Teams',
      description: 'Employer branding & talent frameworks',
      color: 'from-amber-500 to-orange-500',
      detail: 'corporate'
    },
    {
      icon: Users,
      title: 'Students & Young Leaders',
      description: 'Thinking frameworks & self-leadership',
      color: 'from-cyan-500 to-teal-500',
      detail: 'students'
    },
  ];

  const hiLabs = [
    {
      title: 'HI Labs',
      description: 'Innovation centers for human intelligence research',
      action: () => openModal('hi-labs')
    },
    {
      title: 'Thinking Without AI Dependency',
      description: 'Building neural clarity before tool dependency',
      action: () => openModal('no-ai-dependency')
    },
    {
      title: 'Clarity as Culture',
      description: 'Organizational thinking transformation',
      action: () => scrollToSection('philosophy')
    },
  ];

  const impactMetrics = [
    { value: 'Enhanced Clarity', desc: 'in leadership communication', detail: 'clarity-impact' },
    { value: 'Stronger Identity', desc: 'brand positioning & storytelling', detail: 'brand-impact' },
    { value: 'Improved Thinking', desc: 'frameworks in learners', detail: 'thinking-impact' },
    { value: 'Mindset Transformation', desc: 'long-term cognitive shift', detail: 'mindset-impact' },
  ];

  return (
    <section id="consulting" className="relative py-32 px-6 overflow-hidden">
      {/* Neural Pathway Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={`neuron-${i}`}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="2"
              fill="#6366f1"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={`synapse-${i}`}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="#8b5cf6"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
            style={{
              left: `${(i * 15) % 100}%`,
              top: `${(i * 25) % 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title - Clickable */}
        <motion.button
          onClick={() => openModal('consulting-overview')}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group w-full text-center mb-20 cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(99, 102, 241, 0.3)',
                '0 0 40px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(99, 102, 241, 0.3)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-amber-400" />
            <h2 className="text-5xl md:text-7xl font-serif bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Consultant in Branding & Human Intelligence
            </h2>
            <Sparkles className="w-8 h-8 text-amber-400" />
          </motion.div>
          
          <p className="text-2xl text-gray-400 mb-3">
            Shaping Thought, Identity, and Intelligence for the Future
          </p>
          
          <motion.div
            className="inline-flex items-center gap-2 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm">Click to view full post</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.button>

        {/* Role Overview - Expandable Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.button
            onClick={() => setExpandedCard(expandedCard === 'overview' ? null : 'overview')}
            className="w-full group relative p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden text-left"
            whileHover={{ scale: 1.02, borderColor: '#6366f1' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl text-white">Role Overview</h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedCard === 'overview' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-6 h-6 text-indigo-400" />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: expandedCard === 'overview' ? 'auto' : '60px',
                  opacity: expandedCard === 'overview' ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  As a strategic consultant, Aashika partners with individuals, institutions, and organizations to build clarity-driven brand identities and develop Human Intelligence frameworks that transcend AI dependency.
                </p>
                
                {expandedCard === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 mt-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2" />
                      <p className="text-gray-400">Strategic consultant for personal, institutional, and organizational branding</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                      <p className="text-gray-400">Mentor and educator in Human Intelligence (HI) frameworks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                      <p className="text-gray-400">Guide for building clarity-driven thinking systems beyond AI dependency</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                className="mt-4 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                {expandedCard === 'overview' ? 'Click to collapse' : 'Click to expand full description →'}
              </motion.div>
            </div>
          </motion.button>
        </motion.div>

        {/* Branding Consulting - Interactive Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative p-10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-indigo-500/30 rounded-3xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  className="p-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl text-white">Branding Consulting</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Brand Identity Building', desc: 'Aligned with values and purpose' },
                  { title: 'Employer Branding', desc: 'Leadership positioning & talent attraction' },
                  { title: 'Strategic Storytelling', desc: 'For founders and institutions' },
                  { title: 'Vision Translation', desc: 'Into consistent brand systems' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl"
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: '#f59e0b',
                      boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    <h4 className="text-lg text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => openModal('branding-approach')}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(245, 158, 11, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white flex items-center gap-2">
                  View Branding Approach
                  <ChevronRight className="w-4 h-4" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Teaching Human Intelligence - 3D Node Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Lightbulb className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-4xl font-serif text-white">Teaching Human Intelligence</h3>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Activating thinking ability, neural clarity, and conscious learning for students, professionals, and leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {hiLabs.map((node, index) => (
              <motion.button
                key={index}
                onClick={node.action}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-2xl" />
                
                {/* Card */}
                <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl">
                  <h4 className="text-xl text-white mb-3">{node.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{node.description}</p>
                  
                  <motion.div
                    className="text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-500 rounded-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.button>
            ))}
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-2xl">
            <h4 className="text-xl text-white mb-4">Core Focus Areas</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Teaching students to think independently without ChatGPT dependency',
                'Human Intelligence Labs for students, professionals, and leaders',
                'Conscious learning, decision-making, and self-awareness',
                'Activating neural pathways before technological assistance',
              ].map((focus, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-400">{focus}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Who She Consults For - Clickable Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-serif text-center text-white mb-12">
            Who She Consults For
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <motion.button
                key={index}
                onClick={() => openModal(client.detail)}
                className="group relative p-8 rounded-2xl overflow-hidden text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl" />
                
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${client.color} mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <client.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h4 className="text-xl text-white mb-3">{client.title}</h4>
                  <p className="text-sm text-gray-400 mb-4">{client.description}</p>

                  <motion.div
                    className="text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span>View use cases</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Impact & Outcomes - Animated Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-serif text-center text-white mb-12">
            Impact & Outcomes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.button
                key={index}
                onClick={() => openModal(metric.detail)}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: '#6366f1',
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-3xl text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text mb-3"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {metric.value}
                  </motion.div>
                  <p className="text-sm text-gray-400">{metric.desc}</p>

                  <motion.div
                    className="mt-4 text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    View case highlight →
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-12 bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/30 rounded-3xl">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <h4 className="text-3xl font-serif text-white mb-4">
                A consultant who doesn't just build brands
              </h4>
              <p className="text-2xl text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text mb-8">
                She builds thinking.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white flex items-center gap-2">
                  Get in Touch
                  <ChevronRight className="w-4 h-4" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('journey')}
                className="group relative px-8 py-4 bg-transparent border-2 border-indigo-500/50 rounded-xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: '#6366f1',
                  boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-indigo-300 group-hover:text-white transition-colors flex items-center gap-2">
                  View Career Journey
                  <ChevronRight className="w-4 h-4" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
