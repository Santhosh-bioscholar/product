import { motion } from "framer-motion";

interface AncientEarthIconProps {
    isActive: boolean;
}

export const AncientEarthIcon = ({ isActive }: AncientEarthIconProps) => {
    return (
        <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* Haze particles */}
            {isActive && (
                <>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-amber-700/40"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.6, 0],
                                scale: [0.5, 1, 0.5],
                                x: Math.cos((i * Math.PI) / 3) * 50,
                                y: Math.sin((i * Math.PI) / 3) * 50,
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut",
                            }}
                            style={{
                                left: "50%",
                                top: "50%",
                            }}
                        />
                    ))}
                </>
            )}

            {/* Planet */}
            <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                animate={isActive ? { rotate: 360 } : {}}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {/* Glow filter */}
                <defs>
                    <filter id="ancient-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="ancient-gradient" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="hsl(25 35% 30%)" />
                        <stop offset="50%" stopColor="hsl(25 30% 20%)" />
                        <stop offset="100%" stopColor="hsl(25 25% 12%)" />
                    </radialGradient>
                    <radialGradient id="ancient-atmosphere" cx="50%" cy="50%">
                        <stop offset="70%" stopColor="transparent" />
                        <stop offset="100%" stopColor="hsl(25 40% 35% / 0.3)" />
                    </radialGradient>
                </defs>

                {/* Atmosphere haze */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="url(#ancient-atmosphere)"
                    animate={isActive ? { opacity: [0.5, 0.8, 0.5] } : { opacity: 0.3 }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Main planet body */}
                <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="url(#ancient-gradient)"
                    filter={isActive ? "url(#ancient-glow)" : ""}
                />

                {/* Surface features */}
                <ellipse cx="35" cy="40" rx="12" ry="8" fill="hsl(25 20% 25%)" opacity="0.6" />
                <ellipse cx="60" cy="55" rx="10" ry="6" fill="hsl(25 25% 22%)" opacity="0.5" />
                <circle cx="45" cy="60" r="6" fill="hsl(25 22% 18%)" opacity="0.4" />
            </motion.svg>

            {/* Stage label */}
            <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-amber-700 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0.4 }}
            >
                Ancient Earth
            </motion.div>
        </div>
    );
};

