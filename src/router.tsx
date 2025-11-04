import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  Link,
  Outlet,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

import HomePage from "./routes/home";
import ProductsPage from "./routes/products";
import ChatPage from "./routes/chat";
import GraphQLPage from "./routes/graphql";

type RouterContext = { queryClient: QueryClient };

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const RootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex gap-4 p-3 border-b bg-white">
        <Link className="hover:underline" to={"/"}>
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/chat" className="hover:underline">
          Chat
        </Link>
        <Link to="/graphql" className="hover:underline">
          GraphQL
        </Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  ),
});

const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: HomePage,
});

const ProductsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/products",
  component: ProductsPage,
});

const ChatRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/chat",
  component: ChatPage,
});

const GraphQLRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/graphql",
  component: GraphQLPage,
});

const routeTree = RootRoute.addChildren([
  HomeRoute,
  ProductsRoute,
  ChatRoute,
  GraphQLRoute,
]);

export const router = createRouter({
  routeTree,
  context: undefined as unknown as RouterContext,
});
