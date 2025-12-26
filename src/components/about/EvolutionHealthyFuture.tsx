"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Stylized Earth Icon with rotation
const EarthIcon = ({ isActive, isPast }: { isActive: boolean; isPast: boolean }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="relative">
            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)",
                    filter: "blur(20px)",
                }}
                animate={{
                    scale: isActive ? 1.5 : 1,
                    opacity: isActive ? 0.8 : 0.3
                }}
                transition={{ duration: 0.8 }}
            />

            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 relative z-10">
                {/* Ocean base */}
                <motion.circle
                    cx="50" cy="50" r="45"
                    fill="rgba(56, 189, 248, 0.2)"
                    stroke="rgb(56, 189, 248)"
                    strokeWidth="1.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isActive || isPast ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Continents - simplified organic shapes */}
                <motion.path
                    d="M30 35 Q35 30, 45 32 Q50 28, 55 35 Q58 40, 52 45 Q48 50, 40 48 Q32 45, 30 35"
                    fill="rgba(34, 197, 94, 0.6)"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isActive || isPast ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.path
                    d="M55 55 Q65 52, 70 58 Q72 65, 68 70 Q60 72, 55 68 Q50 62, 55 55"
                    fill="rgba(34, 197, 94, 0.6)"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isActive || isPast ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Rotation indicator ring */}
                <motion.circle
                    cx="50" cy="50" r="48"
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.3)"
                    strokeWidth="0.5"
                    strokeDasharray="4 8"
                    animate={!shouldReduceMotion && isActive ? { rotate: 360 } : {}}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "center" }}
                />
            </svg>
        </div>
    );
};

// Green Growth Icon
const GreenGrowthIcon = ({ isActive, isPast }: { isActive: boolean; isPast: boolean }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="relative">
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)",
                    filter: "blur(15px)",
                }}
                animate={{
                    scale: isActive ? 1.5 : 1,
                    opacity: isActive ? 0.7 : 0.2
                }}
                transition={{ duration: 0.8 }}
            />

            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 relative z-10">
                {/* Central growth cluster */}
                <motion.circle
                    cx="50" cy="50" r="8"
                    fill="rgba(34, 197, 94, 0.3)"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    animate={isActive || isPast ? { scale: 1 } : {}}
                    transition={{ duration: 0.5 }}
                />

                {/* Growing branches */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 50 + Math.cos(rad) * 12;
                    const y1 = 50 + Math.sin(rad) * 12;
                    const x2 = 50 + Math.cos(rad) * 28;
                    const y2 = 50 + Math.sin(rad) * 28;
                    const x3 = 50 + Math.cos(rad) * 38;
                    const y3 = 50 + Math.sin(rad) * 38;

                    return (
                        <motion.g key={i}>
                            <motion.line
                                x1={x1} y1={y1} x2={x2} y2={y2}
                                stroke="rgb(34, 197, 94)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isActive || isPast ? { pathLength: 1, opacity: 0.8 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                            />
                            <motion.circle
                                cx={x3} cy={y3} r="4"
                                fill="rgba(34, 197, 94, 0.4)"
                                stroke="rgb(34, 197, 94)"
                                strokeWidth="1"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isActive || isPast ? { scale: 1, opacity: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                            />
                        </motion.g>
                    );
                })}

                {/* Pulsing outer ring */}
                <motion.circle
                    cx="50" cy="50" r="44"
                    fill="none"
                    stroke="rgba(34, 197, 94, 0.3)"
                    strokeWidth="1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isActive && !shouldReduceMotion ? {
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    } : { scale: 1, opacity: 0.3 }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </svg>
        </div>
    );
};

