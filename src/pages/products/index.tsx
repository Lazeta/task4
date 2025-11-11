import { useSuspenseQuery } from "@tanstack/react-query"
import type { Product } from "@entities/product/model/types"
import { fetchProducts } from "@entities/product/api/fetch"
import { ProductCard } from "@entities/product/ui/ProductCard"

export default function ProductsPage() {
  const { data } = useSuspenseQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  })

  return (
    <ul className="space-y-2 max-w-[1000px] mx-auto">
      {data.map((p: Product) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ul>
  )
}
