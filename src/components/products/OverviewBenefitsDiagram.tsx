import React from 'react';
import { motion } from 'framer-motion';
import { Benefit } from '@/types/product';
import * as Icons from 'lucide-react';

interface OverviewBenefitsDiagramProps {
    benefits: Benefit[];
    productName: string;
}

const OverviewBenefitsDiagram: React.FC<OverviewBenefitsDiagramProps> = ({ benefits, productName }) => {
    // We'll take the first 4 benefits to match the visual style of a focused diagram
    const displayBenefits = benefits.slice(0, 4);

    return (
        <div className="relative w-full aspect-square flex items-center justify-center min-h-[500px] right-60">
            {/* Central Hub */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="relative z-20 w-32 h-32 rounded-full bg-white dark:bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center p-4 border border-zinc-100 dark:border-zinc-800"
            >
                <div className="mb-2 p-2 bg-primary/10 rounded-full text-primary">
                    <Icons.TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-foreground">{productName} Benefits</h3>
            </motion.div>

            {/* Orbit Ring */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 rounded-full border border-dashed border-zinc-200 dark:border-zinc-800 w-[80%] h-[80%] m-auto"
            />

            {/* Benefit Nodes */}
            <div className="absolute inset-0">
                {displayBenefits.map((benefit, index) => {
                    // Position calculations for a semi-circle or distributed circle
                    // Let's place them on the right side arc for this design
                    // Angles: -60, -20, 20, 60 degrees from the right center (0 is right)
                    const angleStep = 45;
                    const startAngle = -67.5;
                    const angle = startAngle + (index * angleStep);
                    const angleRad = (angle * Math.PI) / 180;
                    const radius = 260; // Distance from center

                    const x = Math.cos(angleRad) * radius;
                    const y = Math.sin(angleRad) * radius;

                    // Lucide icon dynamic lookup
                    const IconComponent = (Icons as any)[benefit.icon] || Icons.Star;

                    return (
                        <motion.div
                            key={benefit.id}
                            initial={{ opacity: 0, x: 0, y: 0 }}
                            whileInView={{ opacity: 1, x: x, y: y }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            className="absolute top-1/2 left-1/2 w-96 -mt-10 -ml-4"
                            style={{
                                // We initially position at center, animate to x, y
                            }}
                        >
                            <div className="flex items-center gap-4 group">
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-full bg-white dark:bg-zinc-900 shadow-lg border border-zinc-100 dark:border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <IconComponent className="w-8 h-8" />
                                        </div>
                                    </div>
                                    {/* Connector line to center - simplified as absolute div behind */}
                                </div>

                                <div className="flex-1">
                                    <h4 className="font-bold text-foreground text-xl">{benefit.title}</h4>
                                    <p className="text-base text-muted-foreground line-clamp-2">{benefit.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default OverviewBenefitsDiagram;
