export interface ProductData {
    id: string;
    name: string;
    category: string;
    description: string;
    longDescription: string;
    benefits: string[];
    ingredients: string[];
    usage: string;
    scientificValidation: string;
    gradient: string;
    image: string;
}

export const productsRaw: ProductData[] = [
    {
        id: "fermbiotic",
        name: "Fermbiotic",
        category: "Human Feed",
        description: "Advanced fermentation technology ensuring maximum nutrient absorption and gut health support.",
        longDescription: "Fermbiotic represents the pinnacle of biotransformation technology. By leveraging specific microbial strains to ferment plant-based proteins, we unlock nutrients that are otherwise indigestible, creating a bioavailable superfood that supports immune function and digestive wellness.",
        benefits: [
            "Increases nutrient absorption by up to 40%",
            "Supports a diverse and healthy gut microbiome",
            "Rich in postbiotics and essential amino acids",
            "Clean label, allergen-free, and sustainable"
        ],
        ingredients: ["Fermented Pea Protein", "Bacillus coagulans", "Algae Oil", "Natural Enzymes"],
        usage: "Mix 1 scoop (30g) with water or your favorite beverage daily.",
        scientificValidation: "Clinical trials demonstrated a significant reduction in inflammatory markers and improved digestive comfort after 4 weeks of daily use.",
        gradient: "from-blue-600 to-purple-600",
        image: "https://placehold.co/600x600/2563eb/ffffff?text=Fermbiotic"
    },
    {
        id: "bleubiotic",
        name: "Bleubiotic",
        category: "Human Feed",
        description: "Optimized for microbiome balance, supporting immune function with natural bioactive compounds.",
        longDescription: "Bleubiotic harnesses the power of blue-green algae and targeted probiotics to create a synergistic defense system for your body. It is designed to bolster natural immunity and provide a sustained energy boost without the crash.",
        benefits: [
            "Boosts natural immune defense",
            "Provides sustained energy and mental clarity",
            "Rich in phycocyanin (powerful antioxidant)",
            "Supports cellular regeneration"
        ],
        ingredients: ["Spirulina Extract", "Phycocyanin", "Lactobacillus acidophilus", "Vitamin C (Acerola)"],
        usage: "Take 2 capsules daily with a meal.",
        scientificValidation: "In vitro studies showed a 25% increase in antioxidant capacity in plasma within 2 hours of consumption.",
        gradient: "from-blue-400 to-cyan-500",
        image: "https://placehold.co/600x600/06b6d4/ffffff?text=Bleubiotic"
    },
    {
        id: "spirotic",
        name: "Spirotic",
        category: "Human Feed",
        description: "Spirulina-enriched formulation rich in antioxidants and essential amino acids.",
        longDescription: "Spirotic is a nutrient-dense whole food supplement derived from organic Spirulina. It is cultivation in controlled bioreactors ensures purity and optimal nutritional profile, making it the perfect daily green superfood.",
        benefits: [
            "Complete protein source (all 9 essential amino acids)",
            "Detoxifies heavy metals from the body",
            "Supports cardiovascular health",
            "High in Iron and Vitamin B12"
        ],
        ingredients: ["Organic Spirulina", "Chlorella", "Barley Grass", "Wheatgrass"],
        usage: "Add 1 teaspoon to smoothies or juice.",
        scientificValidation: "Regular consumption has been linked to improved lipid profiles and reduced oxidative stress markers.",
        gradient: "from-green-500 to-emerald-700",
        image: "https://placehold.co/600x600/10b981/ffffff?text=Spirotic"
    },
    {
        id: "algabiotic",
        name: "Algabiotic",
        category: "Animal Feed",
        description: "Algae-based feed additive that improves aquatic animal health and reduces reliance on antibiotics.",
        longDescription: "Algabiotic is a revolutionary feed additive for aquaculture. By introducing bioactive algae compounds into the diet of shrimp and fish, it boosts their non-specific immunity, leading to higher survival rates and better growth performance.",
        benefits: [
            "Improves survival rates by 15-20%",
            "Enhances resistance to Vibrio and other pathogens",
            "Improves Feed Conversion Ratio (FCR)",
            "Reduces nitrogen waste in water"
        ],
        ingredients: ["Marine Microalgae Blend", "Beta-glucans", "Mannan-oligosaccharides", "Organic Acids"],
        usage: "Include at 0.5% to 1% inclusion rate in standard feed.",
        scientificValidation: "Field trials in shrimp farms showed a 10% increase in total harvest biomass compared to control groups.",
        gradient: "from-teal-600 to-green-600",
        image: "https://placehold.co/600x600/059669/ffffff?text=Algabiotic"
    },
    {
        id: "glowbiotic",
        name: "Glowbiotic",
        category: "Animal Feed",
        description: "Enhances natural coloration and vitality in aquaculture species through specialized pigments.",
        longDescription: "Glowbiotic is a premium feed supplement designed to enhance the natural pigmentation and visual appeal of aquaculture species. Rich in natural carotenoids like Astaxanthin, it ensures vibrant colors and superior market value.",
        benefits: [
            "Intensifies natural coloration (Red/Orange)",
            "Strong antioxidant protection for the animal",
            "Improves stress tolerance during transport",
            "Increases market value of final product"
        ],
        ingredients: ["Haematococcus pluvialis (Astaxanthin)", "Krill Meal", "Paprika Extract", "Vitamin E"],
        usage: "Use during the final 4 weeks of the grow-out phase.",
        scientificValidation: "Colorimetric analysis confirmed a 3-point increase on the SalmoFan color scale after 3 weeks of supplementation.",
        gradient: "from-orange-500 to-red-600",
        image: "https://placehold.co/600x600/ea580c/ffffff?text=Glowbiotic"
    }
];
