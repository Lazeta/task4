import axios from "axios"
import { ProductSchema, type Product } from "@/entities/product/model/types"
import { PRODUCTS_URL } from "@/shared/config/api"
import { DEFAULT_LIMIT } from "@/shared/config/constants"

export const fetchProducts = async ({
    limit = DEFAULT_LIMIT,
    search,
    category,
    skip,
}: {
    limit?: number
    search?: string
    category?: string
    skip?: number
} = {}): Promise<Product[]> => {
    const params = new URLSearchParams()

    if (limit) params.set("limit", String(limit))
    if (skip) params.set("skip", String(skip))
    if (search) params.set("q", search)
    if (category) params.set("category", category)

    const { data } = await axios.get(`${PRODUCTS_URL}?${params.toString()}`)
    return data.products.map((product: unknown) => ProductSchema.parse(product))
}