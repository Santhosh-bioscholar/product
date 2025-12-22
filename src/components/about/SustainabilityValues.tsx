"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// SVG-based biological animation components
const AlgaeCore = ({ reducedMotion }: { reducedMotion: boolean }) => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
            <radialGradient id="algaeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(155, 60%, 35%)" />
                <stop offset="70%" stopColor="hsl(165, 50%, 25%)" />
                <stop offset="100%" stopColor="hsl(175, 40%, 15%)" />
            </radialGradient>
            <filter id="algaeGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Central algae organism */}
        <g filter="url(#algaeGlow)">
            {/* Core membrane */}
            <ellipse
                cx="100"
                cy="100"
                rx="45"
                ry="42"
                fill="url(#algaeGradient)"
                opacity="0.9"
                className={reducedMotion ? "" : "animate-[breathe_6s_ease-in-out_infinite]"}
            />

            {/* Internal structures - chloroplasts */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const x = 100 + Math.cos((angle * Math.PI) / 180) * 22;
                const y = 100 + Math.sin((angle * Math.PI) / 180) * 20;
                return (
                    <ellipse
                        key={i}
                        cx={x}
                        cy={y}
                        rx="8"
                        ry="5"
                        fill="hsl(145, 55%, 40%)"
                        opacity="0.7"
                        className={reducedMotion ? "" : "animate-[pulse-glow_4s_ease-in-out_infinite]"}
                        style={{ animationDelay: `${i * 0.5}s` }}
                    />
                );
            })}

            {/* Nucleus */}
            <circle
                cx="100"
                cy="100"
                r="12"
                fill="hsl(160, 50%, 30%)"
                className={reducedMotion ? "" : "animate-[pulse-glow_5s_ease-in-out_infinite]"}
            />
        </g>

        {/* Outer energy field */}
        <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="hsl(165, 45%, 35%)"
            strokeWidth="1"
            strokeDasharray="8 4"
            opacity="0.4"
            className={reducedMotion ? "" : "animate-[spin_30s_linear_infinite]"}
        />
        <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="hsl(155, 40%, 30%)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
            opacity="0.3"
            className={reducedMotion ? "" : "animate-[spin_45s_linear_infinite_reverse]"}
        />
    </svg>
);

const ProteinTransformation = ({ reducedMotion }: { reducedMotion: boolean }) => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
            <linearGradient id="proteinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(155, 55%, 35%)" />
                <stop offset="50%" stopColor="hsl(165, 45%, 45%)" />
                <stop offset="100%" stopColor="hsl(180, 30%, 85%)" />
            </linearGradient>
            <filter id="proteinGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Molecular structure forming */}
        <g filter="url(#proteinGlow)">
            {/* Double helix suggestion */}
            <path
                d="M60,30 Q100,60 140,30 Q100,90 60,60 Q100,120 140,90 Q100,150 60,120 Q100,180 140,150"
                fill="none"
                stroke="url(#proteinGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                className={reducedMotion ? "" : "animate-[flow-path_8s_ease-in-out_infinite]"}
            />
            <path
                d="M140,30 Q100,60 60,30 Q100,90 140,60 Q100,120 60,90 Q100,150 140,120 Q100,180 60,150"
                fill="none"
                stroke="url(#proteinGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
                className={reducedMotion ? "" : "animate-[flow-path_8s_ease-in-out_infinite_reverse]"}
            />

            {/* Molecular bonds */}
            {[45, 75, 105, 135].map((y, i) => (
                <line
                    key={i}
                    x1="70"
                    y1={y}
                    x2="130"
                    y2={y}
                    stroke="hsl(175, 40%, 60%)"
                    strokeWidth="1.5"
                    opacity="0.5"
                    className={reducedMotion ? "" : "animate-[pulse-glow_3s_ease-in-out_infinite]"}
                    style={{ animationDelay: `${i * 0.3}s` }}
                />
            ))}

            {/* Floating nutrients */}
            {[
                { cx: 45, cy: 50 }, { cx: 155, cy: 80 }, { cx: 40, cy: 130 }, { cx: 160, cy: 150 }
            ].map((pos, i) => (
                <circle
                    key={i}
                    cx={pos.cx}
                    cy={pos.cy}
                    r="4"
                    fill="hsl(165, 50%, 50%)"
                    opacity="0.6"
                    className={reducedMotion ? "" : "animate-[float-gentle_5s_ease-in-out_infinite]"}
                    style={{ animationDelay: `${i * 0.8}s` }}
                />
            ))}
        </g>
    </svg>
);

