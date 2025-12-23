"use client";

import { useEffect, useRef, useState } from 'react';
import AlgaeCells from './AlgaeCells';

const PhilosophySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const principles = [
        {
            title: 'Nature-Led Discovery',
            description: 'Nature already holds powerful technologies. We listen, learn, and adapt what evolution has perfected over millennia.',
        },
        {
            title: 'Safety First Innovation',
            description: 'Every breakthrough must prove its safety before its potential. We never take shortcuts with health or environment.',
        },
        {
            title: 'Sustainable by Design',
            description: 'True innovation improves the world it enters. Our processes regenerate rather than deplete.',
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden ">
            {/* Background animation */}
            <AlgaeCells count={6} className="opacity-30" />

            {/* Decorative SVG */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10" viewBox="0 0 400 400">
                    <circle
                        cx="200"
                        cy="200"
                        r="150"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="0.5"
                        className="animate-[spin_40s_linear_infinite]"
                    />
                    <circle
                        cx="200"
                        cy="200"
                        r="120"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="0.3"
                        className="animate-[spin_30s_linear_infinite_reverse]"
                    />
                    <circle
                        cx="200"
                        cy="200"
                        r="180"
                        fill="none"
                        stroke="#5b21b6"
                        strokeWidth="0.3"
                        className="animate-[spin_50s_linear_infinite]"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <span
                        className={`inline-block text-[#22c55e] text-sm font-medium uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Our Philosophy
                    </span>
                    <h2
                        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Natural Intelligence
                        <span className="block text-[#ccfbf1]">Awakening</span>
                    </h2>
                    <p
                        className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        We believe the most profound breakthroughs come from understanding, not conquering, nature. Algae has thrived for billions of years—our role is to unlock its wisdom responsibly.
                    </p>
                </div>

                {/* Principles grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {principles.map((principle, index) => (
                        <div
                            key={principle.title}
                            className={`group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-[#0c1215] to-[#12181b] text-center transition-all duration-700 hover:-translate-y-1 hover:border-[#22c55e]/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                transitionDelay: `${300 + index * 150}ms`,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                            }}
                        >
                            {/* Minimal Dot Icon with robust HEX styles and z-index */}
                            <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                {/* Outer ring */}
                                <div className="absolute inset-0 rounded-full border border-white/10" style={{ borderColor: 'rgba(34, 197, 94, 0.2)' }} />
                                {/* Inner glow - Always visible */}
                                <div className="absolute inset-0 rounded-full transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: 'rgba(34, 197, 94, 0.05)' }} />
                                {/* The Dot - z-10 added for stack safety */}
                                <div
                                    className="relative rounded-full z-10"
                                    style={{
                                        width: '8px',
                                        height: '8px',
                                        backgroundColor: '#22c55e',
                                        boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)'
                                    }}
                                />
                            </div>

                            <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                                {principle.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {principle.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
