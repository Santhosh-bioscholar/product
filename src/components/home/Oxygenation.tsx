"use client";

import { motion } from "framer-motion";
import { TimelineAnimation } from "./oxygenation/TimelineAnimation";
import { ContentBlock } from "./oxygenation/ContentBlock";

export function Oxygenation() {
    return (
        <section className="relative pb-12 min-h-[80vh] w-full overflow-hidden bg-[#131313]">

            {/* Content container */}
            <div className="relative z-10 container mx-auto px-5 py-16 md:py-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-1 items-center min-h-[80vh]">
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

