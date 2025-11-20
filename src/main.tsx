import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./app/routes/router";
import "./app/styles/index.css";
import {
  DEFAULT_RETRY_COUNT,
  DEFAULT_STALE_TIME_MS,
} from "@/shared/config/constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: DEFAULT_RETRY_COUNT, staleTime: DEFAULT_STALE_TIME_MS },
  },
});

router.update({ context: { queryClient } });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
