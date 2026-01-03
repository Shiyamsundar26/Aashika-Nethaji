import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/34ac6e62e7b86639352eb238fda03e6c0e5e6cd2.png';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Founder', id: 'about' },
    { label: 'Consulting', id: 'consulting' },
    { label: 'Aaruchudar', id: 'aaruchudar', external: 'https://www.aaruchudar.com' },
    { label: 'Impact', id: 'impact' },
    { label: 'Journey', id: 'journey' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string, external?: string) => {
    if (external) {
      window.open(external, '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0a1a]/80 backdrop-blur-xl shadow-2xl shadow-indigo-900/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-serif tracking-wider bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Aashika Nethaji
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.external)}
                  className="relative group px-4 py-2 text-sm tracking-wide"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  {item.external && (
                    <span className="ml-1 text-xs text-indigo-400">↗</span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-[#0a0a1a]/95 backdrop-blur-xl z-50 lg:hidden border-l border-indigo-500/20"
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-serif bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Menu
            </span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.external)}
                className="group relative px-6 py-4 text-left rounded-xl overflow-hidden"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-lg text-gray-300 group-hover:text-white transition-colors">
                  {item.label}
                  {item.external && <span className="ml-2 text-sm text-indigo-400">↗</span>}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}