const MultiLifeImpact = ({ reducedMotion }: { reducedMotion: boolean }) => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
            <linearGradient id="lifeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="hsl(185, 55%, 35%)" />
                <stop offset="100%" stopColor="hsl(165, 45%, 50%)" />
            </linearGradient>
        </defs>

        {/* Three interwoven life streams */}
        <g opacity="0.9">
            {/* Human health stream */}
            <path
                d="M30,180 Q50,140 70,160 Q90,130 100,100 Q110,70 100,40"
                fill="none"
                stroke="hsl(165, 50%, 45%)"
                strokeWidth="4"
                strokeLinecap="round"
                className={reducedMotion ? "" : "animate-[flow-up_6s_ease-in-out_infinite]"}
            />

            {/* Animal/Aquaculture stream */}
            <path
                d="M100,180 Q110,150 100,120 Q90,90 100,60 Q110,30 100,10"
                fill="none"
                stroke="hsl(175, 45%, 50%)"
                strokeWidth="4"
                strokeLinecap="round"
                className={reducedMotion ? "" : "animate-[flow-up_6s_ease-in-out_infinite]"}
                style={{ animationDelay: "0.5s" }}
            />

            {/* Environmental stream */}
            <path
                d="M170,180 Q150,140 130,160 Q110,130 100,100 Q90,70 100,40"
                fill="none"
                stroke="hsl(155, 55%, 40%)"
                strokeWidth="4"
                strokeLinecap="round"
                className={reducedMotion ? "" : "animate-[flow-up_6s_ease-in-out_infinite]"}
                style={{ animationDelay: "1s" }}
            />

            {/* Convergence point */}
            <circle
                cx="100"
                cy="100"
                r="15"
                fill="none"
                stroke="url(#lifeGradient)"
                strokeWidth="2"
                className={reducedMotion ? "" : "animate-[breathe_4s_ease-in-out_infinite]"}
            />
            <circle
                cx="100"
                cy="100"
                r="8"
                fill="hsl(170, 50%, 45%)"
                className={reducedMotion ? "" : "animate-[pulse-glow_3s_ease-in-out_infinite]"}
            />
        </g>

        {/* Rising particles - vitality indicators */}
        {[20, 50, 80, 120, 150, 180].map((x, i) => (
            <circle
                key={i}
                cx={x}
                cy={180 - ((i * 25) % 160)}
                r="3"
                fill="hsl(165, 45%, 55%)"
                opacity="0.5"
                className={reducedMotion ? "" : "animate-[rise-fade_4s_ease-out_infinite]"}
                style={{ animationDelay: `${i * 0.4}s` }}
            />
        ))}
    </svg>
);

const CircularContinuity = ({ reducedMotion }: { reducedMotion: boolean }) => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
            <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(155, 50%, 40%)" />
                <stop offset="50%" stopColor="hsl(165, 45%, 50%)" />
                <stop offset="100%" stopColor="hsl(155, 50%, 40%)" />
            </linearGradient>
        </defs>

        {/* Infinity-like flow pattern */}
        <g opacity="0.85">
            <path
                d="M100,100 C150,50 180,80 160,100 C140,120 140,140 100,140 C60,140 60,120 40,100 C20,80 50,50 100,100"
                fill="none"
                stroke="url(#cycleGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                className={reducedMotion ? "" : "animate-[draw-loop_12s_ease-in-out_infinite]"}
            />

            {/* Outer cycle ring */}
            <circle
                cx="100"
                cy="100"
                r="75"
                fill="none"
                stroke="hsl(160, 40%, 35%)"
                strokeWidth="1.5"
                strokeDasharray="12 6"
                opacity="0.4"
                className={reducedMotion ? "" : "animate-[spin_20s_linear_infinite]"}
            />

            {/* Flow particles on the path */}
            {[0, 72, 144, 216, 288].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 100 + Math.cos(rad) * 50;
                const y = 100 + Math.sin(rad) * 40;
                return (
                    <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="hsl(165, 50%, 50%)"
                        opacity="0.7"
                        className={reducedMotion ? "" : "animate-[orbit-flow_8s_linear_infinite]"}
                        style={{ animationDelay: `${i * 1.6}s` }}
                    />
                );
            })}

            {/* Central stability indicator */}
            <circle
                cx="100"
                cy="100"
                r="20"
                fill="hsl(160, 45%, 30%)"
                opacity="0.8"
                className={reducedMotion ? "" : "animate-[breathe_5s_ease-in-out_infinite]"}
            />
            <circle
                cx="100"
                cy="100"
                r="10"
                fill="hsl(155, 55%, 40%)"
                className={reducedMotion ? "" : "animate-[pulse-glow_4s_ease-in-out_infinite]"}
            />
        </g>
    </svg>
);

