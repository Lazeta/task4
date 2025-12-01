import { ProductSchema, type Product } from "@/entities/product/model/types";

export const createdMockProduct = (params?: Partial<Product>): Product => ProductSchema.parse({
    id: 1,
    title: "Default Product",
    description: "default description",
    price: 50,
    images: [],
    ...params,
})

export const mockProducts: Product[] = [
    createdMockProduct({ id: 1, title: "Product A", description: "desc", images: ["img1.png"] }),
    createdMockProduct({ id: 2, title: "Product B", description: "desc", images: ["img2.png"] }),
]