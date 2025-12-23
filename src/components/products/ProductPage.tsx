import { useEffect } from 'react';
import { ProductData } from '@/types/product';
import ScrollProgress from './ScrollProgress';
import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import BenefitsSection from './BenefitsSection';
import HowItWorksSection from './HowItWorksSection';
import UsageSection from './UsageSection';
import SectionDivider from './SectionDivider';
// import ProcessFlowSection from './ProcessFlowSection';

interface ProductPageProps {
    product: ProductData;
}

export const ProductPage = ({ product }: ProductPageProps) => {
    // Update CSS variables for product-specific theming
    useEffect(() => {
        const root = document.documentElement;

        // Set the primary color to the product's theme color
        const colorMap: Record<string, string> = {
            '--fermbiotic': '142 70% 45%',
            '--bleubiotic': '217 91% 60%',
            '--spirotic': '174 84% 45%',
            '--algabiotic': '195 85% 50%',
            '--glowbiotic': '320 80% 60%',
        };

        const hslValue = colorMap[product.cssVariable];
        if (hslValue) {
            root.style.setProperty('--primary', hslValue);
            root.style.setProperty('--ring', hslValue);
            root.style.setProperty('--accent', hslValue);
        }

        return () => {
            // Reset to default on unmount
            root.style.setProperty('--primary', '142 70% 45%');
            root.style.setProperty('--ring', '142 70% 45%');
            root.style.setProperty('--accent', '142 70% 45%');
        };
    }, [product]);

    return (
        <div className="min-h-screen bg-background relative">
            {/* Noise overlay */}
            <div className="noise-overlay" />

            {/* Scroll progress indicator */}
            <ScrollProgress />

            {/* Hero Section */}
            <HeroSection product={product} />

            {/* Divider 1 */}
            <SectionDivider type={product.dividers[0]} />

            {/* Overview Section */}
            <OverviewSection product={product} />

            {/* Divider 2 */}
            <SectionDivider type={product.dividers[1]} />

            {/* Benefits Section */}
            <BenefitsSection product={product} />

            {/* Divider 3 */}
            <SectionDivider type={product.dividers[2]} />

            {/* How It Works Section */}
            <HowItWorksSection product={product} />

            {/* Process Flow Section */}
            {/* <ProcessFlowSection /> */}

            {/* Divider 4 */}
            <SectionDivider type={product.dividers[3]} />

            {/* Usage & Applications Section */}
            <UsageSection product={product} />

            {/* Footer spacer */}
            <div className="h-32" />
        </div>
    );
};

export default ProductPage;
