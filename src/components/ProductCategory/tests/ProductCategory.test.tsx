import ProductCategory, { ProductCategoryProps } from "../ProductCategory";
import { render, screen } from "@testing-library/react";

const smapleProps = {
  category: "Fruits",
  groupedProducts: [
    {
      id: "1",
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Apple",
    },
    {
      id: "2",
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
