import { ProductData } from '@/types/product';

export const products: Record<string, ProductData> = {
    algabiotic: {
        id: 'algabiotic',
        name: 'Algabiôtic',
        tagline: 'Ocean Intelligence for Growth',
        description: 'Marine biotechnology breakthrough for aquaculture and agriculture. Harness the growth-promoting power of oceanic microalgae.',
        themeColor: '#0ea5e9',
        cssVariable: '--algabiotic',
        animationType: 'ripple',
        bannerImage: '/bleubiotic.png',

        benefitIcons: [
            { id: 'gut', icon: 'Heart', label: 'Gut Health' },
            { id: 'shield', icon: 'Shield', label: 'Immunity' },
            { id: 'leaf', icon: 'Leaf', label: 'Natural' },
            { id: 'energy', icon: 'Zap', label: 'Energy' },
        ],
        doctorRecom: {
            image: '/p5doc5.png',
            quote: 'Algabiôtic is a CAA-approved, world-class shrimp nutrition supplement that promotes optimal growth, strong immunity, and smooth molting cycles. Its eco-friendly formulation supports sustainable aquaculture and improved bio-economic outcomes.',
            doctorName: 'Dr. Elena Rodriguez'
        },
        immuneSystem: {
            title: 'Immune Related',
            subtitle: 'Gene Expression',
            description: 'Analyzing transcriptional responses in the Lysozyme, Toll-like receptor, and IMD pathways. Interactive visualization of mRNA expression levels across control and treatment groups.',
            genes: [
                { name: 'Lysozyme', controlValue: 35, treatmentValue: 85, controlLabel: 'a', treatmentLabel: 'c' },
                { name: 'Toll-like receptor', controlValue: 30, treatmentValue: 80, controlLabel: 'a', treatmentLabel: 'c' },
                { name: 'IMD', controlValue: 40, treatmentValue: 82, controlLabel: 'a', treatmentLabel: 'c' },
            ]
        },
        specs: {
            feedingInstructions: "Mix thoroughly with standard pelleted feed at a ratio of 30 grams per 1 kilogram of feed. Apply binder (fish oil or water-based polymer) to ensure complete adherence. Allow to dry for 20 minutes before broadcasting.",
            dosage: { value: "30g/kg", label: "Dosage" },
            binderReq: { value: "Gelatin/Oil", label: "Binder" },
            cycle: { value: "Daily", label: "Cycle" },
            storage: {
                temp: "Below 25°C",
                conditions: ["Cool & Dry", "No Sunlight"]
            },
            shelfLife: "24 Months"
        },
        overview: {
            title: 'Ocean-Powered Growth',
            overImage: '/bleubiotic.png',
            subtitle: 'Marine Biotechnology',
            description: 'Algabiôtic leverages marine microalgae to accelerate growth in aquaculture and agriculture. Our proprietary blend enhances nutrient uptake and promotes natural development.',
            highlights: ['Marine Microalgae', 'Growth Factors', 'Sustainable Production', 'Aquaculture Optimized'],
        },
        leftMetrics: [
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
        ],

        rightMetrics: [
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
        ],
        benefits: [
            { id: 'b1', icon: 'TrendingUp', title: 'Accelerated Growth', description: 'Boost growth rates by up to 40% with natural marine compounds.' },
            { id: 'b2', icon: 'Shield', title: 'Disease Resistance', description: 'Strengthen immune systems naturally for healthier populations.' },
            { id: 'b3', icon: 'Waves', title: 'Water Quality', description: 'Improve aquatic environments while promoting growth.' },
            { id: 'b4', icon: 'Leaf', title: 'Sustainable Yield', description: 'Increase production without environmental compromise.' },
            { id: 'b5', icon: 'Microscope', title: 'Bioavailable Nutrients', description: 'Marine-derived nutrition with superior absorption.' },
            { id: 'b6', icon: 'Recycle', title: 'Circular Economy', description: 'Waste-to-value algae production technology.' },
        ],
        howItWorks: {
            title: 'How Algabiotic Works',
            subtitle: 'Marine Growth Technology',
            steps: [
                { id: 's1', step: 1, icon: 'Droplets', title: 'Water Integration', description: 'Microalgae blend seamlessly into aquatic environments.' },
                { id: 's2', step: 2, icon: 'Microscope', title: 'Nutrient Release', description: 'Growth factors activate in contact with organisms.' },
                { id: 's3', step: 3, icon: 'Activity', title: 'Metabolic Enhancement', description: 'Natural compounds accelerate healthy development.' },
                { id: 's4', step: 4, icon: 'BarChart3', title: 'Yield Optimization', description: 'Achieve measurably higher production outcomes.' },
            ],
        },
        usage: {
            title: 'Intended Uses',
            subtitle: 'Industry Solutions',
            applications: [
                { id: 'u1', icon: 'Fish', title: 'Fish Farming', description: 'Accelerate fish growth and improve feed conversion.' },
                { id: 'u2', icon: 'Shell', title: 'Shellfish Culture', description: 'Enhance mollusk and crustacean development.' },
                { id: 'u3', icon: 'Sprout', title: 'Agriculture', description: 'Boost crop yields with marine-derived nutrients.' },
                { id: 'u4', icon: 'FlaskConical', title: 'Research Applications', description: 'Controlled growth studies and development.' },
            ],
        },
        pristineShowcase: {
            backgroundImage: '/unnamed.png',
            cards: [
                // Far Depth
                { title: 'Increases Body Weight', description: ' Drives faster growth through superior protein utilization.', icon: 'trending_up' },
                { title: ' Improves Survival Rate', description: ' Enhances shrimp resilience under culture conditions.', icon: 'favorite' },
                // Mid Depth
                { title: 'Infection Prevention', description: 'Reduces bacterial and viral disease pressure.', icon: 'shield' },
                { title: 'Easy Molting', description: 'Supports smooth and stress-free shell molting.', icon: 'autorenew' },
                { title: 'High Nutrient Uptake', description: ' Maximizes absorption of essential nutrients.', icon: 'bolt' },
                // Near Depth
                { title: ' Disease Resistance', description: ' Strengthens natural immune defense mechanisms.', icon: 'security' },
                { title: 'Better FCR', description: ' Improves feed conversion efficiency.', icon: 'palette' },
                { title: '  PL Survival Boost', description: 'Increases post-larvae survival rates.', icon: 'format_size' },
                { title: ' Gut Health', description: ' Promotes beneficial gut microbiota balance. ', icon: 'forest' },
            ]
        },
        scientificData: {
            growth: {
                subject: 'Growth Performance',
                title: 'Better Weight Gain Matrix',
                description: 'Controlled trials demonstrated that dietary inclusion of ALGABIOTIC at 3% significantly enhanced the growth rate and weight gain of Litopenaeus vannamei.',
                stats: [
                    { label: 'FCR Metric', value: '1.24', change: '8%', isUp: false },
                    { label: 'SGR Growth', value: '+14.2%', change: '', isUp: true }
                ],
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXHslu5DnTfGr4FruFp_m5z8RU5yjV5y7eiaD-mQ1s5GPiIIRqP2IYHj0K52221twDAWoKU3N39rGwamH1IFElny4W8rhU9NOvuabdUA4p-NHi0Xa2ghXPabt9Lwqd9JRmWOGmv9n_WYowkoiWKpkBzKgCkRYMqZUIUng1jAPNsBiPAQMEnWTl7pWgd3DQf4OzZwh-g-7PRVICaklQeCW4atTKIPK2QjApmcWxQ_WwMEf32ZsoUT_cw9ORno15JIQ9rkjBVD2gg5h'
            },
            immune: {
                label: 'Biological Marker',
                title: 'Immune Response',
                description: 'Enriched with 18.58 g/100 g of C-Phycocyanin. Activates ProPO defense enzymes to fortify natural resistance.',
                chartLabels: ['Lysozyme', 'Toll receptor', 'IMD'],
                data: [1.0, 2.6, 0.8, 2.6, 1.4, 2.6]
            },
            enzymes: {
                label: 'Enzymatic Profile',
                title: 'Specific Growth Secretion',
                list: [
                    { name: 'PROTEASE', label: 'LIPASE ACTIVITY', data: [45, 85] },
                    { name: 'PROTEASE', label: 'α-AMYLASE ALPHA', data: [45, 85] },
                    { name: 'PROTEASE', label: 'PROTEASE DENSITY', data: [45, 85] }
                ]
            },
            uniformity: {
                label: 'Morphological Analysis',
                title: 'Uniformity',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_7H2BFEgmV-vVuMMQCwutRuwxVc_Cv3sozIOsIpadXYxM0BgLIhT97BEw6C5vrVtgafaPtopQP3Wx1Cejgrm4DGVJAaRxjnTlsYXI_QhAmojNreku1e7jVbvMFXg3p3Cs_FNnwzriHUCKm7LKkETwU2siBqyQDEveIeQK-lTynropJ25EXWGJYEirX9BtDvIiKlBCMKx87Qg6sWVoRkS266X6K9ODqht72sSawUeVZqck7myoeBbMdBUURGRjAoZH-EkWxa3jR1Eq',
                description: 'Balanced nutrition optimizes gut health to ensure consistent growth across the entire population.'
            }
        },
        dividers: ['wave', 'bubbles', 'molecular', 'pulse'],
    },
    fermbiotic: {
        id: 'fermbiotic',
        name: 'Fermbiôtic',
        tagline: 'Fermentation Science for Gut Vitality',
        description: 'Advanced probiotic formula powered by precision fermentation technology. Cultivate a thriving gut microbiome with billions of beneficial bacteria.',
        themeColor: '#22c55e',
        cssVariable: '--fermbiotic',
        animationType: 'microbiome',
        bannerImage: '/bleubiotic.png',

        benefitIcons: [
            { id: 'growth', icon: 'TrendingUp', label: 'Growth' },
            { id: 'yield', icon: 'BarChart3', label: 'Yield' },
            { id: 'sustainable', icon: 'Recycle', label: 'Sustainable' },
            { id: 'marine', icon: 'Waves', label: 'Marine' },
        ],
        doctorRecom: {
            image: '/p2doc5.png',
            quote: 'Fermbiôtic is a next-generation fermented algal protein that improves protein bioavailability, digestion, and gut microbiome balance for humans and animals. Its probiotic-rich green-white technology supports immunity, detoxification, and sustained energy.',
            doctorName: 'Dr. Arjun Mehta'
        },
        immuneSystem: {
            title: 'Immune Related',
            subtitle: 'Gene Expression',
            description: 'Analyzing transcriptional responses in the Lysozyme, Toll-like receptor, and IMD pathways. Interactive visualization of mRNA expression levels across control and treatment groups.',
            genes: [
                { name: 'Lysozyme', controlValue: 35, treatmentValue: 85, controlLabel: 'a', treatmentLabel: 'c' },
                { name: 'Toll-like receptor', controlValue: 30, treatmentValue: 80, controlLabel: 'a', treatmentLabel: 'c' },
                { name: 'IMD', controlValue: 40, treatmentValue: 82, controlLabel: 'a', treatmentLabel: 'c' },
            ]
        },
        specs: {
            feedingInstructions: "Mix thoroughly with standard pelleted feed at a ratio of 5 grams per 1 kilogram of feed. Apply binder (fish oil or water-based polymer) to ensure complete adherence. Allow to dry for 20 minutes before broadcasting.",
            dosage: { value: "5g/kg", label: "Dosage" },
            binderReq: { value: "Required", label: "Binder" },
            cycle: { value: "Daily", label: "Cycle" },
            storage: {
                temp: "Below 25°C",
                conditions: ["Cool & Dry", "No Sunlight"]
            },
            shelfLife: "24 Months"
        },
        overview: {
            title: 'The Science of Fermentation',
            overImage: '/mu.png',
            subtitle: 'Precision-Engineered Probiotics',
            description: 'Fermbiotic harnesses centuries-old fermentation wisdom combined with cutting-edge biotechnology. Our proprietary strain selection delivers targeted gut support with clinically-proven efficacy.',
            highlights: ['50 Billion CFU', 'pH-Protected Delivery', '12 Strain Complex', 'Clinically Tested'],
        },

        leftMetrics: [
            { name: "Protein", value: 62.7, suffix: "%", color: "primary" },
            { name: "Moisture", value: 6.2, suffix: "%", color: "accent" },
            { name: "Energy", value: 384.2, suffix: "Kcal", color: "secondary" },
            { name: "Total dietary fibre", value: 4.1, suffix: "%", color: "primary" },
            { name: "Beta-carotene", value: 2.2, suffix: "%", color: "accent" },
            { name: "Phycocyanin", value: 11.7, suffix: "%", color: "secondary" },
            { name: "Total xanthophyll", value: 1.3, suffix: "%", color: "primary" },
            { name: "Phosphorus", value: 1.6, suffix: "%", color: "accent" },
            { name: "Potassium", value: 2.8, suffix: "%", color: "secondary" },
            { name: "Calcium", value: 1.9, suffix: "%", color: "primary" },
            { name: "Sodium", value: 0.7, suffix: "%", color: "accent" },
            { name: "Magnesium", value: 1.2, suffix: "%", color: "secondary" },
        ],

        rightMetrics: [
            { name: "Iron", value: 2.4, suffix: "%", color: "primary" },
            { name: "Zinc", value: 1.2, suffix: "%", color: "accent" },
            { name: "Tryptophan", value: 2.57, suffix: "%", color: "secondary" },
            { name: "Threonine", value: 5.3, suffix: "%", color: "primary" },
            { name: "Tyrosine", value: 1.06, suffix: "%", color: "accent" },
            { name: "Valine", value: 3.25, suffix: "%", color: "secondary" },
            { name: "Methionine", value: 1.87, suffix: "%", color: "primary" },
            { name: "Lysine", value: 2.86, suffix: "%", color: "accent" },
            { name: "Isoleucine", value: 4.42, suffix: "%", color: "secondary" },
            { name: "Leucine", value: 1.63, suffix: "%", color: "primary" },
            { name: "Phenylalanine", value: 3.15, suffix: "%", color: "accent" },
            { name: "Total Amino Acids", value: 56.10, suffix: "%", color: "secondary" },
        ],

        benefits: [
            { id: 'b1', icon: 'Dna', title: 'Microbiome Balance', description: 'Restore and maintain optimal gut flora diversity with precision-selected bacterial strains.' },
            { id: 'b2', icon: 'Shield', title: 'Immune Support', description: '70% of your immune system lives in your gut. Strengthen it with targeted probiotics.' },
            { id: 'b3', icon: 'Brain', title: 'Gut-Brain Axis', description: 'Support cognitive function through the gut-brain connection with mood-enhancing strains.' },
            { id: 'b4', icon: 'Activity', title: 'Digestive Wellness', description: 'Optimize nutrient absorption and reduce digestive discomfort naturally.' },
            { id: 'b5', icon: 'Flame', title: 'Metabolic Boost', description: 'Enhance metabolic function with strains that support healthy weight management.' },
            { id: 'b6', icon: 'Sparkles', title: 'Skin Clarity', description: 'Clear skin starts in the gut. Balance inflammation from within.' },
        ],
        howItWorks: {
            title: 'How Fermbiotic Works',
            subtitle: 'Your Journey to Gut Health',
            steps: [
                { id: 's1', step: 1, icon: 'Pill', title: 'Targeted Delivery', description: 'pH-resistant capsules ensure probiotics reach your intestines intact.' },
                { id: 's2', step: 2, icon: 'Microscope', title: 'Colony Formation', description: 'Beneficial bacteria establish colonies along your intestinal wall.' },
                { id: 's3', step: 3, icon: 'Workflow', title: 'Ecosystem Balance', description: 'Harmful bacteria are displaced as your microbiome rebalances.' },
                { id: 's4', step: 4, icon: 'Sparkles', title: 'Systemic Benefits', description: 'Experience improved digestion, immunity, and overall wellness.' },
            ],
        },
        usage: {
            title: 'Intended Uses',
            subtitle: 'Versatile Gut Support',
            applications: [
                { id: 'u1', icon: 'Sun', title: 'Daily Wellness', description: 'One capsule daily with food for ongoing gut support.' },
                { id: 'u2', icon: 'Pill', title: 'Post-Antibiotic', description: 'Restore gut flora after antibiotic treatment.' },
                { id: 'u3', icon: 'Plane', title: 'Travel Support', description: 'Protect your gut microbiome while traveling.' },
                { id: 'u4', icon: 'Dumbbell', title: 'Athletic Performance', description: 'Optimize nutrient absorption for peak performance.' },
            ],
        },
        pristineShowcase: {
            backgroundImage: '/unnamed.png',
            cards: [
                // Far Depth (2 cards)
                { title: 'Digestion Boost', description: 'Enhances nutrient breakdown for better absorption.', icon: 'trending_up' },
                { title: 'Natural Defense', description: 'Strengthens natural barriers against pathogens.', icon: 'shield' },
                // Mid Depth (3 cards)
                { title: 'Gut Flora', description: 'Restores healthy bacterial balance.', icon: 'eco' },
                { title: 'Metabolic Aid', description: 'Supports efficient energy metabolism.', icon: 'bolt' },
                { title: 'Bloat Relief', description: 'Reduces discomfort and digestive bloating.', icon: 'autorenew' },
                // Near Depth (4 cards)
                { title: 'Immune Trigger', description: 'Activates key immune response markers.', icon: 'favorite' },
                { title: 'Mood Support', description: 'Gut-brain axis support for mental clarity.', icon: 'psychology' },
                { title: 'Fast Acting', description: 'Rapid colonization for quick results.', icon: 'speed' },
                { title: 'pH Balanced', description: 'Optimized for survival in stomach acid.', icon: 'science' },
            ]
        },
        scientificData: {
            growth: {
                subject: 'Gut Health Matrix',
                title: 'Fecal Quality Index',
                description: 'Precision fermentation technology enhances digestibility and nutrient absorption by optimizing the intestinal biome.',
                stats: [
                    { label: 'Digestibility', value: '+22%', change: '', isUp: true },
                    { label: 'Survival Rate', value: '+15%', change: '', isUp: true }
                ],
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXHslu5DnTfGr4FruFp_m5z8RU5yjV5y7eiaD-mQ1s5GPiIIRqP2IYHj0K52221twDAWoKU3N39rGwamH1IFElny4W8rhU9NOvuabdUA4p-NHi0Xa2ghXPabt9Lwqd9JRmWOGmv9n_WYowkoiWKpkBzKgCkRYMqZUIUng1jAPNsBiPAQMEnWTl7pWgd3DQf4OzZwh-g-7PRVICaklQeCW4atTKIPK2QjApmcWxQ_WwMEf32ZsoUT_cw9ORno15JIQ9rkjBVD2gg5h'
            },
            immune: {
                label: 'Microbial Defense',
                title: 'Pathogen Resistance',
                description: 'Advanced probiotic strains activate competitive exclusion, displacing harmful pathogens in the gut ecosystem.',
                chartLabels: ['Lactobacillus', 'Bifido', 'Bacillus'],
                data: [1.2, 3.1, 0.9, 2.8, 1.5, 3.2]
            },
            enzymes: {
                label: 'Fermentation Profile',
                title: 'Probiotic Secretion',
                list: [
                    { name: 'PROBIOTIC', label: 'GUT FLORA', data: [50, 95] },
                    { name: 'PROBIOTIC', label: 'BACTERIOCIN', data: [40, 80] },
                    { name: 'PROBIOTIC', label: 'VFA PRODUCTION', data: [60, 90] }
                ]
            },
            uniformity: {
                label: 'Biomass Distribution',
                title: 'Size Consistency',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_7H2BFEgmV-vVuMMQCwutRuwxVc_Cv3sozIOsIpadXYxM0BgLIhT97BEw6C5vrVtgafaPtopQP3Wx1Cejgrm4DGVJAaRxjnTlsYXI_QhAmojNreku1e7jVbvMFXg3p3Cs_FNnwzriHUCKm7LKkETwU2siBqyQDEveIeQK-lTynropJ25EXWGJYEirX9BtDvIiKlBCMKx87Qg6sWVoRkS266X6K9ODqht72sSawUeVZqck7myoeBbMdBUURGRjAoZH-EkWxa3jR1Eq',
                description: 'Enhanced gut efficiency through fermentation ensures uniform nutrient delivery and synchronized growth cycles.'
            }
        },
        dividers: ['bubbles', 'molecular', 'wave', 'pulse'],
    },
    bleubiotic: {
        id: 'bleubiotic',
        name: 'Bleubiôtic',
        tagline: 'Cellular Purification & Antioxidant Defense',
        description: 'Revolutionary detoxification complex harnessing blue-spectrum antioxidants. Neutralize free radicals and illuminate your cellular health.',
        themeColor: '#3b82f6',
        cssVariable: '--bleubiotic',
        animationType: 'lightwave',
        bannerImage: '/bleubiotic.png',
        benefitIcons: [
            { id: 'detox', icon: 'Droplets', label: 'Detox' },
            { id: 'antioxidant', icon: 'Sun', label: 'Antioxidant' },
            { id: 'clarity', icon: 'Eye', label: 'Clarity' },
            { id: 'vitality', icon: 'Heart', label: 'Vitality' },
        ],
        doctorRecom: {
            image: '/p3doc5.png',
            quote: 'Bleubiôtic is a powerful antioxidant formulation combining phycocyanin with probiotics and postbiotics to support detoxification, anti-aging, and cellular health. It is ideal for daily wellness and metabolic balance.',
            doctorName: 'Dr. Rajiv Sharma'
        },
        immuneSystem: {
            title: 'Cellular Detox',
            subtitle: 'Activity Levels',
            description: 'Comparison of oxidative stress markers and antioxidant enzyme activity. Higher treatment values indicate superior cellular protection and toxin elimination.',
            genes: [
                { name: 'SOD Activity', controlValue: 40, treatmentValue: 90, controlLabel: 'base', treatmentLabel: 'high' },
                { name: 'GSH Levels', controlValue: 35, treatmentValue: 88, controlLabel: 'low', treatmentLabel: 'peak' },
                { name: 'Lipid Perox.', controlValue: 80, treatmentValue: 25, controlLabel: 'high', treatmentLabel: 'low' }, // Inverse expected, but using same structure for now
            ]
        },
        specs: {
            feedingInstructions: "Take one capsule daily with morning water. For enhanced detoxification during high-stress periods, a second capsule may be taken in the evening. Consistent daily use recommended.",
            dosage: { value: "1 Cap", label: "Daily" },
            binderReq: { value: "None", label: "Binder" },
            cycle: { value: "Morning", label: "Timing" },
            storage: {
                temp: "Room Temp",
                conditions: ["Dry Place", "Sealed"]
            },
            shelfLife: "18 Months"
        },
        overview: {
            title: 'The Power of Blue',
            overImage: '/Desktop - 56.png',
            subtitle: 'Antioxidant Illumination',
            description: 'Bleubiôtic combines rare blue-pigmented compounds with advanced detoxification pathways. Experience cellular renewal through the power of phycocyanin and anthocyanins.',
            highlights: ['Blue Spirulina Extract', 'Glutathione Enhanced', 'Heavy Metal Chelation', 'DNA Protection'],
        },


        leftMetrics: [
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
        ],

        rightMetrics: [
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
        ],
        benefits: [
            { id: 'b1', icon: 'Droplets', title: 'Deep Detoxification', description: 'Chelate heavy metals and toxins with precision molecular binding.' },
            { id: 'b2', icon: 'Sun', title: 'Antioxidant Shield', description: '6000x more potent than vitamin C. Ultimate free radical protection.' },
            { id: 'b3', icon: 'Eye', title: 'Visual Clarity', description: 'Protect retinal cells with targeted blue-light filtering compounds.' },
            { id: 'b4', icon: 'Heart', title: 'Cardiovascular Support', description: 'Reduce oxidative stress on blood vessels and heart tissue.' },
            { id: 'b5', icon: 'Brain', title: 'Cognitive Protection', description: 'Shield neurons from oxidative damage and inflammation.' },
            { id: 'b6', icon: 'Zap', title: 'Energy Revival', description: 'Optimize mitochondrial function for sustained energy.' },
        ],
        howItWorks: {
            title: 'How Bleubiôtic Works',
            subtitle: 'Cellular Illumination Process',
            steps: [
                { id: 's1', step: 1, icon: 'Scan', title: 'Toxin Detection', description: 'Smart molecules identify and target harmful compounds.' },
                { id: 's2', step: 2, icon: 'Link', title: 'Molecular Binding', description: 'Chelating agents safely bind toxins for elimination.' },
                { id: 's3', step: 3, icon: 'Shield', title: 'Antioxidant Flood', description: 'Blue pigments neutralize free radicals throughout your body.' },
                { id: 's4', step: 4, icon: 'Sparkles', title: 'Cellular Renewal', description: 'Clean cells regenerate faster and function optimally.' },
            ],
        },
        usage: {
            title: 'Intended Uses',
            subtitle: 'Purification Protocols',
            applications: [
                { id: 'u1', icon: 'RefreshCw', title: 'Daily Detox', description: 'Morning ritual for ongoing cellular cleansing.' },
                { id: 'u2', icon: 'Monitor', title: 'Digital Wellness', description: 'Blue light protection for heavy screen users.' },
                { id: 'u3', icon: 'Wind', title: 'Environmental Shield', description: 'Defense against pollution and environmental toxins.' },
                { id: 'u4', icon: 'Clock', title: 'Anti-Aging Protocol', description: 'Combat oxidative aging at the cellular level.' },
            ],
        },
        pristineShowcase: {
            backgroundImage: '/unnamed.png',
            cards: [
                // Far Depth
                { title: 'Cell Clarity', description: 'Clears cellular debris for optimal function.', icon: 'cleaning_services' },
                { title: 'Toxin Bind', description: 'Traps heavy metals for safe elimination.', icon: 'link' },
                // Mid Depth
                { title: 'Liver Support', description: 'Aids natural liver detoxification pathways.', icon: 'medical_services' },
                { title: 'Free Radicals', description: 'Neutralizes oxidative stress markers.', icon: 'close' },
                { title: 'Skin Purify', description: 'Promotes clear complexion from within.', icon: 'face' },
                // Near Depth
                { title: 'Blue Shield', description: 'Protects cells from digital light stress.', icon: 'visibility' },
                { title: 'Energy flow', description: 'Unblocks metabolic energy pathways.', icon: 'waves' },
                { title: 'Anti-Aging', description: 'Slows cellular aging processes.', icon: 'hourglass_empty' },
                { title: 'Pure Vitality', description: 'Restores natural zest and vigor.', icon: 'self_improvement' },
            ]
        },
        scientificData: {
            growth: {
                subject: 'Antioxidant Defense',
                title: 'Cellular Recovery Rate',
                description: 'Blue-spectrum antioxidants neutralize free radicals, optimizing mitochondrial function and cellular energy pathways.',
                stats: [
                    { label: 'Recovery Time', value: '-20%', change: '', isUp: false },
                    { label: 'Longevity Index', value: '+12%', change: '', isUp: true }
                ],
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXHslu5DnTfGr4FruFp_m5z8RU5yjV5y7eiaD-mQ1s5GPiIIRqP2IYHj0K52221twDAWoKU3N39rGwamH1IFElny4W8rhU9NOvuabdUA4p-NHi0Xa2ghXPabt9Lwqd9JRmWOGmv9n_WYowkoiWKpkBzKgCkRYMqZUIUng1jAPNsBiPAQMEnWTl7pWgd3DQf4OzZwh-g-7PRVICaklQeCW4atTKIPK2QjApmcWxQ_WwMEf32ZsoUT_cw9ORno15JIQ9rkjBVD2gg5h'
            },
            immune: {
                label: 'Detox Marker',
                title: 'Radical Scavenging',
                description: 'Phycocyanin complex activates primary antioxidant pathways, fortifying cells against oxidative stress damage.',
                chartLabels: ['SOD Activity', 'GSH Index', 'CAT Enzyme'],
                data: [0.8, 2.4, 1.1, 2.9, 1.3, 2.7]
            },
            enzymes: {
                label: 'Redox Profile',
                title: 'Detoxification Activity',
                list: [
                    { name: 'ANTIOXIDANT', label: 'CLEANSING', data: [45, 88] },
                    { name: 'ANTIOXIDANT', label: 'PURIFICATION', data: [55, 82] },
                    { name: 'ANTIOXIDANT', label: 'RENEWAL', data: [50, 92] }
                ]
            },
            uniformity: {
                label: 'Vitality Standard',
                title: 'Systemic Health',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_7H2BFEgmV-vVuMMQCwutRuwxVc_Cv3sozIOsIpadXYxM0BgLIhT97BEw6C5vrVtgafaPtopQP3Wx1Cejgrm4DGVJAaRxjnTlsYXI_QhAmojNreku1e7jVbvMFXg3p3Cs_FNnwzriHUCKm7LKkETwU2siBqyQDEveIeQK-lTynropJ25EXWGJYEirX9BtDvIiKlBCMKx87Qg6sWVoRkS266X6K9ODqht72sSawUeVZqck7myoeBbMdBUURGRjAoZH-EkWxa3jR1Eq',
                description: 'Reduced oxidative stress leads to healthier, more resilient populations with synchronized vital markers.'
            }
        },
        dividers: ['pulse', 'wave', 'molecular', 'bubbles'],
    },
    spirotic: {
        id: 'spirotic',
        name: 'Spirôtic',
        tagline: 'The Spiral of Life Force',
        description: 'Ancient superfood reimagined with modern bioavailability. Spirulina\'s spiral structure delivers complete nutrition in its most absorbable form.',
        themeColor: '#14b8a6',
        cssVariable: '--spirotic',
        animationType: 'spiral',
        bannerImage: '/b7c665fe-4a1f-480d-bc84-580d34c60b14.png',
        benefitIcons: [
            { id: 'nutrition', icon: 'Apple', label: 'Nutrition' },
            { id: 'protein', icon: 'Dumbbell', label: 'Protein' },
            { id: 'endurance', icon: 'Activity', label: 'Endurance' },
            { id: 'recovery', icon: 'RefreshCw', label: 'Recovery' },
        ],
        doctorRecom: {
            image: '/p4doc4.png',
            quote: 'Spirôtic Spirulina Powder is a natural superfood rich in protein, vitamins, and antioxidants that enhances immunity, energy levels, and overall nutrition. Recommended for daily dietary supplementation in humans and animal feed.',
            doctorName: 'Dr. Ananya Rao'
        },
        immuneSystem: {
            title: 'Performance',
            subtitle: 'Recovery Markers',
            description: 'Analysis of key athletic performance indicators including hemoglobin regeneration, muscle protein synthesis signaling, and inflammatory response reduction.',
            genes: [
                { name: 'Hemoglobin', controlValue: 45, treatmentValue: 75, controlLabel: 'std', treatmentLabel: 'opt' },
                { name: 'Protein Synth', controlValue: 40, treatmentValue: 85, controlLabel: 'base', treatmentLabel: 'enh' },
                { name: 'Inflammation', controlValue: 70, treatmentValue: 30, controlLabel: 'high', treatmentLabel: 'red' },
            ]
        },
        specs: {
            feedingInstructions: "Mix one scoop (10g) into 300ml of water, smoothie, or juice. Shake well until fully dissolved. Best consumed 30 minutes before workout or immediately after for recovery.",
            dosage: { value: "10g", label: "Scoop" },
            binderReq: { value: "Liquid", label: "Mix With" },
            cycle: { value: "Pre/Post", label: "Workout" },
            storage: {
                temp: "Cool Dry",
                conditions: ["No Moisture", "Dark"]
            },
            shelfLife: "12 Months"
        },
        overview: {
            title: 'Nature\'s Perfect Spiral',
            overImage: '/bleubiotic.png',
            subtitle: 'Complete Nutrition',
            description: 'Spirôticdelivers the world\'s most nutrient-dense superfood in a revolutionary spiral-delivery system. Each serving contains complete protein, essential fatty acids, and concentrated chlorophyll.',
            highlights: ['65% Complete Protein', 'Iron & B12 Rich', 'Chlorophyll Dense', 'Sustainable Source'],
        },
        leftMetrics: [
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
        ],

        rightMetrics: [
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
        ],
        benefits: [
            { id: 'b1', icon: 'Apple', title: 'Complete Nutrition', description: '100+ nutrients in bioavailable spiral-bound form.' },
            { id: 'b2', icon: 'Dumbbell', title: 'Plant Protein Power', description: '65% digestible protein with all essential amino acids.' },
            { id: 'b3', icon: 'Activity', title: 'Endurance Enhancement', description: 'Increase oxygen utilization and reduce fatigue.' },
            { id: 'b4', icon: 'Leaf', title: 'Chlorophyll Cleanse', description: 'Natural blood builder and cellular oxygenator.' },
            { id: 'b5', icon: 'Moon', title: 'Iron Absorption', description: 'Highly bioavailable iron for energy and vitality.' },
            { id: 'b6', icon: 'Recycle', title: 'Sustainable Wellness', description: 'Eco-conscious nutrition with minimal environmental impact.' },
        ],
        howItWorks: {
            title: 'How Spirotic Works',
            subtitle: 'Spiral Delivery System',
            steps: [
                { id: 's1', step: 1, icon: 'Waves', title: 'Spiral Absorption', description: 'Unique cell structure ensures maximum nutrient uptake.' },
                { id: 's2', step: 2, icon: 'Droplet', title: 'Cellular Hydration', description: 'Nutrients bind with water for deep cellular delivery.' },
                { id: 's3', step: 3, icon: 'Flame', title: 'Energy Activation', description: 'Mitochondria receive concentrated fuel for ATP production.' },
                { id: 's4', step: 4, icon: 'TrendingUp', title: 'Performance Elevation', description: 'Experience sustained energy and enhanced recovery.' },
            ],
        },
        usage: {
            title: 'Intended Uses',
            subtitle: 'Versatile Superfood',
            applications: [
                { id: 'u1', icon: 'Coffee', title: 'Morning Boost', description: 'Add to smoothies for sustained morning energy.' },
                { id: 'u2', icon: 'Timer', title: 'Pre-Workout', description: 'Enhance endurance 30 minutes before exercise.' },
                { id: 'u3', icon: 'Utensils', title: 'Meal Enhancement', description: 'Boost any meal\'s nutritional profile.' },
                { id: 'u4', icon: 'Sparkles', title: 'Recovery Support', description: 'Post-workout nutrition for faster recovery.' },
            ],
        },
        pristineShowcase: {
            backgroundImage: '/fish.png',
            cards: [
                // Far Depth
                { title: 'Nutrient Dense', description: 'Packed with vitamins and minerals.', icon: 'apps' },
                { title: 'Muscle Fuel', description: 'High quality plant protein source.', icon: 'fitness_center' },
                // Mid Depth
                { title: 'Blood Health', description: 'Rich iron content supports hemoglobin.', icon: 'water_drop' },
                { title: 'Oxygenation', description: 'Chlorophyll boosts oxygen delivery.', icon: 'air' },
                { title: 'Endurance', description: 'Sustains energy for long activities.', icon: 'timer' },
                // Near Depth
                { title: 'Alkalizing', description: 'Balances body pH levels.', icon: 'balance' },
                { title: 'Detoxifying', description: 'Natural cleanser for the body.', icon: 'spa' },
                { title: 'Bioavailable', description: 'Easily absorbed spiral structure.', icon: 'all_inclusive' },
                { title: 'Sustainable', description: 'Eco-friendly minimal footprint.', icon: 'recycling' },
            ]
        },
        scientificData: {
            growth: {
                subject: 'Vital Force',
                title: 'Bioavailable Protein',
                description: 'Unique spiral cell structure ensures 95% protein digestibility and rapid assimilation into muscle tissue.',
                stats: [
                    { label: 'Muscle Density', value: '+18%', change: '', isUp: true },
                    { label: 'Endurance', value: '+25%', change: '', isUp: true }
                ],
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXHslu5DnTfGr4FruFp_m5z8RU5yjV5y7eiaD-mQ1s5GPiIIRqP2IYHj0K52221twDAWoKU3N39rGwamH1IFElny4W8rhU9NOvuabdUA4p-NHi0Xa2ghXPabt9Lwqd9JRmWOGmv9n_WYowkoiWKpkBzKgCkRYMqZUIUng1jAPNsBiPAQMEnWTl7pWgd3DQf4OzZwh-g-7PRVICaklQeCW4atTKIPK2QjApmcWxQ_WwMEf32ZsoUT_cw9ORno15JIQ9rkjBVD2gg5h'
            },
            immune: {
                label: 'Nutritional Balance',
                title: 'Micronutrient Uptake',
                description: 'Over 100 bio-bound nutrients fortify the systemic immune response through optimized metabolic pathways.',
                chartLabels: ['Hemoglobin', 'Iron Bound', 'Chlorophyll'],
                data: [0.9, 2.5, 1.0, 2.8, 1.2, 2.6]
            },
            enzymes: {
                label: 'Nutrient Profile',
                title: 'Bioavailability Index',
                list: [
                    { name: 'NUTRIENT', label: 'ABSORPTION', data: [48, 91] },
                    { name: 'NUTRIENT', label: 'SYNTHESIS', data: [42, 86] },
                    { name: 'NUTRIENT', label: 'VITALITY', data: [52, 89] }
                ]
            },
            uniformity: {
                label: 'Population Quality',
                title: 'Growth Symmetry',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_7H2BFEgmV-vVuMMQCwutRuwxVc_Cv3sozIOsIpadXYxM0BgLIhT97BEw6C5vrVtgafaPtopQP3Wx1Cejgrm4DGVJAaRxjnTlsYXI_QhAmojNreku1e7jVbvMFXg3p3Cs_FNnwzriHUCKm7LKkETwU2siBqyQDEveIeQK-lTynropJ25EXWGJYEirX9BtDvIiKlBCMKx87Qg6sWVoRkS266X6K9ODqht72sSawUeVZqck7myoeBbMdBUURGRjAoZH-EkWxa3jR1Eq',
                description: 'Complete nutrition eliminates growth bottlenecks, ensuring perfectly symmetrical development across the population.'
            }
        },
        dividers: ['wave', 'bubbles', 'pulse', 'molecular'],
    },

    glowbiotic: {
        id: 'glowbiotic',
        name: 'GlowBiôtic',
        tagline: 'Bioluminescent Vitality Complex',
        description: 'Inspired by nature\'s light-producing organisms. Activate your inner radiance with spectrum-shifting bio-compounds.',
        themeColor: '#ec4899',
        cssVariable: '--glowbiotic',
        animationType: 'bioluminescence',
        bannerImage: '/7abecef8-f201-48ad-9258-253d1c066986.png',
        benefitIcons: [
            { id: 'glow', icon: 'Sparkles', label: 'Radiance' },
            { id: 'color', icon: 'Palette', label: 'Vitality' },
            { id: 'light', icon: 'Sun', label: 'Energy' },
            { id: 'beauty', icon: 'Star', label: 'Beauty' },
        ],
        doctorRecom: {
            image: '/p1doc5.png',
            quote: 'GlowBiôtic is specially formulated to enhance vibrant coloration, immunity, and lifespan of ornamental fish and shrimps. Regular use supports overall health and aesthetic quality in ornamental aquatic systems.',
            doctorName: 'Dr. Kajal'
        },
        immuneSystem: {
            title: 'Dermal Health',
            subtitle: 'Bio-Markers',
            description: 'Quantification of collagen synthesis levels, cellular hydration retention, and elasticity markers in skin tissue cultures treated with Glowbiotic.',
            genes: [
                { name: 'Collagen I', controlValue: 35, treatmentValue: 88, controlLabel: 'base', treatmentLabel: 'inc' },
                { name: 'Elastin', controlValue: 40, treatmentValue: 78, controlLabel: 'std', treatmentLabel: 'sup' },
                { name: 'Hydration', controlValue: 45, treatmentValue: 85, controlLabel: 'dry', treatmentLabel: 'hyd' },
            ]
        },
        specs: {
            feedingInstructions: "For optimal absorption, take two capsules before bed. This aligns with the body's natural nightly repair cycle. Ensure adequate water intake throughout the day.",
            dosage: { value: "2 Caps", label: "Nightly" },
            binderReq: { value: "Water", label: "Take With" },
            cycle: { value: "Bedtime", label: "Timing" },
            storage: {
                temp: "Cool Dark",
                conditions: ["No Heat", "Sealed"]
            },
            shelfLife: "24 Months"
        },
        overview: {
            title: 'The Science of Glow',
            overImage: '/bleubiotic.png',
            subtitle: 'Bioluminescent Beauty',
            description: 'GlowBiôtic harnesses rare bioluminescent compounds to activate your natural radiance. Our spectrum-shifting formula promotes skin luminosity, hair vitality, and overall vibrancy.',
            highlights: ['Bioluminescent Extracts', 'Collagen Activation', 'Spectrum Nutrients', 'Visible Results'],
        },
        leftMetrics: [
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
        ],

        rightMetrics: [
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
            { name: "", value: 0, suffix: "%", color: "primary" },
            { name: "", value: 0, suffix: "%", color: "accent" },
            { name: "", value: 0, suffix: "%", color: "secondary" },
        ],
        benefits: [
            { id: 'b1', icon: 'Sparkles', title: 'Skin Luminosity', description: 'Activate cellular radiance for a natural, healthy glow.' },
            { id: 'b2', icon: 'Palette', title: 'Color Vitality', description: 'Enhance natural pigmentation and vibrancy.' },
            { id: 'b3', icon: 'Gem', title: 'Collagen Support', description: 'Stimulate collagen synthesis for youthful elasticity.' },
            { id: 'b4', icon: 'Droplets', title: 'Deep Hydration', description: 'Cellular hydration for plump, dewy skin.' },
            { id: 'b5', icon: 'Scissors', title: 'Hair Radiance', description: 'Strengthen and add shine to hair follicles.' },
            { id: 'b6', icon: 'Eye', title: 'Eye Brightness', description: 'Reduce dark circles and enhance eye clarity.' },
        ],
        howItWorks: {
            title: 'How Glowbiotic Works',
            subtitle: 'Radiance Activation',
            steps: [
                { id: 's1', step: 1, icon: 'Pill', title: 'Nutrient Absorption', description: 'Spectrum compounds enter your bloodstream.' },
                { id: 's2', step: 2, icon: 'Sparkles', title: 'Cellular Activation', description: 'Bioluminescent factors trigger skin cell renewal.' },
                { id: 's3', step: 3, icon: 'Gem', title: 'Collagen Synthesis', description: 'Structural proteins rebuild for firmer skin.' },
                { id: 's4', step: 4, icon: 'Sun', title: 'Visible Radiance', description: 'Experience your natural glow emerge within weeks.' },
            ],
        },
        usage: {
            title: 'Intended Uses',
            subtitle: 'Beauty Protocols',
            applications: [
                { id: 'u1', icon: 'Sun', title: 'Daily Radiance', description: 'Morning capsule for all-day glow.' },
                { id: 'u2', icon: 'Moon', title: 'Night Repair', description: 'Evening dose for overnight cellular renewal.' },
                { id: 'u3', icon: 'Calendar', title: 'Event Prep', description: 'Intensive protocol before special occasions.' },
                { id: 'u4', icon: 'RefreshCw', title: 'Seasonal Reset', description: 'Quarterly intensive for renewed radiance.' },
            ],
        },
        pristineShowcase: {
            backgroundImage: '/unnamed.png',
            cards: [
                // Far Depth
                { title: 'Inner Glow', description: 'Activates radiance from within.', icon: 'light_mode' },
                { title: 'Hydration', description: 'Locks in cellular moisture.', icon: 'water_drop' },
                // Mid Depth
                { title: 'Skin Elastic', description: 'Supports collagen for firm skin.', icon: 'gesture' },
                { title: 'Hair Shine', description: 'Enhances hair strength and luster.', icon: 'face_retouching_natural' },
                { title: 'Nail Strength', description: 'Fortifies nails against breakage.', icon: 'front_hand' },
                // Near Depth
                { title: 'UV Defense', description: 'Natural support against UV stress.', icon: 'umbrella' },
                { title: 'Even Tone', description: 'Promotes balanced skin pigmentation.', icon: 'contrast' },
                { title: 'Cell Renew', description: 'Accelerates skin cell turnover.', icon: 'update' },
                { title: 'Youthful', description: 'Combats signs of visible aging.', icon: 'auto_awesome' },
            ]
        },
        scientificData: {
            growth: {
                subject: 'Dermal Vitality',
                title: 'Radiance Expression',
                description: 'Spectrum-shifting compounds activate dermal repair and pigmentation markers at the cellular level.',
                stats: [
                    { label: 'Luminosity', value: '+40%', change: '', isUp: true },
                    { label: 'Elasticity', value: '+18%', change: '', isUp: true }
                ],
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXHslu5DnTfGr4FruFp_m5z8RU5yjV5y7eiaD-mQ1s5GPiIIRqP2IYHj0K52221twDAWoKU3N39rGwamH1IFElny4W8rhU9NOvuabdUA4p-NHi0Xa2ghXPabt9Lwqd9JRmWOGmv9n_WYowkoiWKpkBzKgCkRYMqZUIUng1jAPNsBiPAQMEnWTl7pWgd3DQf4OzZwh-g-7PRVICaklQeCW4atTKIPK2QjApmcWxQ_WwMEf32ZsoUT_cw9ORno15JIQ9rkjBVD2gg5h'
            },
            immune: {
                label: 'Dermal Shield',
                title: 'Barrier Integrity',
                description: 'Bioluminescent factors strengthen the external defense layers, enhancing natural resilience against environmental stressors.',
                chartLabels: ['Collagen', 'Elastin', 'Keratin'],
                data: [1.1, 2.7, 0.9, 2.8, 1.4, 2.9]
            },
            enzymes: {
                label: 'Spectrum Profile',
                title: 'Glow Activation',
                list: [
                    { name: 'GLOW', label: 'LUMINOSITY', data: [55, 96] },
                    { name: 'GLOW', label: 'PIGMENTATION', data: [48, 88] },
                    { name: 'GLOW', label: 'RADIANCE', data: [62, 94] }
                ]
            },
            uniformity: {
                label: 'Aesthetic Standard',
                title: 'Visual Perfection',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_7H2BFEgmV-vVuMMQCwutRuwxVc_Cv3sozIOsIpadXYxM0BgLIhT97BEw6C5vrVtgafaPtopQP3Wx1Cejgrm4DGVJAaRxjnTlsYXI_QhAmojNreku1e7jVbvMFXg3p3Cs_FNnwzriHUCKm7LKkETwU2siBqyQDEveIeQK-lTynropJ25EXWGJYEirX9BtDvIiKlBCMKx87Qg6sWVoRkS266X6K9ODqht72sSawUeVZqck7myoeBbMdBUURGRjAoZH-EkWxa3jR1Eq',
                description: 'Consistent spectrum delivery ensures uniform coloration and peak health across the entire biological population.'
            }
        },
        dividers: ['pulse', 'molecular', 'wave', 'bubbles'],
    },
};

export const getProduct = (id: string): ProductData | undefined => products[id];

export const getAllProducts = (): ProductData[] => Object.values(products);

// Compatibility export for legacy components (ProductShowcase)
export const productsRaw = Object.values(products).map(product => {
    // Map theme colors to gradients
    let gradient = 'from-green-400 to-emerald-600';
    if (product.id === 'bleubiotic') gradient = 'from-blue-400 to-indigo-600';
    if (product.id === 'spirotic') gradient = 'from-teal-400 to-emerald-600';
    if (product.id === 'algabiotic') gradient = 'from-sky-400 to-blue-600';
    if (product.id === 'glowbiotic') gradient = 'from-pink-400 to-rose-600';

    return {
        id: product.id,
        name: product.name,
        category: 'Bio-Solution',
        description: product.description,
        benefits: product.benefits.map(b => b.title),
        gradient: gradient,
        image: `/assets/products/${product.id}.png`, // Placeholder path
    };
});