// Flow connector between stages
const FlowConnector = ({ reducedMotion, vertical = false }: { reducedMotion: boolean; vertical?: boolean }) => (
    <div className={`flex ${vertical ? "flex-col h-16" : "w-16 lg:w-24"} items-center justify-center`}>
        <svg
            viewBox={vertical ? "0 0 20 60" : "0 0 60 20"}
            className={vertical ? "h-full w-6" : "w-full h-6"}
        >
            <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(165, 45%, 40%)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="hsl(165, 50%, 50%)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(165, 45%, 40%)" stopOpacity="0.3" />
                </linearGradient>
            </defs>
            {vertical ? (
                <>
                    <line x1="10" y1="5" x2="10" y2="55" stroke="url(#flowGradient)" strokeWidth="2" />
                    <circle
                        cx="10"
                        cy="30"
                        r="3"
                        fill="hsl(165, 50%, 50%)"
                        className={reducedMotion ? "" : "animate-[flow-dot-vertical_2s_ease-in-out_infinite]"}
                    />
                </>
            ) : (
                <>
                    <line x1="5" y1="10" x2="55" y2="10" stroke="url(#flowGradient)" strokeWidth="2" />
                    <circle
                        cx="30"
                        cy="10"
                        r="3"
                        fill="hsl(165, 50%, 50%)"
                        className={reducedMotion ? "" : "animate-[flow-dot_2s_ease-in-out_infinite]"}
                    />
                </>
            )}
        </svg>
    </div>
);

