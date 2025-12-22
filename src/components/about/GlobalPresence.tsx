"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
    AlgaeSourceIcon,
    BioprocessIcon,
    SafeNutritionIcon,
    EcosystemIcon,
    ContinuityIcon,
} from "./ProcessIcons";
import { FlowConnector, FlowConnectorMobile } from "./FlowConnector";
import ImpactCard from "./ImpactCard";
import ImpactSection from "./ImpactSection";

const processSteps = [
    {
        icon: AlgaeSourceIcon,
        label: "Algae Source",
        description: "Nature-first innovation",
    },
    {
        icon: BioprocessIcon,
        label: "Green Bioprocess",
        description: "Clean transformation",
    },
    {
        icon: SafeNutritionIcon,
        label: "Safe Nutrition",
        description: "Human & animal safety",
    },
    {
        icon: EcosystemIcon,
        label: "Ecosystem Balance",
        description: "Environmental harmony",
    },
    {
        icon: ContinuityIcon,
        label: "Generational Continuity",
        description: "Long-term global impact",
    },
];

export const ImpactWithoutBordersSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen gradient-biotech  overflow-hidden"
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="">
                    {/* LEFT SIDE - Animated Process Flow */}
                  

                    {/* RIGHT SIDE - Content */}
                    <div className="order-1 lg:order-2 lg:pl-12">
                        {/* Label */}

                            <motion.div
                className="text-center  px-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                transition={{ duration: 0.8 }}
            > <motion.p
          className="text-primary text-sm tracking-[0.3em] uppercase font-display mb-6 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
         Global Reach
        </motion.p>
      <motion.span
                    className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    Earth&apos;s Greatest Transformation
                </motion.span>

                {/* Title */}
                 
          <h2 className="text-2xl lg:text-4xl font-semibold text-foreground mb-4">
             Impact{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
             Without Borders
            </span>
          </h2>
                
                <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                    Our algae-based biotechnology adapts seamlessly across ecosystems,
                            improving human health, animal nutrition, and environmental
                            resilience without compromising safety or sustainability.
                </p>
            </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                           
                        </motion.div>

                        {/* Key points */}
                     
                    </div>
                   <ImpactSection/>
                </div>
            </div>
        </section>
    );
};

export default ImpactWithoutBordersSection;

// Keep the old GlobalPresence export for backward compatibility
export const GlobalPresence = ImpactWithoutBordersSection;

