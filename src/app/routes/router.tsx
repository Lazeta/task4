import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  Link,
  Outlet,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

import { HomePage } from "../../pages/home";
import { ProductsPage } from "../../pages/products";
import { ChatPage } from "../../pages/chat";
import { GraphQLPage } from "../../pages/graphql";
import { Suspense } from "react";
import { Spinner } from "@/shared/ui/spinner/Spinner";
import { ThemeProvider } from "@/entities/product/ui/ThemeContext";

type RouterContext = { queryClient: QueryClient };

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const RootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <nav className="flex justify-center gap-5 sm:gap-15 p-4">
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
    </ThemeProvider>
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
  component: () => (
    <Suspense fallback={<Spinner />}>
      <ProductsPage />
    </Suspense>
  ),
});

const ChatRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/chat",
  component: () => (
    <Suspense fallback={<Spinner />}>
      <ChatPage />
    </Suspense>
  ),
});

const GraphQLRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/graphql",
  component: () => (
    <Suspense fallback={<Spinner />}>
      <GraphQLPage />
    </Suspense>
  ),
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
