import { describe, expect, it, vi, type Mock } from "vitest";
import { useProducts } from "@/entities/product/api/useProducts";
import { render, screen } from "@testing-library/react";
import { ProductsPage } from "./index";

vi.mock("@/entities/product/api/useProducts");

describe("ProductsPage", () => {
  it("renders ProductCard for each product", () => {
    (useProducts as unknown as Mock).mockReturnValue({
      data: [
        {
          id: "1",
          name: "Product A",
          description: "desc",
          price: 100,
          images: [],
        },
        {
          id: "2",
          name: "Product B",
          description: "desc",
          price: 200,
          images: ["img1.png", "img2.png"],
        },
      ],
      isPending: false,
      isError: false,
      error: null,
      refetch: vi.fn(),
    });

    render(<ProductsPage />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
  });
});
