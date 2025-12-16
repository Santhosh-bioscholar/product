"use client";

import { FadeIn } from "../animations/FadeIn";
import { ShieldCheck, Recycle, Microscope, HeartHandshake } from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Safety First",
        desc: "Rigorous toxicological testing ensures 0% side effects.",
    },
    {
        icon: Recycle,
        title: "Circular Economy",
        desc: "Transforming waste CO₂ into valuable protein biomass.",
    },
    {
        icon: Microscope,
        title: "Scientific Rigor",
        desc: "Clinically proven formulations backed by years of research.",
    },
    {
        icon: HeartHandshake,
        title: "Ethical Sourcing",
        desc: "Sustainable production that respects marine ecosystems.",
    },
];

export function SustainabilityValues() {
    return (
        <section className="py-24 px-6 bg-[#0A2540] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0AB3A3]/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Values</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide our innovation and impact.</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <value.icon className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {value.desc}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
