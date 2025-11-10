import type { Product } from "@entities/product/model/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <li className="border p-2 rounded">
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm">{product.description}</p>
    </li>
  );
}
