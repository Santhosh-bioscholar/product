import { motion } from 'framer-motion';
import { textRevealContainer, textRevealChar } from '@/lib/animations';

interface AnimatedTextProps {
    text: string;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    delay?: number;
}

export const AnimatedText = ({
    text,
    className = '',
    as: Component = 'span',
    delay = 0,
}: AnimatedTextProps) => {
    const characters = text.split('');

    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={textRevealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={textRevealChar}
                    style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;
