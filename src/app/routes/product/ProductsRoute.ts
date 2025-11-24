import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "../root/RootRoute";
import { ProductsPage } from "@/pages/products";

export const ProductsRoute = createRoute({
    getParentRoute: () => RootRoute,
    path: "/products",
    component: ProductsPage,
});
