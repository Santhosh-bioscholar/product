"use client";

import { useEffect, useState } from "react";
import { ProductData } from "@/types/product";

interface HowItWorksSectionProps {
  product: ProductData;
}

export const Immune = ({ product }: HowItWorksSectionProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };
  return (
    <div className=" text-slate-900 dark:text-slate-100">
      <h1 className="">

        <main className="container w-full px-6 flex flex-col gap-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                {product.immuneSystem?.title || "Product Benefits"} <br />
                <span className="text-primary">{product.immuneSystem?.subtitle || "Gene Expression"}</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {product.immuneSystem?.description || "Scientific analysis of biological markers and performance indicators."}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="text-sm font-medium">Control (C)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <span className="w-3 h-3 rounded-full bg-slate-900 dark:bg-white"></span>
                  <span className="text-sm font-medium">Treatment (T)</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-white pl-16 dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-bold pb-12 text-lg text-slate-800 dark:text-slate-200">Analysis Overview</h3>
                <div className="flex gap-2">

                </div>
              </div>
              <div className="relative h-80 w-full flex items-end">
                <div className="absolute -left-28 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-slate-500 whitespace-nowrap">
                  Relative Expression / Activity
                </div>
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="w-full flex items-center">
                    <span className="text-xs text-slate-400 w-6">High</span>
                  </div>
                  <div className="w-full flex items-center">
                    <span className="text-xs text-slate-400 w-6">Med</span>
                  </div>
                  <div className="w-full flex items-center">
                    <span className="text-xs text-slate-400 w-6">Low</span>
                  </div>
                  <div className="w-full  flex items-center">
                    <span className="text-xs pb-6 text-slate-400 w-6">0</span>
                  </div>
                </div>
                <div className="relative flex-grow h-full  flex items-end justify-around px-8">

                  {product.immuneSystem?.genes.map((gene, index) => (
                    <div key={index} className="relative flex-grow flex justify-center gap-4 h-full">
                      <div className="absolute -top-10 text-sm font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap">{gene.name}</div>
                      <div className="absolute inset-y-0 right-0 border-r border-slate-200 dark:border-slate-800 h-full"></div>

                      {/* Control Bar */}
                      <div className="group relative flex flex-col items-center justify-end w-12 h-full">
                        <div
                          className="bg-slate-300 dark:bg-slate-600 w-full rounded-t-sm transition-all duration-300 hover:brightness-90 cursor-help relative"
                          style={{ height: `${gene.controlValue}%` }}
                        >
                          <div className="error-bar h-8 dark:bg-slate-400"><div className="error-cap dark:bg-slate-400"></div></div>
                          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-xs font-bold">{gene.controlLabel || 'a'}</span>
                        </div>
                        <span className="mt-4 text-xs font-bold">C</span>
                      </div>

                      {/* Treatment Bar */}
                      <div className="group relative flex flex-col items-center justify-end w-12 h-full">
                        <div
                          className="bg-slate-900 dark:bg-white w-full rounded-t-sm transition-all duration-300 hover:opacity-90 cursor-help relative"
                          style={{ height: `${gene.treatmentValue}%` }}
                        >
                          <div className="error-bar h-10 dark:bg-slate-400 bg-slate-900"><div className="error-cap dark:bg-slate-400 bg-slate-900"></div></div>
                          <span className="absolute -top-[32px] left-1/2 -translate-x-1/2 text-xs font-bold dark:text-white text-slate-900">{gene.treatmentLabel || 'c'}</span>
                        </div>
                        <span className="mt-4 text-xs font-bold">T</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-11 text-center">
                <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">Treatment Groups</span>
              </div>
            </div>
          </div>


        </main>




      </h1>
    </div>
  );
};

export default Immune;
