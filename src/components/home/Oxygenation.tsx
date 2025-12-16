"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Oxygenation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-[#0A2540] relative overflow-hidden text-white">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540] to-[#0A2540] opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Right Content (Text) - Swapped order for visual balance if desired, but sticking to Prompt Split Layout Right is Text */}
                <div className="order-2 md:order-2 flex flex-col gap-8">
                    <motion.div style={{ opacity }}>
                        <h2 className="text-[#0FA57D] font-bold tracking-widest uppercase mb-4">Origins</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">THE GREAT <br /> OXYGENATION EVENT</h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Algae photosynthetic respiration triggered the Great Oxygenation Event 2.4 billion years ago, making modern life possible. Today, we continue that legacy through green biotechnology, empowering a cleaner, safer, and smarter planet.
                        </p>

                        <div className="pl-6 border-l-2 border-green-500/50">
                            <p className="text-xl italic text-green-200">
                                "From the first breath of the Earth to the future of sustainable life."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Left Animation: Timeline */}
                <div className="order-1 md:order-1 relative h-[600px] border-l border-white/10 ml-8 md:ml-0 pl-8 md:pl-16">
                    {/* Timeline Events */}
                    <div className="flex flex-col gap-24 py-12">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
                            <span className="absolute -left-[45px] md:-left-[77px] top-2 w-4 h-4 bg-gray-600 rounded-full border border-gray-400" />
                            <h4 className="text-2xl font-bold text-gray-400">Ancient Earth</h4>
                            <p className="text-sm text-gray-500">Anaerobic Atmosphere</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                            <span className="absolute -left-[45px] md:-left-[77px] top-2 w-4 h-4 bg-[#0FA57D] rounded-full border border-green-300 shadow-[0_0_15px_rgba(15,165,125,0.5)]" />
                            <h4 className="text-2xl font-bold text-[#0FA57D]">Algae Emergence</h4>
                            <p className="text-sm text-gray-300">Photosynthesis Begins</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative">
                            <span className="absolute -left-[45px] md:-left-[77px] top-2 w-4 h-4 bg-[#0AB3A3] rounded-full border border-blue-300 shadow-[0_0_20px_rgba(10,179,163,0.6)]" />
                            <h4 className="text-2xl font-bold text-[#0AB3A3]">Oxygen Rise</h4>
                            <p className="text-sm text-gray-300">Modern Atmosphere Formed</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="relative">
                            <span className="absolute -left-[45px] md:-left-[77px] top-2 w-4 h-4 bg-white rounded-full border border-white shadow-[0_0_25px_rgba(255,255,255,0.8)] animate-pulse" />
                            <h4 className="text-2xl font-bold text-white">Modern Era</h4>
                            <p className="text-sm text-gray-300">Aroora Biotech Legacy</p>
                        </motion.div>
                    </div>

                    {/* Moving Line */}
                    <motion.div
                        style={{ height: useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]) }}
                        className="absolute top-0 left-[-1px] w-0.5 bg-gradient-to-b from-transparent via-[#0FA57D] to-[#0AB3A3]"
                    />
                </div>
            </div>
        </section>
    );
}
