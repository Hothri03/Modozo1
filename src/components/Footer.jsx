import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-text-primary pt-16 pb-6 md:pt-24 md:pb-8 border-t border-yellow-300/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CONTENT COLUMNS */}
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32 lg:gap-48">
          
          {/* LEFT SIDE: Company Details */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase mb-6 font-serif">
              MODOZO
            </h3>
            
            <div className="flex flex-col gap-4 text-text-secondary font-light tracking-wide">
              <p className="leading-relaxed max-w-xs">
                Shaikpet, Telangana,<br />
                India, 500081
              </p>
              
              <a 
                href="mailto:admin@modozo.fashion" 
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Email: admin@modozo.fashion
              </a>
              
              <p>
                Contact: +91 123-499-6667
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Links (Repositioned closer) */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-lg font-semibold text-text-primary/90 mb-6 tracking-tight">
              Do you know us?
            </h4>
            
            <div className="flex flex-col gap-4 text-text-secondary">
              <a 
                href="#about" 
                className="text-base font-normal hover:text-yellow-400 hover:underline underline-offset-8 decoration-1 transition-all duration-300"
              >
                About Us
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base font-normal hover:text-yellow-400 hover:underline underline-offset-8 decoration-1 transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom mini-footer */}
        <div className="mt-20 pt-8 border-t border-yellow-300/30 flex justify-center items-center w-full">
          <p className="text-xs text-text-muted font-medium tracking-widest uppercase text-center w-full">
            © {new Date().getFullYear()} Modozo — The Operating System for Fashion Supply Chains
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