// Stage label component
const StageLabel = ({ title, subtitle, delay = 0 }: { title: string; subtitle: string; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="text-center mt-4"
    >
        <h3 className="text-sm lg:text-base font-medium text-foreground/90">{title}</h3>
        <p className="text-xs lg:text-sm text-muted-foreground mt-1">{subtitle}</p>
    </motion.div>
);

export const SustainabilityValues = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const prefersReducedMotion = useReducedMotion();
    const reducedMotion = prefersReducedMotion ?? false;

    const stages = [
        {
            id: "algae",
            title: "Algae Intelligence",
            subtitle: "Nature's ancient wisdom",
            component: AlgaeCore,
        },
        {
            id: "protein",
            title: "Smart Protein",
            subtitle: "Green-White Technology™",
            component: ProteinTransformation,
        },
        {
            id: "life",
            title: "Multi-Life Impact",
            subtitle: "Human • Animal • Ecosystem",
            component: MultiLifeImpact,
        },
        {
            id: "cycle",
            title: "Generational Continuity",
            subtitle: "Circular bio-economy",
            component: CircularContinuity,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative  bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden"
        >
            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-primary/70 mb-3 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
            Global Generational Impact
          </p>
          <h2 className="text-2xl lg:text-4xl font-semibold text-foreground mb-4">
            From Algae to a{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Better Future
            </span>
          </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
                        Smart protein technology that improves human, animal, and planetary health
                        for this generation and beyond.
                    </p>
                </motion.div>

                {/* Desktop: Horizontal flow */}
                <div className="hidden lg:flex items-start justify-center gap-0">
                    {stages.map((stage, index) => (
                        <motion.div
                            key={stage.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex items-center"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 xl:w-40 xl:h-40">
                                    <stage.component reducedMotion={reducedMotion} />
                                </div>
                                <StageLabel title={stage.title} subtitle={stage.subtitle} delay={index * 0.1} />
                            </div>
                            {index < stages.length - 1 && <FlowConnector reducedMotion={reducedMotion} />}
                        </motion.div>
                    ))}
                </div>

                {/* Mobile: Vertical stacked flow */}
                <div className="lg:hidden flex flex-col items-center gap-2">
                    {stages.map((stage, index) => (
                        <motion.div
                            key={stage.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-28 h-28 sm:w-32 sm:h-32">
                                <stage.component reducedMotion={reducedMotion} />
                            </div>
                            <StageLabel title={stage.title} subtitle={stage.subtitle} />
                            {index < stages.length - 1 && <FlowConnector reducedMotion={reducedMotion} vertical />}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom tagline */}
              
            </div>
        </section>
    );
};

export interface SceneData {
    id: number;
    title: string;
    subtitle: string;
    feeling: string;
}

export const scenes: SceneData[] = [
    {
        id: 0,
        title: "Nature's Intelligence",
        subtitle: "Living algae cells pulse with ancient wisdom",
        feeling: "Ancient • Intelligent • Trust",
    },
    {
        id: 1,
        title: "Smart Transformation",
        subtitle: "Molecular precision creates stable proteins",
        feeling: "Science • Safety • Precision",
    },
    {
        id: 2,
        title: "Life in Balance",
        subtitle: "Ecosystems thrive in clear waters",
        feeling: "Health • Balance • Vitality",
    },
    {
        id: 3,
        title: "Planetary Care",
        subtitle: "Oxygen flows, carbon cycles restored",
        feeling: "Responsibility • Vision • Care",
    },
    {
        id: 4,
        title: "Future Sustained",
        subtitle: "A circular economy without waste",
        feeling: "Future-ready • Circular • Confident",
    },
];

interface SceneOverlayProps {
    currentScene: number;
}

export const SceneOverlay = ({ currentScene }: SceneOverlayProps) => {
    const scene = scenes[currentScene];

    return (
        <>
            {/* Top Left - Brand */}
            <div className="absolute top-8 left-8 z-20">
                <h1 className="text-lg font-medium tracking-tight">
                    <span className="gradient-text">Aroora</span>
                    <span className="text-foreground/70 ml-1 font-light">Biotech</span>
                </h1>
                <p className="text-[10px] text-muted-foreground/60 tracking-[0.15em] uppercase mt-1">
                    From Algae to a Better Planet
                </p>
            </div>

            {/* Center Left - Scene Info */}
            <div
                className="absolute left-8 top-1/2 -translate-y-1/2 z-20 max-w-xs"
                key={currentScene}
                style={{ animation: "fade-in-up 0.8s ease-out forwards" }}
            >
                <div className="scientific-label mb-3 text-primary/70">
                    Scene {currentScene + 1} of 5
                </div>
                <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2 leading-tight">
                    {scene.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {scene.subtitle}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
                    {scene.feeling.split(" • ").map((word, i) => (
                        <span key={i} className="flex items-center gap-2">
                            {i > 0 && <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />}
                            {word}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Center - Scene Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {scenes.map((_, index) => (
                    <div
                        key={index}
                        className={cn(
                            "scene-dot",
                            index === currentScene && "active",
                            index < currentScene && "past",
                            index > currentScene && "future"
                        )}
                    />
                ))}
            </div>

            {/* Bottom Right - Vision Statement */}
            <div className="absolute bottom-8 right-8 z-20 max-w-[200px] text-right hidden md:block">
                <p className="text-[11px] text-muted-foreground/40 italic leading-relaxed">
                    Quietly building a better future—
                    not selling promises, but shaping life.
                </p>
            </div>

            {/* Ambient gradients */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* Top sunlight */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(40 60% 70% / 0.06) 0%, transparent 60%)"
                    }}
                />
                {/* Left fade for text readability */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, hsl(210 45% 4% / 0.7) 0%, transparent 40%)"
                    }}
                />
                {/* Bottom fade */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(0deg, hsl(210 45% 4% / 0.8) 0%, transparent 30%)"
                    }}
                />
            </div>
            <style>
                
            </style>
        </>
    );
};
