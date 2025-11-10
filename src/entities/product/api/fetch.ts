import axios from "axios"
import { ProductSchema, type Product } from "@entities/product/model/types"

export async function fetchProducts(limit = 5): Promise<Product[]> {
    const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}`)
    return data.products.map((p: unknown) => ProductSchema.parse(p))
}