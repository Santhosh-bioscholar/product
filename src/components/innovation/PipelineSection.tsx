"use client";

import { useEffect, useRef, useState } from 'react';

const PipelineSection = () => {
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

    const pipelineItems = [
        {
            phase: 'Discovery',
            title: 'Advanced Algal Proteins',
            description: 'Next-generation protein structures with enhanced bioactivity profiles.',
        },
        {
            phase: 'Development',
            title: 'Precision Nutrition Platforms',
            description: 'Targeted nutritional delivery systems for species-specific optimization.',
        },
        {
            phase: 'Scaling',
            title: 'Climate-Smart Bio-Products',
            description: 'Carbon-neutral production methods for sustainable ingredient sourcing.',
        },
        {
            phase: 'Future',
            title: 'Scalable Fermentation Networks',
            description: 'Distributed bioreactor systems for global accessibility.',
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-24 md:py-0 overflow-hidden ">
            {/* Animated light trails background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div
                        key={i}
                        className="absolute h-px from-transparent via-[hsl(173_80%_35%)]/40 to-transparent animate-[drift-right_12s_linear_infinite]"
                        style={{
                            top: `${15 + i * 15}%`,
                            left: 0,
                            right: 0,
                            animationDelay: `${i * 3}s`,
                            animationDuration: `${12 + i * 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <span
                        className={`inline-block text-[hsl(0_0%_65%)] text-sm font-medium uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        What's Next
                    </span>
                    <h2
                        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Innovation
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[hsl(152_55%_42%)] to-[hsl(173_80%_35%)]">Pipeline</span>
                    </h2>
                    <p
                        className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        The future isn't a destination—it's a continuous journey. Here's where our research is heading.
                    </p>
                </div>

                {/* Pipeline timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting line - solid green as requested */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-12 w-px bg-[hsl(142_70%_45%)]/40 md:-translate-x-1/2" />

                    {pipelineItems.map((item, index) => (
                        <div
                            key={item.phase}
                            className={`relative flex items-center gap-8 mb-16 last:mb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            style={{ transitionDelay: `${300 + index * 150}ms` }}
                        >
                            {/* Timeline node */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-[#0B1215] border-2 border-[hsl(142_70%_45%)] ring-4 ring-[#0B1215]" />
                            </div>

                            {/* Content card */}
                            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <div
                                    className="relative p-6 md:p-8 rounded-2xl group border border-white/5 hover:border-[hsl(142_70%_45%)]/30 transition-all duration-500 hover:-translate-y-1"
                                    style={{
                                        background: 'linear-gradient(145deg, hsl(200 25% 8% / 0.9), hsl(185 30% 10% / 0.8))',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    {/* Phase label pill */}
                                    <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[hsl(142_70%_45%)]/10 text-[hsl(142_70%_45%)] border border-[hsl(142_70%_45%)]/20">
                                            {item.phase}
                                        </span>
                                    </div>

                                    <h3 className={`font-display text-xl md:text-2xl font-semibold mb-3 text-foreground ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-muted-foreground leading-relaxed text-sm md:text-base ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block md:w-1/2" />
                        </div>
                    ))}

                    {/* Infinite continuation indicator */}
                    <div
                        className={`text-center mt-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ transitionDelay: '900ms' }}
                    >
                        <div className="inline-flex flex-col items-center gap-3">
                            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Continuous Evolution</span>
                            <div className="flex gap-1.5">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-1 h-1 rounded-full bg-[hsl(142_70%_45%)] animate-pulse"
                                        style={{ animationDelay: `${i * 0.3}s` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PipelineSection;
