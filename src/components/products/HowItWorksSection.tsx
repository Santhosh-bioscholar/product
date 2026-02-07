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
    TriangleAlert,
    BadgeCheck,
    CheckCircle2,
    Utensils,
    Leaf,
    Quote
} from 'lucide-react';

interface HowItWorksSectionProps {
    product: ProductData;
}

export const HowItWorksSection = ({ product }: HowItWorksSectionProps) => {
    // Determine the product name to display or use the hardcoded one if it matches Algabiotic
    // tailored for Algabiotic as per user request

    return (
        <section className=" font-sans  text-slate-900 dark:text-white transition-colors duration-300 py-24">
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

            <div className=" text-center py-10 pt-40">
<h2 className="text-[#1c180d] dark:text-[#fcfbf8] text-2xl font-bold leading-tight tracking-[-0.015em]">Our Global Certifications</h2>
<div className="h-1 w-20 bg-[#f2b90d] mx-auto mt-4 rounded-full"></div>
</div>



            <div className="px-6 md:px-10 flex flex-1 justify-center py-10 pt-10">
<div className="mx-auto container">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">















{/* <!-- CAA Approved Product --> */}

<div className="flex flex-1 gap-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex-col shadow-sm transition-all hover:shadow-md hover:border-primary/50 group">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
<BadgeCheck className="w-8 h-8 text-green-600" />
</div>
<div className="flex flex-col gap-2">
<h2 className="text-navy-dark dark:text-white text-xl font-bold leading-tight">CAA Approved </h2>
<p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-relaxed">
                                Recognized by the Central Aviation Authority for meeting the highest pharmaceutical safety and reliability benchmarks.
                            </p>
</div>
<div className="mt-auto pt-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-gold-accent text-primary">Aviation Grade Safety</span>
</div>
</div>







{/* <!-- World Class Formulation --> */}
<div className="flex flex-1 gap-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex-col shadow-sm transition-all hover:shadow-md hover:border-primary/50 group">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
<Utensils className="w-12 h-12 md:w-8 md:h-8 text-primary mb-1" />

</div>
<div className="flex flex-col gap-2">
<h2 className="text-navy-dark dark:text-white text-xl font-serif-premium italic font-bold leading-tight">FSSAI Approved</h2>
<p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-relaxed">
                                Engineered using advanced molecular stabilization techniques in our state-of-the-art research facilities.
                            </p>
</div>
<div className="mt-auto pt-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary">Food Safety Standards</span>
</div>
</div>









{/* <!-- NABL Certified --> */}
<div className="flex flex-1 gap-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex-col shadow-sm transition-all hover:shadow-md hover:border-green-600/50 group">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
<Leaf className="w-12 h-12 md:w-8 md:h-8 text-emerald-600 mb-1" />

</div> 
<div className="flex flex-col gap-2">
<h2 className="text-navy-dark dark:text-white text-xl font-bold leading-tight">Eco Sustainable</h2>
<p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-relaxed">
                                Accredited by the National Accreditation Board for Testing and Calibration Laboratories for zero contaminants.
                            </p>
</div>
{/* <!-- Chips component for sub-label --> */}
<div className="flex gap-2 mt-auto pt-4">
<div className="mt-auto pt-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary">Sustainable Practices</span>
</div>
</div>
</div>




<div className="flex flex-1 gap-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex-col shadow-sm transition-all hover:shadow-md hover:border-primary/50 group">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
<BadgeCheck className="w-8 h-8 text-green-600" />
</div>
<div className="flex flex-col gap-2">
<h2 className="text-navy-dark dark:text-white text-xl font-bold leading-tight">ISO Certified </h2>
<p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-relaxed">
                                Recognized by the Central Aviation Authority for meeting the highest pharmaceutical safety and reliability benchmarks.
                            </p>
</div>
<div className="mt-auto pt-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-gold-accent text-primary">GMP &amp; ISO-Compliant</span>
</div>
</div>




</div>
</div>
</div>








<main className="flex-1 flex flex-col items-center">
  <div className="max-w-[980px] w-full px-4 md:px-10 py-12 md:py-24">
    {/* Hero Endorsement Split Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left: Visual Side */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>

        <div
          className="relative w-full aspect-[4/5] bg-center bg-cover rounded-xl shadow-2xl overflow-hidden border border-white/20"
          data-alt="Professional aquaculture expert in a lab setting"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALX542ncS7tJ0lgUk8lVlOwf1Jo2ky3JdvJ-cIo4gk5xsn1Wy4ZnJ4tdYTuMIiY6w6mqnRJbC_CCD2Ex6Qmx4HlVOLT3gXhjoyAPfNvTnOVeA-qzdmthm1sY_CNI_D-O9SqOHQY9XNLc5MYJEIM32N_qmxafQKJ-PZ4TnVjnEyZK5FHbY97_8BwfcD6w7A1cUju_2PLAQ8iNeP-mLyF41Xky3aQ2ZBTniGxvYev8zbY4D-4PBk7QGY0NXl2qeX0Uit9XCEgPBWhrPU")',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          {/* Caption for Context */}
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">
              Scientific Validation
            </p>
            <p className="text-xl font-display">
              Dr. Elena 
            </p>
          </div>
        </div>
      </div>

      {/* Right: Text Side */}
      <div className="flex flex-col gap-8">
        <div className="relative">
        
<Quote className="w-20 h-20 text-primary/30 absolute -top-12 -left-8 select-none" />


          <h1 className="text-[#0d171b] dark:text-slate-50 text-3xl md:text-4xl font-small leading-tight font-display relative z-10 italic">
            Renowned aquaculture professionals and hatchery experts, recognizing
            Algabiotic as a{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              reliable supplement
            </span>{" "}
            for maintaining shrimp health and sustainable pond performance.
          </h1>
        </div>

        <div className="flex flex-col gap-6 mt-4">
          {/* <div className="h-px w-20 bg-primary/40"></div> */}

        </div>

        {/* <div className="flex items-center gap-6 mt-4">
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/25 transition-all">
            Read Case Studies
          </button>

        
        </div> */}
      </div>
    </div>
  </div>
</main>


{/* <div className="border border-white p-8 rounded-lg  container mx-auto backdrop-blur-[1px] bg-white/10  rounded-2xl p-10 md:p-16 text-center flex flex-col items-center shadow-2xl">
<div className="mb-8">
        
<Quote className="w-12 h-20 text-primary/30 absolute -top-12 -left-8 select-none" />
</div>
<h1 className="text-white text-3xl md:text-5xl font-display italic leading-snug mb-10 max-w-4xl">
                        "Renowned aquaculture professionals and hatchery experts recognize Algabiotic as a <span className="text-primary not-italic">reliable supplement</span> for maintaining shrimp health and sustainable pond performance."
                    </h1>
<div className="flex flex-col items-center gap-4">
<div className="h-px w-16 bg-white/30 mb-2"></div>
<div className="flex flex-col gap-1">
<h3 className="text-white text-lg font-semibold tracking-wide uppercase font-sans">Dr. Elena Thorne</h3>
<p className="text-white/60 text-sm font-medium tracking-widest uppercase font-sans">Director of Global Hatchery Operations</p>
</div>
</div>

</div> */}





{/* 
<main className="flex-1">
<div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
<div className="relative flex flex-col items-center">
<div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative">
<div className="absolute inset-0 bg-center bg-cover"  style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALX542ncS7tJ0lgUk8lVlOwf1Jo2ky3JdvJ-cIo4gk5xsn1Wy4ZnJ4tdYTuMIiY6w6mqnRJbC_CCD2Ex6Qmx4HlVOLT3gXhjoyAPfNvTnOVeA-qzdmthm1sY_CNI_D-O9SqOHQY9XNLc5MYJEIM32N_qmxafQKJ-PZ4TnVjnEyZK5FHbY97_8BwfcD6w7A1cUju_2PLAQ8iNeP-mLyF41Xky3aQ2ZBTniGxvYev8zbY4D-4PBk7QGY0NXl2qeX0Uit9XCEgPBWhrPU")',
          }}></div>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute top-8 left-8 hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
<span className="material-symbols-outlined text-white text-sm">science</span>
<span className="text-white text-xs font-bold tracking-widest uppercase">Advanced R&amp;D Facility</span>
</div>
</div>
<div className="w-full max-w-[90%] md:max-w-[720px] lg:max-w-[840px] -mt-16 md:-mt-32 lg:-mt-48 relative z-10">
<div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl border-b-4 border-primary/40 relative overflow-hidden group">
<div className="absolute inset-0 border border-primary/10 rounded-2xl pointer-events-none"></div>
<div className="flex flex-col gap-8">
<div className="relative">
        
<Quote className="w-12 h-20 text-primary/30 absolute -top-12 -left-8 select-none" />
<h2 className="text-[#0d171b] dark:text-slate-50 text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.2] font-display relative z-10">
                                        Renowned <span className="text-primary italic">aquaculture professionals</span> and hatchery experts, recognizing Algabiotic as a reliable supplement for maintaining shrimp health and sustainable pond performance.
                                    </h2>
</div>

</div>
</div>
</div>
</div>

</div>
</main> */}




{/* <main className="flex-1">
<section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/30 z-10"></div>
<div aria-label="Slow-motion video background of clean hatchery tanks" className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-[10s] hover:scale-105" style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl09mpPDqfhbyB1bdcnxYZVvdCXiNZv9Pi4xhs6xTZb1h4AO4Hr6KLGKx4kQZrbZMvkoSFLVoM3nWentfmD-a17XHXJwPmAfh_yf34IYtQrzQx0Rsqrhp-yuhix2Zledu-NJVQqgalJKd8OyyTqMadOGWsBO8hgs1fncsFBTylI6fpEVmSukyzdVLu7D6XBKXlkG2Gf5IIY2nPJBKoD2vFtMUKQEgayjJcGE8RyLrRDMQP2Oxs6BV4TpVWKOW1UQI_PpmXFASkfuwU")',
          }}>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent z-20"></div>
</div>
<div className="relative z-30 container mx-auto px-6 md:px-12 lg:px-24 flex items-center h-full">
<div className="glass-panel max-w-2xl p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col gap-8 transform translate-y-0 opacity-100 transition-all duration-700">
<div className="flex flex-col gap-2">
<span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Expert Endorsement</span>
<div className="h-1 w-12 bg-primary"></div>
</div>
<div className="relative">
<Quote className="w-12 h-20 text-primary/30 absolute -top-12 -left-8 select-none" />
<h1 className="text-[#0d171b] dark:text-slate-50 text-2xl md:text-4xl font-display italic leading-snug relative z-10">
                            "Renowned aquaculture professionals and hatchery experts recognize Algabiotic as a <span className="text-primary not-italic font-bold">reliable supplement</span> for maintaining shrimp health and sustainable performance."
                        </h1>
</div>
<div className="flex flex-wrap items-center gap-6 py-4 border-t border-slate-200/50 dark:border-slate-700/50">


</div>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4">
<div className="size-16 rounded-full overflow-hidden border-2 border-primary/20 bg-center bg-cover"style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALX542ncS7tJ0lgUk8lVlOwf1Jo2ky3JdvJ-cIo4gk5xsn1Wy4ZnJ4tdYTuMIiY6w6mqnRJbC_CCD2Ex6Qmx4HlVOLT3gXhjoyAPfNvTnOVeA-qzdmthm1sY_CNI_D-O9SqOHQY9XNLc5MYJEIM32N_qmxafQKJ-PZ4TnVjnEyZK5FHbY97_8BwfcD6w7A1cUju_2PLAQ8iNeP-mLyF41Xky3aQ2ZBTniGxvYev8zbY4D-4PBk7QGY0NXl2qeX0Uit9XCEgPBWhrPU")',
          }}></div>
<div>
<h4 className="text-[#0d171b] dark:text-white font-bold text-lg">Dr. Elena Thorne</h4>
<p className="text-[#4c809a] dark:text-slate-400 text-sm">Hatchery Director &amp; Mariculture Specialist</p>
</div>
</div>

</div>
</div>
</div>

</section>

</main> */}




{/* 
<main className="flex-1 flex flex-col items-center">
<div className="max-w-[1280px] w-full px-4 md:px-10 py-12 md:py-20">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-8 relative">
<div className="relative w-full aspect-[16/9] bg-center bg-cover rounded-2xl shadow-2xl overflow-hidden border border-white/20 group/hotspot-container" style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl09mpPDqfhbyB1bdcnxYZVvdCXiNZv9Pi4xhs6xTZb1h4AO4Hr6KLGKx4kQZrbZMvkoSFLVoM3nWentfmD-a17XHXJwPmAfh_yf34IYtQrzQx0Rsqrhp-yuhix2Zledu-NJVQqgalJKd8OyyTqMadOGWsBO8hgs1fncsFBTylI6fpEVmSukyzdVLu7D6XBKXlkG2Gf5IIY2nPJBKoD2vFtMUKQEgayjJcGE8RyLrRDMQP2Oxs6BV4TpVWKOW1UQI_PpmXFASkfuwU")',
          }}>

<div className="absolute inset-0 bg-black/10 transition-opacity group-hover/hotspot-container:bg-black/20"></div>


<div className="absolute bottom-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-lg text-white text-xs font-medium border border-white/10">
                                Central Hatchery Unit 04-B
                            </div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-8">
<div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary/20" 
style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALX542ncS7tJ0lgUk8lVlOwf1Jo2ky3JdvJ-cIo4gk5xsn1Wy4ZnJ4tdYTuMIiY6w6mqnRJbC_CCD2Ex6Qmx4HlVOLT3gXhjoyAPfNvTnOVeA-qzdmthm1sY_CNI_D-O9SqOHQY9XNLc5MYJEIM32N_qmxafQKJ-PZ4TnVjnEyZK5FHbY97_8BwfcD6w7A1cUju_2PLAQ8iNeP-mLyF41Xky3aQ2ZBTniGxvYev8zbY4D-4PBk7QGY0NXl2qeX0Uit9XCEgPBWhrPU")',
          }}></div><div>
<h3 className="text-xl font-display font-bold">Dr. Elena Thorne</h3>
<p className="text-sm text-primary font-bold uppercase tracking-wider">Hatchery Director</p>
</div>
</div>
<div className="relative mb-8">
<Quote className="w- h-20 text-primary/30 absolute -top-12 -left-8 select-none" />
<h1 className="text-[#0d171b] dark:text-slate-50 text-2xl md:text-xl font-display italic leading-snug relative z-10">
                            "Renowned aquaculture professionals and hatchery experts recognize Algabiotic as a <span className="text-primary not-italic font-bold">reliable supplement</span> for maintaining shrimp health and sustainable performance."
                        </h1>
</div>
<div className="pt-6 border-t border-slate-100 dark:border-slate-800">
<p className="text-xs font-bold text-[#4c809a] uppercase tracking-widest mb-4">Official Endorsements</p>
 <div className="flex items-center gap-6 mt-4">
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/25 transition-all">
            Read Case Studies
          </button>

        
</div>

</div>
</div>

</div>

</div>


</div>
</main> */}






{/* <main className="flex-1 flex flex-col items-center">
<div className="max-w-[1280px] w-full px-4 md:px-10 py-12 md:py-20">

<div className="relative w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
<div className="relative h-[600px] overflow-hidden rounded-2xl group">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"style={{
            backgroundImage:' url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl09mpPDqfhbyB1bdcnxYZVvdCXiNZv9Pi4xhs6xTZb1h4AO4Hr6KLGKx4kQZrbZMvkoSFLVoM3nWentfmD-a17XHXJwPmAfh_yf34IYtQrzQx0Rsqrhp-yuhix2Zledu-NJVQqgalJKd8OyyTqMadOGWsBO8hgs1fncsFBTylI6fpEVmSukyzdVLu7D6XBKXlkG2Gf5IIY2nPJBKoD2vFtMUKQEgayjJcGE8RyLrRDMQP2Oxs6BV4TpVWKOW1UQI_PpmXFASkfuwU") ' }}>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute top-6 left-6">
<span className="px-4 py-1.5 bg-white/90 text-slate-900 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Baseline Pond</span>
</div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="relative h-[600px] overflow-hidden rounded-2xl group border-2 border-primary/30">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{
            backgroundImage:'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9Hr7Ak9eN3UI7i-CPOUwRT53Cfe2tt4XJCBsruLr3I8MWe4EAGn3mDIRh3Pm07pBlVU10QCyN5K0rg9AWmHIgFc73IaMiIdHhc0yTYu0vNh0iwzKTPRUz9MiUtr8whaNtuO-gpLnzbVALd3kdo90-fG-BFoNpxjL5Dzgk-hraBqVLCRO-y3bgxNTGfiousNMTfimLVowO_jJGSTzq4l90CJxfiYDq0NYQki1vqqdSpUdS7IbCvgvASim8JpYRqwyQwJ_LhiqLPDpz")' }}>
</div>
<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-6 right-6">
<span className="px-4 py-1.5 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Optimized with Algabiotic</span>
</div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
</div>
<div className="absolute bottom-6 inset-x-6 md:bottom-10 md:inset-x-10">
<div className="glass-panel p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
<div className="relative shrink-0">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary overflow-hidden shadow-xl">
<div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage:'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALX542ncS7tJ0lgUk8lVlOwf1Jo2ky3JdvJ-cIo4gk5xsn1Wy4ZnJ4tdYTuMIiY6w6mqnRJbC_CCD2Ex6Qmx4HlVOLT3gXhjoyAPfNvTnOVeA-qzdmthm1sY_CNI_D-O9SqOHQY9XNLc5MYJEIM32N_qmxafQKJ-PZ4TnVjnEyZK5FHbY97_8BwfcD6w7A1cUju_2PLAQ8iNeP-mLyF41Xky3aQ2ZBTniGxvYev8zbY4D-4PBk7QGY0NXl2qeX0Uit9XCEgPBWhrPU")' }}></div>
</div>
<span className="material-symbols-outlined absolute -bottom-2 -right-2 text-primary bg-white dark:bg-slate-800 rounded-full p-1 text-lg shadow-md">verified</span>
</div>
<div className="flex-1 text-center md:text-left">
<div className="mb-2 flex items-center justify-center md:justify-start gap-1">
<span className="material-symbols-outlined text-primary text-sm">star</span>
<span className="material-symbols-outlined text-primary text-sm">star</span>
<span className="material-symbols-outlined text-primary text-sm">star</span>
<span className="material-symbols-outlined text-primary text-sm">star</span>
<span className="material-symbols-outlined text-primary text-sm">star</span>
</div>
<blockquote className="text-xl md:text-2xl font-display italic text-slate-800 dark:text-slate-100 leading-snug">
                                    "Renowned aquaculture professionals and hatchery experts, recognizing Algabiotic as a <span className="text-primary font-semibold">reliable supplement</span> for maintaining shrimp health and sustainable pond performance."
                                </blockquote>
<p className="mt-4 text-sm font-bold uppercase tracking-widest text-[#4c809a] dark:text-slate-400">— Dr. Elena Thorne, Hatchery Director</p>
</div>

</div>
</div>
</div>

</div>
</main> */}




{/* <main className="flex-1 flex flex-col container mx-auto">
<section className="relative w-full min-h-[85vh] flex flex-col lg:flex-row items-stretch overflow-hidden">
<div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full slanted-mask z-10">
<div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALX542ncS7tJ0lgUk8lVlOwf1Jo2ky3JdvJ-cIo4gk5xsn1Wy4ZnJ4tdYTuMIiY6w6mqnRJbC_CCD2Ex6Qmx4HlVOLT3gXhjoyAPfNvTnOVeA-qzdmthm1sY_CNI_D-O9SqOHQY9XNLc5MYJEIM32N_qmxafQKJ-PZ4TnVjnEyZK5FHbY97_8BwfcD6w7A1cUju_2PLAQ8iNeP-mLyF41Xky3aQ2ZBTniGxvYev8zbY4D-4PBk7QGY0NXl2qeX0Uit9XCEgPBWhrPU")',
        }}
      /><div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
<div className="absolute bottom-10 left-10 text-white z-20">
<p className="text-xs font-bold uppercase tracking-widest bg-primary px-3 py-1 inline-block mb-2">Lead Researcher</p>
<h3 className="text-3xl font-display font-bold">Dr. Elena Thorne</h3>
<p className="text-white/80">PhD in Marine Biotechnology</p>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center px-10 py-20 lg:py-0 bg-accent-teal dark:bg-accent-teal-dark -ml-[5%] lg:-ml-[10%] relative">
<div className="max-w-xl lg:pl-24">
<Quote className="w-12 h-20 text-primary/30 absolute -top-12 -left-8 select-none" />
<div className="relative z-10">

                        <h1 className="text-[#0d171b] dark:text-slate-50 text-4xl lg:text-5xl xl:text-5xl font-display italic leading-snug relative z-10">
                            "Renowned aquaculture professionals and hatchery experts recognize Algabiotic as a <span className="text-primary not-italic font-bold">reliable supplement</span> for maintaining shrimp health and sustainable performance."
                        </h1>
<p className="text-[#4c809a] dark:text-slate-400 text-lg lg:text-xl leading-relaxed max-w-lg mb-10">
                            Algabiotic has become our standard recommendation for facilities aiming for high-density yields without compromising on ecological balance.
                        </p>

</div>
</div>
</div>
</section>

</main> */}





{/* <main className="flex-1 flex flex-col items-center">
  <div className="max-w-[1280px] w-full px-4 md:px-10 py-12 md:py-20">



    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

      <div className="md:col-span-8 bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-14 flex flex-col justify-center border border-slate-200 dark:border-slate-800 relative overflow-hidden group shadow-sm">
        <span className=" text-primary/10 text-[160px] absolute -top-10 -left-6 select-none italic pointer-events-none">
          <Quote className="w-12 h-20 absolute -top-10 -left-6 text-primary/30 absolute -top-12 -left-8 select-none" />

        </span>
        <div className="relative z-10">
          <h2 className="text-[#0d171b] dark:text-slate-100 text-2xl md:text-4xl font-display italic leading-snug">
            "Renowned aquaculture professionals and hatchery experts recognize
            Algabiotic as a{" "}
            <span className="text-primary border-b-2 border-primary/20">
              reliable supplement
            </span>{" "}
            for maintaining shrimp health and sustainable pond performance."
          </h2>

          <div className="mt-10 flex flex-col gap-8">
            <div className="h-px w-24 bg-primary/30"></div>

            <div className="flex flex-wrap gap-10 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            

             
            </div>
          </div>
        </div>
      </div>


      <div className="md:col-span-4 h-[400px] md:h-auto rounded-2xl overflow-hidden relative group shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          data-alt="Expert Dr. Elena Thorne"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALX542ncS7tJ0lgUk8lVlOwf1Jo2ky3JdvJ-cIo4gk5xsn1Wy4ZnJ4tdYTuMIiY6w6mqnRJbC_CCD2Ex6Qmx4HlVOLT3gXhjoyAPfNvTnOVeA-qzdmthm1sY_CNI_D-O9SqOHQY9XNLc5MYJEIM32N_qmxafQKJ-PZ4TnVjnEyZK5FHbY97_8BwfcD6w7A1cUju_2PLAQ8iNeP-mLyF41Xky3aQ2ZBTniGxvYev8zbY4D-4PBk7QGY0NXl2qeX0Uit9XCEgPBWhrPU")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
            Hatchery Director
          </p>
          <h3 className="text-2xl font-display">Dr. Elena Thorne</h3>
          <p className="text-sm opacity-80 mt-2 line-clamp-2">
            Leading the transition to sustainable probiotic aquaculture solutions.
          </p>
        </div>
      </div>

    </div>
  </div>
</main> */}






        </section>
    );
};

export default HowItWorksSection;