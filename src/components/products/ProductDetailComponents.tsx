"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { Check, Beaker, Leaf } from "lucide-react";

export function ProductFeatures({ features }: { features: string[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
                <FadeIn key={i} delay={i * 0.1} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-200">{feature}</span>
                </FadeIn>
            ))}
        </div>
    );
}

export function ProductIngredients({ ingredients }: { ingredients: string[] }) {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-400" /> Key Ingredients
            </h3>
            <div className="flex flex-wrap gap-2">
                {ingredients.map((ing, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                        {ing}
                    </span>
                ))}
            </div>
        </div>
    );
}

export function ScientificValidation({ text }: { text: string }) {
    return (
        <div className="mt-8 p-6 bg-blue-900/20 rounded-2xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-blue-300 mb-2 flex items-center gap-2">
                <Beaker className="w-5 h-5" /> Scientific Validation
            </h3>
            <p className="text-gray-300 italic">
                &quot;{text}&quot;
            </p>

            {/* Placeholder Chart */}
            <div className="mt-4 h-40 w-full bg-white/5 rounded-lg flex items-end justify-between p-4 gap-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full bg-blue-500/50 rounded-t-sm hover:bg-blue-400/60 transition-colors"
                    />
                ))}
            </div>
            <p className="text-xs text-center text-gray-500 mt-2">Relative Performance Metrics vs Control</p>
        </div>
    );
}

