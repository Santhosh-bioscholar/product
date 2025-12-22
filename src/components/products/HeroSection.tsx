import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ProductData } from '@/types/product';
import { floatAnimation, orbitAnimation, staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';
import FloatingParticles from './FloatingParticles';
import AnimatedText from './AnimatedText';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
    product: ProductData;
}

export const HeroSection = ({ product }: HeroSectionProps) => {
    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName];
        return Icon || LucideIcons.Circle;
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 30%, hsl(var(--primary) / 0.12) 0%, transparent 60%)`,
                }}
            />

            {/* Floating particles */}
            <FloatingParticles type={product.animationType} count={15} />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        {/* Clinically Tested Badge */}
                        <motion.div variants={staggerItem}>
                            <Badge
                                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
                                style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' }}
                            >
                                <motion.span
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="flex items-center gap-2"
                                >
                                    <LucideIcons.CheckCircle className="w-4 h-4" />
                                    Clinically Tested
                                </motion.span>
                            </Badge>
                        </motion.div>

                        {/* Title */}
                        <motion.div variants={staggerItem}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                                <AnimatedText
                                    text={product.name}
                                    className="text-gradient-primary block"
                                />
                            </h1>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            variants={staggerItem}
                            className="text-xl md:text-2xl text-muted-foreground font-light"
                        >
                            {product.tagline}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            variants={staggerItem}
                            className="text-foreground/70 text-lg max-w-lg leading-relaxed"
                        >
                            {product.description}
                        </motion.p>

                        {/* Benefit Tags */}
                        <motion.div
                            variants={staggerItem}
                            className="flex flex-wrap gap-3"
                        >
                            {product.benefitIcons.map((benefit, index) => {
                                const Icon = getIcon(benefit.icon);
                                return (
                                    <motion.div
                                        key={benefit.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm"
                                    >
                                        <Icon className="w-4 h-4 text-primary neon-stroke" />
                                        <span className="text-sm text-foreground/80">{benefit.label}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={staggerItem}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.button
                                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.4)' }}
                            >
                                <span className="relative z-10">Explore Now</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    style={{ opacity: 0.3 }}
                                />
                            </motion.button>
                            <motion.button
                                className="px-8 py-4 rounded-full border border-primary/30 text-foreground font-semibold text-lg backdrop-blur-sm hover:bg-primary/10 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Product visualization */}
                    <motion.div
                        className="relative flex items-center justify-center"
                        variants={scrollReveal}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Central product representation */}
                        <motion.div
                            className="relative w-64 h-64 md:w-80 md:h-80"
                            variants={floatAnimation}
                            initial="initial"
                            animate="animate"
                        >
                            {/* Glow ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: `radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 70%)`,
                                    filter: 'blur(30px)',
                                }}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            {/* Main circle */}
                            <div
                                className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl border border-primary/30"
                                style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.3), inset 0 0 30px hsl(var(--primary) / 0.1)' }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl md:text-5xl font-bold text-gradient-primary">
                                        {product.name.charAt(0)}
                                    </span>
                                </div>
                            </div>

                            {/* Orbiting icons */}
                            {product.benefitIcons.map((benefit, index) => {
                                const Icon = getIcon(benefit.icon);
                                return (
                                    <motion.div
                                        key={benefit.id}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        variants={orbitAnimation(index, product.benefitIcons.length)}
                                        initial="initial"
                                        animate="animate"
                                        style={{ transformOrigin: 'center center' }}
                                    >
                                        <motion.div
                                            className="w-12 h-12 rounded-full bg-secondary/80 border border-primary/30 flex items-center justify-center backdrop-blur-sm"
                                            style={{
                                                transform: 'translateX(100px)',
                                                boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
                                            }}
                                            animate={{
                                                boxShadow: [
                                                    '0 0 20px hsl(var(--primary) / 0.3)',
                                                    '0 0 30px hsl(var(--primary) / 0.5)',
                                                    '0 0 20px hsl(var(--primary) / 0.3)',
                                                ],
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                        >
                                            <Icon className="w-5 h-5 text-primary" />
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <LucideIcons.ChevronDown className="w-8 h-8 text-muted-foreground" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
