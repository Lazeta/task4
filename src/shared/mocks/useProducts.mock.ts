import type { Product } from "@/entities/product/model/types";
import { mockProducts } from "./product";
import { vi } from "vitest";
import type { UseQueryResult } from "@tanstack/react-query";

export const mockUseProducts = (products: Product[] = mockProducts): Partial<UseQueryResult<Product[], Error>> => ({
  data: products,
  isLoading: false,
  isError: false,
  error: null,
  refetch: vi.fn(),
});
