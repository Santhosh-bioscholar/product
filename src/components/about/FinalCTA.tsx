"use client";

import React from "react";
import { motion } from "framer-motion";

export const FinalCTA: React.FC = () => {
    return (
        <section className="relative w-full py-24 bg-background dark:bg-background-dark overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="layout-content-container max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-16 text-center shadow-2xl overflow-hidden relative group">
                    {/* Animated glow on hover */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            Join the Future
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-foreground">
                            Ready to transform <br />
                            <span className="text-primary">your biotechnology path?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-sans font-light">
                            Join hundreds of innovative teams using our platform to accelerate their research and impact. Experience the power of algae-driven technology.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
                                Get Started Now
                            </button>
                            <button className="px-10 py-4 bg-transparent border border-border/50 text-foreground rounded-xl font-bold text-lg hover:bg-muted/50 transition-all">
                                Contact Our Team
                            </button>
                        </div>
                    </motion.div>

                    {/* Abstract background graphics */}
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 blur-3xl rounded-full" />
                </div>
            </div>
        </section>
    );
};
