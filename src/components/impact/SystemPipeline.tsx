"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import {
  CO2Molecule,
  O2Molecule,
  NutrientParticle,
  AlgaeCell,
  ProteinStructure,
  WaterDrop,
  FlowingParticles,
} from "./MoleculesSVG";
import PipelineStage from "./PipelineStag";

const stages = [
  {
    number: 1,
    label: "Environmental Inputs",
    description: "CO₂ molecules, waste nutrients, and industrial by-products enter the system",
    tooltipContent: "Our system captures atmospheric CO₂ and repurposes waste nutrients from industrial processes, transforming environmental liabilities into biological assets.",
  },
  {
    number: 2,
    label: "Algal Biotransformation",
    description: "Microscopic algae perform photosynthesis and carbon fixation",
    tooltipContent: "Specialized microalgae strains utilize light energy to convert CO₂ into organic biomass through photosynthesis, simultaneously releasing oxygen and sequestering carbon.",
  },
  {
    number: 3,
    label: "Green-White Biotechnology",
    description: "Fermentation chambers optimize protein quality and EPS formation",
    tooltipContent: "Our proprietary fermentation process combines algal biomass with probiotic cultures, enhancing nutritional profiles while eliminating anti-nutritional factors and toxins.",
  },
  {
    number: 4,
    label: "Responsible Products",
    description: "Clean, bio-efficient outputs flow to multiple application channels",
    tooltipContent: "The resulting products serve diverse sectors: human nutrition, animal feed, aquaculture supplements, and environmental remediation—all meeting rigorous safety standards.",
  },
  {
    number: 5,
    label: "Closed-Loop Sustainability",
    description: "Outputs feed back into the environment, completing the cycle",
    tooltipContent: "By-products and process water return to the ecosystem cleaner than they entered. This closed-loop design ensures zero waste and continuous environmental improvement.",
  },
];

