"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";


const taglines = [
    "Sustainable and eco-friendly",
    "100% health & safety benefits with 0% side effects",
    "Nature’s earliest and most intelligent organisms — algae",
];

export function HeroBanner() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center bg-[#131313]">
            {/* 1. Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="https://res.cloudinary.com/dfb6pkawx/video/upload/v1765795508/Untitled_video_-_Made_with_Clipchamp_nvuves.mp4" type="video/mp4" />
            </video>

            {/* 2. Overlay Gradient */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background: "linear-gradient(180deg, rgba(10,37,64,0.8) 0%, rgba(10,37,64,0.6) 45%, rgba(10,179,163,0.4) 100%)"
                }}
            />

            {/* 3. Content Wrapper */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center gap-6">

                    {/* Title */}
                    <FadeIn direction="up" duration={0.8}>
                        <h1 className="text-6xl md:text-4xl font-bold tracking-tight text-white leading-none drop-shadow-lg">
                            SMART <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
                                PROTEIN FACTORY
                            </span>
                        </h1>
                    </FadeIn>

                    {/* Description */}
                    <FadeIn direction="up" delay={0.2} duration={0.8}>
                        <p className="text-lg md:text-lg text-gray-200 leading-relaxed max-w-xl font-light">
                            At Aroora Biotech, every formulation is scientifically proven, clinically tested,
                            and toxicologically evaluated to ensure the highest standards of safety and performance.
                        </p>
                    </FadeIn>

                    {/* Animated Taglines */}
                    <div className="h-20 relative mt-4">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="text-xl md:text-2xl font-light text-green-300 italic absolute top-0 left-0"
                            >
                                {taglines[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1 /2 -translate-x-1/2 z-20 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}

