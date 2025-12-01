import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, type Mock } from "vitest";
import { ProductsPage } from "./index";
import { mockProducts } from "@/shared/mocks/product";
import { mockUseProducts } from "@/shared/mocks/useProducts.mock";

vi.mock("@/entities/product/api/useProducts", () => ({
  useProducts: vi.fn(),
}));

import { useProducts } from "@/entities/product/api/useProducts";

describe("ProductsPage (integration)", () => {
  it("renders ProductCard for each product", () => {
    (useProducts as Mock).mockReturnValue(mockUseProducts(mockProducts));

    render(<ProductsPage />);

    const cards = screen.getAllByRole("listitem");
    const images = screen.getAllByRole("img");

    expect(cards).toHaveLength(mockProducts.length);
    expect(images).toHaveLength(mockProducts.length);
  });

  it("", () => {
    const { container } = render(<ProductsPage />);
    expect(container).toMatchSnapshot();
  });
});
