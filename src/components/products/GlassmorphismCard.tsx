import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cardHover } from '@/lib/animations';

interface GlassmorphismCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
    delay?: number;
}

export const GlassmorphismCard = ({
    children,
    className = '',
    hover = true,
    glow = false,
    delay = 0,
}: GlassmorphismCardProps) => {
    return (
        <motion.div
            className={`
        relative overflow-hidden rounded-2xl p-6
        bg-gradient-to-br from-[hsl(0_0%_100%/0.08)] to-[hsl(0_0%_100%/0.02)]
        backdrop-blur-xl
        border border-[hsl(0_0%_100%/0.1)]
        ${glow ? 'shadow-[0_0_30px_hsl(var(--primary)/0.15)]' : ''}
        ${className}
      `}
            variants={hover ? cardHover : undefined}
            initial="initial"
            whileHover={hover ? "hover" : undefined}
            transition={{ delay }}
        >
            {/* Gradient border overlay */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary)/0.2)] via-transparent to-[hsl(var(--primary)/0.1)] opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default GlassmorphismCard;
