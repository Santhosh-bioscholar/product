"use client";

import { useEffect, useRef, useState } from 'react';
import { Heart, Fish, Leaf } from 'lucide-react';

const WhyItMattersSection = () => {
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

    const impacts = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Human Vitality',
            description: 'Safer nutrition pathways that enhance wellbeing without compromise.',
            metrics: ['Cleaner ingredients', 'Higher bioavailability', 'Reduced allergens'],
            accentColor: 'hsl(142 70% 45%)', // Bio-green
        },
        {
            icon: <Fish className="w-8 h-8" />,
            title: 'Animal & Aquatic Balance',
            description: 'Healthier livestock and aquaculture through nature-aligned nutrition.',
            metrics: ['Antibiotic-free systems', 'Improved immunity', 'Sustainable growth'],
            accentColor: 'hsl(173 70% 35%)', // Teal-glow
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: 'Environmental Harmony',
            description: 'Regenerative processes that give back more than they take.',
            metrics: ['Reduced chemical dependency', 'Carbon-conscious', 'Circular systems'],
            accentColor: 'hsl(142 70% 45%)',
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-[hsl(185_30%_10%)]/20">
            {/* Background animation - three interconnected systems */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                    {/* Connection lines between the three systems */}
                    <path
                        d="M 200 300 Q 350 200 500 300 Q 650 400 800 300"
                        fill="none"
                        stroke="hsl(173 70% 35%)"
                        strokeWidth="1"
                        strokeDasharray="500"
                        className={`${isVisible ? 'animate-[network-connect_2s_ease-in-out_infinite]' : ''}`}
                        style={{ animationDuration: '4s' }}
                    />

                    {/* Human system */}
                    <circle cx="200" cy="300" r="80" fill="none" stroke="hsl(142 70% 45%)" strokeWidth="0.5" className="animate-[pulse_3s_ease-in-out_infinite]" />
                    <circle cx="200" cy="300" r="60" fill="hsl(142 70% 45% / 0.05)" className="animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />

                    {/* Animal/Aquatic system */}
                    <circle cx="500" cy="300" r="90" fill="none" stroke="hsl(173 70% 35%)" strokeWidth="0.5" className="animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
                    <circle cx="500" cy="300" r="65" fill="hsl(173 70% 35% / 0.05)" className="animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />

                    {/* Environmental system */}
                    <circle cx="800" cy="300" r="75" fill="none" stroke="hsl(245 50% 40%)" strokeWidth="0.5" className="animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
                    <circle cx="800" cy="300" r="55" fill="hsl(245 50% 40% / 0.05)" className="animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '2.5s' }} />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <span
                        className={`inline-block text-[hsl(0_0%_65%)] text-sm font-medium uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Why It Matters
                    </span>
                    <h2
                        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Increasing Goodness
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[hsl(152_55%_42%)] via-[hsl(180_35%_35%)] to-[hsl(152_55%_50%)]">Across All Life</span>
                    </h2>
                    <p
                        className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        True innovation creates ripples of positive impact. Our work improves outcomes for humans, animals, and the environment—together, not in competition.
                    </p>
                </div>

                {/* Impact cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {impacts.map((impact, index) => (
                        <div
                            key={impact.title}
                            className={`group relative overflow-hidden rounded-2xl p-8 backdrop-blur-md transition-all duration-700 border border-white/10 hover:-translate-y-1 hover:border-[hsl(152_55%_42%)]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_40px_rgba(20,184,166,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                transitionDelay: `${300 + index * 150}ms`,
                                background: 'linear-gradient(135deg, hsl(200 25% 8% / 0.95) 0%, hsl(185 30% 10% / 0.9) 50%, hsl(200 25% 8% / 0.95) 100%)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
                            }}
                        >
                            {/* Card Grain Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
                            />

                            {/* Icon with glow */}
                            <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-all duration-500">
                                <div className="absolute inset-0 rounded-2xl bg-[hsl(185_30%_15%)]/30 border border-[hsl(173_70%_35%)]/20" />
                                <div className="relative z-10 text-[hsl(152_55%_42%)]">
                                    {impact.icon}
                                </div>
                            </div>

                            <h3 className="font-display text-xl font-semibold text-center mb-3 text-foreground">
                                {impact.title}
                            </h3>
                            <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                                {impact.description}
                            </p>

                            {/* Metrics list */}
                            <ul className="space-y-2">
                                {impact.metrics.map((metric, i) => (
                                    <li
                                        key={metric}
                                        className={`flex items-center gap-3 text-sm text-muted-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                            }`}
                                        style={{ transitionDelay: `${500 + index * 150 + i * 100}ms` }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(152_55%_42%)]/60 group-hover:bg-[hsl(152_55%_42%)] transition-colors duration-500" />
                                        {metric}
                                    </li>
                                ))}
                            </ul>

                            {/* Stabilizing indicator */}
                            <div className="mt-6 pt-6 border-t border-border/30">
                                <div className="flex items-center justify-center gap-2 text-xs text-[hsl(0_0%_65%)]">
                                    <div className="w-2 h-2 rounded-full bg-[hsl(152_55%_42%)]/50 animate-pulse" />
                                    <span>Balanced & Stable</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final statement */}
                <div
                    className={`max-w-2xl mx-auto text-center mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    style={{ transitionDelay: '900ms' }}
                >
                    <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground/90 leading-relaxed">
                        "our company doesn't rush innovation—
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(152_55%_42%)] via-[hsl(180_35%_35%)] to-[hsl(152_55%_50%)]"> they build it responsibly</span>, guided by nature and proven by science."
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default WhyItMattersSection;
