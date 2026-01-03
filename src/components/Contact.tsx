import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink, Sparkles } from 'lucide-react';

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ashika221997@gmail.com',
      href: 'mailto:ashika221997@gmail.com',
      color: 'from-indigo-500 to-blue-500',
      description: 'Get in touch for collaborations, partnerships, or opportunities'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aashika-n',
      href: 'https://linkedin.com/in/aashika-n',
      color: 'from-purple-500 to-pink-500',
      description: 'Connect professionally and explore my career journey'
    },
    {
      icon: Sparkles,
      label: 'Aaruchudar',
      value: 'Official Brand Page',
      href: '#aaruchudar',
      color: 'from-amber-500 to-orange-500',
      description: 'Learn about the Human Intelligence ecosystem'
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Open to strategic partnerships, board positions, speaking engagements, and collaborative opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative block"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative p-8 rounded-2xl overflow-hidden h-full">
                {/* Glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl" />
                
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${contact.color} mb-6 shadow-xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-2xl text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                    {contact.label}
                  </h3>

                  {/* Value */}
                  <div className={`text-sm bg-gradient-to-r ${contact.color} bg-clip-text text-transparent mb-4`}>
                    {contact.value}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-4">
                    {contact.description}
                  </p>

                  {/* External link indicator */}
                  {contact.href.startsWith('http') && (
                    <motion.div
                      className="inline-flex items-center gap-2 text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      <span>Open link</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.div>
                  )}
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${contact.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block p-12 rounded-3xl overflow-hidden">
            {/* Glass background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl" />
            
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-serif mb-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Ready to Transform Your Organization?
              </h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Let's discuss how strategic growth, human intelligence frameworks, and transformational leadership can drive your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:ashika221997@gmail.com"
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-xl shadow-indigo-500/30"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 50px rgba(99, 102, 241, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative text-white flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Start a Conversation
                  </span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/aashika-n"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 mb-4">
            © 2026 Aashika Nethaji. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            CEO & Founder, Aaruchudar | Building Human Intelligence Ecosystems
          </p>
        </motion.div>
      </div>
    </section>
  );
}