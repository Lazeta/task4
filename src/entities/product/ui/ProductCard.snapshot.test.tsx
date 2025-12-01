import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProductCard } from "./ProductCard";
import { createdMockProduct } from "@/shared/mocks/product";

describe("ProductCard (snapshot)", () => {
  const product = createdMockProduct();
  it("matches snapshot", () => {
    const { container } = render(<ProductCard product={product} />);
    expect(container).toMatchSnapshot();
  });
});
