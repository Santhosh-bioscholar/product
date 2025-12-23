import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ProductData } from '@/types/product';
import { staggerContainer, staggerItem, getIconAnimation } from '@/lib/animations';
import GlassmorphismCard from './GlassmorphismCard';

interface BenefitsSectionProps {
    product: ProductData;
}

export const BenefitsSection = ({ product }: BenefitsSectionProps) => {
    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName];
        return Icon || LucideIcons.Circle;
    };

    const iconAnimation = getIconAnimation(product.animationType);

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(ellipse 100% 50% at 50% 100%, hsl(var(--primary) / 0.08) 0%, transparent 50%)`,
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
                        Benefits
                    </motion.span>
                    <motion.h2
                        variants={staggerItem}
                        className="text-4xl md:text-5xl font-bold tracking-tight mt-4"
                    >
                        Why Choose {product.name}
                    </motion.h2>
                    <motion.p
                        variants={staggerItem}
                        className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
                    >
                        Discover the science-backed benefits that set our formula apart
                    </motion.p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {product.benefits.map((benefit, index) => {
                        const Icon = getIcon(benefit.icon);

                        return (
                            <motion.div
                                key={benefit.id}
                                variants={staggerItem}
                            >
                                <GlassmorphismCard
                                    className="h-full group"
                                    hover
                                    delay={index * 0.1}
                                >
                                    <div className="space-y-4">
                                        {/* Icon */}
                                        <motion.div
                                            className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center relative"
                                            variants={iconAnimation}
                                            initial="initial"
                                            animate="animate"
                                        >
                                            <Icon className="w-7 h-7 text-primary neon-stroke" />

                                            {/* Glow effect on hover */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{ filter: 'blur(10px)' }}
                                            />

                                            {/* Pulse rings for lightwave type */}
                                            {product.animationType === 'lightwave' && (
                                                <>
                                                    <motion.div
                                                        className="absolute inset-0 rounded-xl border border-primary/30"
                                                        animate={{
                                                            scale: [1, 1.5],
                                                            opacity: [0.5, 0],
                                                        }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                    />
                                                    <motion.div
                                                        className="absolute inset-0 rounded-xl border border-primary/20"
                                                        animate={{
                                                            scale: [1, 1.8],
                                                            opacity: [0.3, 0],
                                                        }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                                    />
                                                </>
                                            )}
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-foreground">
                                            {benefit.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-muted-foreground leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Bottom gradient line */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                    />
                                </GlassmorphismCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection;
