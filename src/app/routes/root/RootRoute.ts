import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { RootLayout } from "./RootLayout";

export type RouterContext = { queryClient: QueryClient };

export const RootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => RootLayout
});