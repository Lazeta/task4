import type { Product } from "@/entities/product/model/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const images = product.images ?? [];

  return (
    <li className="border p-2 rounded bg-primary text-primary-foreground">
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm">{product.description}</p>

      {images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img) => (
            <img
              key={img}
              src={img}
              alt={`${product.title} product image`}
              className="w-32 h-32 object-cover rounded"
            />
          ))}
        </div>
      )}

      <p className="text-sm">
        Prices product: <span className="font-bold"> {product.price}</span>
      </p>
    </li>
  );
};
