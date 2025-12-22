"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessCardProps {
    number: string;
    title: string;
    description: string;
    isActive: boolean;
    index: number;
    flowType: "inward" | "circular" | "loop" | "upward";
}

const FlowAnimation = ({ type, isActive }: { type: string; isActive: boolean }) => {
    if (!isActive) return null;

    const flowStyles: Record<string, React.CSSProperties> = {
        inward: {
            animation: "flow-inward 3s ease-in-out infinite",
        },
        circular: {
            animation: "flow-circular 6s linear infinite",
        },
        loop: {
            animation: "flow-loop 2s ease-in-out infinite",
        },
        upward: {
            animation: "flow-upward 2.5s ease-out infinite",
        },
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {type === "inward" && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-16 h-0.5 bg-gradient-to-l from-transparent via-[hsl(var(--process-teal))]/40 to-transparent"
                            style={{
                                ...flowStyles.inward,
                                animationDelay: `${i * 0.5}s`,
                                top: `${30 + i * 20}%`,
                            }}
                        />
                    ))}
                </div>
            )}

            {type === "circular" && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-20 h-20 rounded-full border border-[hsl(var(--process-teal))]/20"
                        style={flowStyles.circular}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--process-teal))]/60" />
                    </div>
                </div>
            )}

            {type === "loop" && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(2)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-24 h-px bg-gradient-to-r from-transparent via-[hsl(var(--process-teal))]/30 to-transparent"
                            style={{
                                ...flowStyles.loop,
                                animationDelay: `${i * 1}s`,
                                top: `${40 + i * 15}%`,
                            }}
                        />
                    ))}
                </div>
            )}

            {type === "upward" && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-0.5 h-8 bg-gradient-to-t from-transparent via-[hsl(var(--process-teal))]/40 to-transparent"
                            style={{
                                ...flowStyles.upward,
                                animationDelay: `${i * 0.6}s`,
                                left: `${25 + i * 15}%`,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const ProcessCard = ({
    number,
    title,
    description,
    isActive,
    index,
    flowType,
}: ProcessCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className={cn(
                "glass-card grain-overlay light-sweep animate-breathe",
                "p-6 min-h-[180px] flex flex-col",
                "transition-all duration-300",
                isActive && "glass-card-active"
            )}
        >
            <FlowAnimation type={flowType} isActive={isActive} />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                className={cn(
                    "number-badge w-fit mb-4 relative z-10",
                    isActive && "number-badge-active"
                )}
            >
                <span className="font-mono">{number}</span>
            </motion.div>

            <h3 className={cn(
                "text-lg font-semibold mb-2 relative z-10 transition-colors duration-300",
                isActive ? "text-foreground" : "text-foreground/80"
            )}>
                {title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                {description}
            </p>
        </motion.div>
    );
};
