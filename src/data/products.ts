import { ProductData } from '@/types/product';

export const products: Record<string, ProductData> = {
    fermbiotic: {
        id: 'fermbiotic',
        name: 'Fermbiotic',
        tagline: 'Fermentation Science for Gut Vitality',
        description: 'Advanced probiotic formula powered by precision fermentation technology. Cultivate a thriving gut microbiome with billions of beneficial bacteria.',
        themeColor: '#22c55e',
        cssVariable: '--fermbiotic',
        animationType: 'microbiome',
        benefitIcons: [
            { id: 'gut', icon: 'Heart', label: 'Gut Health' },
            { id: 'shield', icon: 'Shield', label: 'Immunity' },
            { id: 'leaf', icon: 'Leaf', label: 'Natural' },
            { id: 'energy', icon: 'Zap', label: 'Energy' },
        ],
        overview: {
            title: 'The Science of Fermentation',
            subtitle: 'Precision-Engineered Probiotics',
            description: 'Fermbiotic harnesses centuries-old fermentation wisdom combined with cutting-edge biotechnology. Our proprietary strain selection delivers targeted gut support with clinically-proven efficacy.',
            highlights: ['50 Billion CFU', 'pH-Protected Delivery', '12 Strain Complex', 'Clinically Tested'],
        },
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
            title: 'Applications',
            subtitle: 'Versatile Gut Support',
            applications: [
                { id: 'u1', icon: 'Sun', title: 'Daily Wellness', description: 'One capsule daily with food for ongoing gut support.' },
                { id: 'u2', icon: 'Pill', title: 'Post-Antibiotic', description: 'Restore gut flora after antibiotic treatment.' },
                { id: 'u3', icon: 'Plane', title: 'Travel Support', description: 'Protect your gut microbiome while traveling.' },
                { id: 'u4', icon: 'Dumbbell', title: 'Athletic Performance', description: 'Optimize nutrient absorption for peak performance.' },
            ],
        },
        dividers: ['bubbles', 'molecular', 'wave', 'pulse'],
    },
    bleubiotic: {
        id: 'bleubiotic',
        name: 'Bleubiotic',
        tagline: 'Cellular Purification & Antioxidant Defense',
        description: 'Revolutionary detoxification complex harnessing blue-spectrum antioxidants. Neutralize free radicals and illuminate your cellular health.',
        themeColor: '#3b82f6',
        cssVariable: '--bleubiotic',
        animationType: 'lightwave',
        benefitIcons: [
            { id: 'detox', icon: 'Droplets', label: 'Detox' },
            { id: 'antioxidant', icon: 'Sun', label: 'Antioxidant' },
            { id: 'clarity', icon: 'Eye', label: 'Clarity' },
            { id: 'vitality', icon: 'Heart', label: 'Vitality' },
        ],
        overview: {
            title: 'The Power of Blue',
            subtitle: 'Antioxidant Illumination',
            description: 'Bleubiotic combines rare blue-pigmented compounds with advanced detoxification pathways. Experience cellular renewal through the power of phycocyanin and anthocyanins.',
            highlights: ['Blue Spirulina Extract', 'Glutathione Enhanced', 'Heavy Metal Chelation', 'DNA Protection'],
        },
        benefits: [
            { id: 'b1', icon: 'Droplets', title: 'Deep Detoxification', description: 'Chelate heavy metals and toxins with precision molecular binding.' },
            { id: 'b2', icon: 'Sun', title: 'Antioxidant Shield', description: '6000x more potent than vitamin C. Ultimate free radical protection.' },
            { id: 'b3', icon: 'Eye', title: 'Visual Clarity', description: 'Protect retinal cells with targeted blue-light filtering compounds.' },
            { id: 'b4', icon: 'Heart', title: 'Cardiovascular Support', description: 'Reduce oxidative stress on blood vessels and heart tissue.' },
            { id: 'b5', icon: 'Brain', title: 'Cognitive Protection', description: 'Shield neurons from oxidative damage and inflammation.' },
            { id: 'b6', icon: 'Zap', title: 'Energy Revival', description: 'Optimize mitochondrial function for sustained energy.' },
        ],
        howItWorks: {
            title: 'How Bleubiotic Works',
            subtitle: 'Cellular Illumination Process',
            steps: [
                { id: 's1', step: 1, icon: 'Scan', title: 'Toxin Detection', description: 'Smart molecules identify and target harmful compounds.' },
                { id: 's2', step: 2, icon: 'Link', title: 'Molecular Binding', description: 'Chelating agents safely bind toxins for elimination.' },
                { id: 's3', step: 3, icon: 'Shield', title: 'Antioxidant Flood', description: 'Blue pigments neutralize free radicals throughout your body.' },
                { id: 's4', step: 4, icon: 'Sparkles', title: 'Cellular Renewal', description: 'Clean cells regenerate faster and function optimally.' },
            ],
        },
        usage: {
            title: 'Applications',
            subtitle: 'Purification Protocols',
            applications: [
                { id: 'u1', icon: 'RefreshCw', title: 'Daily Detox', description: 'Morning ritual for ongoing cellular cleansing.' },
                { id: 'u2', icon: 'Monitor', title: 'Digital Wellness', description: 'Blue light protection for heavy screen users.' },
                { id: 'u3', icon: 'Wind', title: 'Environmental Shield', description: 'Defense against pollution and environmental toxins.' },
                { id: 'u4', icon: 'Clock', title: 'Anti-Aging Protocol', description: 'Combat oxidative aging at the cellular level.' },
            ],
        },
        dividers: ['pulse', 'wave', 'molecular', 'bubbles'],
    },
    spirotic: {
        id: 'spirotic',
        name: 'Spirotic',
        tagline: 'The Spiral of Life Force',
        description: 'Ancient superfood reimagined with modern bioavailability. Spirulina\'s spiral structure delivers complete nutrition in its most absorbable form.',
        themeColor: '#14b8a6',
        cssVariable: '--spirotic',
        animationType: 'spiral',
        benefitIcons: [
            { id: 'nutrition', icon: 'Apple', label: 'Nutrition' },
            { id: 'protein', icon: 'Dumbbell', label: 'Protein' },
            { id: 'endurance', icon: 'Activity', label: 'Endurance' },
            { id: 'recovery', icon: 'RefreshCw', label: 'Recovery' },
        ],
        overview: {
            title: 'Nature\'s Perfect Spiral',
            subtitle: 'Complete Nutrition',
            description: 'Spirotic delivers the world\'s most nutrient-dense superfood in a revolutionary spiral-delivery system. Each serving contains complete protein, essential fatty acids, and concentrated chlorophyll.',
            highlights: ['65% Complete Protein', 'Iron & B12 Rich', 'Chlorophyll Dense', 'Sustainable Source'],
        },
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
            title: 'Applications',
            subtitle: 'Versatile Superfood',
            applications: [
                { id: 'u1', icon: 'Coffee', title: 'Morning Boost', description: 'Add to smoothies for sustained morning energy.' },
                { id: 'u2', icon: 'Timer', title: 'Pre-Workout', description: 'Enhance endurance 30 minutes before exercise.' },
                { id: 'u3', icon: 'Utensils', title: 'Meal Enhancement', description: 'Boost any meal\'s nutritional profile.' },
                { id: 'u4', icon: 'Sparkles', title: 'Recovery Support', description: 'Post-workout nutrition for faster recovery.' },
            ],
        },
        dividers: ['wave', 'bubbles', 'pulse', 'molecular'],
    },
    algabiotic: {
        id: 'algabiotic',
        name: 'Algabiotic',
        tagline: 'Ocean Intelligence for Growth',
        description: 'Marine biotechnology breakthrough for aquaculture and agriculture. Harness the growth-promoting power of oceanic microalgae.',
        themeColor: '#0ea5e9',
        cssVariable: '--algabiotic',
        animationType: 'ripple',
        benefitIcons: [
            { id: 'growth', icon: 'TrendingUp', label: 'Growth' },
            { id: 'yield', icon: 'BarChart3', label: 'Yield' },
            { id: 'sustainable', icon: 'Recycle', label: 'Sustainable' },
            { id: 'marine', icon: 'Waves', label: 'Marine' },
        ],
        overview: {
            title: 'Ocean-Powered Growth',
            subtitle: 'Marine Biotechnology',
            description: 'Algabiotic leverages marine microalgae to accelerate growth in aquaculture and agriculture. Our proprietary blend enhances nutrient uptake and promotes natural development.',
            highlights: ['Marine Microalgae', 'Growth Factors', 'Sustainable Production', 'Aquaculture Optimized'],
        },
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
            title: 'Applications',
            subtitle: 'Industry Solutions',
            applications: [
                { id: 'u1', icon: 'Fish', title: 'Fish Farming', description: 'Accelerate fish growth and improve feed conversion.' },
                { id: 'u2', icon: 'Shell', title: 'Shellfish Culture', description: 'Enhance mollusk and crustacean development.' },
                { id: 'u3', icon: 'Sprout', title: 'Agriculture', description: 'Boost crop yields with marine-derived nutrients.' },
                { id: 'u4', icon: 'FlaskConical', title: 'Research Applications', description: 'Controlled growth studies and development.' },
            ],
        },
        dividers: ['wave', 'bubbles', 'molecular', 'pulse'],
    },
    glowbiotic: {
        id: 'glowbiotic',
        name: 'Glowbiotic',
        tagline: 'Bioluminescent Vitality Complex',
        description: 'Inspired by nature\'s light-producing organisms. Activate your inner radiance with spectrum-shifting bio-compounds.',
        themeColor: '#ec4899',
        cssVariable: '--glowbiotic',
        animationType: 'bioluminescence',
        benefitIcons: [
            { id: 'glow', icon: 'Sparkles', label: 'Radiance' },
            { id: 'color', icon: 'Palette', label: 'Vitality' },
            { id: 'light', icon: 'Sun', label: 'Energy' },
            { id: 'beauty', icon: 'Star', label: 'Beauty' },
        ],
        overview: {
            title: 'The Science of Glow',
            subtitle: 'Bioluminescent Beauty',
            description: 'Glowbiotic harnesses rare bioluminescent compounds to activate your natural radiance. Our spectrum-shifting formula promotes skin luminosity, hair vitality, and overall vibrancy.',
            highlights: ['Bioluminescent Extracts', 'Collagen Activation', 'Spectrum Nutrients', 'Visible Results'],
        },
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
            title: 'Applications',
            subtitle: 'Beauty Protocols',
            applications: [
                { id: 'u1', icon: 'Sun', title: 'Daily Radiance', description: 'Morning capsule for all-day glow.' },
                { id: 'u2', icon: 'Moon', title: 'Night Repair', description: 'Evening dose for overnight cellular renewal.' },
                { id: 'u3', icon: 'Calendar', title: 'Event Prep', description: 'Intensive protocol before special occasions.' },
                { id: 'u4', icon: 'RefreshCw', title: 'Seasonal Reset', description: 'Quarterly intensive for renewed radiance.' },
            ],
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

