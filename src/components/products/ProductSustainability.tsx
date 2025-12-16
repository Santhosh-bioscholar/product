"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { Recycle, Sprout } from "lucide-react";

export function ProductSustainability() {
    return (
        <section className="py-24 px-6 bg-[#0A2540] overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction="right">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Circular <span className="text-[#0FA57D]">Economy</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Our manufacturing process is designed to be regenerative. We capture industrial CO₂ emissions and utilize them to feed our algae cultures, effectively turning a pollutant into high-value protein and nutrients.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-[#0FA57D] font-bold">
                            <Recycle className="w-5 h-5" /> Zero Waste
                        </div>
                        <div className="flex items-center gap-2 text-[#0FA57D] font-bold">
                            <Sprout className="w-5 h-5" /> Carbon Negative Potential
                        </div>
                    </div>
                </FadeIn>

                <FadeIn direction="left" className="relative h-[400px] flex items-center justify-center">
                    {/* Circular Process Animation */}
                    <div className="relative w-64 h-64">
                        {/* Circle Track */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20" />

                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center text-xs text-gray-400 font-bold z-10">
                                CO₂
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-green-800 rounded-full border border-green-600 flex items-center justify-center text-xs text-green-400 font-bold z-10 bg-white/10 backdrop-blur-md" style={{ transform: "rotate(180deg)" }}>
                                Algae
                            </div>
                        </motion.div>

                        {/* Center */}
                        <div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-full blur-xl opacity-50" />
                        <div className="absolute inset-0 m-auto w-24 h-24 bg-[#0A2540] rounded-full border border-white/10 flex items-center justify-center text-white font-bold z-20">
                            PROCESS
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