const MobilePipeline = () => {
  return (
    <div className="md:hidden py-16 px-6 space-y-16">
      {stages.map((stage, index) => (
        <motion.div
          key={stage.number}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Connector line */}
          {index < stages.length - 1 && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full h-16 w-px bg-gradient-to-b from-algae/50 to-transparent" />
          )}

          {/* Stage content */}
          <div className="flex flex-col items-center">
            {/* Stage number */}
            <div className="w-10 h-10 rounded-full bg-algae flex items-center justify-center mb-6">
              <span className="text-sm font-bold text-primary-foreground">{stage.number}</span>
            </div>

            {/* Visualization */}
            <div className="w-full h-40 rounded-2xl bg-card/50 border border-algae/30 backdrop-blur-sm flex items-center justify-center mb-6 glow-algae">
              <MobileStageVisual stageNumber={stage.number} />
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
              {stage.label}
            </h3>
            <p className="text-sm text-muted-foreground text-center max-w-xs">
              {stage.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const MobileStageVisual = ({ stageNumber }: { stageNumber: number }) => {
  switch (stageNumber) {
    case 1:
      return (
        <div className="flex items-center gap-3">
          <CO2Molecule className="w-16 h-8" />
          <NutrientParticle className="w-8 h-8" />
        </div>
      );
    case 2:
      return (
        <div className="flex items-center gap-2">
          <AlgaeCell className="w-14 h-14" />
          <O2Molecule className="w-10 h-7" />
        </div>
      );
    case 3:
      return <ProteinStructure className="w-20 h-14" />;
    case 4:
      return (
        <div className="grid grid-cols-2 gap-2">
          {["Human", "Animal", "Aqua", "Env"].map((label) => (
            <div key={label} className="px-2 py-1 rounded bg-algae/10 border border-algae/30 text-xs text-center">
              {label}
            </div>
          ))}
        </div>
      );
    case 5:
      return <WaterDrop className="w-10 h-14" />;
    default:
      return null;
  }
};

const DesktopPipeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pipelineX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-66%"]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const stageIndex = Math.min(Math.floor(value * 5), 4);
      setActiveStage(stageIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="hidden md:block relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Progress indicator */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2">
            {stages.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full"
                animate={{
                  backgroundColor: index <= activeStage ? "hsl(var(--algae))" : "hsl(var(--muted))",
                  scale: index === activeStage ? 1.3 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Flow connector line */}
        <div className="absolute top-1/2 left-0 right-0 h-px z-0">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-algae/30 to-transparent"
            style={{ width: "300%" }}
          />
        </div>

        {/* Flowing particles overlay */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-20 pointer-events-none z-5 overflow-hidden">
          <FlowingParticles className="w-full h-full opacity-40" />
        </div>

        {/* Pipeline stages */}
        <motion.div
          className="flex items-center pt-16 pb-32 px-8 md:px-16"
          style={{ x: pipelineX }}
        >
          {/* Stage 1: Environmental Inputs */}
          <PipelineStage
            {...stages[0]}
            isActive={activeStage >= 0}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <CO2Molecule className="w-20 h-10" />
                <CO2Molecule className="w-16 h-8 opacity-60" />
              </div>
              <div className="flex items-center gap-2">
                <NutrientParticle className="w-8 h-8" />
                <NutrientParticle className="w-6 h-6 opacity-70" />
                <NutrientParticle className="w-7 h-7 opacity-80" />
              </div>
              <motion.div
                className="text-xs text-muted-foreground mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Controlled Input Flow
              </motion.div>
            </div>
          </PipelineStage>

          <div className="flex-shrink-0 w-16 md:w-24 h-px bg-gradient-to-r from-border to-algae/50" />

          {/* Stage 2: Algal Intelligence */}
          <PipelineStage
            {...stages[1]}
            isActive={activeStage >= 1}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <AlgaeCell className="w-16 h-16" />
                <AlgaeCell className="w-14 h-14 opacity-80" />
                <AlgaeCell className="w-12 h-12 opacity-60" />
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-carbon">CO₂</span>
                  <motion.span
                    className="text-xs text-algae"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
                <O2Molecule className="w-12 h-8" />
                <span className="text-xs text-oxygen">O₂ ↑</span>
              </div>
            </div>
          </PipelineStage>

          <div className="flex-shrink-0 w-16 md:w-24 h-px bg-gradient-to-r from-algae/50 to-cyan/50" />

          {/* Stage 3: Green-White Fermentation */}
          <PipelineStage
            {...stages[2]}
            isActive={activeStage >= 2}
          >
            <div className="flex flex-col items-center gap-3">
              <motion.div
                className="relative w-32 h-24 rounded-lg border-2 border-cyan/50 bg-cyan/5 overflow-hidden"
                animate={{ borderColor: ["hsl(var(--cyan) / 0.3)", "hsl(var(--cyan) / 0.6)", "hsl(var(--cyan) / 0.3)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <ProteinStructure className="absolute top-2 left-2 w-16 h-12" />
                <ProteinStructure className="absolute bottom-2 right-2 w-14 h-10 opacity-70" />
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-algae/40"
                    style={{ left: `${20 + i * 30}%` }}
                    animate={{ y: [-20, -60], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
              </motion.div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="text-cyan">Probiotics</span>
                <span>+</span>
                <span className="text-algae">EPS</span>
              </div>
            </div>
          </PipelineStage>

          <div className="flex-shrink-0 w-16 md:w-24 h-px bg-gradient-to-r from-cyan/50 to-algae/50" />

          {/* Stage 4: Responsible Products */}
          <PipelineStage
            {...stages[3]}
            isActive={activeStage >= 3}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Human Nutrition", color: "bg-algae/10 border-algae/30" },
                  { label: "Animal Feed", color: "bg-cyan/10 border-cyan/30" },
                  { label: "Aquaculture", color: "bg-oxygen/10 border-oxygen/30" },
                  { label: "Environmental", color: "bg-algae-light/10 border-algae-light/30" },
                ].map((channel, i) => (
                  <motion.div
                    key={channel.label}
                    className={`px-3 py-2 rounded-lg ${channel.color} border text-center`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-xs text-foreground">{channel.label}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="text-xs text-algae font-medium"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Bio-Efficient Distribution
              </motion.div>
            </div>
          </PipelineStage>

          <div className="flex-shrink-0 w-16 md:w-24 h-px bg-gradient-to-r from-algae/50 to-cyan/30" />

          {/* Stage 5: Sustainability Loop */}
          <PipelineStage
            {...stages[4]}
            isActive={activeStage >= 4}
          >
            <div className="flex flex-col items-center gap-3">
              <motion.div
                className="relative w-28 h-28"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--algae))" />
                      <stop offset="50%" stopColor="hsl(var(--cyan))" />
                      <stop offset="100%" stopColor="hsl(var(--algae))" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#loopGradient)"
                    strokeWidth="3"
                    strokeDasharray="20 10"
                  />
                  <polygon points="85,45 95,50 85,55" fill="hsl(var(--algae))" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <WaterDrop className="w-8 h-10" />
                </div>
              </motion.div>
              <div className="flex items-center gap-2">
                <WaterDrop className="w-5 h-6 opacity-70" />
                <span className="text-xs text-cyan">Cleaner Water</span>
              </div>
              <motion.div
                className="text-xs text-algae font-medium"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Zero Waste Achieved
              </motion.div>
            </div>
          </PipelineStage>
        </motion.div>

        {/* Stage label at bottom */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
          key={activeStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-xs uppercase tracking-widest text-algae">
            Stage {activeStage + 1} of 5
          </span>
        </motion.div>
      </div>
    </div>
  );
};

const SystemPipeline = () => {
  return (
    <>
      {/* Section header - visible on both */}
      <div className="py-12 px-6 text-center border-y border-border/30">
        <motion.span
          className="text-xs uppercase tracking-[0.3em] text-algae"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Living System
        </motion.span>
        <motion.h2
          className="mt-4 text-2xl md:text-3xl font-bold text-foreground"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          From Input to Impact
        </motion.h2>
      </div>

      {/* Desktop horizontal scroll pipeline */}
      <DesktopPipeline />

      {/* Mobile vertical stacked pipeline */}
      <MobilePipeline />
    </>
  );
};

export default SystemPipeline;
