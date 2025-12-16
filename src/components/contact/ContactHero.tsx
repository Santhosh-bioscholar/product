"use client";

import { FadeIn } from "../animations/FadeIn";

export function ContactHero() {
    return (
        <section className="py-24 pt-32 px-6 bg-[#0A2540] text-center">
            <FadeIn direction="up">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Get in <span className="text-[#0FA57D]">Touch</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Interested in sustainable biotech solutions? We'd love to hear from you.
                </p>
            </FadeIn>
        </section>
    );
}
