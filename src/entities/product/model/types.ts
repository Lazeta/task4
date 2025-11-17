import { z } from "zod"

export const ProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    images: z.array(z.string()),
})
export type Product = z.infer<typeof ProductSchema>

export type Theme = "light" | "dark"

export type UseProductsParams = {
    limit?: number;
    search?: string;
    category?: string;
    skip?: number;
};