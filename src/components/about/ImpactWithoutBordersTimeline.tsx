"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";

// Stroke-based organic SVG icons

const AlgaeClusterIcon = ({ isActive }: { isActive: boolean }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
            {/* Central cluster */}
            <motion.circle
                cx="24" cy="24" r="4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {/* Surrounding cells */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 24 + Math.cos(rad) * 12;
                const y = 24 + Math.sin(rad) * 12;
                return (
                    <motion.circle
                        key={i}
                        cx={x} cy={y} r="3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        fill="none"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isActive && !shouldReduceMotion ? { scale: 1, opacity: 0.7 } : { scale: 1, opacity: 0.7 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    />
                );
            })}
            {/* Connecting organic lines */}
            <motion.path
                d="M24 20 Q26 22 24 24 M24 28 Q22 26 24 24 M20 24 Q22 22 24 24 M28 24 Q26 26 24 24"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
                fill="none"
                style={{ opacity: 0.5 }}
                initial={{ pathLength: 0 }}
                animate={isActive && !shouldReduceMotion ? { pathLength: 1 } : { pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            />
        </svg>
    );
};

const EnzymeLoopIcon = ({ isActive }: { isActive: boolean }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
            {/* Outer rotating ring */}
            <motion.path
                d="M24 8 C32.8 8 40 15.2 40 24 C40 32.8 32.8 40 24 40 C15.2 40 8 32.8 8 24 C8 15.2 15.2 8 24 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="4 6"
                fill="none"
                initial={{ rotate: 0, opacity: 0 }}
                animate={isActive && !shouldReduceMotion ? { rotate: 360, opacity: 1 } : { rotate: 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner transformation arrows */}
            <motion.path
                d="M20 18 A 6 6 0 0 1 28 18 M28 30 A 6 6 0 0 1 20 30"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            />
            <motion.path
                d="M28 18 L26 15 M28 18 L31 15 M20 30 L17 33 M20 30 L23 33"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 }}
            />
            {/* Center active element */}
            <motion.circle
                cx="24" cy="24" r="2"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={isActive ? { scale: [1, 1.5, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    );
};

const CellularShieldIcon = ({ isActive }: { isActive: boolean }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
            {/* Shield outline */}
            <motion.path
                d="M24 10 C32 14, 36 18, 36 26 C36 34, 30 38, 24 40 C18 38, 12 34, 12 26 C12 18, 16 14, 24 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Inner protective layer */}
            <motion.path
                d="M24 16 C29 18, 31 21, 31 26 C31 31, 27 34, 24 35 C21 34, 17 31, 17 26 C17 21, 19 18, 24 16"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                style={{ opacity: 0.5 }}
                initial={{ pathLength: 0 }}
                animate={isActive && !shouldReduceMotion ? { pathLength: 1 } : { pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            />
            {/* Center cell */}
            <motion.circle
                cx="24" cy="26" r="3"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
                initial={{ scale: 0 }}
                animate={isActive ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
            />
        </svg>
    );
};

const BiologicalNodesIcon = ({ isActive }: { isActive: boolean }) => {
    const shouldReduceMotion = useReducedMotion();
    const nodes = [
        { cx: 24, cy: 16 },
        { cx: 16, cy: 24 },
        { cx: 32, cy: 24 },
        { cx: 20, cy: 32 },
        { cx: 28, cy: 32 },
    ];

    return (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
            {/* Connecting lines */}
            <motion.path
                d="M24 16 L16 24 M24 16 L32 24 M16 24 L20 32 M32 24 L28 32 M20 32 L28 32"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                style={{ opacity: 0.4 }}
                initial={{ pathLength: 0 }}
                animate={isActive && !shouldReduceMotion ? { pathLength: 1 } : { pathLength: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Nodes */}
            {nodes.map((node, i) => (
                <motion.circle
                    key={i}
                    cx={node.cx}
                    cy={node.cy}
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isActive ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                />
            ))}
        </svg>
    );
};

const InfinityLoopIcon = ({ isActive }: { isActive: boolean }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
            {/* Organic infinity */}
            <motion.path
                d="M14 24 C14 20, 17 17, 21 17 C25 17, 24 24, 24 24 C24 24, 23 31, 27 31 C31 31, 34 28, 34 24 C34 20, 31 17, 27 17 C23 17, 24 24, 24 24 C24 24, 25 31, 21 31 C17 31, 14 28, 14 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Center pulse */}
            <motion.circle
                cx="24" cy="24" r="2"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ scale: 0 }}
                animate={isActive && !shouldReduceMotion ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 0.4, 0.8]
                } : { scale: 1, opacity: 0.8 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
        </svg>
    );
};

// Timeline steps data
const timelineSteps = [
    {
        id: 1,
        title: "Algae Source",
        subtitle: "Nature-first innovation",
        Icon: AlgaeClusterIcon,
    },
    {
        id: 2,
        title: "Green Bioprocess",
        subtitle: "Clean transformation",
        Icon: EnzymeLoopIcon,
    },
    {
        id: 3,
        title: "Safe Nutrition",
        subtitle: "Human & animal safety",
        Icon: CellularShieldIcon,
    },
    {
        id: 4,
        title: "Ecosystem Balance",
        subtitle: "Environmental harmony",
        Icon: BiologicalNodesIcon,
    },
    {
        id: 5,
        title: "Impact Without Borders",
        subtitle: "Generational continuity",
        Icon: InfinityLoopIcon,
    },
];

// Timeline Node Component
const TimelineNode = ({
    step,
    index,
    progress
}: {
    step: typeof timelineSteps[0];
    index: number;
    progress: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });
    const shouldReduceMotion = useReducedMotion();

    const nodeProgress = (index + 1) / timelineSteps.length;
    const isActive = progress >= nodeProgress - 0.15 || isInView;
    const isPast = progress >= nodeProgress;

    const { Icon } = step;

    return (
        <div
            ref={ref}
            className="relative flex items-center gap-6 md:gap-10 py-16 md:py-24"
        >
            {/* Node circle */}
            <div className="relative flex-shrink-0">
                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: isActive ? 2.5 : 0,
                        opacity: isActive ? 0.6 : 0
                    }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
                />

                {/* Outer ring */}
                <motion.div
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-biotech-stroke-dim flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: isActive ? 1 : 0.85,
                        opacity: isActive ? 1 : 0.4,
                        borderColor: isActive ? "hsl(var(--primary))" : "hsl(var(--biotech-stroke-dim))"
                    }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                >
                    {/* Inner circle with icon */}
                    <motion.div
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary/50 flex items-center justify-center text-biotech-stroke"
                        animate={{
                            backgroundColor: isActive ? "hsl(var(--secondary))" : "hsl(var(--secondary) / 0.3)"
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <Icon isActive={isActive} />
                    </motion.div>
                </motion.div>

                {/* Node number */}
                <motion.span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-mono flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    {index + 1}
                </motion.span>
            </div>

            {/* Content */}
            <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                    opacity: isActive ? 1 : 0.3,
                    x: isActive ? 0 : 10
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1 }}
            >
                <motion.span
                    className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-primary uppercase block mb-2"
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                >
                    {step.subtitle}
                </motion.span>
                <motion.h3
                    className="text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-tight"
                    animate={{ opacity: isActive ? 1 : 0.4 }}
                >
                    {step.title}
                </motion.h3>

                {/* Progress indicator line */}
                <motion.div
                    className="mt-4 h-px bg-gradient-to-r from-primary/60 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: isPast ? "100%" : isActive ? "60%" : "0%" }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.3 }}
                />
            </motion.div>
        </div>
    );
};

