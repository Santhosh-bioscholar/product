import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ProductData } from '@/types/product';
import { staggerContainer, staggerItem } from '@/lib/animations';
import OverviewBenefitsDiagram from './OverviewBenefitsDiagram';

interface OverviewSectionProps {
    product: ProductData;
}

export const OverviewSection = ({ product }: OverviewSectionProps) => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(ellipse 60% 40% at 50% 0%, hsl(var(--primary) / 0.06) 0%, transparent 50%)`,
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid lg:grid-cols-2 gap-8 items-center"
                >
                    {/* Left content */}
                    <div className="space-y-8">
                        <motion.div variants={staggerItem}>
                            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                                {product.overview.subtitle}
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={staggerItem}
                            className="text-4xl md:text-5xl font-bold tracking-tight"
                        >
                            {product.overview.title}
                        </motion.h2>

                        <motion.p
                            variants={staggerItem}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            {product.overview.description}
                        </motion.p>

                        {/* Highlights */}
                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-2 gap-4"
                        >
                            {product.overview.highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    className="flex items-center gap-3"
                                >
                                    <div
                                        className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"
                                        style={{ boxShadow: '0 0 15px hsl(var(--primary) / 0.4)' }}
                                    >
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-foreground/80 font-medium">{highlight}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right visual */}
                    <div className="relative flex justify-center lg:justify-center">
                        <OverviewBenefitsDiagram benefits={product.benefits} productName={product.name} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OverviewSection;
