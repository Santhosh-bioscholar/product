import { HeroBannerProtein } from "@/components/home/HeroBannerProtein";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Sustainability } from "@/components/home/Sustainability";
import { Oxygenation } from "@/components/home/Oxygenation";
import { ConversationStarter } from "@/components/home/ConversationStarter";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { CosmicHorizon } from "@/components/home/CosmicHorizon";
import { Product3DBanner } from "@/components/home/Product3DBanner";
import { NeonStoreBanner } from "@/components/home/NeonStoreBanner";
import { ZenithAudio } from "@/components/home/ZenithAudio";
import { TechCollection } from "@/components/home/TechCollection";
import { LuxeTechCards } from "@/components/home/LuxeTechCards";
import { LuminaReveal } from "@/components/home/LuminaReveal";
import { PhotoEnhancer } from "@/components/home/PhotoEnhancer";



import { FeaturesSection } from "@/components/home/FeaturesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBannerProtein />
      <Oxygenation />
      {/* <Product3DBanner /> */}
      {/* <NeonStoreBanner /> */}
      {/* <ZenithAudio /> */}
      <TechCollection />
      {/* <LuxeTechCards /> */}
      <LuminaReveal />
      {/* <PhotoEnhancer /> */}
      {/* <FeaturedCollection /> */}
      {/* <CosmicHorizon /> */}
      {/* <CompanyOverview /> */}
      {/* <ProductShowcase /> */}
      <FeaturesSection />
      <Sustainability />

    </div>
  );
}

