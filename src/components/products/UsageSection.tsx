import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ProductData } from '@/types/product';
import { staggerContainer, staggerItem } from '@/lib/animations';
import GlassmorphismCard from './GlassmorphismCard';

interface UsageSectionProps {
    product: ProductData;
}

export const UsageSection = ({ product }: UsageSectionProps) => {
    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName];
        return Icon || LucideIcons.Circle;
    };

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse 60% 40% at 80% 20%, hsl(var(--primary) / 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 20% 80%, hsl(var(--primary) / 0.04) 0%, transparent 50%)
          `,
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
                        {product.usage.subtitle}
                    </motion.span>
                    <motion.h2
                        variants={staggerItem}
                        className="text-4xl md:text-5xl font-bold tracking-tight mt-4"
                    >
                        {product.usage.title}
                    </motion.h2>
                </motion.div>

                {/* Applications Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {product.usage.applications.map((app, index) => {
                        const Icon = getIcon(app.icon);

                        return (
                            <motion.div
                                key={app.id}
                                variants={staggerItem}
                            >
                                <GlassmorphismCard
                                    className="h-full text-center group"
                                    hover
                                    delay={index * 0.1}
                                >
                                    <div className="space-y-4">
                                        {/* Icon */}
                                        <motion.div
                                            className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center relative"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Icon className="w-8 h-8 text-primary neon-stroke" />

                                            {/* Hover glow */}
                                            <motion.div
                                                className="absolute inset-0 rounded-full"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                style={{
                                                    background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent)',
                                                    filter: 'blur(10px)',
                                                }}
                                            />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-foreground">
                                            {app.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {app.description}
                                        </p>
                                    </div>

                                    {/* Animated border on hover */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        style={{
                                            background: `
                        linear-gradient(90deg, hsl(var(--primary) / 0.3) 0%, transparent 50%, hsl(var(--primary) / 0.3) 100%)
                      `,
                                            backgroundSize: '200% 100%',
                                            padding: '1px',
                                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            WebkitMaskComposite: 'xor',
                                            maskComposite: 'exclude',
                                            borderRadius: 'inherit',
                                        }}
                                    />
                                </GlassmorphismCard>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="px-10 py-5 rounded-full bg-primary text-primary-foreground font-semibold text-lg relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.4)' }}
                    >
                        <span className="relative z-10">Get Started with {product.name}</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default UsageSection;
