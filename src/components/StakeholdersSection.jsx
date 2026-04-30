import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stakeholders = [
  { id: 'designers', title: 'Designers', desc: 'Iterate on techpacks and receive feedback in real-time. Say goodbye to messy email threads and disconnected attachments.' },
  { id: 'brand', title: 'Brand Teams', desc: 'Align quickly on collections and approve designs instantly. Full visibility into the product lifecycle from initial sketch to final sample.' },
  { id: 'sourcing', title: 'Sourcing Managers', desc: 'Coordinate materials and track vendor capacities effortlessly. Manage BOMs and ensure components arrive exactly when production needs them.' },
  { id: 'vendors', title: 'Vendors', desc: 'Receive actionable, crystal-clear briefs and updates. No more miscommunications—just structured data you can execute on immediately.' },
  { id: 'qa', title: 'QA Teams', desc: 'Monitor production quality seamlessly from anywhere. Document defects, attach photos, and trigger corrective actions in real-time.' },
  { id: 'tech', title: 'Tech Teams', desc: 'Integrate systems and oversee platform performance with ease. Robust APIs ensure Modozo plays nicely with your existing ERPs and tools.' }
];

const StakeholdersSection = () => {
  const [activeId, setActiveId] = useState(stakeholders[0].id);

  const activeStakeholder = stakeholders.find(s => s.id === activeId);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-[#FFFDF0] relative overflow-hidden border-y border-yellow-400/20" id="stakeholders">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw+1rem,3.5rem)] font-bold text-text-primary mb-4 font-serif leading-tight">
            One Platform. All Stakeholders.
          </h2>
          <p className="text-[clamp(0.88rem,1.5vw+0.25rem,1.125rem)] text-text-secondary max-w-2xl mx-auto font-light">
            A single source of truth that aligns every team seamlessly across the entire supply chain.
          </p>
        </motion.div>

        {/* SELECTOR CARDS (TOP ROW) */}
        <div className="w-full mb-12">
          {/* Mobile/Tablet Grid or Wrapping Flex */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {stakeholders.map((item) => {
              const isActive = activeId === item.id;
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  onHoverStart={() => setActiveId(item.id)}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    backgroundColor: isActive ? '#FFD700' : '#FFFFFF',
                    borderColor: isActive ? '#FFD700' : 'rgba(253, 224, 71, 0.4)', // yellow-300/40
                    boxShadow: isActive 
                      ? '0 10px 25px -5px rgba(255, 215, 0, 0.4), 0 8px 10px -6px rgba(255, 215, 0, 0.2)' 
                      : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`
                    px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border cursor-pointer select-none
                    flex items-center justify-center relative z-10
                    ${isActive ? 'z-20' : 'hover:bg-yellow-50 hover:border-yellow-400'}
                  `}
                >
                  <span 
                    className={`text-sm md:text-base font-bold whitespace-nowrap transition-colors duration-300 ${
                      isActive ? 'text-black' : 'text-text-secondary'
                    }`}
                  >
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SHARED CONTENT AREA (BELOW CARDS) */}
        <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-yellow-300/30 shadow-sm relative min-h-[220px] md:min-h-[200px] flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-tight">
                {activeStakeholder.title}
              </h3>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
                {activeStakeholder.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Decorative subtle background element behind text */}
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-transparent rounded-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default StakeholdersSection;