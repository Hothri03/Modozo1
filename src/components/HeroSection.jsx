import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images from assets
import logoNew from '../assets/modozo logo new.png';
import techpackImg from '../assets/Techpack management1.png';
import approvalsImg from '../assets/Approvals1.png';
import vendorsImg from '../assets/Vendors1.png';
import samplesImg from '../assets/Sample1.png';
import productionImg from '../assets/Production1.png';

const Navbar = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Workflow Challenges', href: '#challenges' },
    { name: 'Lack of Structure', href: '#structure' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Features', href: '#features' },
    { name: 'Impact', href: '#impact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md shadow-sm border-b border-black/5">
      <div className="flex items-center min-w-[150px]">
        <a href="#home" className="flex items-center">
          <div className="relative flex flex-col items-start">
            <img
              src={logoNew}
              alt="Modozo"
              onLoad={() => setLogoLoaded(true)}
              className={`h-[45px] md:h-[55px] w-auto object-contain transition-transform hover:scale-105 ${!logoLoaded ? 'absolute opacity-0' : 'opacity-100'}`}
            />
            {!logoLoaded && <span className="text-xl font-bold tracking-tighter text-black uppercase">Modozo</span>}
          </div>
        </a>
      </div>

      <div className="hidden xl:flex items-center gap-8 ml-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-black hover:[text-shadow:0_1px_4px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-3 mr-2">
          <a href="#login" className="text-sm font-semibold text-[#666666] hover:text-black transition-colors">Login</a>
          <a href="#signup" className="text-sm font-bold text-black bg-[#FFD700] px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 active:scale-95">Sign Up</a>
        </div>
        <button onClick={scrollToContact}
          className="hidden md:block px-5 py-2.5 font-semibold text-sm rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 active:scale-95 whitespace-nowrap border-2 border-black/10 bg-white/40 text-black">
          Contact Us
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden flex items-center justify-center p-2 text-black hover:text-brand-yellow focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-black/5 flex flex-col py-4 px-6 xl:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-sm font-medium text-black border-b border-gray-100 last:border-none hover:[text-shadow:0_1px_4px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out"
            >
              {link.name}
            </a>
          ))}
          <button onClick={() => { setIsMobileMenuOpen(false); scrollToContact(); }}
            className="mt-4 px-6 py-3 font-semibold text-sm rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 active:scale-95 w-full md:hidden text-center border-2 border-black/10 bg-black/5 text-black">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  const images = [
    techpackImg,
    approvalsImg,
    vendorsImg,
    samplesImg,
    productionImg,
  ];

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-[#F5EBD9]">
      <Navbar />

      {/* Background Flow Animation */}
      <div
        className="absolute inset-0 z-0 flex items-center pt-24 md:pt-32 lg:pt-40 overflow-hidden pointer-events-none"
        style={{ opacity: 0.55 }}
      >
        <div className="flex w-full min-w-max">
          <motion.div
            className="flex gap-4 md:gap-8 pr-4 md:pr-8 shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Workflow step ${i + 1}`}
                className="w-[30vw] min-w-[280px] max-w-[650px] h-auto object-contain"
                style={{ filter: 'brightness(0.85)' }}
              />
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 md:gap-8 pr-4 md:pr-8 shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
          >
            {images.map((src, i) => (
              <img
                key={`second-${i}`}
                src={src}
                alt={`Workflow step ${i + 1}`}
                className="w-[30vw] min-w-[280px] max-w-[650px] h-auto object-contain"
                style={{ filter: 'brightness(0.85)' }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Soft overlay to balance visibility and readability */}
      <div className="absolute inset-0 bg-[#F5EBD9]/30 z-0 pointer-events-none" />

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center justify-center w-full">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-black leading-[1.1] mb-8 font-serif"
        >
          Supercharge Your Fashion Supply Chain with Modozo
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center"
        >
          <p className="text-lg md:text-xl text-[#333333] leading-relaxed font-medium mb-6">
            From techpacks and approvals to vendors, samples, and production tracking — Modozo brings your entire fashion workflow into one connected system.
          </p>
          {/* <p className="text-base md:text-lg text-[#666666] leading-relaxed font-light mb-10">
            Built for fashion brands that want to move faster, stay aligned, and launch collections without operational chaos.
          </p> */}
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 bg-[#FFD700] text-black rounded-full shadow-lg font-bold hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95">
            Book a Demo
          </button>
          <button className="px-8 py-4 bg-white/40 backdrop-blur-sm text-black border-2 border-black/10 rounded-full font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95">
            See How It Works
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
