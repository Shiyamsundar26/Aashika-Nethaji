import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Building, Briefcase, MapPin } from 'lucide-react';

interface JourneyProps {
  openModal: (modal: string) => void;
}

export function Journey({ openModal }: JourneyProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const timeline = [
    {
      year: '2024 – Present',
      company: 'Vee Phoenix Compliance / Vivnovation / Doctor Alliance',
      role: 'Growth & Branding Lead',
      location: 'Healthcare SaaS',
      achievements: [
        'Built and led cross-functional teams of 100+ members',
        'Managed multiple SaaS Healthcare verticals: PG Groups, Home Health, Insurance, Compliance',
        'Direct reporting to CEO & COO on strategic initiatives',
        'Drove growth strategy and employer branding across healthcare domains',
        'Implemented data-driven talent acquisition frameworks'
      ],
      color: 'from-indigo-500 to-blue-500',
      icon: Building
    },
    {
      year: '2023 – 2024',
      company: 'DeepLogicTech (Tekmonks)',
      role: 'Global Talent & Growth Strategist',
      location: 'Global Markets',
      achievements: [
        'Led global hiring initiatives across USA, LATAM, and APAC regions',
        'Improved hiring efficiency by 40% through process optimization',
        'Developed strategic talent pipelines for technology roles',
        'Implemented employer branding strategies for global markets',
        'Built relationships with international recruitment partners'
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Briefcase
    },
    {
      year: '2022 – 2023',
      company: 'Turing | BYJU\'S | WhiteHat Jr',
      role: 'Senior Talent & Strategy Consultant',
      location: 'EdTech & SaaS',
      achievements: [
        'Reduced cost-per-hire by 30% through strategic sourcing',
        'Reduced time-to-fill by 25% with improved processes',
        'Managed high-volume recruitment for EdTech platforms',
        'Developed talent strategies for rapid scaling',
        'Implemented analytics-driven hiring decisions'
      ],
      color: 'from-cyan-500 to-teal-500',
      icon: Building
    },
    {
      year: '2020 – 2022',
      company: 'Magaduka Tech / Virtualmaze / Startup Ecosystem',
      role: 'Talent Acquisition & Employer Branding',
      location: 'Technology Startups',
      achievements: [
        'Full-cycle recruitment from sourcing to onboarding',
        'Built employer branding strategies from ground zero',
        'Implemented ATS systems and recruitment workflows',
        'Developed talent acquisition frameworks for startups',
        'Created scalable hiring processes for fast-growing teams'
      ],
      color: 'from-amber-500 to-orange-500',
      icon: Briefcase
    },
    {
      year: '2018 – 2020',
      company: 'Early Career & Foundation',
      role: 'Recruitment & Business Development',
      location: 'Multiple Industries',
      achievements: [
        'Gained diverse experience across SaaS, Healthcare, and Technology',
        'Developed core competencies in talent strategy',
        'Built foundational skills in growth and branding',
        'Established professional network across industries',
        'Learned data-driven decision-making approaches'
      ],
      color: 'from-rose-500 to-red-500',
      icon: MapPin
    },
  ];

  return (
    <section id="journey" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A trajectory of strategic growth, innovation, and transformational leadership across industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isExpanded = expandedIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} transform md:-translate-x-1/2 shadow-lg z-10`}
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color}`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>

                  {/* Content card */}
                  <motion.button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className={`group w-full md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-12 ml-12 md:ml-0' : 'md:ml-12 ml-12'} relative`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative p-8 rounded-2xl overflow-hidden text-left">
                      {/* Glass background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl" />
                      
                      {/* Gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.icon className="w-5 h-5 text-white" />
                        </motion.div>

                        {/* Year */}
                        <div className="text-sm text-indigo-400 mb-2">{item.year}</div>

                        {/* Company */}
                        <h3 className="text-2xl text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                          {item.company}
                        </h3>

                        {/* Role */}
                        <div className="text-lg text-gray-300 mb-2">{item.role}</div>

                        {/* Location */}
                        <div className="text-sm text-gray-500 mb-4">{item.location}</div>

                        {/* Expand/Collapse indicator */}
                        <div className="flex items-center gap-2 text-indigo-400">
                          <span className="text-sm">
                            {isExpanded ? 'View less' : 'View achievements'}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </div>

                        {/* Achievements */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-6 pt-6 border-t border-white/10"
                            >
                              <ul className="space-y-3">
                                {item.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 text-gray-400"
                                  >
                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`} />
                                    <span className="text-sm leading-relaxed">{achievement}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section - Removed */}
      </div>
    </section>
  );
}