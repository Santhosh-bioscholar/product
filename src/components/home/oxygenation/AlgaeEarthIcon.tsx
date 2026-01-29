import { motion } from "framer-motion";

interface AlgaeEarthIconProps {
    isActive: boolean;
}

export const AlgaeEarthIcon = ({ isActive }: AlgaeEarthIconProps) => {
    return (
        <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* Photosynthesis bubbles */}
            {isActive && (
                <>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border border-emerald-500/60 bg-emerald-500/20"
                            style={{
                                width: 5 + Math.random() * 5,
                                height: 5 + Math.random() * 5,
                                left: `${30 + Math.random() * 40}%`,
                                bottom: "32%",
                            }}
                            initial={{ y: 0, opacity: 0 }}
                            animate={{
                                y: -70 - Math.random() * 35,
                                opacity: [0, 0.8, 0.5, 0],
                                scale: [0.4, 1, 0.7],
                            }}
                            transition={{
                                duration: 2.5 + Math.random() * 1,
                                repeat: Infinity,
                                delay: i * 0.35,
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
                                top: `${40 + (i % 2) * 18}%`,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0.7, 1.1, 0.7],
                                opacity: [0.5, 1, 0.5],
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
                                    transform={`rotate(${i * 35} 10 10)`}
                                />
                            </svg>
                        </motion.div>
                    ))}
                </>
            )}

            {/* Planet with algae bloom */}
            <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                animate={isActive ? { rotate: 360 } : {}}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <defs>
                    <filter id="algae-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="algae-gradient" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="hsl(155 55% 45%)" />
                        <stop offset="50%" stopColor="hsl(160 60% 32%)" />
                        <stop offset="100%" stopColor="hsl(165 55% 22%)" />
                    </radialGradient>
                    <radialGradient id="algae-atmosphere" cx="50%" cy="50%">
                        <stop offset="60%" stopColor="transparent" />
                        <stop offset="85%" stopColor="hsl(150 65% 45% / 0.25)" />
                        <stop offset="100%" stopColor="hsl(145 70% 50% / 0.4)" />
                    </radialGradient>
                </defs>

                {/* Growing atmosphere */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="url(#algae-atmosphere)"
                    animate={isActive ? {
                        opacity: [0.5, 1, 0.5],
                        r: [44, 48, 44]
                    } : { opacity: 0.4 }}
                    transition={{ duration: 3, repeat: Infinity }}
                    filter={isActive ? "url(#algae-glow)" : ""}
                />

                {/* Planet body */}
                <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="url(#algae-gradient)"
                />

                {/* Algae bloom patches */}
                <motion.ellipse
                    cx="40"
                    cy="45"
                    rx="14"
                    ry="10"
                    fill="hsl(140 55% 45%)"
                    opacity="0.75"
                    animate={isActive ? { opacity: [0.5, 0.85, 0.5] } : {}}
                    transition={{ duration: 2.5, repeat: Infinity }}
                />
                <ellipse cx="55" cy="58" rx="11" ry="8" fill="hsl(150 60% 40%)" opacity="0.65" />
                <ellipse cx="60" cy="38" rx="8" ry="6" fill="hsl(145 55% 38%)" opacity="0.55" />
                <ellipse cx="35" cy="60" rx="7" ry="5" fill="hsl(155 50% 42%)" opacity="0.6" />
            </motion.svg>

            {/* Algae indicator */}
            {isActive && (
                <motion.div
                    className="absolute top-0 right-0 text-sm font-bold text-emerald-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <img src="./seaweed.png" className="w-6" />
                </motion.div>
            )}

            {/* Stage label */}
            <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-emerald-400 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0.4 }}
            >
                Algae Bloom
            </motion.div>
        </div>
    );
};
 