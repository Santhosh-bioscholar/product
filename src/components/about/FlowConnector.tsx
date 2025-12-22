import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FlowConnectorProps {
    isActive: boolean;
    className?: string;
}

export const FlowConnector = ({ isActive, className = "" }: FlowConnectorProps) => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return (
        <svg
            className={`w-full h-full ${className}`}
            viewBox="0 0 120 600"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                {/* Gradient for the flow line */}
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--flow-line))" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="hsl(var(--flow-pulse))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--flow-line))" stopOpacity="0.2" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="flowGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Animated pulse gradient */}
                <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <motion.stop
                        offset="0%"
                        stopColor="hsl(var(--flow-pulse))"
                        animate={{ stopOpacity: [0, 0.8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.stop
                        offset="50%"
                        stopColor="hsl(var(--glow-primary))"
                        animate={{ stopOpacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.stop
                        offset="100%"
                        stopColor="hsl(var(--flow-pulse))"
                        animate={{ stopOpacity: [0, 0.8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </linearGradient>
            </defs>

            {/* Main flow path - curved organic line */}
            <motion.path
                d="M60 30 
           C60 30 80 60 60 100
           C40 140 80 170 60 210
           C40 250 80 280 60 320
           C40 360 80 390 60 430
           C40 470 60 500 60 530
           C60 560 60 570 60 570"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Animated energy pulse traveling along the path */}
            {isActive && !prefersReducedMotion && (
                <>
                    {/* Primary pulse */}
                    <motion.circle
                        r="4"
                        fill="hsl(var(--flow-pulse))"
                        filter="url(#flowGlow)"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            offsetDistance: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.1, 0.9, 1],
                        }}
                        style={{
                            offsetPath: `path("M60 30 C60 30 80 60 60 100 C40 140 80 170 60 210 C40 250 80 280 60 320 C40 360 80 390 60 430 C40 470 60 500 60 530 C60 560 60 570 60 570")`,
                        }}
                    />

                    {/* Secondary pulse (offset) */}
                    <motion.circle
                        r="3"
                        fill="hsl(var(--glow-primary))"
                        filter="url(#flowGlow)"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.7, 0.7, 0],
                            offsetDistance: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 8,
                            delay: 4,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.1, 0.9, 1],
                        }}
                        style={{
                            offsetPath: `path("M60 30 C60 30 80 60 60 100 C40 140 80 170 60 210 C40 250 80 280 60 320 C40 360 80 390 60 430 C40 470 60 500 60 530 C60 560 60 570 60 570")`,
                        }}
                    />
                </>
            )}

            {/* Node connection points */}
            {[30, 100, 210, 320, 430, 540].map((y, i) => (
                <motion.circle
                    key={i}
                    cx="60"
                    cy={y}
                    r="6"
                    fill="hsl(var(--secondary))"
                    stroke="hsl(var(--flow-line))"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isActive ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.2, ease: "easeOut" }}
                />
            ))}

            {/* Loop indicator at bottom */}
            {isActive && (
                <motion.path
                    d="M60 570 C80 580 80 590 60 590 C40 590 40 580 60 570"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            )}
        </svg>
    );
};

// Simplified mobile version
export const FlowConnectorMobile = ({ isActive }: FlowConnectorProps) => {
    return (
        <svg className="w-8 h-full" viewBox="0 0 32 100" fill="none">
            <motion.line
                x1="16"
                y1="0"
                x2="16"
                y2="100"
                stroke="hsl(var(--flow-line))"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={isActive ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5 }}
            />
            {isActive && (
                <motion.circle
                    cx="16"
                    cy="50"
                    r="3"
                    fill="hsl(var(--flow-pulse))"
                    animate={{ y: [-45, 45], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            )}
        </svg>
    );
};
