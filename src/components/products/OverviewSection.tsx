import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ProductData } from '@/types/product';
import { scrollReveal, staggerContainer, staggerItem } from '@/lib/animations';
import GlassmorphismCard from './GlassmorphismCard';

interface OverviewSectionProps {
    product: ProductData;
}

export const OverviewSection = ({ product }: OverviewSectionProps) => {
    return (
        <section className="relative py-32 overflow-hidden">
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
                    className="grid lg:grid-cols-2 gap-16 items-center"
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
                    <motion.div
                        variants={scrollReveal}
                        className="relative"
                    >
                        <GlassmorphismCard className="p-8" glow>
                            {/* Stats grid */}
                            <div className="grid grid-cols-2 gap-6">
                                {product.overview.highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center p-4"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <motion.div
                                            className="text-3xl font-bold text-gradient-primary mb-2"
                                            animate={{
                                                textShadow: [
                                                    '0 0 20px hsl(var(--primary) / 0.5)',
                                                    '0 0 40px hsl(var(--primary) / 0.8)',
                                                    '0 0 20px hsl(var(--primary) / 0.5)',
                                                ],
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                        >
                                            {highlight.match(/^\d+/) || '✓'}
                                        </motion.div>
                                        <div className="text-sm text-muted-foreground">
                                            {highlight.replace(/^\d+\s*/, '')}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            />
                        </GlassmorphismCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OverviewSection;
