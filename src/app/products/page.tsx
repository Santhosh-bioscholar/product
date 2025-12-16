import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductCategory } from "@/components/products/ProductCategory";
import { ProductSustainability } from "@/components/products/ProductSustainability";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Products | Aroora Biotech",
    description: "Explore our range of sustainable biotech products for human nutrition and animal feed, powered by nature's intelligence.",
};

const humanFeedProducts = [
    {
        id: "fermbiotic",
        name: "Fermbiotic",
        desc: "Advanced fermentation technology ensuring maximum nutrient absorption and gut health support.",
        gradient: "from-blue-600 to-purple-600",
    },
    {
        id: "bleubiotic",
        name: "Bleubiotic",
        desc: "Optimized for microbiome balance, supporting immune function with natural bioactive compounds.",
        gradient: "from-blue-400 to-cyan-500",
    },
    {
        id: "spirotic",
        name: "Spirotic",
        desc: "Spirulina-enriched formulation rich in antioxidants and essential amino acids.",
        gradient: "from-green-500 to-emerald-700",
    },
];

const animalFeedProducts = [
    {
        id: "algabiotic",
        name: "Algabiotic",
        desc: "Algae-based feed additive that improves aquatic animal health and reduces reliance on antibiotics.",
        gradient: "from-teal-600 to-green-600",
    },
    {
        id: "glowbiotic",
        name: "Glowbiotic",
        desc: "Enhances natural coloration and vitality in aquaculture species through specialized pigments.",
        gradient: "from-orange-500 to-red-600",
    },
];

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#0A2540]">
            <ProductsHero />
            <ProductCategory
                title="Human Feed Products"
                description="Nutraceuticals designed to empower human potential."
                products={humanFeedProducts}
            />
            <ProductCategory
                title="Animal Feed Products"
                description="Next-generation biotransformation for sustainable aquaculture."
                products={animalFeedProducts}
                align="right"
            />
            <ProductSustainability />
        </div>
    );
}
