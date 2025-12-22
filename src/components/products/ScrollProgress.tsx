import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface ScrollProgressProps {
    color?: string;
}

export const ScrollProgress = ({ color }: ScrollProgressProps) => {
    const progress = useScrollProgress();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-50 h-[2px]"
            style={{
                background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.5) 100%)`,
                width: `${progress}%`,
                boxShadow: `0 0 10px hsl(var(--primary) / 0.8), 0 0 20px hsl(var(--primary) / 0.4)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: progress > 0 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        />
    );
};

export default ScrollProgress;
