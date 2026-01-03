import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Brain, Lightbulb, GraduationCap, Network, Sparkles, Users } from 'lucide-react';
import logo from 'figma:asset/34ac6e62e7b86639352eb238fda03e6c0e5e6cd2.png';

interface AaruchudarProps {
  openModal: (modal: string) => void;
  scrollToSection: (id: string) => void;
}

export function Aaruchudar({ openModal, scrollToSection }: AaruchudarProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Orbital radius for perfect circle
  const orbitalRadius = 280;
  
  // Calculate positions for perfect hexagonal layout (clockwise from top)
  const nodes = [
    {
      icon: Brain,
      title: 'Human Intelligence',
      description: 'Prioritizing HI over AI dependency',
      angle: 270, // Top (12 o'clock)
      color: 'from-indigo-500 to-blue-500',
      action: 'hi-concept',
      zDepth: 0
    },
    {
      icon: Lightbulb,
      title: 'Thinking Clarity',
      description: 'Neural activation and conscious learning',
      angle: 330, // Top-right (2 o'clock)
      color: 'from-amber-500 to-orange-500',
      action: 'clarity',
      zDepth: 20
    },
    {
      icon: GraduationCap,
      title: 'Thinking-First Education',
      description: 'Learning without ChatGPT dependency',
      angle: 30, // Bottom-right (4 o'clock)
      color: 'from-purple-500 to-pink-500',
      action: 'education',
      zDepth: 10
    },
    {
      icon: Network,
      title: 'HI Labs',
      description: 'Innovation and research centers',
      angle: 90, // Bottom (6 o'clock)
      color: 'from-cyan-500 to-teal-500',
      action: 'labs',
      zDepth: 30
    },
    {
      icon: Users,
      title: 'Student Empowerment',
      description: '100+ colleges & universities',
      angle: 150, // Bottom-left (8 o'clock)
      color: 'from-rose-500 to-red-500',
      action: 'empowerment',
      zDepth: 15
    },
    {
      icon: Sparkles,
      title: 'Clarity as Culture',
      description: 'Building conscious thinking ecosystems',
      angle: 210, // Top-left (10 o'clock)
      color: 'from-violet-500 to-purple-500',
      action: 'culture',
      zDepth: 25
    },
  ].map(node => {
    // Convert angle to radians and calculate position
    const radians = (node.angle * Math.PI) / 180;
    const x = Math.cos(radians) * orbitalRadius;
    const y = Math.sin(radians) * orbitalRadius;
    
    return {
      ...node,
      position: { x, y }
    };
  });

  return (
    <section 
      id="aaruchudar" 
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#1e1b4b33] via-[#3b076433] to-transparent"
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img 
              src={logo} 
              alt="Aaruchudar Logo" 
              className="w-32 h-32 mx-auto object-contain"
            />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Aaruchudar
          </h2>
          <p className="text-2xl text-gray-400 mb-4">
            Human Intelligence Ecosystem
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Empowering students and professionals to think clearly, learn consciously, and lead without artificial dependency
          </p>
        </motion.div>

        {/* Neural Network Orbital Visualization - Shifted Right */}
        <div className="relative flex items-center justify-center min-h-[750px] mb-20 md:ml-[10%] lg:ml-[12%]">
          {/* Outer orbital ring glow */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full border border-indigo-500/10"
            animate={{
              boxShadow: [
                '0 0 20px rgba(99, 102, 241, 0.1)',
                '0 0 40px rgba(139, 92, 246, 0.2)',
                '0 0 20px rgba(99, 102, 241, 0.1)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />

          {/* Center Logo - Pulsing Core */}
          <motion.div
            className="absolute z-20 w-40 h-40 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-full flex items-center justify-center backdrop-blur-xl border-2 border-indigo-500/40"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{ 
              scale: [1, 1.08, 1],
              boxShadow: [
                '0 0 40px rgba(99, 102, 241, 0.4)',
                '0 0 80px rgba(139, 92, 246, 0.6)',
                '0 0 40px rgba(99, 102, 241, 0.4)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.img 
              src={logo} 
              alt="Aaruchudar Core" 
              className="w-24 h-24 object-contain"
              animate={{ 
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Connection Lines - Curved Neural Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            {nodes.map((node, index) => {
              const centerX = '50%';
              const centerY = '50%';
              
              // Create curved path instead of straight line
              const controlOffset = 40;
              const midX = node.position.x / 2;
              const midY = node.position.y / 2;
              
              return (
                <motion.path
                  key={index}
                  d={`M 50% 50% Q ${50 + midX / 10}% ${50 + midY / 10}%, calc(50% + ${node.position.x}px) calc(50% + ${node.position.y}px)`}
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: index * 0.15, ease: "easeInOut" }}
                />
              );
            })}
            <defs>
              {nodes.map((node, index) => (
                <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                </linearGradient>
              ))}
            </defs>
          </svg>

          {/* Orbital Nodes - Cards with 3D Depth */}
          {nodes.map((node, index) => {
            // Calculate subtle inward tilt based on angle
            const tiltX = -node.position.x / 40;
            const tiltY = -node.position.y / 40;
            
            return (
              <motion.button
                key={index}
                onClick={() => openModal(node.action)}
                className="group absolute"
                style={{
                  left: `calc(50% + ${node.position.x}px)`,
                  top: `calc(50% + ${node.position.y}px)`,
                  zIndex: 10 + node.zDepth,
                }}
                initial={{ opacity: 0, scale: 0, z: -100 }}
                whileInView={{ opacity: 1, scale: 1, z: node.zDepth }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15, 
                  zIndex: 50,
                  z: node.zDepth + 50,
                  rotateY: tiltX * 0.5,
                  rotateX: tiltY * 0.5,
                }}
              >
                <motion.div 
                  className="relative"
                  style={{
                    transform: `translate(-50%, -50%)`,
                    perspective: '1000px',
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Enhanced Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${node.color} opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-500 rounded-full scale-150`} />
                  
                  {/* Card with subtle 3D tilt */}
                  <motion.div 
                    className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-52 shadow-2xl"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <motion.div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${node.color} mb-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <node.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <h3 className="text-white mb-2">
                      {node.title}
                    </h3>
                    
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {node.description}
                    </p>

                    <motion.div 
                      className="mt-4 text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      Explore Concept →
                    </motion.div>
                  </motion.div>

                  {/* Animated pulse ring */}
                  <motion.div
                    className={`absolute inset-0 border-2 rounded-2xl`}
                    style={{
                      borderImage: `linear-gradient(135deg, ${node.color.replace('from-', '').replace(' to-', ', ')}) 1`,
                    }}
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  />
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Key Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { title: 'Think First', desc: 'Cognitive clarity before technological assistance' },
            { title: 'Learn Deeply', desc: 'Neural pathways strengthened through active thinking' },
            { title: 'Lead Consciously', desc: 'Human intelligence driving strategic decisions' },
          ].map((principle, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
              }}
            >
              <h4 className="text-xl text-white mb-3">{principle.title}</h4>
              <p className="text-gray-400">{principle.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={() => window.open('https://www.aaruchudar.com', '_blank', 'noopener,noreferrer')}
            className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-xl shadow-indigo-500/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 50px rgba(99, 102, 241, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-lg text-white flex items-center justify-center gap-2">
              Visit Aaruchudar Website
              <span className="text-xl">↗</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}