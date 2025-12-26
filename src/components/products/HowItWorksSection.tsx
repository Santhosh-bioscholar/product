import { motion, useInView } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { ProductData } from '@/types/product';
import { staggerContainer, staggerItem, stepActive } from '@/lib/animations';

interface HowItWorksSectionProps {
    product: ProductData;
}

export const HowItWorksSection = ({ product }: HowItWorksSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: '-20%' });
    const [activeStep, setActiveStep] = useState(0);

    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName];
        return Icon || LucideIcons.Circle;
    };

    // Auto-progress through steps when in view
    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setActiveStep((prev) =>
                prev < product.howItWorks.steps.length - 1 ? prev + 1 : 0
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [isInView, product.howItWorks.steps.length]);

    return (
        <section className="relative py-32 overflow-hidden" ref={containerRef}>
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% 50%, hsl(var(--primary) / 0.06) 0%, transparent 50%)`,
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-20"
                >
                    <motion.span
                        variants={staggerItem}
                        className="text-primary text-sm font-semibold tracking-widest uppercase"
                    >
                        {product.howItWorks.subtitle}
                    </motion.span>
                    <motion.h2
                        variants={staggerItem}
                        className="text-4xl md:text-5xl font-bold tracking-tight mt-4"
                    >
                        {product.howItWorks.title}
                    </motion.h2>
                </motion.div>

                {/* Steps Pipeline */}
                <div className="max-w-7xl mx-auto">
                    <div className="relative">
                        {/* Connecting line - Horizontal on md, Vertical on mobile */}
                        <div className="absolute left-8 md:left-0 md:top-8 top-0 bottom-0 md:bottom-auto md:w-full md:h-px w-px bg-transparent -z-0">
                            {/* Desktop Horizontal Line Container - constrained to step centers */}
                            <div className="hidden md:block absolute top-0 h-px bg-border z-0" style={{ left: '12.5%', right: '12.5%' }}>
                                <motion.div
                                    className="absolute top-0 left-0 bg-gradient-to-r from-primary via-primary to-transparent h-full"
                                    style={{
                                        boxShadow: '0 0 10px hsl(var(--primary) / 0.5)',
                                    }}
                                    initial={{ width: '0%' }}
                                    animate={{
                                        width: `${(activeStep / (product.howItWorks.steps.length - 1)) * 100}%`
                                    }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                />
                            </div>

                            {/* Mobile Vertical Line Container */}
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border">
                                <motion.div
                                    className="absolute top-0 left-0 bg-gradient-to-b from-primary via-primary to-transparent w-full"
                                    style={{
                                        boxShadow: '0 0 10px hsl(var(--primary) / 0.5)',
                                    }}
                                    initial={{ height: '0%' }}
                                    animate={{
                                        height: `${((activeStep + 1) / product.howItWorks.steps.length) * 100}%`
                                    }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                />
                            </div>
                        </div>

                        {/* Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
                            {product.howItWorks.steps.map((step, index) => {
                                const Icon = getIcon(step.icon);
                                const isActive = index === activeStep;
                                const isPast = index < activeStep;

                                return (
                                    <motion.div
                                        key={step.id}
                                        variants={staggerItem}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="relative flex md:flex-col items-center md:items-center gap-8 md:gap-4"
                                    >
                                        {/* Step indicator */}
                                        <motion.div
                                            className="relative z-10 flex-shrink-0"
                                            variants={stepActive}
                                            animate={isActive ? 'active' : 'inactive'}
                                        >
                                            <motion.div
                                                className={`
                          w-16 h-16 rounded-full flex items-center justify-center
                          border-2 transition-colors duration-500 bg-background
                          ${isActive
                                                        ? 'bg-primary border-primary'
                                                        : isPast
                                                            ? 'bg-primary/20 border-primary/40'
                                                            : 'bg-secondary border-border'
                                                    }
                        `}
                                                style={isActive ? {
                                                    boxShadow: '0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.3)',
                                                } : {}}
                                            >
                                                <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                                            </motion.div>

                                            {/* Pulse effect for active step */}
                                            {isActive && (
                                                <>
                                                    <motion.div
                                                        className="absolute inset-0 rounded-full border-2 border-primary"
                                                        animate={{
                                                            scale: [1, 1.5],
                                                            opacity: [0.8, 0],
                                                        }}
                                                        transition={{ duration: 1.5, repeat: Infinity }}
                                                    />
                                                    <motion.div
                                                        className="absolute inset-0 rounded-full border border-primary/50"
                                                        animate={{
                                                            scale: [1, 2],
                                                            opacity: [0.5, 0],
                                                        }}
                                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                                    />
                                                </>
                                            )}
                                        </motion.div>

                                        {/* Content */}
                                        <motion.div
                                            className="flex-1 md:text-center md:px-4"
                                            variants={stepActive}
                                            animate={isActive ? 'active' : 'inactive'}
                                        >
                                            <div className="inline-block">
                                                <span className="text-primary text-sm font-semibold">
                                                    Step {step.step}
                                                </span>
                                                <h3 className={`
                          text-xl md:text-2xl font-bold mt-2 mb-3 transition-colors duration-500
                          ${isActive ? 'text-foreground' : 'text-foreground/60'}
                        `}>
                                                    {step.title}
                                                </h3>
                                                <p className={`
                          text-muted-foreground text-sm md:text-base transition-opacity duration-500
                          ${isActive ? 'opacity-100' : 'opacity-60'}
                        `}>
                                                    {step.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
