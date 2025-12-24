'use client';

import { useRouter } from 'next/navigation';
import { ProductPage } from './ProductPage';
import { ProductSelector } from './ProductSelector';
import { getProduct } from '@/data/products';

interface EnhancedProductWrapperProps {
  initialProductId?: string;
}

export const EnhancedProductWrapper = ({
  initialProductId,
}: EnhancedProductWrapperProps) => {
  const router = useRouter();

  // If no initialProductId provided, show product selector or default to first product
  if (!initialProductId) {
    return <ProductSelector onSelectProduct={(id) => router.push(`/products/${id}`)} />;
  }

  const product = getProduct(initialProductId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Product not found
      </div>
    );
  }

  return (
    <>

      <ProductPage product={product} />
    </>
  );
};
