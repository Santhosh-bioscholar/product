import { HeroBannerProtein } from "@/components/home/HeroBannerProtein";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Sustainability } from "@/components/home/Sustainability";
import { Oxygenation } from "@/components/home/Oxygenation";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBannerProtein />
      <Oxygenation />
      {/* <CompanyOverview /> */}
      <ProductShowcase />
      <Sustainability />
    </div>
  );
}

