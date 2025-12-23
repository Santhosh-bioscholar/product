"use client";

import { motion } from 'framer-motion';
import OxygenField from './OxygenField';
// import OxygenField from './OxygenField';

const ImpactHero = () => {
  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden bg-biotech-radial"
      aria-label="Global Impact Hero Section"
    >
      {/* Canvas Animation Layer */}
      <div className="absolute inset-0 z-0">
        <OxygenField />
      </div>

      {/* Gradient Overlay for depth */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
       
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/30 text-muted-foreground text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              Algae-Powered Sustainability
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-8 text-glow-subtle"
          >
            Global Impact
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
          >
            Improving Life —{' '}
            <span className="text-gradient-oxygen">
              Naturally, Safely, Sustainably
            </span>
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="mt-12 mx-auto w-24 h-px bg-gradient-to-l from-transparent via-accent/50 to-transparent"
          />

          {/* Optional CTA or scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1, 
              delay: 1.4,
              ease: "easeOut"
            }}
            className="mt-16"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
              <span className="text-xs uppercase tracking-widest">Discover More</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-5 h-8 rounded-full border border-border/40 flex items-start justify-center p-1"
              >
                <div className="w-1 h-2 rounded-full bg-accent/60" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      {/* <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(182, 15%, 8%), transparent)'
        }}
      /> */}
    </section>
  );
};

export default ImpactHero;
