'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { Recycle, Sprout } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'CO₂ Capture',
    description: 'Carbon dioxide from the atmosphere or industrial sources is channeled into our bioreactor systems.',
  },
  {
    number: '02',
    title: 'Algae Cultivation',
    description: 'Specialized microalgae strains absorb CO₂ through photosynthesis, converting it into organic biomass.',
  },
  {
    number: '03',
    title: 'Bioprocessing',
    description: 'Our Green-White Technology™ safely processes biomass into high-value nutrients and compounds.',
  },
  {
    number: '04',
    title: 'O₂ Release',
    description: 'Pure oxygen is released as a byproduct, contributing to cleaner air and a healthier planet.',
  },
];

const ProcessFlowSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const arrowVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const arrowFlowVariants: Variants = {
    animate: {
      x: [0, 10, 0],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const arrowLineVariants: Variants = {
    animate: {
      scaleX: [0.8, 1.2, 0.8],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const numberVariants: Variants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'backOut',
        delay: 0.2,
      },
    },
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24  overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Circular<span className="text-primary">Economy</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Our manufacturing process is designed to be regenerative. We capture industrial CO₂ emissions and utilize them to food our algae cultures, effectively turning a pollutant into high-value protein and nutrients.
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4">
              <div className="flex items-center gap-2 text-[#0FA57D] font-bold text-sm sm:text-base">
                <Recycle className="w-4 h-4 sm:w-5 sm:h-5" /> Zero Waste
              </div>
              <div className="flex items-center gap-2 text-[#0FA57D] font-bold text-sm sm:text-base">
                <Sprout className="w-4 h-4 sm:w-5 sm:h-5" /> Carbon Negative Potential
              </div>
            </div>
          </p>
        </motion.div>
        {/* Process Flow */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          {/* Large Desktop Layout */}
          <div className="hidden xl:flex items-center justify-between max-w-7xl mx-auto ">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex items-center ">
                {/* Process Step */}
                <motion.div
                  variants={stepVariants}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 w-[230px] h-[220px] flex flex-col justify-between hover:border-primary/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                    {/* Step Number */}
                    <motion.div
                      variants={numberVariants}
                      className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    >
                      {step.number}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 mt-4">
                      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    variants={arrowVariants}
                    className="mx-1 flex items-center relative"
                  >
                    {/* Animated Line */}
                    <motion.div
                      variants={arrowLineVariants}
                      animate="animate"
                      className="w-10 h-px bg-gradient-to-r from-primary/50 to-accent/50 relative overflow-hidden"
                    >
                      {/* Flow Effect */}
                      <motion.div
                        animate={{
                          x: [-48, 48],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                        className="absolute inset-0 w-6 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                      />
                    </motion.div>

                    {/* Animated Arrow Icon */}
                    <motion.div
                      variants={arrowFlowVariants}
                      animate="animate"
                      whileHover={{
                        scale: 1.2,
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="ml-2 relative cursor-pointer"
                    >
                      <motion.svg
                        className="w-6 h-6 text-primary process-arrow-glow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{
                          strokeWidth: 3,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 1,
                            delay: index * 0.2 + 1,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.svg>

                      {/* Enhanced Glow Effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4,
                        }}
                        className="absolute inset-0 w-6 h-6 bg-primary/30 rounded-full blur-sm"
                      />

                      {/* Hover Ripple Effect */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                          scale: [0, 2, 0],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 w-6 h-6 bg-primary/20 rounded-full blur-md"
                      />
                    </motion.div>

                    {/* Particle Effects */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, particleIndex) => (
                        <motion.div
                          key={particleIndex}
                          animate={{
                            x: [0, 60],
                            y: [0, Math.sin(particleIndex) * 10],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2 + particleIndex * 0.5,
                          }}
                          className="absolute w-1 h-1 bg-primary/60 rounded-full"
                          style={{
                            left: '10px',
                            top: '50%',
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Medium Desktop Layout (2x2 Grid) */}
          <div className="hidden lg:grid xl:hidden grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 lg:p-6 h-40 lg:h-48 flex flex-col justify-between hover:border-primary/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  <div className="flex items-start justify-between">
                    {/* Step Number */}
                    <motion.div
                      variants={numberVariants}
                      className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-base lg:text-lg shadow-lg"
                    >
                      {step.number}
                    </motion.div>

                    {/* Grid Position Indicator */}
                    {index < 2 && (
                      <motion.div
                        animate={{
                          x: [0, 10, 0],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        className="text-primary"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    )}

                    {index >= 2 && index === 2 && (
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                        className="text-primary absolute -top-8 left-1/2 transform -translate-x-1/2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </motion.div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 mt-3 lg:mt-4">
                    <h3 className="text-white font-semibold text-base lg:text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs lg:text-sm leading-relaxed line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:grid lg:hidden grid-cols-1 gap-6 max-w-2xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-start space-x-6">
                    {/* Step Number */}
                    <motion.div
                      variants={numberVariants}
                      className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0"
                    >
                      {step.number}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tablet Arrow */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    variants={arrowVariants}
                    className="flex justify-center mt-6 relative"
                  >
                    {/* Animated Vertical Line */}
                    <motion.div
                      animate={{
                        scaleY: [0.8, 1.2, 0.8],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      className="absolute w-px h-10 bg-gradient-to-b from-primary/50 to-accent/50 -top-5"
                    >
                      {/* Vertical Flow Effect */}
                      <motion.div
                        animate={{
                          y: [-40, 40],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4,
                        }}
                        className="absolute inset-0 w-full h-6 bg-gradient-to-b from-transparent via-primary to-transparent"
                      />
                    </motion.div>

                    {/* Animated Arrow Icon */}
                    <motion.div
                      animate={{
                        y: [0, 6, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      whileHover={{
                        scale: 1.2,
                        y: 4,
                        transition: { duration: 0.2 }
                      }}
                      className="relative z-10 cursor-pointer"
                    >
                      <motion.svg
                        className="w-7 h-7 text-primary process-arrow-glow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{
                          strokeWidth: 3,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 1,
                            delay: index * 0.2 + 1,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.svg>

                      {/* Enhanced Glow Effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                        className="absolute inset-0 w-7 h-7 bg-primary/20 rounded-full blur-sm"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-6 sm:space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    {/* Step Number */}
                    <motion.div
                      variants={numberVariants}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0"
                    >
                      {step.number}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    variants={arrowVariants}
                    className="flex justify-center mt-3 sm:mt-4 relative"
                  >
                    {/* Animated Vertical Line */}
                    <motion.div
                      animate={{
                        scaleY: [0.8, 1.2, 0.8],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      className="absolute w-px h-6 sm:h-8 bg-gradient-to-b from-primary/50 to-accent/50 -top-3 sm:-top-4"
                    >
                      {/* Vertical Flow Effect */}
                      <motion.div
                        animate={{
                          y: [-24, 24],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4,
                        }}
                        className="absolute inset-0 w-full h-3 sm:h-4 bg-gradient-to-b from-transparent via-primary to-transparent"
                      />
                    </motion.div>

                    {/* Animated Arrow Icon */}
                    <motion.div
                      animate={{
                        y: [0, 4, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: 2,
                        transition: { duration: 0.2 }
                      }}
                      className="relative z-10 cursor-pointer"
                    >
                      <motion.svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-primary process-arrow-glow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{
                          strokeWidth: 3,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 1,
                            delay: index * 0.2 + 1,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.svg>

                      {/* Enhanced Mobile Glow Effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0, 0.4, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                        className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full blur-sm"
                      />

                      {/* Mobile Hover Ripple Effect */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                          scale: [0, 2, 0],
                          opacity: [0, 0.15, 0],
                        }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary/15 rounded-full blur-lg"
                      />
                    </motion.div>

                    {/* Mobile Particle Effects */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(2)].map((_, particleIndex) => (
                        <motion.div
                          key={particleIndex}
                          animate={{
                            y: [0, 30],
                            x: [0, Math.sin(particleIndex) * 6],
                            opacity: [0, 1, 0],
                            scale: [0.2, 0.6, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3 + particleIndex * 0.6,
                          }}
                          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary/50 rounded-full"
                          style={{
                            left: '50%',
                            top: '8px',
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <div className="flex justify-center">
            <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlowSection;