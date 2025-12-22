"use client";

import { FadeIn } from "../animations/FadeIn";
import { Activity, ShieldCheck, HeartPulse } from "lucide-react";

export function HumanImpact() {
    return (
        <section className="py-24 px-6 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <FadeIn direction="right">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
                            Impact on <br />
                            <span className="text-[#0AB3A3]">Human Health</span>
                        </h2>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        Our biotransformation products for human nutrition are designed to enhance gut microbiome diversity, boost immunity, and provide highly bioavailable nutrients without the side effects of synthetic alternatives.
                    </p>

                    <div className="flex flex-col gap-4">
                        {[
                            { icon: Activity, text: "Enhanced Bioavailability" },
                            { icon: ShieldCheck, text: "Immune System Support" },
                            { icon: HeartPulse, text: "Gut Microbiome Balance" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                                <item.icon className="w-6 h-6 text-blue-400" />
                                <span className="text-white font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                <FadeIn direction="left" delay={0.2} className="relative h-full min-h-[400px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                    {/* Visual Placeholder for Human Health Data/Imagery */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white/20 font-bold text-2xl">Human Health Analytics Visualization</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

