import { notFound } from "next/navigation";
import { getAllProducts, getProduct } from "@/data/products";
import { EnhancedProductWrapper } from "@/components/products/EnhancedProductWrapper";

export const dynamicParams = false;

/* ✅ Static paths */
export async function generateStaticParams() {
  const products = getAllProducts();

  return products.map((product) => ({
    id: product.id,
  }));
}

/* ✅ Metadata (params MUST be awaited) */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Aroora Biotech`,
    description: product.description,
  };
}

/* ✅ Page (params MUST be awaited) */
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return <EnhancedProductWrapper initialProductId={id} />;
}
