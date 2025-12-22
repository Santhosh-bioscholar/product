"use client";

import { motion } from "framer-motion";

interface ConnectorProps {
    isActive: boolean;
    index: number;
}

export const Connector = ({ isActive, index }: ConnectorProps) => {
    return (
        <div className="hidden md:flex items-center justify-center w-12 lg:w-16">
            <div className="relative w-full h-px">
                {/* Base line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: index * 0.15 + 0.3,
                        ease: "easeOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-border via-border to-border origin-left"
                />

                {/* Active glow line */}
                {isActive && (
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--process-teal))]/40 via-[hsl(var(--process-teal))]/60 to-[hsl(var(--process-teal))]/40 origin-left"
                    />
                )}

                {/* Traveling dot */}
                {isActive && (
                    <motion.div
                        initial={{ left: "0%", opacity: 0 }}
                        animate={{
                            left: ["0%", "100%"],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--process-teal))] shadow-[0_0_8px_hsl(var(--process-teal))]"
                    />
                )}

                {/* Arrow head */}
                <motion.div
                    initial={{ opacity: 0, x: -4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.2 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                >
                    <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        className={isActive ? "text-[hsl(var(--process-teal))]" : "text-border"}
                    >
                        <path
                            d="M1 1L5 5L1 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};
