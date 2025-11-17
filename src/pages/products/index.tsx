import { useSuspenseQuery } from "@tanstack/react-query";
import type { Product } from "@entities/product/model/types";
import { fetchProducts } from "@entities/product/api/fetch";
import { ProductCard } from "@entities/product/ui/ProductCard";

export const ProductsPage = () => {
  const { data } = useSuspenseQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });

  return (
    <ul className="max-w-[1000px] mx-auto space-y-2">
      {data.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};
