import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ContentBlock = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="flex flex-col justify-center h-full px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Eyebrow */}
                <motion.span
                    className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    Earth&apos;s Greatest Transformation
                </motion.span>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    <span className="block text-white">The Great</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                        Oxygenation Event
                    </span>
                </h2>

                {/* Description */}
                <motion.p
                    className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Algae photosynthetic respiration triggered the Great Oxygenation Event,
                    making modern life possible. Today, we continue that legacy through
                    green biotechnology, empowering a{" "}
                    <span className="text-teal-400">cleaner</span>,{" "}
                    <span className="text-cyan-400">safer</span>, and{" "}
                    <span className="text-green-400">smarter</span> planet.
                </motion.p>

                {/* Key stats */}
                <motion.div
                    className="grid grid-cols-3 gap-4 md:gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    {[
                        { value: "2.4B", label: "Years Ago", color: "text-amber-500" },
                        { value: "21%", label: "O₂ Today", color: "text-cyan-400" },
                        { value: "∞", label: "Life Enabled", color: "text-teal-400" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                            <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                                {stat.value}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

