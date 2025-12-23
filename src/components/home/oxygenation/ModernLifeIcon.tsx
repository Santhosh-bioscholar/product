import { motion } from "framer-motion";

interface ModernLifeIconProps {
    isActive: boolean;
}

export const ModernLifeIcon = ({ isActive }: ModernLifeIconProps) => {
    return (
        <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* Life icons orbiting */}
            {isActive && (
                <>
                    {/* Leaf */}
                    <motion.div
                        className="absolute w-5 h-5"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "16px 56px" }}
                    >
                        <motion.svg
                            viewBox="0 0 24 24"
                            className="w-full h-full text-green-400"
                            fill="currentColor"
                            animate={{ scale: [0.9, 1.1, 0.9] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                        </motion.svg>
                    </motion.div>

                    {/* Cell/DNA */}
                    <motion.div
                        className="absolute w-4 h-4 right-2 top-1/4"
                        animate={{
                            rotate: -360,
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "-20px 32px" }}
                    >
                        <motion.svg
                            viewBox="0 0 24 24"
                            className="w-full h-full text-teal-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        >
                            <circle cx="12" cy="12" r="8" />
                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                        </motion.svg>
                    </motion.div>
                </>
            )}

            {/* Modern Earth */}
            <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                animate={isActive ? { rotate: 360 } : {}}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <defs>
                    <filter id="life-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="life-gradient" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="hsl(190 70% 55%)" />
                        <stop offset="40%" stopColor="hsl(185 65% 45%)" />
                        <stop offset="100%" stopColor="hsl(200 60% 30%)" />
                    </radialGradient>
                    <radialGradient id="life-atmosphere" cx="50%" cy="50%">
                        <stop offset="65%" stopColor="transparent" />
                        <stop offset="85%" stopColor="hsl(185 70% 50% / 0.2)" />
                        <stop offset="100%" stopColor="hsl(170 60% 50% / 0.35)" />
                    </radialGradient>
                </defs>

                {/* Healthy atmosphere */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="url(#life-atmosphere)"
                    filter={isActive ? "url(#life-glow)" : ""}
                    animate={isActive ? { opacity: [0.8, 1, 0.8] } : { opacity: 0.5 }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Planet body - blue-green Earth */}
                <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="url(#life-gradient)"
                />

                {/* Continents */}
                <ellipse cx="35" cy="38" rx="12" ry="14" fill="hsl(145 50% 35%)" opacity="0.8" />
                <ellipse cx="58" cy="50" rx="14" ry="10" fill="hsl(150 45% 38%)" opacity="0.75" />
                <ellipse cx="42" cy="62" rx="8" ry="6" fill="hsl(140 50% 32%)" opacity="0.7" />
                <circle cx="65" cy="35" r="5" fill="hsl(145 45% 36%)" opacity="0.6" />

                {/* Ice caps */}
                <ellipse cx="50" cy="18" rx="12" ry="4" fill="hsl(200 30% 90%)" opacity="0.8" />
                <ellipse cx="50" cy="82" rx="10" ry="3" fill="hsl(200 30% 90%)" opacity="0.7" />
            </motion.svg>

            {/* Stage label */}
            <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-teal-400 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0.4 }}
            >
                Modern Life
            </motion.div>
        </div>
    );
};

