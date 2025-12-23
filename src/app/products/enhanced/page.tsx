import { EnhancedProductWrapper } from "@/components/products/EnhancedProductWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enhanced Products Showcase | Aroora Biotech",
    description: "Experience our next-generation product showcase.",
};

export default function EnhancedProductsPage() {
    return <EnhancedProductWrapper />;
}
