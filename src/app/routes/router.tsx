import { createRouter } from "@tanstack/react-router";
import { HomeRoute } from "./home/HomeRoute";
import { ProductsRoute } from "./product/ProductsRoute";
import { RootRoute, type RouterContext } from "./root/RootRoute";
import { ChatRoute } from "./chat/ChatRoute";
import { GraphqlRoute } from "./graphql/GraphqlRoute";
import { QueryClient } from "@tanstack/react-query";

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

const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  context: { queryClient } satisfies RouterContext,
  basepath: '/task4',
});
