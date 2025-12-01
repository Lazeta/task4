import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import { ProductSchema } from "@/entities/product/model/types"
import { PRODUCTS_URL } from "@/shared/config/api"
import { DEFAULT_LIMIT } from "@/shared/config/constants"
import type { Product } from "../model/types";

interface UseProductsParams {
    limit?: number;
    search?: string;
    category?: string;
    skip?: number;
};

export const useProducts = (params?: UseProductsParams) => {
    const fetchProducts = async ({
        limit = DEFAULT_LIMIT,
        search,
        category,
        skip,
    }: UseProductsParams = {}): Promise<Product[]> => {
        const queryParams = new URLSearchParams()

        if (limit) queryParams.set("limit", String(limit))
        if (category) queryParams.set("category", category)
        if (search) queryParams.set("search", search)
        if (skip) queryParams.set("skip", String(skip))

        const { data } = await axios.get(`${PRODUCTS_URL}?${queryParams.toString()}`)
        return data.products.map((product: Product) => ProductSchema.parse(product))
    }

    return useQuery({
        queryKey: ["products", params],
        queryFn: () => fetchProducts(params),
    });
}