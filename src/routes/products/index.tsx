import { useSuspenseQuery } from "@tanstack/react-query"
import { fetchProducts, type Product } from "../../api/products"

export default function ProductsPage() {
  const { data } = useSuspenseQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => fetchProducts(5),
  })

  return (
    <ul className="space-y-2">
      {data.map((p: Product) => (
        <li key={p.id} className="border p-2 rounded">
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm">{p.description}</p>
        </li>
      ))}
    </ul>
  )
}
