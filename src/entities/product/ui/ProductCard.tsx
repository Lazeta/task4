import type { Product } from "@entities/product/model/types";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <li className="border p-2 rounded bg-primary text-primary-foreground">
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm">{product.description}</p>

      <div className="flex gap-2 overflow-x-auto">
        {product.images.map((img) => (
          <img
            key={img}
            src={img}
            alt={`${product.title} product image`}
            className="w-32 h-32 object-cover rounded"
          />
        ))}
      </div>

      <p className="text-sm">
        Prices product: <span className="font-bold"> {product.price}</span>
      </p>
    </li>
  );
};
