import { motion } from 'framer-motion';
import { DividerType } from '@/types/product';

interface SectionDividerProps {
    type: DividerType;
    color?: string;
}

export const SectionDivider = ({ type, color }: SectionDividerProps) => {
    const renderDivider = () => {
        switch (type) {
            case 'wave':
                return <WaveDivider />;
            case 'molecular':
                return <MolecularDivider />;
            case 'bubbles':
                return <BubblesDivider />;
            case 'pulse':
                return <PulseDivider />;
            default:
                return null;
        }
    };

    return (
        <div className="relative w-full h-32 overflow-hidden">
            {renderDivider()}
        </div>
    );
};

const WaveDivider = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
                <motion.path
                    d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60"
                    fill="none"
                    stroke="hsl(var(--primary) / 0.3)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                />
                <motion.path
                    d="M0,70 Q150,110 300,70 T600,70 T900,70 T1200,70"
                    fill="none"
                    stroke="hsl(var(--primary) / 0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
                />
            </svg>
            {/* Glowing center dot */}
            <motion.div
                className="absolute w-3 h-3 rounded-full bg-primary"
                style={{ boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)' }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
};

const MolecularDivider = () => {
    const nodes = [
        { x: '20%', y: '30%' },
        { x: '35%', y: '60%' },
        { x: '50%', y: '40%' },
        { x: '65%', y: '70%' },
        { x: '80%', y: '35%' },
    ];

    return (
        <div className="absolute inset-0">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
                {nodes.slice(0, -1).map((node, i) => (
                    <motion.line
                        key={i}
                        x1={node.x}
                        y1={node.y}
                        x2={nodes[i + 1].x}
                        y2={nodes[i + 1].y}
                        stroke="hsl(var(--primary) / 0.3)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                    />
                ))}
            </svg>

            {/* Molecular nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: node.x, top: node.y }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                    <motion.div
                        className="w-full h-full rounded-full bg-primary"
                        style={{ boxShadow: '0 0 15px hsl(var(--primary) / 0.6)' }}
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

const BubblesDivider = () => {
    const bubbles = Array.from({ length: 8 }, (_, i) => ({
        x: `${10 + i * 12}%`,
        size: 8 + Math.random() * 12,
        delay: i * 0.3,
        duration: 4 + Math.random() * 3,
    }));

    return (
        <div className="absolute inset-0 flex items-center">
            {bubbles.map((bubble, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left: bubble.x,
                        width: bubble.size,
                        height: bubble.size,
                        background: `radial-gradient(circle, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.2))`,
                        boxShadow: `0 0 ${bubble.size}px hsl(var(--primary) / 0.4)`,
                    }}
                    initial={{ y: 60, opacity: 0, scale: 0.5 }}
                    whileInView={{ y: -20, opacity: [0, 0.8, 0], scale: [0.5, 1, 0.8] }}
                    viewport={{ once: true }}
                    transition={{
                        duration: bubble.duration,
                        delay: bubble.delay,
                        repeat: Infinity,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Center line */}
            <motion.div
                className="absolute left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent top-1/2"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            />
        </div>
    );
};

const PulseDivider = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Expanding rings */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-16 h-16 rounded-full border border-primary/30"
                    animate={{
                        scale: [1, 3],
                        opacity: [0.6, 0],
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 1,
                        repeat: Infinity,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Center pulse */}
            <motion.div
                className="absolute w-6 h-6 rounded-full bg-primary"
                style={{ boxShadow: '0 0 30px hsl(var(--primary)), 0 0 60px hsl(var(--primary) / 0.5)' }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Horizontal lines */}
            <motion.div
                className="absolute h-px w-1/3 left-0 bg-gradient-to-r from-transparent via-primary/30 to-primary/10 top-1/2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="absolute h-px w-1/3 right-0 bg-gradient-to-l from-transparent via-primary/30 to-primary/10 top-1/2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>
    );
};

export default SectionDivider;
