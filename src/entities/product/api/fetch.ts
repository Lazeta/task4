import axios from "axios"
import { ProductSchema, type Product } from "@entities/product/model/types"
import { PRODUCTS_URL } from "@shared/config/api"
import { DEFAULT_LIMIT } from "@shared/config/constants"

export async function fetchProducts(limit = DEFAULT_LIMIT): Promise<Product[]> {
    const { data } = await axios.get(`${PRODUCTS_URL}?limit=${limit}`)
    return data.products.map((p: unknown) => ProductSchema.parse(p))
}