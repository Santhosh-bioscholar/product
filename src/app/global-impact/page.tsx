
import { ImpactLegacy } from "@/components/impact/ImpactLegacy";
import { HumanImpact } from "@/components/impact/HumanImpact";
import { AnimalImpact } from "@/components/impact/AnimalImpact";
import { ImpactCTA } from "@/components/impact/ImpactCTA";
import { Metadata } from "next";
import ImpactHero from "@/components/impact/ImpactHero";
import SystemPipeline from "@/components/impact/SystemPipeline";

export const metadata: Metadata = {
    title: "Global Impact | Aroora Biotech",
    description: "Discover how Aroora Biotech is transforming human and animal health while positively impacting the environment through sustainable innovation.",
};

export default function GlobalImpactPage() {
    return (
        <div className="flex flex-col min-h-screen ">
           <ImpactHero/>
            <ImpactLegacy />
            <SystemPipeline />
            <HumanImpact />
            <AnimalImpact />
            <ImpactCTA />
        </div>
    );
}

