"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import EarthScene from "./EarthScene";
import { Leaf, Droplets, FlaskConical, Heart, PawPrint, Globe, Fish } from 'lucide-react';

export function CompanyOverview() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 px-6 overflow-hidden bg-[#131313]"
            aria-labelledby="company-overview-title"
        >
            <div
                className="absolute inset-0 pointer-events-none z-0"
              
            />
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="relative h-[600px] w-full flex items-center justify-center -mr-0 md:-mr-20 lg:-mr-32 order-1 lg:order-1">
                    <EarthScene />
                </div>


                {/* Right Content */}
                <div className="flex flex-col gap-8 order-2 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-px w-8 bg-[#0FA57D]" />
                            <span className="text-sm font-bold tracking-[0.2em] text-[#0FA57D] uppercase">
                                About Us
                            </span>
                        </motion.div>

                        <motion.h2
                            id="company-overview-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-white leading-tight"
                        >
                            <span className="text-white">Our</span>{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0FA57D] to-[#0AB3A3]">
                                Company
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg text-gray-300 leading-relaxed max-w-xl"
                        >
                            Aroora Biotech Pvt. Ltd. is a science-driven biotechnology company
                            specializing in{" "}
                            <span className="text-white font-medium">
                                biotransformation technologies
                            </span>{" "}
                            for animal nutrition, aquaculture, and environmental applications.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-4 space-y-4"
                        >
                            {[
                                { label: "Animal Nutrition", icon: <PawPrint className="w-6 h-6 text-gray-400 " /> },
                                { label: "Aquaculture Solutions", icon:<Fish className="w-6 h-6 text-blue-400" /> },
                                { label: "Environmental Tech", icon: <Leaf className="w-6 h-6 text-green-400" /> },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={
                                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                                    }
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#0FA57D]/30 group-hover:bg-[#0FA57D]/10 transition-colors duration-300">
                                        <span className="text-lg">{item.icon}</span>
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="pt-6"
                        >
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <div className="w-2 h-2 rounded-full bg-[#0FA57D] animate-pulse" />
                                <span className="font-mono text-xs tracking-wide">
                                    BIOTRANSFORMATION IN ACTION {"\u2192"}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>



            </div>
        </section>
    );
}

