"use client";

import { motion } from "framer-motion";

export function ContactGrowthGraph() {
    // Data for the bars (height in percentage)
    const bars = [30, 45, 35, 60, 50, 80];

    // Points for the polyline (approximate to match bars roughly but with a trend)
    // Coords are in 0-100 space
    const points = [
        [10, 70], // Above bar 1 (30) -> 100-30=70? No, let's just make a nice line
        [26, 55],
        [42, 65],
        [58, 40],
        [74, 50],
        [90, 20]  // High point
    ];

    const pathD = `M ${points.map(p => p.join(",")).join(" L ")}`;

    return (
        <div className="w-full h-64 bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative flex items-center justify-center p-8 group">
            {/* Background Grid - subtle */}
            <div className="absolute inset-0 grid grid-cols-6 gap-0 opacity-10 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-r border-white/20 h-full" />
                ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-4 gap-0 opacity-10 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="border-b border-white/20 w-full" />
                ))}
            </div>

            {/* Title / Label */}
            <div className="absolute top-4 left-6 z-10">
                <h3 className="text-white/90 font-bold flex items-center gap-2">
                    Growth & Impact <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Active</span>
                </h3>
            </div>

            <div className="relative w-full h-full max-w-sm max-h-40 mt-8">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    {/* Bars */}
                    {bars.map((height, i) => {
                        const x = 5 + i * 16;
                        const width = 10;
                        // SVG origin for scale transform is usually top-left unless specified.
                        // We want bars to grow from bottom.
                        // Easier to position rects at bottom and animate height? 
                        // Or use motion.rect with scaleY and originY="100%" (bottom).
                        return (
                            <motion.rect
                                key={i}
                                x={x}
                                y={100 - height}
                                width={width}
                                height={height}
                                fill="currentColor"
                                className="text-gray-500/50 group-hover:text-gray-400/60 transition-colors duration-500"
                                initial={{ scaleY: 0, opacity: 0 }}
                                whileInView={{ scaleY: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                                style={{ originY: 1 }} // Transform origin bottom
                            />
                        );
                    })}

                    {/* Trend Line */}
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-white/80 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    />

                    {/* Arrow Head at the end */}
                    <motion.path
                        d="M -3,-3 L 0,0 L -3,3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="text-white/80"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        style={{
                            translateX: points[5][0],
                            translateY: points[5][1],
                            rotate: -45 // Angle of the last segment roughly
                        }}
                        transition={{ duration: 0.3, delay: 2.0 }}
                    />
                </svg>
            </div>
        </div>
    );
}
