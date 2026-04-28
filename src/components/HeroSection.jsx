import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';

// Import images from assets
import logoNew from '../assets/modozo logo new.png';
import techpackImg from '../assets/Techpack.png';
import approvalsImg from '../assets/Approvals.png';
import vendorsImg from '../assets/vendors.png';
import samplesImg from '../assets/samples.png';
import productionImg from '../assets/production.png';

const Navbar = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
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
    <nav className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 py-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ background: 'rgba(6,14,31,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,215,0,0.06)' }}>
      <div className="flex items-center min-w-[150px]">
        <a href="#home" className="flex items-center">
          <div className="relative flex flex-col items-start">
            <img src={logoNew} alt="Modozo" onLoad={() => setLogoLoaded(true)}
              className={`h-[45px] md:h-[55px] w-auto object-contain transition-transform hover:scale-105 ${!logoLoaded ? 'absolute opacity-0' : 'opacity-100'}`}
              style={{ filter: 'brightness(1.15)' }} />
            {!logoLoaded && <span className="text-xl font-bold tracking-tighter text-white uppercase">Modozo</span>}
          </div>
        </a>
      </div>
      <div className="hidden xl:flex items-center gap-8 ml-4">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href}
            className="text-sm font-medium text-white/60 hover:text-[#FFD700] transition-all duration-300 ease-in-out">{link.name}</a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 mr-2">
          <a href="#login" className="text-sm font-bold text-white/70 hover:text-brand-yellow transition-colors">Login</a>
          <a href="#signup" className="text-sm font-bold text-[#0A2540] px-5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-sm active:scale-95"
            style={{ background: 'linear-gradient(135deg, #FFD700, #F4C542)' }}>Sign Up</a>
        </div>
        <button onClick={scrollToContact}
          className="hidden md:block px-6 py-2.5 font-semibold text-sm rounded-full shadow-sm hover:scale-105 transition-all duration-300 active:scale-95 whitespace-nowrap"
          style={{ background: 'rgba(255,215,0,0.1)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.25)' }}>
          Contact Us
        </button>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden flex items-center justify-center p-2 text-white hover:text-brand-yellow focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col py-4 px-6 xl:hidden z-50"
          style={{ background: 'rgba(6,14,31,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,215,0,0.08)' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-sm font-medium text-white/60 border-b border-white/5 last:border-none hover:text-[#FFD700] transition-all duration-300">{link.name}</a>
          ))}
          <button onClick={() => { setIsMobileMenuOpen(false); scrollToContact(); }}
            className="mt-4 px-6 py-3 text-[#0A2540] font-semibold text-sm rounded-full shadow-sm w-full md:hidden text-center"
            style={{ background: 'linear-gradient(135deg, #FFD700, #F4C542)' }}>Contact Us</button>
        </div>
      )}
    </nav>
  );
};

const Arrow = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="flex items-center justify-center translate-y-[-10px]"
  >
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="rgba(255,215,0,0.35)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </motion.div>
);

