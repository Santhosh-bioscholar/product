"use client";

import { motion } from "framer-motion";
import { TimelineAnimation } from "./oxygenation/TimelineAnimation";
import { ContentBlock } from "./oxygenation/ContentBlock";

export function Oxygenation() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background gradient */}
            <div
                className="absolute inset-0 opacity-60 bg-gradient-to-b from-[#0A2540] to-[#0B1215]"
            />

            {/* Ambient glow effects */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: "radial-gradient(circle, hsl(175 70% 50% / 0.08) 0%, transparent 70%)",
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
                    style={{
                        background: "radial-gradient(circle, hsl(145 60% 40% / 0.1) 0%, transparent 70%)",
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Content container */}
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
                    {/* Left: Timeline Animation */}
                    <motion.div
                        className="order-2 lg:order-1 flex justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <TimelineAnimation />
                    </motion.div>

                    {/* Right: Content Block */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <ContentBlock />
                    </motion.div>
                </div>
            </div>

            {/* Bottom decorative line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                    background: "linear-gradient(90deg, transparent 0%, hsl(175 70% 50% / 0.3) 50%, transparent 100%)",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
            />
        </section>
    );
}
