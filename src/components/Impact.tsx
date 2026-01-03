import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Building2, Users, Globe, TrendingUp } from 'lucide-react';

interface ImpactProps {
  openModal: (modal: string) => void;
}

function Counter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
}

export function Impact({ openModal }: ImpactProps) {
  const metrics = [
    {
      icon: Building2,
      value: 100,
      suffix: '+',
      label: 'Colleges & Universities',
      description: 'Strategic partnerships across India empowering student thinking',
      color: 'from-indigo-500 to-blue-500',
      detail: 'colleges'
    },
    {
      icon: Users,
      value: 100,
      suffix: '+',
      label: 'Team Members Built',
      description: 'Led and managed cross-functional teams from ground zero',
      color: 'from-purple-500 to-pink-500',
      detail: 'team-building'
    },
    {
      icon: Globe,
      value: 4,
      suffix: ' Regions',
      label: 'Global Hiring',
      description: 'USA, APAC, LATAM, and Canada talent acquisition',
      color: 'from-cyan-500 to-teal-500',
      detail: 'global-reach'
    },
    {
      icon: TrendingUp,
      value: 40,
      suffix: '%',
      label: 'Efficiency Improvement',
      description: 'Enhanced hiring efficiency and operational excellence',
      color: 'from-amber-500 to-orange-500',
      detail: 'efficiency'
    },
  ];

  return (
    <section id="impact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Impact & Scale
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming organizations and empowering communities through strategic leadership and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.button
              key={index}
              onClick={() => openModal(metric.detail)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl overflow-hidden text-center"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl" />
              
              {/* Gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${metric.color} mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                >
                  <metric.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Counter */}
                <Counter end={metric.value} suffix={metric.suffix} />

                {/* Label */}
                <h3 className="text-xl text-white mt-4 mb-3">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {metric.description}
                </p>

                {/* Click indicator */}
                <motion.div
                  className="mt-4 text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Click for details →
                </motion.div>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(90deg, transparent, transparent)`,
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

              {/* Particle effects */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 bg-gradient-to-r ${metric.color} rounded-full`}
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.button>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { 
              stat: '30%', 
              label: 'Cost-per-hire Reduction',
              icon: '💰'
            },
            { 
              stat: '25%', 
              label: 'Time-to-fill Reduction',
              icon: '⚡'
            },
            { 
              stat: 'Multiple', 
              label: 'SaaS Healthcare Verticals',
              icon: '🏥'
            },
          ].map((item, index) => (
            <motion.button
              key={index}
              onClick={() => openModal('highlights')}
              className="group p-6 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl hover:border-indigo-500/50 transition-all"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
              }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-3xl bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-2">
                {item.stat}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {item.label}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
