import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section id="contact" className="pt-20 pb-6 md:pt-32 md:pb-8 px-4 sm:px-6 bg-yellow-50 text-text-primary overflow-hidden w-full max-w-[100vw]">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start gap-16 lg:gap-12 w-full px-2 md:px-12 xl:px-16">
        
        {/* LEFT COLUMN: Company Details */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-1 lg:mt-1 lg:justify-self-start lg:-translate-x-8 xl:-translate-x-12">
          <h3 className="text-xl md:text-2xl font-bold tracking-tighter uppercase mb-6 font-serif">
            MODOZO
          </h3>
          
          <div className="flex flex-col gap-3 text-text-secondary font-light tracking-wide text-sm md:text-base">
            <p className="leading-relaxed">
              4th Floor, Sanali Spazio, Inorbit Mall Rd,<br />
              Madhapur, Hyderabad, Telangana, 500081,<br />
              India
            </p>
            
            <a 
              href="mailto:admin@modozo.fashion" 
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Email: admin@modozo.fashion
            </a>
            
            <p>
              Contact: +91 9346934833
            </p>
          </div>
        </div>

        {/* CENTER COLUMN: Main CTA */}
        <div className="order-1 lg:order-2 flex flex-col items-center text-center justify-self-center max-w-[800px]">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 tracking-tight font-serif text-text-primary mx-auto leading-[1.1]"
          >
            Launch Collections Faster <br className="hidden lg:block" />
            With Less Chaos
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-text-secondary mb-10 mx-auto font-light leading-relaxed max-w-2xl"
          >
            Bring your entire fashion workflow into one connected system <br className="hidden lg:block" />
            built for speed, clarity, and control.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <button className="px-8 py-3.5 bg-yellow-400 text-text-primary rounded-xl shadow-md font-semibold text-lg hover:scale-105 hover:brightness-110 transition-all duration-300">
              Book a Demo
            </button>
            <button className="px-8 py-3.5 bg-white border border-gray-200 text-text-primary rounded-xl shadow-sm font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              Talk to Us
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Links */}
        <div className="order-3 lg:order-3 flex flex-col items-center lg:items-end text-center lg:text-right justify-self-center lg:justify-self-end mt-1 lg:mt-1">
          <h4 className="text-lg font-bold text-text-primary mb-6 tracking-tight">
            Do you know us?
          </h4>
          
          <div className="flex flex-col gap-4 text-text-secondary">
            <span className="text-sm md:text-base font-normal hover:text-yellow-500 cursor-pointer transition-colors">
              About Us
            </span>
            
            <span className="text-sm md:text-base font-normal hover:text-yellow-500 cursor-pointer transition-colors">
              LinkedIn
            </span>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 xl:px-16 mt-20 md:mt-32 pt-8 border-t border-gray-200/60">
        <p className="text-[10px] md:text-xs text-text-muted font-medium tracking-widest uppercase text-center">
          © {new Date().getFullYear()} Modozo — The Operating System for Fashion Supply Chains
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
