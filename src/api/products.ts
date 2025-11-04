import axios from "axios"
import { z } from "zod"

const ProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
})
export type Product = z.infer<typeof ProductSchema>

export async function fetchProducts(limit = 5): Promise<Product[]> {
    const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}`)
    return data.products.map((p: unknown) => ProductSchema.parse(p))
}
