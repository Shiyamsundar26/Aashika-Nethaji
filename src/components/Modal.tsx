import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ExternalLink } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: string | null;
}

export function Modal({ isOpen, onClose, modalType }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getModalContent = () => {
    switch (modalType) {
      case 'experience':
        return {
          title: '6+ Years of Strategic Excellence',
          content: (
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Over six years of transformational leadership across high-growth industries including SaaS, Healthcare, EdTech, and Technology sectors.
              </p>
              <div className="space-y-4">
                <h4 className="text-xl text-white">Key Domains:</h4>
                <ul className="space-y-3">
                  {[
                    'Strategic Growth Planning & Market Expansion',
                    'Brand Development & Employer Branding Excellence',
                    'Talent Intelligence & Workforce Strategy',
                    'Cross-functional Team Leadership (0 to 100+ members)',
                    'Healthcare SaaS Operations & Compliance',
                    'Global Hiring & International Markets',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ),
        };

      case 'team':
        return {
          title: 'Building High-Performance Teams',
          content: (
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Proven expertise in building, scaling, and leading cross-functional teams from ground zero to over 100 members with exceptional performance metrics.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl">
                  <h4 className="text-2xl text-indigo-300 mb-2">100+</h4>
                  <p className="text-gray-400">Team members built and managed</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl">
                  <h4 className="text-2xl text-purple-300 mb-2">40%</h4>
                  <p className="text-gray-400">Improvement in team efficiency</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Full-cycle team development from hiring to leadership',
                  'Cross-functional collaboration across departments',
                  'Remote and hybrid team management',
                  'Performance optimization and KPI tracking',
                  'Cultural development and employee engagement',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        };

      case 'leadership':
        return {
          title: 'Data-Driven Leadership',
          content: (
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Strategic decision-making powered by analytics, aligning people, systems, and business outcomes for sustainable growth.
              </p>
              <div className="space-y-4">
                <h4 className="text-xl text-white">Leadership Approach:</h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: 'Strategic Alignment', desc: 'Connecting talent strategy with business objectives' },
                    { title: 'Data Analytics', desc: 'Leveraging metrics for informed decision-making' },
                    { title: 'System Optimization', desc: 'Building scalable processes and frameworks' },
                    { title: 'Stakeholder Management', desc: 'Direct reporting to C-suite executives' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg">
                      <h5 className="text-white mb-2">{item.title}</h5>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        };

      case 'framework':
        return {
          title: 'Aaruchudar Framework',
          content: (
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                A comprehensive Human Intelligence ecosystem designed to empower thinking clarity, neural activation, and conscious learning without AI dependency.
              </p>
              <div className="space-y-4">
                <h4 className="text-xl text-white">Framework Pillars:</h4>
                <div className="space-y-3">
                  {[
                    { title: 'Cognitive Clarity', desc: 'Strengthening mental frameworks for clear thinking' },
                    { title: 'Neural Activation', desc: 'Engaging brain pathways through active learning' },
                    { title: 'Conscious Learning', desc: 'Mindful education without technological crutches' },
                    { title: 'Thinking-First Approach', desc: 'Problem-solving through human intelligence' },
                    { title: 'Academic Integration', desc: '100+ college partnerships for student empowerment' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl">
                      <h5 className="text-white mb-2">{item.title}</h5>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        };

      case 'resume':
        return {
          title: 'Full Professional Resume',
          content: (
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Complete professional experience, achievements, and competencies across strategic growth, branding, and talent leadership.
              </p>
              <div className="p-8 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl text-center">
                <h4 className="text-2xl text-white mb-4">Download Resume</h4>
                <p className="text-gray-400 mb-6">
                  Comprehensive CV including detailed experience, achievements, skills, and references
                </p>
                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => alert('Resume download would be implemented here')}
                >
                  <Download className="w-5 h-5" />
                  Download Full Resume (PDF)
                </motion.button>
              </div>
              <div className="text-sm text-gray-500 text-center">
                For partnership inquiries, please contact: ashika221997@gmail.com
              </div>
            </div>
          ),
        };

      case 'colleges':
        return {
          title: '100+ College Partnerships',
          content: (
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Strategic partnerships with over 100 colleges and universities across India, empowering students with Human Intelligence frameworks and career readiness.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: '100+', label: 'College Partners' },
                  { metric: '10,000+', label: 'Students Impacted' },
                  { metric: '50+', label: 'Cities Covered' },
                  { metric: '95%', label: 'Satisfaction Rate' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl text-center">
                    <div className="text-3xl bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-2">
                      {item.metric}
                    </div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ),
        };

      default:
        return {
          title: 'Learn More',
          content: (
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                This section contains detailed information about Aashika Nethaji's professional journey, achievements, and strategic leadership philosophy.
              </p>
              <div className="p-6 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl">
                <p className="text-gray-400">
                  For more information, please reach out via email or LinkedIn to discuss collaboration opportunities, speaking engagements, or strategic partnerships.
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <motion.a
                  href="mailto:ashika221997@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact via Email
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          ),
        };
    }
  };

  const content = getModalContent();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              <div className="relative rounded-3xl overflow-hidden">
                {/* Glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] to-[#1a1a2e] backdrop-blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl" />

                {/* Gradient accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 blur-3xl" />

                <div className="relative z-10 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                  {/* Close button */}
                  <motion.button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-serif mb-8 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent pr-12">
                    {content.title}
                  </h3>

                  {/* Content */}
                  <div>{content.content}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
