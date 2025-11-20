import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  Link,
  Outlet,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

import { HomePage } from "@/pages/home";
import { ProductsPage } from "@/pages/products";
import { ChatPage } from "@/pages/chat";
import { PeopleListPage } from "@/pages/graphql";
import { Suspense } from "react";
import { ThemeProvider } from "@/entities/product/ui/ThemeContext";
import { Spinner } from "@/shared/ui/shadcn/ui/spinner";

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
        <nav className="flex justify-center items-center gap-5 sm:gap-15 py-3 font-medium">
          <Link to="/" className="px-2 py-1 hover:underline rounded h-8 leading-normal" activeProps={{ className: "bg-accent text-accent-foreground" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/products" className="px-2 py-1 hover:underline rounded leading-normal" activeProps={{ className: "bg-accent text-accent-foreground" }}>
            Products
          </Link>
          <Link to="/chat" className="px-2 py-1 hover:underline rounded leading-normal" activeProps={{ className: "bg-accent text-accent-foreground" }}>
            Chat
          </Link>
          <Link to="/graphql" className="px-2 py-1 hover:underline rounded leading-normal" activeProps={{ className: "bg-accent text-accent-foreground" }}>
            GraphQL
          </Link>
        </nav>
        <main className="p-4"><Outlet /></main>
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
  component: () => <ChatPage />,
});

const GraphQLRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/graphql",
  component: () => (
    <Suspense fallback={<Spinner />}>
      <PeopleListPage />
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
