"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { ProteinFoldingAnimation } from "./ProteinFoldingAnimation";

const taglines = [
    "Sustainable & eco-friendly",
    "100% health & safety benefits, 0% side effects",
    "Nature's earliest and most intelligent organisms — algae",
];

export function HeroBannerProtein() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center bg-gradient-to-r from-black/90 via-black/60 to-black/10">
            {/* Protein Folding Animation (includes background) */}
            <div className="absolute inset-0  ">
                {/* <ProteinFoldingAnimation /> */}
                <img src="991ea3c2-f37b-44e3-9d57-626f40586016.jpg" className="w-full h-full"/>
            </div>

            {/* Content */}
            <div className="relative z-30  mx-auto px-12 pt-[260px] h-full w-full bg-gradient-to-r from-[#131313]/95 via-[#131313]/70 to-transparent">
                <div className="max-w-2xl">

                    {/* Title */}
                    <FadeIn direction="up" duration={0.8}>
                        <h1 className="text-5xl md:text-5xl font-bold tracking-tight text-white leading-none mb-6">
                            SMART{" "}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                                PROTEIN FACTORY
                            </span>
                        </h1>
                    </FadeIn>

                    {/* Description */}
                    <FadeIn direction="up" delay={0.2} duration={0.8}>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 font-light max-w-xl">
                            At Aroora Biotech, every formulation is scientifically proven, clinically tested,
                            and toxicologically evaluated to ensure the highest standards of safety and performance.
                        </p>
                    </FadeIn>

                    {/* Animated Taglines */}
                    <div className="h-16 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                className="absolute top-0 left-0 w-full"
                            >
                                <div className="flex items-center gap-3">
                                    {/* Molecular indicator */}
                                    <div className="relative">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="w-6 h-6 relative"
                                        >
                                            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400" />
                                            <div className="absolute top-0 left-1/2 w-1 h-1 -translate-x-1/2 rounded-full bg-teal-300" />
                                            <div className="absolute bottom-0 left-1/2 w-1 h-1 -translate-x-1/2 rounded-full bg-teal-300" />
                                            <div className="absolute top-1/2 left-0 w-1 h-1 -translate-y-1/2 rounded-full bg-cyan-300" />
                                            <div className="absolute top-1/2 right-0 w-1 h-1 -translate-y-1/2 rounded-full bg-cyan-300" />
                                        </motion.div>
                                    </div>
                                    <p className="text-lg md:text-xl font-medium text-emerald-300 italic">
                                        {taglines[index]}
                                    </p>
                                </div>
                                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent mt-3 ml-9" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* CTA Button */}
                    <FadeIn direction="up" delay={0.6} duration={0.8}>
                        <div className="mt-12">
                            <button className="group relative px-8 py-4 rounded-lg overflow-hidden bg-emerald-500/10 border border-emerald-400/30 transition-all duration-500 hover:bg-emerald-500/20 hover:border-emerald-400/50">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                <span className="relative z-10 text-emerald-300 font-medium tracking-wide group-hover:text-emerald-200 transition-colors">
                                    Explore Our Science
                                </span>
                            </button>
                        </div>
                    </FadeIn>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    y: [0, 8, 0]
                }}
                transition={{
                    delay: 2,
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
            >
                <div className="w-6 h-10 border-2 border-emerald-400/30 rounded-full flex justify-center p-1 backdrop-blur-sm">
                    <motion.div
                        className="w-1 h-2 bg-emerald-400/60 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}