// Bio-Flow Icon with animated particles
const BioFlowIcon = ({ isActive, isPast }: { isActive: boolean; isPast: boolean }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="relative">
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
                    filter: "blur(15px)",
                }}
                animate={{
                    scale: isActive ? 1.5 : 1,
                    opacity: isActive ? 0.7 : 0.2
                }}
                transition={{ duration: 0.8 }}
            />

            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 relative z-10">
                {/* Central core */}
                <motion.circle
                    cx="50" cy="50" r="12"
                    fill="rgba(251, 146, 60, 0.2)"
                    stroke="rgb(251, 146, 60)"
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    animate={isActive || isPast ? { scale: 1 } : {}}
                    transition={{ duration: 0.5 }}
                />

                {/* Flowing orbital paths */}
                <motion.ellipse
                    cx="50" cy="50" rx="30" ry="18"
                    fill="none"
                    stroke="rgba(239, 68, 68, 0.5)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={isActive || isPast ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.2 }}
                />
                <motion.ellipse
                    cx="50" cy="50" rx="18" ry="30"
                    fill="none"
                    stroke="rgba(250, 204, 21, 0.5)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={isActive || isPast ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.4 }}
                />

                {/* Flowing particles */}
                {[0, 1, 2].map((i) => (
                    <motion.circle
                        key={i}
                        r="3"
                        fill="rgb(251, 146, 60)"
                        initial={{ opacity: 0 }}
                        animate={isActive && !shouldReduceMotion ? {
                            opacity: [0, 1, 0],
                            cx: [20, 50, 80],
                            cy: [50, 35, 50],
                        } : { opacity: 0.6, cx: 50, cy: 50 }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Arrow indicators */}
                <motion.path
                    d="M70 45 L78 50 L70 55"
                    fill="none"
                    stroke="rgb(251, 146, 60)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isActive || isPast ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                />
            </svg>
        </div>
    );
};

// Future Earth Icon - healthy state
const FutureEarthIcon = ({ isActive, isPast }: { isActive: boolean; isPast: boolean }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="relative">
            {/* Multi-layer glow */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(34, 197, 94, 0.2) 50%, transparent 70%)",
                    filter: "blur(20px)",
                }}
                animate={{
                    scale: isActive ? 1.6 : 1,
                    opacity: isActive ? 0.9 : 0.3
                }}
                transition={{ duration: 0.8 }}
            />

            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 relative z-10">
                {/* Healthy ocean */}
                <motion.circle
                    cx="50" cy="50" r="40"
                    fill="rgba(20, 184, 166, 0.25)"
                    stroke="rgb(20, 184, 166)"
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isActive || isPast ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Lush continents */}
                <motion.path
                    d="M28 32 Q38 25, 50 30 Q58 28, 62 35 Q65 45, 55 50 Q45 55, 35 50 Q25 45, 28 32"
                    fill="rgb(34, 197, 94)"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isActive || isPast ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.path
                    d="M50 58 Q62 55, 70 62 Q75 72, 68 78 Q55 82, 48 75 Q42 68, 50 58"
                    fill="rgb(34, 197, 94)"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isActive || isPast ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />

                {/* Stable bio-flow orbit */}
                <motion.circle
                    cx="50" cy="50" r="46"
                    fill="none"
                    stroke="rgba(251, 146, 60, 0.6)"
                    strokeWidth="1.5"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    animate={isActive || isPast ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.6 }}
                />

                {/* Orbiting particle */}
                <motion.circle
                    r="3"
                    fill="rgb(251, 146, 60)"
                    initial={{ opacity: 0 }}
                    animate={isActive && !shouldReduceMotion ? {
                        opacity: 1,
                        cx: [96, 50, 4, 50, 96],
                        cy: [50, 96, 50, 4, 50],
                    } : { opacity: 0.8, cx: 96, cy: 50 }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Confidence glow pulse */}
                <motion.circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="rgba(20, 184, 166, 0.4)"
                    strokeWidth="4"
                    initial={{ opacity: 0 }}
                    animate={isActive && !shouldReduceMotion ? {
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.05, 1]
                    } : { opacity: 0.3 }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </svg>
        </div>
    );
};

