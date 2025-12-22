"use client";

import { useEffect, useRef, useState } from 'react';
import { Leaf, Dna, FlaskConical, Network, Waves } from 'lucide-react';

interface InnovationArea {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    animation: React.ReactNode;
}

const BioprocessAnimation = () => (
    <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="hsl(142 70% 45% / 0.3)"
            strokeWidth="2"
            className="animate-ring-rotate origin-center"
            style={{ transformOrigin: '60px 60px' }}
        />
        <circle
            cx="60"
            cy="60"
            r="35"
            fill="none"
            stroke="hsl(173 70% 35% / 0.4)"
            strokeWidth="1.5"
            strokeDasharray="10 5"
            className="animate-ring-rotate origin-center"
            style={{ transformOrigin: '60px 60px', animationDirection: 'reverse', animationDuration: '15s' }}
        />
        <circle
            cx="60"
            cy="60"
            r="25"
            fill="none"
            stroke="hsl(142 70% 45% / 0.5)"
            strokeWidth="1"
            className="animate-ring-rotate origin-center"
            style={{ transformOrigin: '60px 60px', animationDuration: '25s' }}
        />
        <circle cx="60" cy="60" r="8" fill="hsl(142 70% 45% / 0.3)" className="animate-pulse-soft" />
    </svg>
);

const ProteinAnimation = () => (
    <svg className="w-full h-full" viewBox="0 0 120 120">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} style={{ transform: `rotate(${angle}deg)`, transformOrigin: '60px 60px' }}>
                <circle
                    cx="60"
                    cy="20"
                    r="6"
                    fill="hsl(173 70% 35% / 0.5)"
                    className="animate-pulse-soft"
                    style={{ animationDelay: `${i * 0.3}s` }}
                />
                <line
                    x1="60"
                    y1="26"
                    x2="60"
                    y2="50"
                    stroke="hsl(142 70% 45% / 0.4)"
                    strokeWidth="1"
                    strokeDasharray="100"
                    className="animate-network-connect"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            </g>
        ))}
        <circle cx="60" cy="60" r="12" fill="hsl(142 70% 45% / 0.2)" className="animate-pulse-soft" />
        <circle cx="60" cy="60" r="6" fill="hsl(142 70% 45% / 0.4)" />
    </svg>
);

const FermentationAnimation = () => {
    const [particles] = useState(() =>
        Array.from({ length: 20 }, () => ({
            cx: 30 + Math.random() * 60,
            cy: 30 + Math.random() * 60,
            r: 2 + Math.random() * 3,
            hue: 142 + Math.random() * 30,
            lightness: 40 + Math.random() * 20,
            opacity: 0.3 + Math.random() * 0.3,
            delay: Math.random() * 4,
            duration: 4 + Math.random() * 4,
        }))
    );

    return (
        <svg className="w-full h-full" viewBox="0 0 120 120">
            {particles.map((particle, i) => (
                <circle
                    key={i}
                    cx={particle.cx}
                    cy={particle.cy}
                    r={particle.r}
                    fill={`hsl(${particle.hue} 60% ${particle.lightness}% / ${particle.opacity})`}
                    className="animate-float-slow"
                    style={{ animationDelay: `${particle.delay}s`, animationDuration: `${particle.duration}s` }}
                />
            ))}
            <ellipse
                cx="60"
                cy="60"
                rx="40"
                ry="35"
                fill="none"
                stroke="hsl(173 70% 35% / 0.2)"
                strokeWidth="1"
            />
        </svg>
    );
};

const MicrobiomeAnimation = () => (
    <svg className="w-full h-full" viewBox="0 0 120 120">
        {/* Network nodes */}
        {[
            { x: 60, y: 30 },
            { x: 30, y: 50 },
            { x: 90, y: 50 },
            { x: 40, y: 80 },
            { x: 80, y: 80 },
            { x: 60, y: 60 },
        ].map((node, i) => (
            <g key={i}>
                <circle
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    fill="hsl(142 70% 45% / 0.5)"
                    className="animate-pulse-soft"
                    style={{ animationDelay: `${i * 0.5}s` }}
                />
                {i < 5 && (
                    <line
                        x1={node.x}
                        y1={node.y}
                        x2="60"
                        y2="60"
                        stroke="hsl(173 70% 35% / 0.3)"
                        strokeWidth="1"
                        strokeDasharray="50"
                        className="animate-network-connect"
                        style={{ animationDelay: `${i * 0.3}s` }}
                    />
                )}
            </g>
        ))}
    </svg>
);

