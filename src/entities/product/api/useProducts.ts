import { useSuspenseQuery } from "@tanstack/react-query";
import type { Product, UseProductsParams } from "../model/types";
import axios from "axios"
import { ProductSchema } from "@/entities/product/model/types"
import { PRODUCTS_URL } from "@/shared/config/api"
import { DEFAULT_LIMIT } from "@/shared/config/constants"

export const useProducts = (params?: UseProductsParams) => {
    const fetchProducts = async ({
        limit = DEFAULT_LIMIT,
        search,
        category,
        skip,
    }: UseProductsParams = {}): Promise<Product[]> => {
        const params = new URLSearchParams()

        if (limit) params.set("limit", String(limit))
        if (skip) params.set("skip", String(skip))
        if (search) params.set("q", search)
        if (category) params.set("category", category)

        const { data } = await axios.get(`${PRODUCTS_URL}?${params.toString()}`)
        return data.products.map((product: unknown) => ProductSchema.parse(product))
    }

    return useSuspenseQuery<Product[]>({
        queryKey: ["products", params],
        queryFn: () => fetchProducts(params),
    });
}