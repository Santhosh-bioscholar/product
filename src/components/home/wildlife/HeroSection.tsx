"use client";

import { motion } from "framer-motion";
import { MapPin, Wind } from "lucide-react";
import Image from "next/image";
// import heroLion from "@/assets/hero-lion.jpg";

const HeroSection = () => {
    return (
        <div className="relative w-full h-full min-h-screen">
            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <Image
                    // src={heroLion}
                    src=""
                    alt="Majestic Lion"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            </motion.div>

            {/* Yellow Corner Frame */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-20 left-8 w-[300px] h-[400px] pointer-events-none z-10 hidden md:block"
            >
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    className="absolute top-0 left-0 w-1 h-full bg-yellow-500 origin-top"
                />
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                    className="absolute top-0 left-0 w-full h-1 bg-yellow-500 origin-left"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-end pb-48 px-8 lg:pb-32">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Location & Weather */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex items-center gap-8 mb-8 text-sm font-sans text-white/60"
                    >
                        <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-yellow-500" />
                            <span>London, UK</span>
                            <span className="text-white/30 ml-2">Dample 2012</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wind size={14} className="text-yellow-500" />
                            <span>50°F</span>
                            <span className="text-white/30 ml-2">Dample byrd</span>
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 max-w-2xl text-white tracking-tight"
                    >
                        Let&apos;s go wild for
                        <br />
                        wildlife
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-xl font-sans text-white/80 mb-4"
                    >
                        Pellentesque habitant morbi tristique
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="w-16 h-0.5 bg-yellow-500 mb-6 origin-left"
                    />

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="text-sm font-sans text-white/50 max-w-sm leading-relaxed"
                    >
                        Suspendisse dui purus, scelerisque at, vulputate vitae,
                        pretium mattis, nunc. Mauris eget neque at sem
                        venenatis eleifend.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
