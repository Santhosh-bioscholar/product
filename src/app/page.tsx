import { HeroBannerProtein } from "@/components/home/HeroBannerProtein";
import { Sustainability } from "@/components/home/Sustainability";
import { Oxygenation } from "@/components/home/Oxygenation";
import { TechCollection } from "@/components/home/TechCollection";
import { LuminaReveal } from "@/components/home/LuminaReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBannerProtein />
      <Oxygenation />
      {/* <Product3DBanner /> */}
      {/* <NeonStoreBanner /> */}
      {/* <ZenithAudio /> */}
      <div className={`flex flex-col gap-6 mb-16 md:text-center md:items-center `}>
                            <FadeIn direction="up">
                                {/* <h2 className="text-4xl font-bold text-white mb-4">{title}</h2> */}
                            <h2 className="text-4xl font-bold  block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
                            Human food Products
                            </h2>
                                <p className="text-gray-400 max-w-2xl text-lg">Nutraceuticals designed to empower human potential.</p>
                                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            {/* <span className="block text-white">The Great</span> */}
                        </h2>
                            </FadeIn>
                        </div>
      <TechCollection />
      {/* <LuxeTechCards /> */}
       <div className={`flex flex-col gap-6 mb-16 md:text-center md:items-center `}>
                            <FadeIn direction="up">
                                {/* <h2 className="text-4xl font-bold text-white mb-4">{title}</h2> */}
                            <h2 className="text-4xl font-bold  block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
Animal food Products
                            </h2>
                                <p className="text-gray-400 max-w-2xl text-lg">Next-generation biotransformation for sustainable aquaculture.</p>
                                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            {/* <span className="block text-white">The Great</span> */}
                        </h2>
                            </FadeIn>
                        </div>
     
      <LuminaReveal />
      {/* <PhotoEnhancer /> */}
      {/* <FeaturedCollection /> */}
      {/* <CosmicHorizon /> */}
      {/* <CompanyOverview /> */}
      {/* <ProductShowcase /> */}
     
      <Sustainability />

    </div>
  );
}

