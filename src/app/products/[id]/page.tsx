import { Viewport } from "next";
import { notFound } from "next/navigation";
import { productsRaw } from "@/data/products";
import { ProductFeatures, ProductIngredients, ScientificValidation } from "@/components/products/ProductDetailComponents";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export async function generateStaticParams() {
    return productsRaw.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }: Props) {
    const product = productsRaw.find((p) => p.id === params.id);
    if (!product) return { title: "Product Not Found" };
    return {
        title: `${product.name} | Aroora Biotech`,
        description: product.description,
    };
}

export const dynamicParams = false;

interface Props {
    params: { id: string };
}

export default function ProductPage({ params }: Props) {
    const product = productsRaw.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#0A2540] pb-24">
            {/* Hero Header */}
            <div className={`relative h-[40vh] w-full flex items-center justify-center bg-gradient-to-br ${product.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 text-center px-6">
                    <FadeIn direction="up">
                        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white/20 text-white text-sm font-bold tracking-wider backdrop-blur-md">
                            {product.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">{product.name}</h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">{product.description}</p>
                    </FadeIn>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content (2 cols) */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-[#0A2540] rounded-3xl p-8 border border-white/10 shadow-xl">
                            <FadeIn direction="up">
                                <h2 className="text-2xl font-bold text-white mb-4">Product Overview</h2>
                                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                    {product.longDescription}
                                </p>

                                <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                                <ProductFeatures features={product.benefits} />
                            </FadeIn>
                        </div>

                        <div className="bg-[#0A2540] rounded-3xl p-8 border border-white/10 shadow-xl">
                            <FadeIn direction="up">
                                <ScientificValidation text={product.scientificValidation} />
                            </FadeIn>
                        </div>
                    </div>

                    {/* Sidebar (1 col) */}
                    <div className="space-y-8">
                        <div className="bg-[#0A2540] rounded-3xl p-8 border border-white/10 shadow-xl sticky top-24">
                            <FadeIn direction="up" delay={0.2}>
                                <h3 className="text-xl font-bold text-white mb-4">Usage & Ingredients</h3>

                                <div className="mb-6">
                                    <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">Recommended Usage</span>
                                    <p className="text-white mt-1">{product.usage}</p>
                                </div>

                                <ProductIngredients ingredients={product.ingredients} />

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <button className="w-full py-4 bg-[#0FA57D] hover:bg-[#0FA57D]/90 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 mb-3">
                                        <ShoppingBag className="w-5 h-5" /> Order Sample
                                    </button>
                                    <Link href="/products" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                                        <ArrowLeft className="w-4 h-4" /> Back to Products
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
