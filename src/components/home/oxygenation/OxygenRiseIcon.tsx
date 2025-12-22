import { motion } from "framer-motion";

interface OxygenRiseIconProps {
    isActive: boolean;
}

export const OxygenRiseIcon = ({ isActive }: OxygenRiseIconProps) => {
    return (
        <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* Oxygen bubbles */}
            {isActive && (
                <>
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border border-cyan-500/60 bg-cyan-500/20"
                            style={{
                                width: 6 + Math.random() * 6,
                                height: 6 + Math.random() * 6,
                                left: `${30 + Math.random() * 40}%`,
                                bottom: "30%",
                            }}
                            initial={{ y: 0, opacity: 0 }}
                            animate={{
                                y: -80 - Math.random() * 40,
                                opacity: [0, 0.8, 0.6, 0],
                                scale: [0.5, 1, 0.8],
                            }}
                            transition={{
                                duration: 2.5 + Math.random() * 1.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </>
            )}

            {/* Algae particles */}
            {isActive && (
                <>
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={`algae-${i}`}
                            className="absolute w-3 h-3"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${40 + (i % 2) * 20}%`,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0.8, 1.1, 0.8],
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        >
                            <svg viewBox="0 0 20 20" className="w-full h-full">
                                <ellipse
                                    cx="10"
                                    cy="10"
                                    rx="6"
                                    ry="4"
                                    fill="hsl(145 60% 40%)"
                                    transform={`rotate(${i * 30} 10 10)`}
                                />
                            </svg>
                        </motion.div>
                    ))}
                </>
            )}

            {/* Planet with oxygen atmosphere */}
            <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                animate={isActive ? { rotate: 360 } : {}}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
                <defs>
                    <filter id="oxygen-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="oxygen-gradient" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="hsl(165 50% 40%)" />
                        <stop offset="50%" stopColor="hsl(165 60% 30%)" />
                        <stop offset="100%" stopColor="hsl(175 50% 20%)" />
                    </radialGradient>
                    <radialGradient id="oxygen-atmosphere" cx="50%" cy="50%">
                        <stop offset="60%" stopColor="transparent" />
                        <stop offset="85%" stopColor="hsl(175 70% 50% / 0.25)" />
                        <stop offset="100%" stopColor="hsl(175 80% 55% / 0.4)" />
                    </radialGradient>
                </defs>

                {/* Growing atmosphere */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="url(#oxygen-atmosphere)"
                    animate={isActive ? {
                        opacity: [0.6, 1, 0.6],
                        r: [44, 48, 44]
                    } : { opacity: 0.4 }}
                    transition={{ duration: 3, repeat: Infinity }}
                    filter={isActive ? "url(#oxygen-glow)" : ""}
                />

                {/* Planet body */}
                <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="url(#oxygen-gradient)"
                />

                {/* Water/algae patches */}
                <motion.ellipse
                    cx="40"
                    cy="45"
                    rx="14"
                    ry="10"
                    fill="hsl(175 60% 35%)"
                    opacity="0.7"
                    animate={isActive ? { opacity: [0.5, 0.8, 0.5] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <ellipse cx="55" cy="58" rx="10" ry="7" fill="hsl(165 55% 38%)" opacity="0.6" />
                <ellipse cx="60" cy="40" rx="8" ry="5" fill="hsl(170 60% 32%)" opacity="0.5" />
            </motion.svg>

            {/* O₂ label */}
            {isActive && (
                <motion.div
                    className="absolute top-0 right-0 text-sm font-bold text-cyan-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    O₂
                </motion.div>
            )}

            {/* Stage label */}
            <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-cyan-400 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0.4 }}
            >
                Oxygen Rise
            </motion.div>
        </div>
    );
};

