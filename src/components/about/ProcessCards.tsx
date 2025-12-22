"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProcessCard } from "./ProcessCard";
import { Connector } from "./Connector";

const processSteps = [
    {
        number: "01",
        title: "Human Health",
        description: "Clinically evaluated algal proteins and nutraceuticals enhance nutrition, immunity, detoxification, and long-term wellness.",
        flowType: "inward" as const,
    },
    {
        number: "02",
        title: "Animal & Aquaculture Health",
        description: "Sustainable feed solutions improve growth, immunity, and bio-economic value while reducing environmental stress.",
        flowType: "circular" as const,
    }, 
    {
        number: "03",
        title: "Environmental Sustainability",
        description: "Carbon-negative bioprocesses that consume CO₂ and release oxygen, restoring balance to fragile ecosystems.",
        flowType: "loop" as const,
    },
    {
        number: "04",
        title: "Global Responsibility",
        description: "From local ecosystems to global food systems, Aroora Biotech delivers science-driven sustainability without borders.",
        flowType: "upward" as const,
    },
];

export const ProcessCards = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4">

                {/* Desktop Layout */}
                <div className="hidden md:flex items-stretch justify-center gap-0">
                    {processSteps.map((step, index) => (
                        <div key={step.number} className="flex items-center">
                            <div
                                className="w-64 lg:w-[245px] lg:h-[230px] cursor-pointer"
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                <ProcessCard
                                    number={step.number}
                                    title={step.title}
                                    description={step.description}
                                    isActive={activeStep === index}
                                    index={index}
                                    flowType={step.flowType}
                                />
                            </div>
                            {index < processSteps.length - 1 && (
                                <Connector isActive={activeStep >= index} index={index} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-4">
                    {processSteps.map((step, index) => (
                        <div key={step.number}>
                            <div
                                onClick={() => setActiveStep(index)}
                                className="cursor-pointer"
                            >
                                <ProcessCard
                                    number={step.number}
                                    title={step.title}
                                    description={step.description}
                                    isActive={activeStep === index}
                                    index={index}
                                    flowType={step.flowType}
                                />
                            </div>
                            {index < processSteps.length - 1 && (
                                <div className="flex justify-center py-2">
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.3 }}
                                        className={`w-px h-8 origin-top ${activeStep >= index
                                            ? "bg-gradient-to-b from-[hsl(var(--process-teal))]/60 to-[hsl(var(--process-teal))]/20"
                                            : "bg-border"
                                            }`}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Progress indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center gap-2 mt-10"
                >
                    {processSteps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeStep === index
                                ? "bg-[hsl(var(--process-teal))] w-6"
                                : "bg-border hover:bg-muted-foreground/50"
                                }`}
                            aria-label={`Go to step ${index + 1}`}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