const WorkflowItem = ({ src, label, idx, phase, isMobile }) => {
  const circularPos = [
    { x: 0, y: -220 },
    { x: 230, y: -20 },
    { x: 180, y: 180 },
    { x: -180, y: 180 },
    { x: -230, y: -20 },
  ][idx];

  const horizontalX = (idx - 2) * (isMobile ? 70 : 165);
  const horizontalY = isMobile ? 120 : 115;

  let x = circularPos.x, y = circularPos.y, scale = 1, opacity = 0.9, zIndex = 10, labelOpacity = 1;

  if (phase === 1) { x = 0; y = 0; scale = 0.4; opacity = 0; zIndex = 0; labelOpacity = 0; }
  else if (phase === 2) { x = horizontalX; y = horizontalY; scale = isMobile ? 0.7 : 1.1; opacity = 1; zIndex = 20; labelOpacity = isMobile ? 0 : 1; }

  return (
    <motion.div
      animate={{ x, y, scale, opacity, zIndex }}
      transition={{ duration: 0.9, ease: "easeInOut", delay: phase === 2 ? idx * 0.1 : 0 }}
      className="absolute flex flex-col items-center justify-center pointer-events-none"
      style={{ left: '50%', top: '50%', width: 120, height: 120, marginLeft: -60, marginTop: -60 }}
    >
      <div className="flex flex-col items-center gap-2">
        <img src={src} alt={label} className="w-full h-auto object-contain drop-shadow-md" style={{ filter: 'brightness(1.1)' }} />
        <motion.span
          animate={{ opacity: labelOpacity }}
          className="text-[10px] md:text-[11px] font-bold text-[#FFD700]/50 uppercase tracking-widest text-center whitespace-nowrap"
        >
          {label}
        </motion.span>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);

    let timer1, timer2, timer3;
    const startSequence = () => {
      setPhase(0);
      timer1 = setTimeout(() => setPhase(1), 3500);
      timer2 = setTimeout(() => setPhase(2), 5200);
      timer3 = setTimeout(() => startSequence(), 11000);
    };
    startSequence();

    return () => { window.removeEventListener('resize', handleResize); clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  const items = [
    { src: techpackImg, label: "Techpack" },
    { src: approvalsImg, label: "Approvals" },
    { src: vendorsImg, label: "Vendors" },
    { src: samplesImg, label: "Samples" },
    { src: productionImg, label: "Production" },
  ];

  const logoY = phase === 2 ? (isMobile ? -40 : -85) : (phase === 1 ? -20 : 0);

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center px-4 md:px-8 lg:px-16 overflow-hidden pt-24 pb-12 lg:py-0"
      style={{ background: 'linear-gradient(145deg, #030B1A 0%, #0A1E3D 40%, #0D2847 60%, #060E1F 100%)' }}>
      <Navbar />

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFD700, transparent 70%)' }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.4) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 z-10">
        <div className="flex-1 text-center lg:text-left w-full lg:max-w-[620px] flex flex-col items-center lg:items-start gap-5 pt-8 lg:pt-0">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif">
              Supercharge Your Fashion Supply Chain with{' '}
              <span style={{ background: 'linear-gradient(135deg, #FFD700, #F4C542)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Modozo</span>
            </h1>
            <p className="text-lg md:text-xl text-white/55 leading-relaxed font-medium mb-4 max-w-xl mx-auto lg:mx-0">
              From techpacks and approvals to vendors, samples, and production tracking — Modozo brings your entire fashion workflow into one connected system.
            </p>
            <p className="text-base text-white/35 leading-relaxed font-light max-w-lg mx-auto lg:mx-0 mb-8">
              Built for fashion brands that want to move faster, stay aligned, and launch collections without operational chaos.
            </p>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 text-[#0A2540] rounded-full shadow-lg font-bold hover:scale-105 transition-all duration-300 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #FFD700, #F4C542)', boxShadow: '0 4px 25px rgba(255,215,0,0.25)' }}>
              Book a Demo
            </button>
            <button className="px-8 py-4 text-white/80 rounded-full font-bold hover:scale-105 transition-all duration-300 active:scale-95"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
              See How It Works
            </button>
          </motion.div>
        </div>

        <div className="flex-1 w-full relative h-[600px] lg:h-[800px] flex items-center justify-center mt-12 lg:mt-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence>
              {phase === 0 && !isMobile && items.map((_, i) => {
                const pos = [{ x: 0, y: -220 }, { x: 230, y: -20 }, { x: 180, y: 180 }, { x: -180, y: 180 }, { x: -230, y: -20 }][i];
                const width = Math.sqrt(pos.x ** 2 + pos.y ** 2);
                const angle = Math.atan2(pos.y, pos.x);
                return (
                  <motion.div key={`line-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute origin-left"
                    style={{
                      left: '50%', top: '50%', height: '2px', width: width - 180,
                      transform: `rotate(${angle}rad) translateX(120px)`,
                      background: 'linear-gradient(to right, transparent 0%, rgba(255,215,0,0.15) 20%, rgba(255,215,0,0.15) 80%, transparent 100%)'
                    }} />
                );
              })}
            </AnimatePresence>

            <motion.div animate={{ y: logoY, scale: phase === 1 ? 0.9 : 1 }} transition={{ duration: 1, ease: "easeInOut" }}
              className="relative z-10 pointer-events-none">
              <img src={logoNew} alt="Modozo Central" className="w-[180px] md:w-[240px] lg:w-[320px] h-auto object-contain drop-shadow-2xl"
                style={{ filter: 'brightness(1.15)' }} />
            </motion.div>

            {items.map((item, i) => (
              <WorkflowItem key={i} {...item} idx={i} phase={phase} isMobile={isMobile} />
            ))}

            <AnimatePresence>
              {phase === 2 && (
                <div className="absolute w-full flex items-center justify-center pointer-events-none"
                  style={{ left: '50%', top: '50%', transform: `translate(-50%, ${isMobile ? 120 : 115}px)` }}>
                  <div className="flex items-center" style={{ gap: isMobile ? '46px' : '141px' }}>
                    {[0, 1, 2, 3].map(i => <Arrow key={i} delay={1.2 + i * 0.1} />)}
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
