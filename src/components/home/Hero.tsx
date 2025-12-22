"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParticles } from "./HeroParticles";
import { FadeIn } from "../animations/FadeIn";
import { Reveal } from "../animations/Reveal";

const taglines = [
    "Sustainable & eco-friendly",
    "100% health & safety benefits, 0% side effects",
    "Nature’s earliest and most intelligent organisms — algae",
];

export function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Background Particles */}
            <HeroParticles />

            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 " />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center gap-8">
                    <FadeIn direction="right" duration={0.8}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                            SMART <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0FA57D] to-[#0AB3A3]">
                                PROTEIN FACTORY
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2} duration={0.8}>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                            At Aroora Biotech, every formulation is scientifically proven, clinically tested, and toxicologically evaluated to ensure the highest standards of safety and performance.
                        </p>
                    </FadeIn>

                    <div className="h-20 relative">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl md:text-2xl font-light text-green-300 italic absolute top-0 left-0"
                            >
                                {taglines[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <FadeIn direction="up" delay={0.4} className="flex gap-4">
                        <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold tracking-wide transition-all hover:scale-105 shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                            Discover Our Products
                        </button>
                        <button className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-full font-medium tracking-wide transition-all">
                            Learn More
                        </button>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

