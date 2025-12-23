import { motion } from 'framer-motion';
import { products, getAllProducts } from '@/data/products';
import { ProductData } from '@/types/product';

interface ProductSelectorProps {
    currentProduct: ProductData;
    onSelectProduct: (productId: string) => void;
}

export const ProductSelector = ({ currentProduct, onSelectProduct }: ProductSelectorProps) => {
    const allProducts = getAllProducts();

    const colorMap: Record<string, string> = {
        fermbiotic: 'bg-fermbiotic',
        bleubiotic: 'bg-bleubiotic',
        spirotic: 'bg-spirotic',
        algabiotic: 'bg-algabiotic',
        glowbiotic: 'bg-glowbiotic',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-2 p-2 rounded-full bg-secondary/80 backdrop-blur-xl border border-border/50">
                {allProducts.map((product) => {
                    const isActive = product.id === currentProduct.id;

                    return (
                        <motion.button
                            key={product.id}
                            onClick={() => onSelectProduct(product.id)}
                            className={`
                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${isActive
                                    ? 'text-primary-foreground'
                                    : 'text-muted-foreground hover:text-foreground'
                                }
              `}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeProduct"
                                    className={`absolute inset-0 rounded-full ${colorMap[product.id] || 'bg-primary'}`}
                                    style={{ boxShadow: `0 0 20px ${product.themeColor}60` }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{product.name}</span>
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default ProductSelector;
