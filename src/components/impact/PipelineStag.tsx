"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface PipelineStageProps {
  number: number;
  label: string;
  description: string;
  children: ReactNode;
  isActive: boolean;
  tooltipContent: string;
}

const PipelineStage = ({
  number,
  label,
  description,
  children,
  isActive,
  tooltipContent,
}: PipelineStageProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center min-w-[280px] md:min-w-[320px] px-4 md:px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isActive ? 1 : 0.4,
        y: 0,
        scale: isActive ? 1 : 0.95
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Stage number indicator */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-muted flex items-center justify-center"
        animate={{
          backgroundColor: isActive ? "hsl(var(--algae))" : "hsl(var(--muted))",
        }}
        transition={{ duration: 0.3 }}
      >
        <span className={`text-sm font-semibold ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
          {number}
        </span>
      </motion.div>

      {/* Visualization container */}
      <motion.div
        className="relative w-full h-48 md:h-56 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden flex items-center justify-center"
        animate={{
          borderColor: isActive ? "hsl(var(--algae) / 0.5)" : "hsl(var(--border) / 0.5)",
          boxShadow: isActive ? "0 0 40px hsl(var(--algae) / 0.15)" : "none",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Background glow effect */}
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-algae/5 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Stage visualization */}
        <div className="relative z-10 p-4">
          {children}
        </div>
      </motion.div>

      {/* Label */}
      <motion.div
        className="mt-6 text-center"
        animate={{ opacity: isActive ? 1 : 0.6 }}
      >
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
          {label}
        </h3>
        <p className="text-sm text-muted-foreground max-w-[250px]">
          {description}
        </p>
      </motion.div>

      {/* Scientific tooltip */}
      <motion.div
        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-72 p-4 bg-card border border-algae/30 rounded-xl shadow-lg z-20"
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{
          opacity: showTooltip && isActive ? 1 : 0,
          y: showTooltip && isActive ? 0 : -10,
          scale: showTooltip && isActive ? 1 : 0.95,
          pointerEvents: showTooltip && isActive ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-xs text-algae font-medium mb-1">SCIENTIFIC INSIGHT</div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {tooltipContent}
        </p>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-algae/30 rotate-45" />
      </motion.div>
    </motion.div>
  );
};

export default PipelineStage;
