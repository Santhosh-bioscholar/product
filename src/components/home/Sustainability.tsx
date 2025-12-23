"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, Leaf, Zap, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
interface StepProps {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    badgeColor: string;
    glowColor: string;
    hexColor: string;
}

const steps: StepProps[] = [
    {
        id: 1,
        title: "Pollution",
        description: "CO₂ emissions and environmental stress from industrial processes",
        icon: <Factory className="w-10 h-10 text-white opacity-80" />, // Simple white icon on dark bg
        color: "text-red-400",
        badgeColor: "bg-red-400 text-red-950",
        glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(248,113,113,0.3)]",
        hexColor: "#F87171"
    },
    {
        id: 2,
        title: "Algae Bio-System",
        description: "Natural algae absorbs CO₂ and converts it through photosynthesis",
        icon: <Leaf className="w-10 h-10 text-green-400" />,
        color: "text-green-400",
        badgeColor: "bg-green-500 text-green-950",
        glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(74,222,128,0.3)]",
        hexColor: "#4ADE80"
    },
    {
        id: 3,
        title: "Clean Energy",
        description: "Oxygen release and bio-energy generation from the process",
        icon: <Zap className="w-10 h-10 text-cyan-400" />,
        color: "text-cyan-400",
        badgeColor: "bg-cyan-500 text-cyan-950",
        glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]",
        hexColor: "#22D3EE"
    },
    {
        id: 4,
        title: "Health & Future",
        description: "Sustainable balance for healthier generations to come",
        icon: <Heart className="w-10 h-10 text-emerald-400" />,
        color: "text-emerald-400",
        badgeColor: "bg-emerald-500 text-emerald-950",
        glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.3)]",
        hexColor: "#34D399"
    },
];

export function Sustainability() {
    return (
        <section className="relative w-full py-24 px-12 bg-[#131313] overflow-hidden min-h-[600px] flex items-center justify-center">

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Sustainable Lifecycle
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl font-light leading-relaxed"
                    >
                        From environmental challenge to lasting solution — our algae-based biotechnology transforms pollution into clean energy for future generations.
                    </motion.p>
                </div>

                {/* Main Steps Row */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 relative">

                    {steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <StepCard step={step} index={index} />

                            {/* Desktop Spacer / Arrow */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex flex-1 items-center justify-center -mt-10 px-4">
                                    <AnimatedArrow
                                        fromColor={step.hexColor}
                                        toColor={steps[index + 1].hexColor}
                                        delay={index * 0.5}
                                    />
                                </div>
                            )}

                            {/* Mobile Spacer / Arrow */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden w-full flex justify-center py-4 opacity-80">
                                    <div className="rotate-90">
                                        <AnimatedArrow
                                            fromColor={step.hexColor}
                                            toColor={steps[index + 1].hexColor}
                                            delay={index * 0.5}
                                        />
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index }: { step: StepProps; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center relative group w-full lg:w-64"
        >
            {/* Number Badge (Absolute Positioned) */}
            <div className={cn(
                "absolute -top-2 left-1/2 -translate-x-[40px] lg:-translate-x-[50px] z-20 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg",
                step.badgeColor
            )}>
                {step.id}
            </div>

            {/* Icon Circle */}
            <div className={cn(
                "w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative transition-all duration-500",
                step.glowColor
            )}>
                {step.icon}

                {/* Subtle Pulse Ring */}
                <div className={cn(
                    "absolute inset-0 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping",
                    step.color.replace("text-", "border-")
                )} />
            </div>

            {/* Title */}
            <h3 className={cn("text-xl font-bold mb-3", step.color)}>
                {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                {step.description}
            </p>
        </motion.div>
    );
}

// --- Animated Arrow Component ---
interface AnimatedArrowProps {
    fromColor: string;
    toColor: string;
    delay?: number;
}

export const AnimatedArrow = ({ fromColor, toColor, delay = 0 }: AnimatedArrowProps) => {
    const gradientId = `arrowGrad-${fromColor.replace(/[^a-zA-Z0-9]/g, '')}-${delay}`;

    return (
        <div className="flex items-center justify-center w-16 md:w-32 h-16 md:h-12">
            <svg
                viewBox="0 0 60 20"
                className="w-full h-full"
                fill="none"
            >
                {/* Arrow path */}
                <motion.path
                    d="M5 10 L50 10"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        pathLength: { duration: 1.5, repeat: Infinity, repeatDelay: 1, delay },
                        opacity: { duration: 0.5, delay },
                    }}
                />

                {/* Arrow head */}
                <motion.path
                    d="M45 5 L50 10 L45 15"
                    stroke={toColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay }}
                />

                {/* Flowing particles */}
                {[0, 1, 2].map((i) => (
                    <motion.circle
                        key={i}
                        r={1.5}
                        fill={toColor}
                        initial={{ cx: 5, cy: 10, opacity: 0 }}
                        animate={{
                            cx: [5, 25, 50],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: delay + i * 0.4,
                            ease: 'easeInOut',
                        }}
                    />
                ))}

                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor={fromColor} />
                        <stop offset="100%" stopColor={toColor} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