// Step data
const evolutionSteps = [
    {
        id: 1,
        title: "Earth",
        subtitle: "PRESENT STATE",
        description: "Our world today—rich in potential, ready for transformation.",
        Icon: EarthIcon,
    },
    {
        id: 2,
        title: "Green Growth",
        subtitle: "BIO EXPANSION",
        description: "Algae-based nutrition spreading sustainable solutions globally.",
        Icon: GreenGrowthIcon,
    },
    {
        id: 3,
        title: "Bio-Flow",
        subtitle: "LIVING SYSTEMS",
        description: "Oxygen, energy, and nutrients circulating in perfect balance.",
        Icon: BioFlowIcon,
    },
    {
        id: 4,
        title: "Healthy Future",
        subtitle: "STABLE PLANET",
        description: "A thriving Earth sustained by nature's intelligence.",
        Icon: FutureEarthIcon,
    },
];

// Connecting arrow component
const FlowArrow = ({ isActive, delay = 0 }: { isActive: boolean; delay?: number }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="flex items-center justify-center w-16 md:w-24 flex-shrink-0">
            <svg viewBox="0 0 60 20" className="w-full h-6">
                {/* Arrow line */}
                <motion.line
                    x1="0" y1="10" x2="45" y2="10"
                    stroke="rgba(156, 163, 175, 0.5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isActive ? { pathLength: 1, opacity: 0.5 } : {}}
                    transition={{ duration: 0.6, delay }}
                />
                {/* Arrow head */}
                <motion.path
                    d="M42 5 L52 10 L42 15"
                    fill="none"
                    stroke="rgba(156, 163, 175, 0.5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isActive ? { opacity: 0.5, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: delay + 0.3 }}
                />
                {/* Animated particle */}
                <motion.circle
                    r="2"
                    fill="rgb(20, 184, 166)"
                    initial={{ opacity: 0, cx: 0, cy: 10 }}
                    animate={isActive && !shouldReduceMotion ? {
                        opacity: [0, 1, 0],
                        cx: [0, 30, 55],
                    } : { opacity: 0 }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: delay + 0.5,
                        repeatDelay: 2
                    }}
                />
            </svg>
        </div>
    );
};

// Single step component
const EvolutionStep = ({
    step,
    index,
    activeStep,
}: {
    step: typeof evolutionSteps[0];
    index: number;
    activeStep: number;
}) => {
    const isActive = index <= activeStep;
    const isCurrent = index === activeStep;
    const isPast = index < activeStep;
    const { Icon } = step;

    return (
        <motion.div
            className="flex flex-col items-center text-center flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: isActive ? 1 : 0.3,
                y: isActive ? 0 : 10,
                scale: isCurrent ? 1.05 : 1
            }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            {/* Step number */}
            <motion.span
                className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3"
                animate={{ opacity: isActive ? 1 : 0.4 }}
            >
                0{index + 1}
            </motion.span>

            {/* Icon */}
            <div className="mb-4">
                <Icon isActive={isActive} isPast={isPast} />
            </div>

            {/* Title */}
            <motion.h3
                className="text-lg md:text-xl font-medium text-foreground mb-1"
                animate={{ opacity: isActive ? 1 : 0.4 }}
            >
                {step.title}
            </motion.h3>

            {/* Subtitle */}
            <motion.span
                className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-2"
                style={{ color: "rgb(20, 184, 166)" }}
                animate={{ opacity: isActive ? 1 : 0.3 }}
            >
                {step.subtitle}
            </motion.span>

            {/* Description */}
            <motion.p
                className="text-xs md:text-sm text-muted-foreground max-w-[140px] md:max-w-[180px] leading-relaxed"
                animate={{ opacity: isActive ? 0.8 : 0.2 }}
            >
                {step.description}
            </motion.p>
        </motion.div>
    );
};

