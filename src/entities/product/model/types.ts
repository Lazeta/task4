import { z } from "zod"

export const ProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
})
export type Product = z.infer<typeof ProductSchema>