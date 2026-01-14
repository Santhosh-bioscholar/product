
import React from 'react';

export const DigitalProductLabel = () => {
    return (
        <div className="font-[family-name:var(--font-space-grotesk)] bg-[#f6f6f8] dark:bg-[#101622] text-white min-h-screen w-full">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    {/* Top Navigation Bar */}
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#232f48] px-10 py-3 bg-[#f6f6f8] dark:bg-[#101622]">
                        <div className="flex items-center gap-4 text-white">
                            <div className="size-6 text-[#1152d4]">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6_319)">
                                        <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] font-[family-name:var(--font-space-grotesk)]">ShrimpFarm Pro</h2>
                        </div>
                        <div className="flex flex-1 justify-end gap-8">
                            <nav className="flex items-center gap-9">
                                <a className="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Dashboard</a>
                                <a className="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Inventory</a>
                                <a className="text-white text-sm font-medium leading-normal border-b-2 border-[#1152d4] pb-1" href="#">Products</a>
                                <a className="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Settings</a>
                            </nav>
                            <div className="flex gap-2">
                                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#232f48] text-white hover:bg-[#1152d4]/40 transition-all">
                                    <span className="material-symbols-outlined">notifications</span>
                                </button>
                                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#232f48] text-white hover:bg-[#1152d4]/40 transition-all">
                                    <span className="material-symbols-outlined">account_circle</span>
                                </button>
                            </div>
                        </div>
                    </header>
                    <main className="flex flex-1 justify-center py-8">
                        <div className="layout-content-container flex flex-col max-w-[1000px] flex-1 px-4">
                            {/* Breadcrumbs */}
                            <div className="flex flex-wrap gap-2 py-2">
                                <a className="text-[#92a4c9] text-sm font-medium hover:text-white" href="#">Products</a>
                                <span className="text-[#92a4c9] text-sm font-medium">/</span>
                                <a className="text-[#92a4c9] text-sm font-medium hover:text-white" href="#">Growth Supplements</a>
                                <span className="text-[#92a4c9] text-sm font-medium">/</span>
                                <span className="text-white text-sm font-medium">Algabiotic Label</span>
                            </div>
                            {/* Page Heading */}
                            <div className="flex flex-wrap justify-between items-end gap-3 py-6">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#92a4c9] text-xs font-bold uppercase tracking-widest">Digital Asset Management</p>
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-tight font-[family-name:var(--font-space-grotesk)]">Digital Product Label <span className="text-[#1152d4]">Variant 2</span></h1>
                                </div>
                                <div className="flex gap-3">
                                    <button className="bg-[#232f48] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-[#2d3b5a]">
                                        <span className="material-symbols-outlined text-sm">print</span> Print Label
                                    </button>
                                    <button className="bg-[#1152d4] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-[#1152d4]/80 transition-all">
                                        <span className="material-symbols-outlined text-sm">edit</span> Edit Design
                                    </button>
                                </div>
                            </div>
                            {/* Digital Label Container */}
                            <div className="bg-[#1a2333] border border-[#2d3b5a] rounded-xl overflow-hidden shadow-2xl bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:24px_24px]">
                                {/* Dosage Hero Section */}
                                <div className="bg-[#1152d4] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                                        <span className="material-symbols-outlined text-9xl">science</span>
                                    </div>
                                    <p className="text-white/80 text-sm font-bold tracking-[0.3em] uppercase mb-2">Primary Feed Integration Ratio</p>
                                    <h2 className="text-white text-7xl font-black font-[family-name:var(--font-space-grotesk)] leading-none tracking-tighter">30g/kg Dosage</h2>
                                    <div className="mt-6 flex gap-4">
                                        <span className="bg-white/20 px-3 py-1 rounded text-xs font-bold uppercase">Critical Dosage</span>
                                        <span className="bg-white/20 px-3 py-1 rounded text-xs font-bold uppercase">Industrial Grade</span>
                                    </div>
                                </div>
                                {/* Brand & Storage Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#2d3b5a]">
                                    {/* Left: Branding & Core Info */}
                                    <div className="md:col-span-7 p-8 border-b md:border-b-0 md:border-r border-[#2d3b5a]">
                                        <div className="flex flex-col gap-6">
                                            <div className="border-l-4 border-[#1152d4] pl-6 py-2">
                                                <h3 className="text-white text-5xl font-black font-[family-name:var(--font-space-grotesk)] tracking-tight">Algabiotic™</h3>
                                                <p className="text-[#92a4c9] text-lg font-medium">Bio-Enhanced Growth Supplement</p>
                                            </div>
                                            <div className="bg-[#101622]/50 p-6 rounded-lg border border-[#2d3b5a]/50">
                                                <h4 className="text-[#1152d4] text-xs font-bold uppercase tracking-widest mb-4">Feeding Instructions</h4>
                                                <p className="text-white/90 text-base leading-relaxed">
                                                    Mix thoroughly with standard pelleted feed at a ratio of 30 grams per 1 kilogram of feed. Apply binder (fish oil or water-based polymer) to ensure complete adherence. Allow to dry for 20 minutes before broadcasting.
                                                </p>
                                            </div>
                                            <div className="flex gap-8 items-center pt-4">
                                                <div className="flex flex-col">
                                                    <span className="text-[#92a4c9] text-[10px] font-bold uppercase">Batch ID</span>
                                                    <span className="text-white font-mono text-sm">ALG-2024-0082-PR</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[#92a4c9] text-[10px] font-bold uppercase">MFG Date</span>
                                                    <span className="text-white font-mono text-sm">Oct 2023</span>
                                                </div>
                                                <div className="h-10 w-32 bg-white/10 flex items-center justify-center rounded">
                                                    <span className="material-symbols-outlined text-white/30 text-3xl">barcode</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Right: Storage & Shelf Life */}
                                    <div className="md:col-span-5 flex flex-col">
                                        {/* Storage Section */}
                                        <div className="p-8 border-b border-[#2d3b5a] grow">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="bg-[#1152d4]/20 p-2 rounded text-[#1152d4]">
                                                    <span className="material-symbols-outlined">thermostat</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-white text-sm font-bold uppercase tracking-wider">Storage Instructions</h4>
                                                    <p className="text-[#92a4c9] text-sm mt-1">Industrial Environment Parameters</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-4 mt-6">
                                                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                                                    <span className="material-symbols-outlined text-[#1152d4]">ac_unit</span>
                                                    <span className="text-white font-bold">Cool &amp; Dry Environment</span>
                                                </div>
                                                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                                                    <span className="material-symbols-outlined text-[#1152d4]">wb_sunny</span>
                                                    <span className="text-white font-bold">Avoid Direct Sunlight</span>
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
                                </div>
                                {/* Footer Safety Warnings */}
                                <div className="bg-[#111722] p-4 border-t border-[#2d3b5a] flex flex-wrap justify-between items-center px-8">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[#92a4c9] text-sm">warning</span>
                                            <span className="text-[#92a4c9] text-[10px] font-bold uppercase">Agricultural Use Only</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[#92a4c9] text-sm">person_remove</span>
                                            <span className="text-[#92a4c9] text-[10px] font-bold uppercase">Keep Away from Children</span>
                                        </div>
                                    </div>
                                    <div className="text-[#92a4c9] text-[10px] font-bold uppercase">© 2024 ShrimpFarm Pro Bioscience Div.</div>
                                </div>
                            </div>
                            {/* Additional Details Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                                <div className="p-4 bg-[#f6f6f8] dark:bg-[#101622]/50 border border-[#2d3b5a] rounded-lg">
                                    <h5 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#1152d4] text-lg">verified</span>
                                        Quality Control
                                    </h5>
                                    <p className="text-[#92a4c9] text-xs leading-relaxed">Verified for aquaculture safety standards (ISO 22000). Lab results for current batch are available via QR sync.</p>
                                </div>
                                <div className="p-4 bg-[#f6f6f8] dark:bg-[#101622]/50 border border-[#2d3b5a] rounded-lg">
                                    <h5 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#1152d4] text-lg">eco</span>
                                        Eco Impact
                                    </h5>
                                    <p className="text-[#92a4c9] text-xs leading-relaxed">Sustainable sourcing of raw ingredients. Zero leaching formulation to protect pond water quality.</p>
                                </div>
                                <div className="p-4 bg-[#f6f6f8] dark:bg-[#101622]/50 border border-[#2d3b5a] rounded-lg">
                                    <h5 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#1152d4] text-lg">inventory_2</span>
                                        Packing Spec
                                    </h5>
                                    <p className="text-[#92a4c9] text-xs leading-relaxed">Available in 5kg, 10kg, and 25kg moisture-barrier industrial grade HDPE containers.</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
