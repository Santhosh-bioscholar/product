export type AnimationType = 'microbiome' | 'lightwave' | 'spiral' | 'ripple' | 'bioluminescence';

export type DividerType = 'wave' | 'molecular' | 'bubbles' | 'pulse';

export interface BenefitIcon {
    id: string;
    icon: string;
    label: string;
}

export interface Benefit {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface LeftMetrics {
    name: string;
    value: number;
    suffix: string;
    color: string;
}
export interface RightMetrics {
    name: string;
    value: number;
    suffix: string;
    color: string;
}
export interface HowItWorksStep {
    id: string;
    step: number;
    icon: string;
    title: string;
    description: string;
}

export interface UsageApplication {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface ProductData {
    id: string;
    name: string;
    tagline: string;
    description: string;
    themeColor: string;
    cssVariable: string;
    animationType: AnimationType;
    heroImage?: string;
    bannerImage?: string;
    benefitIcons: BenefitIcon[];
    overview: {
        title: string;
        subtitle: string;
        description: string;
        highlights: string[];
    };
    leftMetrics :LeftMetrics[];
rightMetrics :RightMetrics[];
    benefits: Benefit[];
    howItWorks: {
        title: string;
        subtitle: string;
        steps: HowItWorksStep[];
    };
    usage: {
        title: string;
        subtitle: string;
        applications: UsageApplication[];
    };
    dividers: [DividerType, DividerType, DividerType, DividerType];
}
