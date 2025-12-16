import { HeroBanner } from "@/components/home/HeroBanner";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Sustainability } from "@/components/home/Sustainability";
import { Oxygenation } from "@/components/home/Oxygenation";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <CompanyOverview />
      <ProductShowcase />
      <Sustainability />
      <Oxygenation />
    </div>
  );
}
