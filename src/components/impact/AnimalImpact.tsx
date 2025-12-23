"use client";

import { FadeIn } from "../animations/FadeIn";
import { Fish, Sprout, Anchor } from "lucide-react";

export function AnimalImpact() {
    return (
        <section className="py-24 px-6 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <FadeIn direction="right" className="order-2 md:order-1 relative h-full min-h-[400px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                    {/* Visual Placeholder for Animal Health Data/Imagery */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white/20 font-bold text-2xl">Aquaculture Ecosystem Visualization</p>
                    </div>
                </FadeIn>

                <FadeIn direction="left" className="order-1 md:order-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Impact on <br />
                        <span className="text-green-400">Animal & Aquaculture</span>
                    </h2>

                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        We revolutionize animal food with algae-derived proteins and probiotics that improve growth rates, disease resistance, and food conversion ratios, all while reducing the environmental footprint of farming.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: Fish, title: "Healthy Growth", desc: "Optimized FCR" },
                            { icon: Sprout, title: "Disease Resistance", desc: "Natural antibiotics" },
                            { icon: Anchor, title: "Water Quality", desc: "Reduced waste" },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                <item.icon className="w-8 h-8 text-green-400 mb-3" />
                                <h4 className="text-white font-bold">{item.title}</h4>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

