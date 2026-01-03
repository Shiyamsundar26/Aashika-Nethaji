import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { AboutFounder } from './components/AboutFounder';
import { Consulting } from './components/Consulting';
import { Aaruchudar } from './components/Aaruchudar';
import { Impact } from './components/Impact';
import { Journey } from './components/Journey';
import { Expertise } from './components/Expertise';
import { Tools } from './components/Tools';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Modal } from './components/Modal';
import './styles/globals.css';

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative bg-[#0a0a1a] text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-900/20 to-indigo-900/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation scrollToSection={scrollToSection} />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <AboutFounder 
          scrollToSection={scrollToSection} 
          openModal={setActiveModal}
        />
        <Consulting 
          openModal={setActiveModal}
          scrollToSection={scrollToSection}
        />
        <Aaruchudar openModal={setActiveModal} scrollToSection={scrollToSection} />
        <Impact openModal={setActiveModal} />
        <Journey openModal={setActiveModal} />
        <Expertise openModal={setActiveModal} />
        <Tools openModal={setActiveModal} />
        <Philosophy openModal={setActiveModal} />
        <Contact />
      </main>

      {/* Modals */}
      <Modal 
        isOpen={activeModal !== null} 
        onClose={() => setActiveModal(null)}
        modalType={activeModal}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-delayed" />
      </div>
    </div>
  );
}