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

export interface ScientificGrowthStat {
    label: string;
    value: string;
    change: string;
    isUp: boolean;
}

export interface ScientificGrowthData {
    subject: string;
    title: string;
    description: string;
    stats: ScientificGrowthStat[];
    image: string;
}

export interface ScientificImmuneData {
    label: string;
    title: string;
    description: string;
    chartLabels: string[];
    data: number[];
}

export interface ScientificEnzymeItem {
    name: string;
    label: string;
    data: number[];
}

export interface ScientificEnzymeData {
    label: string;
    title: string;
    list: ScientificEnzymeItem[];
}

export interface ScientificUniformityData {
    label: string;
    title: string;
    image: string;
    description: string;
}

export interface ScientificData {
    growth: ScientificGrowthData;
    immune: ScientificImmuneData;
    enzymes: ScientificEnzymeData;
    uniformity: ScientificUniformityData;
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
        overImage: string;
    };
    leftMetrics: LeftMetrics[];
    rightMetrics: RightMetrics[];
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
    pristineShowcase: PristineShowcaseData;
    doctorRecom: DoctorRecomData;
    immuneSystem: ImmuneSystemData;
    scientificData: ScientificData;
    specs: ProductSpecsData;
    dividers: [DividerType, DividerType, DividerType, DividerType];
}

export interface ProductSpecItem {
    value: string;
    label: string;
}

export interface ProductSpecsData {
    feedingInstructions: string;
    dosage: ProductSpecItem;
    binderReq: ProductSpecItem;
    cycle: ProductSpecItem;
    storage: {
        temp: string;
        conditions: string[];
    };
    shelfLife: string;
}

export interface GeneExpression {
    name: string;
    controlValue: number; // 0-100 relative height
    treatmentValue: number; // 0-100 relative height
    controlLabel?: string; // e.g. 'a'
    treatmentLabel?: string; // e.g. 'c'
}

export interface ImmuneSystemData {
    title: string;
    subtitle: string;
    description: string;
    genes: GeneExpression[];
}

export interface DoctorRecomData {
    image: string;
    quote: string;
    doctorName: string;
}

export interface PristineShowcaseCard {
    title: string;
    description: string;
    icon: string;
}

export interface PristineShowcaseData {
    backgroundImage: string;
    cards: PristineShowcaseCard[]; // Expecting exactly 9 cards for the layout
}
