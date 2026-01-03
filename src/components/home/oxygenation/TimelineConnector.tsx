import { motion } from "framer-motion";

interface TimelineConnectorProps {
    progress: number;
    fromColor: "ancient" | "oxygen";
    toColor: "oxygen" | "life";
}

const colorMap = {
    ancient: "hsl(25 40% 35%)",
    oxygen: "hsl(175 70% 50%)",
    life: "hsl(170 60% 50%)",
};

export const TimelineConnector = ({ progress, fromColor, toColor }: TimelineConnectorProps) => {
    const from = colorMap[fromColor];
    const to = colorMap[toColor];

    return (
        <div className="relative w-24 md:w-32 flex items-center justify-center">
            {/* Horizontal line */}
            <div className="relative h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                {/* Progress fill */}
                <motion.div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                        background: `linear-gradient(to right, ${from}, ${to})`,
                    }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Glow effect */}
                {progress > 0 && (
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                        style={{
                            background: to,
                            boxShadow: `0 0 12px ${to}, 0 0 24px ${to}`,
                            left: `${progress * 100}%`,
                        }}
                        animate={{
                            opacity: [0.6, 1, 0.6],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                )}
            </div>

            {/* Particles moving along the line */}
            {progress > 0 && (
                <>
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 rounded-full"
                            style={{
                                background: to,
                                top: "50%",
                                marginTop: -3,
                            }}
                            initial={{ left: "0%", opacity: 0 }}
                            animate={{
                                left: ["0%", "100%"],
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.6,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </>
            )}

            {/* Arrow indicator */}
            <motion.svg
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-4 h-4"
                viewBox="0 0 16 16"
                style={{ rotate: -90 }}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: progress > 0.5 ? 1 : 0.3 }}
            >
                <path
                    d="M8 12L3 7h10L8 12z"
                    fill={progress > 0.5 ? to : "hsl(220 15% 25%)"}
                />
            </motion.svg>
        </div>
    );
};