const AquacultureAnimation = () => (
    <svg className="w-full h-full" viewBox="0 0 120 120">
        {/* Flow lines */}
        {[20, 40, 60, 80, 100].map((y, i) => (
            <path
                key={i}
                d={`M 0 ${y} Q 30 ${y - 10} 60 ${y} T 120 ${y}`}
                fill="none"
                stroke={`hsl(173 70% ${35 + i * 5}% / ${0.2 + i * 0.05})`}
                strokeWidth="1"
                strokeDasharray="200"
                className="animate-network-connect"
                style={{ animationDelay: `${i * 0.4}s`, animationDuration: '3s' }}
            />
        ))}
        {/* Ecosystem circles */}
        <circle cx="30" cy="60" r="8" fill="hsl(142 70% 45% / 0.2)" className="animate-pulse-soft" />
        <circle cx="60" cy="50" r="10" fill="hsl(173 70% 35% / 0.2)" className="animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
        <circle cx="90" cy="65" r="7" fill="hsl(142 70% 45% / 0.2)" className="animate-pulse-soft" style={{ animationDelay: '1s' }} />
    </svg>
);

const innovationAreas: InnovationArea[] = [
    {
        id: 'green-white',
        icon: <Leaf className="w-6 h-6" />,
        title: 'Green-White Technology™',
        subtitle: 'Eco-Friendly Bioprocessing',
        description: 'Our proprietary bioprocessing rings transform raw algal biomass into pure, toxin-free formulations through gentle, environmentally conscious methods.',
        animation: <BioprocessAnimation />,
    },
    {
        id: 'protein',
        icon: <Dna className="w-6 h-6" />,
        title: 'Smart Protein Innovation',
        subtitle: 'Fermented Algal Protein',
        description: 'Precision fermentation unlocks high-bioavailability proteins from algae, with molecular structures optimized for maximum nutritional absorption.',
        animation: <ProteinAnimation />,
    },
    {
        id: 'fermentation',
        icon: <FlaskConical className="w-6 h-6" />,
        title: 'Fermentation & Biotransformation',
        subtitle: 'Natural Detoxification',
        description: 'Our biotransformation processes naturally remove impurities while enhancing digestibility, turning raw biomass into premium functional ingredients.',
        animation: <FermentationAnimation />,
    },
    // {
    //     id: 'microbiome',
    //     icon: <Network className="w-6 h-6" />,
    //     title: 'Microbiome & Biotics Research',
    //     subtitle: 'Gut Health & Immunity',
    //     description: 'Advanced research into algae-derived prebiotics and postbiotics supports gut health, immune function, and metabolic balance across species.',
    //     animation: <MicrobiomeAnimation />,
    // },
   
];

const InnovationAreasSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState<string | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-container">
            <div className="container mx-auto px-6">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span
                        className={`inline-block text-bio-soft text-sm font-medium uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Innovation Areas
                    </span>
                    <h2
                        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Five Pillars of
                        <span className="block gradient-text">Breakthrough Science</span>
                    </h2>
                </div>

                {/* Cards container - horizontal scroll on mobile, grid on desktop */}
                <div className="grid md:grid-cols-3 gap-8   "style={{ borderColor: 'rgba(34, 197, 94, 0.2)' }}>
                    {innovationAreas.map((area, index) => (
                        <div
                            key={area.id}
                            className={`rounded-[20px] p-12  pb-4 pt-2 border border-white/10 innovation-card min-w-[300px] md:min-w-0 flex-shrink-0 cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                } ${activeCard === area.id ? 'scale-[1.02] shadow-[0_0_40px_hsl(142_70%_45%_/_0.2)]' : ''}`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                            onMouseEnter={() => setActiveCard(area.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Animation container */}
                            <div className="w-38 h-28 mx-auto mb-6 relative">
                                <div className={`absolute inset-0 transition-opacity duration-500 ${activeCard === area.id ? 'opacity-100' : 'opacity-60'}`}>
                                    {area.animation}
                                </div>
                            </div>

                            {/* Icon badge */}
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-teal-rich/50 border border-teal-glow/20 text-bio-green">
                                {area.icon}
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-lg font-semibold text-center mb-1 text-foreground">
                                {area.title}
                            </h3>
                            <p className="text-sm text-bio-soft text-center mb-3">{area.subtitle}</p>
                            <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InnovationAreasSection;
