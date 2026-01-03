"use client";

import { motion } from "framer-motion";

export function ContactImpactGraph() {
    // Green Graph Points (Left side, somewhat volatile but steady/rising)
    // Coords 0-50 on X axis mainly
    const o2Points = [
        [0, 60], [5, 55], [10, 65], [15, 58], [20, 75], [25, 65], [30, 80], [35, 70], [40, 85], [45, 60] // Ends abruptly as it meets bubbles
    ];

    // Red Graph Points (Right side, starting high then crashing down)
    // Coords 60-100 on X axis
    const co2Points = [
        [100, 60], [95, 65], [90, 55], [85, 70], [80, 50], [75, 45], [70, 30], [65, 25], [60, 20], [55, 15], [52, 10]
    ];

    const o2Path = `M ${o2Points.map(p => `${p[0]},${100 - p[1]}`).join(" L ")}`;
    const co2Path = `M ${co2Points.map(p => `${p[0]},${100 - p[1]}`).join(" L ")}`;

    // Bubble definitions for the arc
    // Positioned along a curve similar to the image
    const bubbles = [
        { id: 1, size: 60, x: 65, y: 15, delay: 0 },
        { id: 2, size: 50, x: 55, y: 35, delay: 0.1 },
        { id: 3, size: 40, x: 48, y: 50, delay: 0.2 },
        { id: 4, size: 35, x: 44, y: 62, delay: 0.3 },
        { id: 5, size: 30, x: 48, y: 72, delay: 0.4 },
        { id: 6, size: 25, x: 50, y: 80, delay: 0.5 },
        { id: 7, size: 20, x: 48, y: 88, delay: 0.6 },
        { id: 8, size: 15, x: 52, y: 94, delay: 0.7 },
    ];

    return (
        <div className="w-full h-96 bg-[#020402] rounded-2xl border border-white/10 overflow-hidden relative group font-mono">
            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(74, 222, 128, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(74, 222, 128, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Main Content Area */}
            <div className="relative w-full h-full p-8 flex flex-col justify-between z-10">

                {/* Header Metrics */}
                <div className="flex justify-between w-full">
                    {/* O2 Section (Left) */}
                    <div className="flex flex-col items-start space-y-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-[#5eff5e] text-6xl font-bold tracking-tighter"
                            style={{ textShadow: "0 0 20px rgba(94, 255, 94, 0.5)" }}
                        >
                            1.5%
                        </motion.div>
                        <div className="text-[#5eff5e] text-xl tracking-widest font-bold uppercase">
                            Annual O<sub className="bottom-0">2</sub>
                        </div>
                    </div>

                    {/* CO2 Section (Right) */}
                    <div className="flex flex-col items-end space-y-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-[#ff5e3a] text-6xl font-bold tracking-tighter text-right"
                            style={{ textShadow: "0 0 20px rgba(255, 94, 58, 0.5)" }}
                        >
                            -0.8%
                        </motion.div>
                        <div className="text-[#ff5e3a] text-xl tracking-widest font-bold uppercase text-right">
                            Annual CO<sub className="bottom-0">2</sub>
                        </div>
                    </div>
                </div>

                {/* Graphics Area */}
                <div className="absolute inset-0 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                        {/* O2 Line (Green) */}
                        <motion.path
                            d={o2Path}
                            fill="none"
                            stroke="#5eff5e"
                            strokeWidth="0.8"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "linear" }}
                        />
                        {/* CO2 Line (Red) */}
                        <motion.path
                            d={co2Path}
                            fill="none"
                            stroke="#ff5e3a"
                            strokeWidth="0.8"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "linear" }}
                        />
                    </svg>

                    {/* Bubbles */}
                    {bubbles.map((bubble, i) => (
                        <motion.div
                            key={bubble.id}
                            className="absolute rounded-full"
                            style={{
                                width: `${bubble.size}px`,
                                height: `${bubble.size}px`,
                                left: `${bubble.x}%`,
                                top: `${bubble.y}%`,
                                transform: 'translate(-50%, -50%)',
                                background: 'radial-gradient(130% 130% at 30% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(100, 255, 100, 0.2) 20%, rgba(20, 100, 20, 0.8) 100%)',
                                boxShadow: 'inset -2px -2px 10px rgba(0,0,0,0.5), inset 2px 2px 10px rgba(255,255,255,0.4), 0 0 15px rgba(100, 255, 100, 0.4)',
                                border: '1px solid rgba(255,255,255,0.3)',
                            }}
                            initial={{ scale: 0, opacity: 0, y: 50 }}
                            whileInView={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.2 + bubble.delay,
                                type: "spring",
                                bounce: 0.4
                            }}
                            // Floating animation after appearing
                            animate={{
                                y: [0, -10, 0],
                            }}
                        // We need to wait for the entrance to finish, so we can use a separate animation prop or variants
                        >
                            {/* Inner specularity for extra gloss */}
                            <div className="absolute top-[15%] left-[15%] w-[25%] h-[15%] bg-white/60 blur-[2px] rounded-full rotate-[-45deg]" />
                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    );
}
