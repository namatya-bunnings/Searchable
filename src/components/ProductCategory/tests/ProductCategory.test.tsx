import ProductCategory, { ProductCategoryProps } from "../ProductCategory";
import { render, screen } from "@testing-library/react";

const smapleProps = {
  category: "Fruits",
  groupedProducts: [
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Apple",
    },
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Dragonfruit",
    },
  ],
};

const setup = (props: ProductCategoryProps) => {
  render(<ProductCategory {...props} />);
};

describe("ProductCategory", () => {
  it("renders category title correctly", () => {
    setup(smapleProps);
    expect(screen.getByText("Fruits")).toBeInTheDocument();
  });
});
