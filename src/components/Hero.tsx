import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const deltaX = (clientX - centerX) / 50;
        const deltaY = (clientY - centerY) / 50;
        
        orbRef.current.style.transform = `translate(-50%, -50%) rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Animated Background */}
      
      {/* Floating 3D Cubes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`cube-${i}`}
            className="absolute w-20 h-20 border border-indigo-500/20 rounded-lg"
            style={{
              left: `${(i * 15) % 100}%`,
              top: `${(i * 25) % 100}%`,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 180],
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating Spheres */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sphere-${i}`}
            className="absolute rounded-full"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(99, 102, 241, 0.15)' :
                i % 3 === 1 ? 'rgba(139, 92, 246, 0.15)' :
                'rgba(251, 191, 36, 0.15)'
              }, transparent)`,
              left: `${20 + i * 15}%`,
              top: `${15 + i * 12}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), transparent, rgba(139, 92, 246, 0.1))',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Animated Background Orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          ref={orbRef}
          className="absolute w-96 h-96 rounded-full transition-transform duration-200 ease-out"
          style={{ 
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
            transformStyle: 'preserve-3d',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.3), transparent)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Orbiting particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-500/50"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                rotate: 360,
                x: Math.cos((i / 8) * Math.PI * 2) * 150,
                y: Math.sin((i / 8) * Math.PI * 2) * 150,
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      {/* Particle Grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-4 opacity-20">
        {[...Array(96)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="w-1 h-1 bg-indigo-400 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.05,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="block text-7xl md:text-8xl font-serif tracking-wider bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-4"
            style={{ 
              textShadow: '0 0 80px rgba(99, 102, 241, 0.3)',
              transform: 'translateZ(50px)',
            }}
          >
            Aashika Nethaji
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8 space-y-3"
        >
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
            CEO & Founder – Aaruchudar
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Growth & Strategy Leader | Branding & Talent Evangelist
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Building Human Intelligence ecosystems that empower thinking, clarity, and conscious learning
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('journey')}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-lg shadow-indigo-500/30"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99, 102, 241, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white tracking-wide">
              Explore Leadership Journey
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('aaruchudar')}
            className="group relative px-8 py-4 bg-transparent border-2 border-indigo-500/50 rounded-xl overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              borderColor: '#6366f1',
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-indigo-300 group-hover:text-white transition-colors tracking-wide">
              About Aaruchudar
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <div className="flex flex-col items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
            <span className="text-sm tracking-wider">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.button>
      </div>
    </section>
  );
}