export const ImpactWithoutBordersTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

    return (
        <section
            ref={containerRef}
            className="biotech-gradient relative min-h-screen py-20 md:py-32 overflow-hidden"
            aria-label="Impact Without Borders Timeline"
        >
            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Section header */}
            <motion.div
                className="text-center mb-16 md:mb-24 px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase block mb-4">
                    Our Process
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-tight">
                    Impact Without Borders
                </h2>
            </motion.div>

            {/* Timeline container */}
            <div className="relative max-w-2xl mx-auto px-6 md:px-12">
                {/* Vertical curved path SVG */}
                <svg
                    className="absolute left-[46px] md:left-[54px] top-0 h-full w-12"
                    viewBox="0 0 48 1000"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                >
                    {/* Background path (dim) */}
                    <path
                        d="M24 0 
               C24 50, 28 100, 24 150
               C20 200, 28 250, 24 300
               C20 350, 28 400, 24 450
               C20 500, 28 550, 24 600
               C20 650, 28 700, 24 750
               C20 800, 28 850, 24 900
               C20 950, 24 1000, 24 1000"
                        stroke="hsl(var(--biotech-stroke-dim))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.3"
                    />

                    {/* Animated path (glowing) */}
                    <motion.path
                        d="M24 0 
               C24 50, 28 100, 24 150
               C20 200, 28 250, 24 300
               C20 350, 28 400, 24 450
               C20 500, 28 550, 24 600
               C20 650, 28 700, 24 750
               C20 800, 28 850, 24 900
               C20 950, 24 1000, 24 1000"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                        style={{
                            pathLength: shouldReduceMotion ? 1 : pathProgress,
                            filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.5))"
                        }}
                    />
                </svg>

                {/* Timeline nodes */}
                <div className="relative">
                    <motion.div style={{ opacity: 1 }}>
                        {timelineSteps.map((step, index) => (
                            <TimelineNode
                                key={step.id}
                                step={step}
                                index={index}
                                progress={shouldReduceMotion ? 1 : pathProgress.get()}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom CTA area */}
            <motion.div
                className="text-center mt-16 md:mt-24 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <p className="font-mono text-xs tracking-widest text-muted-foreground mb-6">
                    CONTINUOUS INNOVATION CYCLE
                </p>
                <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                        Regenerating global ecosystems
                    </span>
                </div>
            </motion.div>
        </section>
    );
};

export default ImpactWithoutBordersTimeline;
