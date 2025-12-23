import { motion } from 'framer-motion';
import { AnimationType } from '@/types/product';
import { getParticleAnimation } from '@/lib/animations';

interface FloatingParticlesProps {
    type: AnimationType;
    count?: number;
    color?: string;
}

export const FloatingParticles = ({ type, count = 15, color }: FloatingParticlesProps) => {
    const particles = Array.from({ length: count }, (_, i) => i);

    const getParticleStyle = (index: number) => {
        const baseStyle = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        };

        switch (type) {
            case 'microbiome':
                return {
                    ...baseStyle,
                    width: `${8 + Math.random() * 16}px`,
                    height: `${8 + Math.random() * 16}px`,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, hsl(var(--primary) / 0.6), transparent)`,
                    filter: `blur(${Math.random() * 2}px)`,
                };
            case 'lightwave':
                return {
                    ...baseStyle,
                    width: `${20 + Math.random() * 40}px`,
                    height: `${20 + Math.random() * 40}px`,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, hsl(var(--primary) / 0.4), transparent)`,
                    filter: 'blur(4px)',
                };
            case 'spiral':
                return {
                    ...baseStyle,
                    width: `${30 + Math.random() * 50}px`,
                    height: `${2}px`,
                    background: `linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)`,
                    transformOrigin: 'center',
                };
            case 'ripple':
                return {
                    ...baseStyle,
                    width: `${10 + Math.random() * 20}px`,
                    height: `${10 + Math.random() * 20}px`,
                    borderRadius: '50%',
                    border: `1px solid hsl(var(--primary) / 0.3)`,
                    background: 'transparent',
                };
            case 'bioluminescence':
                return {
                    ...baseStyle,
                    width: `${6 + Math.random() * 12}px`,
                    height: `${6 + Math.random() * 12}px`,
                    borderRadius: '50%',
                    background: `hsl(var(--primary))`,
                    filter: `blur(${1 + Math.random() * 3}px)`,
                };
            default:
                return baseStyle;
        }
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={getParticleStyle(index)}
                    variants={getParticleAnimation(type, index)}
                    initial="initial"
                    animate="animate"
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
