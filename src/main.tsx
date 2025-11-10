import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router"
import "./styles/index.css"
import { DEFAULT_RETRY_COUNT, DEFAULT_STALE_TIME_MS } from "@shared/config/constants"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: DEFAULT_RETRY_COUNT, staleTime: DEFAULT_STALE_TIME_MS },
  },
})

router.update({ context: { queryClient } })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div className="p-4">Loading…</div>}>
        <RouterProvider router={router} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
