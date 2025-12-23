"use client";

import { useEffect, useRef, useState } from 'react';
import BioParticles from './BioParticles';

const HeroBanner = () => {
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

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: 'var(--gradient-hero)' }}
        >
            {/* Animated background layers */}
            <BioParticles count={25} />

            {/* Subtle algae texture overlay */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="algae-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="8" fill="none" stroke="hsl(173 70% 35% / 0.3)" strokeWidth="0.5" />
                            <circle cx="10" cy="10" r="4" fill="hsl(142 70% 45% / 0.1)" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#algae-pattern)" />
                </svg>
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-teal-glow/20 to-transparent blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-indigo-glow/15 to-transparent blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-bio-green/10 to-transparent blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* Eyebrow */}
                <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-glow/30 bg-teal-deep/50 backdrop-blur-sm mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="w-2 h-2 rounded-full bg-bio-green animate-pulse" />
                    <span className="text-sm font-medium text-bio-soft tracking-wide uppercase">Innovation Hub</span>
                </div>

                {/* Main heading */}
                <h1
                    className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="block text-foreground">Nature</span>
                    <span className="block gradient-text">→ Science →</span>
                    <span className="block text-foreground">Future</span>
                </h1>

                {/* Subtitle */}
                <p
                    className={`max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    Powered by nature. Perfected by science. At Aroora Biotech, algae isn't just an ingredient—it's the foundation of responsible innovation.
                </p>

                {/* Scroll indicator */}
                <div
                    className={`flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Explore</span>
                    <div className="w-px h-16 bg-gradient-to-b from-teal-glow/50 to-transparent animate-pulse" />
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};

export default HeroBanner;
