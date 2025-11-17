import { ProductCard } from "@/entities/product/ui/ProductCard";
import { useProducts } from "@/entities/product/api/useProducts";

export const ProductsPage = () => {
  const { data: products } = useProducts({ limit: 10 });

  return (
    <ul className="max-w-5xl mx-auto space-y-2">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};
