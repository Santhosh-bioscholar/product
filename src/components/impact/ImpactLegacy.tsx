"use client";

import { FadeIn } from "../animations/FadeIn";

export function ImpactLegacy() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <FadeIn direction="up">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-green-400 uppercase mb-4">Our Heritage</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        The Great Oxygenation Legacy
                    </h3>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        Just as ancient algae transformed a hostile Earth into a habitable planet, we are leveraging the same biological mechanisms to reverse modern environmental damage. Our localized oxygenation technologies improve water quality and restore biodiversity in aquatic systems.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}

