import React from 'react';
import { ProductData } from '@/types/product';
import {
    Search,
    Bell,
    Settings,
    SlidersHorizontal,
    Printer,
    CookingPot,
    CheckCircle,
    Workflow,
    Package,
    FlaskConical,
    Droplet,
    Stethoscope,
    ShieldPlus,
    MessageCircle,
    ArrowRight,
    LucideGlassWater,
    Calendar,
    Scale,
    ThermometerSnowflake,
    AirVent,
    SunIcon,
    FileWarningIcon,
    TriangleAlert
} from 'lucide-react';

interface HowItWorksSectionProps {
    product: ProductData;
}

export const HowItWorksSection = ({ product }: HowItWorksSectionProps) => {
    // Determine the product name to display or use the hardcoded one if it matches Algabiotic
    // tailored for Algabiotic as per user request

    return (
        <section className=" font-sans text-slate-900 dark:text-white transition-colors duration-300 py-8">
            <div className="container w-full px-6 flex flex-col gap-6 mx-auto">
               

                {/* Page Heading */}
                {/* <div className="flex flex-wrap justify-between items-end gap-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                                {product.name} Specifications
                            </h1>
                            <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Variant 1</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">Optimized feed calculation for intensive shrimp farming systems.</p>
                    </div>
                  
                </div> */}

                {/* Core Dosage Hero Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        {/* <div className="flex flex-col rounded-xl overflow-hidden shadow-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                                <div className="w-full md:w-48 aspect-square rounded-lg bg-primary/5 flex items-center justify-center text-primary relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <CookingPot className="w-20 h-20" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <span className="text-primary text-sm font-bold tracking-widest uppercase">Target Mixing Ratio</span>
                                    <h2 className="text-5xl font-black text-slate-900 dark:text-white leading-none">
                                        30g <span className="text-slate-400 text-2xl font-medium tracking-tight">per</span> 1kg <span className="text-slate-400 text-2xl font-medium tracking-tight">Feed</span>
                                    </h2>
                                    <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 dark:border-white/5 pt-4">
                                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                            <CheckCircle className="w-[18px] h-[18px] text-primary" />
                                            <span className="text-sm font-medium">Verified for Litopenaeus vannamei</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                            <CheckCircle className="w-[18px] h-[18px] text-primary" />
                                            <span className="text-sm font-medium">Calculated for intensive growth phases</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* Mixing Process Diagram */}
                        
                        <div className="">
                                    {/* Left: Branding & Core Info */}
                                    <div className="md:col-span-7 p-8 border-b md:border-b-0 md:border-r border-[#2d3b5a]">
                                        <div className="flex flex-col gap-6">
                                            <div className="border-l-4 border-[#1152d4] pl-6 py-2">
                                                <h3 className="text-white text-5xl font-black font-[family-name:var(--font-space-grotesk)] tracking-tight">{product.name} Specifications</h3>
                                                {/* <p className="text-[#92a4c9] text-lg font-medium">Bio-Enhanced Growth Supplement</p> */}
                                            </div>
                                            <div className="bg-[#101622]/50 p-6 rounded-lg border border-[#2d3b5a]/50">
                                                <h4 className="text-[#1152d4] text-xs font-bold uppercase tracking-widest mb-4">Feeding Instructions</h4>
                                                <p className="text-white/90 text-base leading-relaxed">
                                                    Mix thoroughly with standard pelleted feed at a ratio of 30 grams per 1 kilogram of feed. Apply binder (fish oil or water-based polymer) to ensure complete adherence. Allow to dry for 20 minutes before broadcasting.
                                                </p>
                                            </div>
                                            <div className="flex gap-8 items-center pt-4">
                                                  <div className="grid grid-cols-3  gap-4 mb-8">

<div className="bg-background-light dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center md:w-40">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
{/* <span className="material-symbols-outlined">experiment</span> */}
<Scale/>
</div>
<h3 className="text-xl font-black text-gray-900 dark:text-white">30g/kg</h3>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Dosage</p>
</div>
<div className="bg-background-light dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center md:w-40">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
{/* <span className="material-symbols-outlined">layers</span> */}
<LucideGlassWater/>
</div>
<h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">Binder Req.</h3>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Gelatin/Oil</p>
</div>
<div className="bg-background-light dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center md:w-40" >
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
{/* <span className="material-symbols-outlined">schedule</span> */}
<Calendar/>
</div>
<h3 className="text-xl font-black text-gray-900 dark:text-white">Daily</h3>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Cycle</p>
</div>
</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Right: Storage & Shelf Life */}
                                   
                                </div>
                        {/* <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-8 rounded-xl bg-slate-50 dark:bg-white/5 border border-dashed border-slate-300 dark:border-white/10">
                            {/* Step 1 
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="size-16 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 shadow-sm">
                                    <Package className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Base Feed</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">1kg Dry Pellet</p>
                                </div>
                            </div>
                            <div className="hidden md:flex justify-center text-primary/40">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            {/* Step 2 
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="size-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary shadow-sm">
                                    <FlaskConical className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">{product.name}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">30g Supplement</p>
                                </div>
                            </div>
                            <div className="hidden md:flex justify-center text-primary/40">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            {/* Step 3 
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="size-16 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 shadow-sm">
                                    <Droplet className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Binders/Oil</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">As recommended</p>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Sidebar / Nutritionist Note */}
                    <div className="flex flex-col gap-6">
                         <div className="md:col-span-5 flex flex-col">
                                        {/* Storage Section */}
                                        <div className="p-8 border-b border-[#2d3b5a] grow">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="bg-[#1152d4]/20 p-2 rounded text-[#1152d4]">
                                                    {/* <span className="material-symbols-outlined">thermostat</span> */}
                                                    <ThermometerSnowflake/>
                                                </div>
                                                <div>
                                                    <h4 className="text-white text-sm font-bold uppercase tracking-wider">Storage Instructions</h4>
                                                    <p className="text-[#92a4c9] text-sm mt-1">Industrial Environment Parameters</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-4 mt-6">
                                                <div className="flex items-center gap-3 bg-white/5 p-4 text-[#1152d4] ext-[#1152d4] rounded-lg">
                                                    {/* <span className="material-symbols-outlined text-[#1152d4]">ac_unit</span> */}
                                                    <AirVent />
                                                    <span className="text-white font-bold">Cool &amp; Dry Environment</span>
                                                </div>
                                                <div className="flex items-center gap-3 bg-white/5 p-4 text-[#1152d4] rounded-lg ext-[#1152d4]">
                                                    {/* <span className="material-symbols-outlined text-[#1152d4]">wb_sunny</span> */}
                                                    <SunIcon/>
                                                    <span className="text-white font-bold">Avoid Direct Sunlight</span>
                                                </div>
                                           
                                            <div className="flex items-center gap-2">
                                            {/* <span className="material-symbols-outlined text-[#92a4c9] text-sm">warning</span> */}
                                            <TriangleAlert/>
                                            <span className="text-[#92a4c9] text-[10px] font-bold uppercase">Shrimp Use Only</span>
                                        </div> 
                                                <p className="text-xs text-[#92a4c9] italic px-1">Maintain temperature below 25°C (77°F) for optimal active compound stability.</p>
                                        </div>

                                        </div>
                                        {/* Best Before Section */}
                                        <div className="p-8 bg-[#1152d4]/10 flex flex-col justify-center">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[#92a4c9] text-xs font-bold uppercase tracking-[0.2em]">Stability Guarantee</span>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-white text-sm font-medium">Best Before:</span>
                                                    <span className="text-white text-3xl font-black font-[family-name:var(--font-space-grotesk)]">24 Months</span>
                                                </div>
                                                <div className="mt-4 flex gap-2">
                                                    <div className="h-1 w-full bg-[#1152d4] rounded-full"></div>
                                                    <div className="h-1 w-full bg-[#1152d4] rounded-full"></div>
                                                    <div className="h-1 w-full bg-[#1152d4]/20 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                        {/* Product Specs */}
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
