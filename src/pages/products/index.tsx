import { ProductCard } from "@/entities/product/ui/ProductCard";
import { useProducts } from "@/entities/product/api/useProducts";
import { Suspense } from "react";
import { Spinner } from "@/shared/ui/shadcn/ui/spinner";

export const ProductsPage = () => {
  const { data: products } = useProducts({ limit: 10 });

  return (
    <ul className="max-w-5xl mx-auto space-y-2">
      {products.map((product) => (
        <Suspense key={product.id} fallback={<Spinner />}>
          <ProductCard product={product} />
        </Suspense>
      ))}
    </ul>
  );
};
