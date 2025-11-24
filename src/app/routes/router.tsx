import { createRouter } from "@tanstack/react-router";
import { HomeRoute } from "./home/HomeRoute";
import { ProductsRoute } from "./product/ProductsRoute";
import { RootRoute, type RouterContext } from "./root/RootRoute";
import { ChatRoute } from "./chat/ChatRoute";
import { GraphqlRoute } from "./graphql/GraphqlRoute";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const routeTree = RootRoute.addChildren([
  HomeRoute,
  ProductsRoute,
  ChatRoute,
  GraphqlRoute,
]);

export const router = createRouter({
  routeTree,
  context: undefined as unknown as RouterContext,
  basepath: '/task4',
});
