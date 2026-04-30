import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';

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
    { name: 'Solution', href: '#solution' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Features', href: '#features' },
    { name: 'Impact', href: '#impact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-[#f5ebd9]/90 backdrop-blur-md shadow-sm border-b border-black/5 transition-transform duration-300">
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
            className="text-sm font-medium text-black/80 hover:text-black hover:[text-shadow:0_1px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 mr-2">
          <a href="#login" className="text-sm font-bold text-black/80 hover:text-black hover:[text-shadow:0_1px_4px_rgba(0,0,0,0.25)] transition-all duration-300">Login</a>
          <a href="#signup" className="text-sm font-bold bg-[#FFD84D] text-black px-5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-sm active:scale-95">Sign Up</a>
        </div>
        <button onClick={scrollToContact}
          className="hidden md:block px-6 py-2.5 bg-[#FFD84D] text-black font-semibold text-sm rounded-full shadow-sm hover:scale-105 transition-all duration-300 active:scale-95 whitespace-nowrap">
          Contact Us
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden flex items-center justify-center p-2 text-black hover:[text-shadow:0_1px_4px_rgba(0,0,0,0.25)] focus:outline-none"
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
        <div className="absolute top-full left-0 w-full bg-[#f5ebd9]/95 backdrop-blur-md shadow-lg border-b border-black/5 flex flex-col py-4 px-6 xl:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-sm font-medium text-black/80 border-b border-black/5 last:border-none hover:text-black hover:[text-shadow:0_1px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out"
            >
              {link.name}
            </a>
          ))}
          <button onClick={() => { setIsMobileMenuOpen(false); scrollToContact(); }}
            className="mt-4 px-6 py-3 bg-[#FFD84D] text-black font-semibold text-sm rounded-full shadow-md w-full md:hidden text-center">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

const CarouselItem = ({ src, index, total, baseX }) => {
  // Initial offset for each item to distribute them evenly in the 100% track
  const offset = (index / total) * 100;

  // Calculate a looped position from -50 to 50
  const xPos = useTransform(baseX, (value) => {
    let raw = (value + offset) % 100;
    // Normalize to range [-50, 50]
    if (raw > 50) raw -= 100;
    if (raw < -50) raw += 100;
    return raw;
  });

  // Map the normalized position to a tighter 3D orbit with overlapping cards
  const x = useTransform(xPos, [-50, 0, 50], ["-50vw", "0vw", "50vw"]);
  const y = useTransform(xPos, [-50, 0, 50], [30, 0, 30]);
  const z = useTransform(xPos, [-50, 0, 50], [-400, 0, -400]); // Adds significant depth for the orbit feel
  const rotateY = useTransform(xPos, [-50, 0, 50], [75, 0, -75]); // Sharper rotation for a cylindrical wrap
  const scale = useTransform(xPos, [-50, 0, 50], [0.65, 1, 0.65]);
  const opacity = useTransform(xPos, [-50, -40, 0, 40, 50], [0, 1, 1, 1, 0]);
  const zIndex = useTransform(xPos, [-50, 0, 50], [0, 10, 0]);

  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none"
      style={{ x, y, rotateY, scale, opacity, zIndex, transformStyle: "preserve-3d" }}
    >
      <img
        src={src}
        alt={`Workflow step ${index + 1}`}
        className="w-[clamp(300px,55vw,720px)] max-w-full max-h-[85vh] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      />
    </motion.div>
  );
};

const HeroSection = () => {
  const baseX = useMotionValue(0);

  // Continuous animation loop
  useAnimationFrame((t, delta) => {
    // Speed: moves 2% of the track per second (adjust as needed)
    const moveBy = delta * 0.002;
    baseX.set(baseX.get() - moveBy);
  });

  const images = [
    techpackImg,
    approvalsImg,
    vendorsImg,
    samplesImg,
    productionImg,
  ];

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-[#f5ebd9]">
      <Navbar />

      {/* 3D Cylindrical Carousel Background */}
      <div
        className="absolute inset-0 z-0 flex items-start justify-center pt-[88px] md:pt-[96px] overflow-visible"
        style={{ perspective: '1500px' }}
      >
        {images.map((src, i) => (
          <CarouselItem
            key={i}
            src={src}
            index={i}
            total={images.length}
            baseX={baseX}
          />
        ))}
      </div>

      {/* Soft overlay to balance visibility and readability */}
      <div className="absolute inset-0 bg-[#f5ebd9]/60 z-10 pointer-events-none" />

      {/* Centered Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center text-center justify-center w-full">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-bold tracking-tight text-black leading-[1.1] mb-6 md:mb-8 font-serif px-2 md:px-0"
        >
          Supercharge Your Fashion Supply Chain with Modozo
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center px-4 md:px-0"
        >
          <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-black/80 leading-relaxed font-medium mb-8">
            From techpacks and approvals to vendors, samples, and production tracking — Modozo brings your entire fashion workflow into one connected system.
          </p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto px-6 md:px-0">
          <button className="w-full md:w-auto px-8 py-4 bg-[#FFD84D] text-black rounded-full shadow-lg font-bold hover:scale-105 transition-all duration-300 active:scale-95">
            Book a Demo
          </button>
          <button className="w-full md:w-auto px-8 py-4 bg-transparent text-black border-2 border-black/10 rounded-full font-bold hover:scale-105 hover:bg-black/5 transition-all duration-300 active:scale-95">
            See How It Works
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;