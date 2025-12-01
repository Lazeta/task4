import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProductCard } from "./ProductCard";
import "@testing-library/jest-dom";
import { createdMockProduct } from "@/shared/mocks/product";

describe("ProductCard (unit)", () => {
  const product = createdMockProduct();

  it("renders product title and description", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
  });
});
