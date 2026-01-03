import React from 'react';
import { motion } from 'motion/react';
import { Database, Wrench, Cpu, BarChart } from 'lucide-react';

interface ToolsProps {
  openModal: (modal: string) => void;
}

export function Tools({ openModal }: ToolsProps) {
  const toolCategories = [
    {
      icon: Database,
      category: 'ATS Platforms',
      color: 'from-indigo-500 to-blue-500',
      tools: [
        { name: 'Greenhouse', proficiency: 95 },
        { name: 'Zoho Recruit', proficiency: 90 },
        { name: 'Workable', proficiency: 88 },
        { name: 'Job Diva', proficiency: 85 },
      ],
      detail: 'ats'
    },
    {
      icon: Wrench,
      category: 'Productivity Tools',
      color: 'from-purple-500 to-pink-500',
      tools: [
        { name: 'Google Workspace', proficiency: 98 },
        { name: 'Microsoft Office', proficiency: 95 },
        { name: 'Canva', proficiency: 92 },
        { name: 'Visme', proficiency: 88 },
      ],
      detail: 'productivity'
    },
    {
      icon: Cpu,
      category: 'AI & Automation',
      color: 'from-cyan-500 to-teal-500',
      tools: [
        { name: 'Workflow Automation', proficiency: 90 },
        { name: 'AI Integration', proficiency: 87 },
        { name: 'Process Optimization', proficiency: 93 },
        { name: 'ChatGPT API', proficiency: 85 },
      ],
      detail: 'ai-automation'
    },
    {
      icon: BarChart,
      category: 'Analytics & Reporting',
      color: 'from-amber-500 to-orange-500',
      tools: [
        { name: 'Data Analytics', proficiency: 92 },
        { name: 'Hiring Metrics', proficiency: 95 },
        { name: 'Performance Dashboards', proficiency: 90 },
        { name: 'Strategic Insights', proficiency: 93 },
      ],
      detail: 'analytics'
    },
  ];

  return (
    <section id="tools" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging cutting-edge platforms and technologies to drive efficiency and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => openModal(category.detail)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative p-8 rounded-2xl overflow-hidden text-left">
                {/* Glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl" />
                
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <category.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                      {category.category}
                    </h3>
                  </div>

                  {/* Tools with proficiency bars */}
                  <div className="space-y-6">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={toolIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (toolIndex * 0.05) }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {tool.name}
                          </span>
                          <span className={`text-sm bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {tool.proficiency}%
                          </span>
                        </div>
                        
                        {/* Proficiency bar */}
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tool.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (index * 0.1) + (toolIndex * 0.05) + 0.3 }}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ['-100%', '200%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: toolIndex * 0.3,
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Click indicator */}
                  <motion.div
                    className="mt-6 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Click to view detailed expertise →
                  </motion.div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl text-center text-gray-300 mb-8">Tech Stack & Methodologies</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Agile Methodologies',
              'Data-Driven Decision Making',
              'Remote Team Management',
              'Cross-Functional Leadership',
              'Strategic Planning',
              'KPI Development',
              'Process Optimization',
              'Change Management',
              'Stakeholder Management',
              'Vendor Relations',
            ].map((tech, index) => (
              <motion.button
                key={index}
                onClick={() => openModal('methodologies')}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group px-6 py-3 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-full hover:border-indigo-500/50 transition-all"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
                }}
              >
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {tech}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
