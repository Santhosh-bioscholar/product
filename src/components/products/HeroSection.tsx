import React from 'react';
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
    // Only run animation if banner image exists
    const [introComplete, setIntroComplete] = React.useState(!product.bannerImage);

    React.useEffect(() => {
        if (!product.bannerImage) return;

        const timer = setTimeout(() => {
            setIntroComplete(true);
        }, 500);
        return () => clearTimeout(timer);
    }, [product.bannerImage]);

    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName];
        return Icon || LucideIcons.Circle;
    };
    const [moveTitle, setMoveTitle] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setMoveTitle(true);
        }, 2000); // ⏸ stays centered first

        return () => clearTimeout(timer);
    }, []);

    return (
        
        <section className="relative min-h-screen flex items-end justify-center overflow-hidden bg-black pb-8 ">
            {/* Intro Overlay */}

<div className='container'>
            {/* Background */}
            <motion.div
                className="absolute inset-0 z-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: introComplete ? 1 : 0 }}
                transition={{ duration: 2, delay: 0.1 }}
            >
                {product.bannerImage ? (
                    <>
                        <img
                            src={product.bannerImage}
                            alt={`${product.name} Banner`}
                            className="w-full h-full object-cover opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                    </>
                ) : (
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `radial-gradient(ellipse 80% 60% at 50% 30%, hsl(var(--primary) / 0.12) 0%, transparent 60%)`,
                        }}
                    />
                )}
            </motion.div>

            {/* Floating particles */}
            <FloatingParticles type={product.animationType} count={15} />

            <div className="container mx-auto px-6 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-end">
                    {/* Text content */}
                    <div className="space-y-8">
                        {/* Clinically Tested Badge */}
                        <motion.div
                            className="relative z-10"
                            variants={staggerItem}
                            initial={{ opacity: 0, y: 20 }}
                            animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Badge
                                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
                                style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' }}
                            >
                                {/* <motion.span
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="flex items-center gap-2"
                                >
                                    <LucideIcons.CheckCircle className="w-4 h-4" />
                                    Clinically Tested
                                </motion.span> */}
                            </Badge>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-4 pt-4 relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <motion.button
                                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.4)' }}
                            >
                                <span className="relative z-10">Documendation</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    style={{ opacity: 0.3 }}
                                />
                            </motion.button>
                            <motion.button
                                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.4)' }}
                            >
                                <span className="relative z-10">Buy Now</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    style={{ opacity: 0.3 }}
                                />
                            </motion.button>
                        </motion.div>

                        {/* Title - Layout Shared Element */}
                        {/* Title - Single Element Animation */}
                        <div className="z-50">
                            <motion.h1
                                className="absolute z-20 font-bold tracking-tight whitespace-nowrap text-gradient-primary"
                                initial={{
                                    x: "-50%",
                                    y: "-50%",
                                    top: "50%",
                                    left: "50%",
                                    scale: 1.2,
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: moveTitle ? "-51vw" : "-50%",
                                    y: moveTitle ? "25vh" : "-50%",
                                    scale: moveTitle ? 0.6 : 1.2,
                                }}
                                transition={{
                                    duration: 6, // 🐢 SLOW
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <AnimatedText
                                    text={product.name}
                                    className="text-7xl md:text-8xl lg:text-[6rem]"
                                />
                            </motion.h1>

                            {/* Placeholder/Spacer to reserve space in the grid when the main title is fixed/absolute */}
                            {!introComplete && (
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight opacity-0 invisible" aria-hidden="true">
                                    {product.name}
                                </h1>
                            )}
                        </div>

                        {/* Benefit Tags */}
                        {/* <motion.div
                            className="flex flex-wrap gap-3"
                            initial={{ opacity: 0 }}
                            animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {product.benefitIcons.map((benefit, index) => {
                                const Icon = getIcon(benefit.icon);
                                return (
                                    <motion.div
                                        key={benefit.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 1 + index * 0.1 }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm"
                                    >
                                        <Icon className="w-4 h-4 text-primary neon-stroke" />
                                        <span className="text-sm text-foreground/80">{benefit.label}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div> */}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={introComplete ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0 }}
                transition={{ duration: 2, delay: 2, repeat: Infinity }}
            >
                <LucideIcons.ChevronDown className="w-8 h-8 text-muted-foreground" />
            </motion.div></div>
        </section >
    );
};

export default HeroSection;
