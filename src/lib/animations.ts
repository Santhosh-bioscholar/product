import { Variants, Transition } from 'framer-motion';
import { AnimationType } from '@/types/product';

// Smooth, organic easing for biological motion
export const bioEase: Transition = {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94],
};

export const slowBioEase: Transition = {
    duration: 1.2,
    ease: [0.25, 0.46, 0.45, 0.94],
};

// Stagger children animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: bioEase,
    },
};

// Float animation for hero product
export const floatAnimation: Variants = {
    initial: { y: 0, rotate: 0 },
    animate: {
        y: [-10, 10, -10],
        rotate: [-1, 1, -1],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

// Orbit animation for benefit icons
export const orbitAnimation = (index: number, total: number): Variants => {
    const angle = (index / total) * 360;
    return {
        initial: { rotate: angle },
        animate: {
            rotate: angle + 360,
            transition: {
                duration: 20 + index * 2,
                repeat: Infinity,
                ease: 'linear',
            },
        },
    };
};

// Product-specific particle animations
export const getParticleAnimation = (type: AnimationType, index: number): Variants => {
    const baseDelay = index * 0.5;

    switch (type) {
        case 'microbiome':
            return {
                initial: { scale: 0.5, opacity: 0, y: 100 },
                animate: {
                    scale: [0.5, 1, 0.8, 1],
                    opacity: [0, 0.6, 0.8, 0],
                    y: [100, -100],
                    x: [0, Math.sin(index) * 50],
                    transition: {
                        duration: 8 + index,
                        repeat: Infinity,
                        delay: baseDelay,
                        ease: 'easeInOut',
                    },
                },
            };
        case 'lightwave':
            return {
                initial: { scale: 0, opacity: 0 },
                animate: {
                    scale: [0, 1.5, 2],
                    opacity: [0, 0.8, 0],
                    transition: {
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        delay: baseDelay,
                        ease: 'easeOut',
                    },
                },
            };
        case 'spiral':
            return {
                initial: { rotate: 0, scale: 1 },
                animate: {
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.7, 0.3],
                    transition: {
                        duration: 10 + index * 2,
                        repeat: Infinity,
                        ease: 'linear',
                    },
                },
            };
        case 'ripple':
            return {
                initial: { scale: 0.5, opacity: 0.8 },
                animate: {
                    scale: [0.5, 2],
                    opacity: [0.8, 0],
                    transition: {
                        duration: 4 + index,
                        repeat: Infinity,
                        delay: baseDelay,
                        ease: 'easeOut',
                    },
                },
            };
        case 'bioluminescence':
            return {
                initial: { opacity: 0, scale: 0.8 },
                animate: {
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                    filter: ['hue-rotate(0deg)', `hue-rotate(${60 + index * 30}deg)`, 'hue-rotate(0deg)'],
                    transition: {
                        duration: 5 + index,
                        repeat: Infinity,
                        delay: baseDelay,
                        ease: 'easeInOut',
                    },
                },
            };
        default:
            return {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
            };
    }
};

// Card hover animation
export const cardHover: Variants = {
    initial: { scale: 1, y: 0 },
    hover: {
        scale: 1.02,
        y: -8,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

// Glow pulse animation
export const glowPulse: Variants = {
    initial: { boxShadow: '0 0 20px rgba(var(--primary), 0.2)' },
    animate: {
        boxShadow: [
            '0 0 20px rgba(var(--primary), 0.2)',
            '0 0 40px rgba(var(--primary), 0.4)',
            '0 0 20px rgba(var(--primary), 0.2)',
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

// Scroll reveal animations
export const scrollReveal: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const scrollRevealLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: slowBioEase,
    },
};

export const scrollRevealRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: slowBioEase,
    },
};

export const scrollRevealScale: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: slowBioEase,
    },
};

// Text reveal animation (character by character)
export const textRevealContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
        },
    },
};

export const textRevealChar: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

// Step pipeline animations
export const stepActive: Variants = {
    inactive: {
        opacity: 0.4,
        scale: 0.95,
        filter: 'brightness(0.6)',
    },
    active: {
        opacity: 1,
        scale: 1,
        filter: 'brightness(1)',
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Icon animations by type
export const getIconAnimation = (type: AnimationType): Variants => {
    switch (type) {
        case 'microbiome':
            return {
                initial: { scale: 1 },
                animate: {
                    scale: [1, 1.1, 1, 1.15, 1],
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    },
                },
            };
        case 'lightwave':
            return {
                initial: { filter: 'brightness(1)' },
                animate: {
                    filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    },
                },
            };
        case 'spiral':
            return {
                initial: { rotate: 0 },
                animate: {
                    rotate: 360,
                    transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                    },
                },
            };
        case 'ripple':
            return {
                initial: { scale: 1 },
                animate: {
                    scale: [1, 1.05, 1],
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    },
                },
            };
        case 'bioluminescence':
            return {
                initial: { filter: 'hue-rotate(0deg)' },
                animate: {
                    filter: ['hue-rotate(0deg)', 'hue-rotate(30deg)', 'hue-rotate(0deg)'],
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    },
                },
            };
        default:
            return {
                initial: {},
                animate: {},
            };
    }
};