export const EvolutionHealthyFuture = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });
    const shouldReduceMotion = useReducedMotion();
    const [activeStep, setActiveStep] = useState(-1);
    const [isLooping, setIsLooping] = useState(false);
    const animationRef = useRef<{
        interval?: NodeJS.Timeout;
        loopTimeout?: NodeJS.Timeout;
        resetTimeout?: NodeJS.Timeout;
        initialTimeout?: NodeJS.Timeout;
    }>({});

    // Sequential animation on view
    useEffect(() => {
        // Cleanup any existing animations
        const clearAllTimeouts = () => {
            if (animationRef.current.interval) clearInterval(animationRef.current.interval);
            if (animationRef.current.loopTimeout) clearTimeout(animationRef.current.loopTimeout);
            if (animationRef.current.resetTimeout) clearTimeout(animationRef.current.resetTimeout);
            if (animationRef.current.initialTimeout) clearTimeout(animationRef.current.initialTimeout);
            animationRef.current = {};
        };

        if (!isInView) {
            clearAllTimeouts();
            setActiveStep(-1);
            setIsLooping(false);
            return;
        }

        clearAllTimeouts();

        const animateSequence = () => {
            let step = 0;
            // Execute first step immediately
            setActiveStep(step);
            step++;

            animationRef.current.interval = setInterval(() => {
                setActiveStep(step);
                step++;

                if (step > evolutionSteps.length - 1) {
                    if (animationRef.current.interval) {
                        clearInterval(animationRef.current.interval);
                        animationRef.current.interval = undefined;
                    }

                    // Wait then loop
                    animationRef.current.loopTimeout = setTimeout(() => {
                        setIsLooping(true);
                        setActiveStep(-1);

                        animationRef.current.resetTimeout = setTimeout(() => {
                            setIsLooping(false);
                            animateSequence();
                        }, 0);
                    }, 9000);
                }
            }, shouldReduceMotion ? 0 : 1200);
        };

        // Start immediately
        animateSequence();

        return () => {
            clearAllTimeouts();
        };
    }, [isInView, shouldReduceMotion]);

    return (
        <section
            ref={containerRef}
            className="biotech-gradient relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden"
            aria-label="Evolution of a Healthy Future"
        >
            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Header */}
            <motion.div
                className="text-center mb-12 md:mb-20 px-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                transition={{ duration: 0.8 }}
            > <motion.p
                className="text-primary text-sm tracking-[0.3em] uppercase font-display mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                    Our Vision
                </motion.p>
                <motion.span
                    className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    Earth&apos;s Greatest Transformation
                </motion.span>

                {/* Title */}

                <h2 className="text-2xl lg:text-4xl font-semibold text-foreground mb-4">
                    Evolution of a{" "}
                    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                        Healthy Future
                    </span>
                </h2>

                <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                    From present-day Earth to a thriving, sustainable planet—powered by nature's intelligence.
                </p>
            </motion.div>

            {/* Horizontal timeline */}
            <motion.div
                className="relative flex items-center justify-center gap-2 md:gap-4 px-6 max-w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLooping ? 0.3 : 1 }}
                transition={{ duration: 0.1 }}
            >
                {evolutionSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                        <EvolutionStep
                            step={step}
                            index={index}
                            activeStep={activeStep}
                        />
                        {index < evolutionSteps.length - 1 && (
                            <FlowArrow
                                isActive={activeStep >= index}
                                delay={index * 0.10}
                            />
                        )}
                    </div>
                ))}
            </motion.div>

            {/* Progress indicator */}
            <motion.div
                className="mt-12 md:mt-16 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                {evolutionSteps.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 rounded-full"
                        animate={{
                            backgroundColor: index <= activeStep
                                ? "rgb(20, 184, 166)"
                                : "rgba(156, 163, 175, 0.3)",
                            scale: index === activeStep ? 1.3 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </motion.div>

            {/* Bottom tagline */}
            <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView && activeStep >= evolutionSteps.length - 1 ? 1 : 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="font-mono text-xs tracking-widest" style={{ color: "rgb(20, 184, 166)" }}>
                    SLOW · SAFE · SCIENTIFIC
                </p>
            </motion.div>
        </section>
    );
};

export default EvolutionHealthyFuture;
