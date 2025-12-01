import { ProductCard } from "@/entities/product/ui/ProductCard";
import { useProducts } from "@/entities/product/api/useProducts";
import { Suspense } from "react";
import { Spinner } from "@/shared/ui/shadcn/ui/spinner";

export const ProductsPage = () => {
  const { data: products = [] } = useProducts({ limit: 10 });

  if (!products || products.length === 0) {
    return <div>Data is empty...</div>;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <ul className="max-w-5xl mx-auto space-y-2">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </Suspense>
  );
};
