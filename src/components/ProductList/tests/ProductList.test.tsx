import { render, screen } from "@testing-library/react";
import ProductList, { ProductListProps } from "../ProductList";

const setup = (props: ProductListProps) => {
  render(<ProductList {...props} />);
};

const sampleProps = {
  productListWithCategory: [
    {
      category: "Fruits",
      groupedProduct: [
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
        {
          id: "3",
          category: "Fruits",
          price: "$2",
          stocked: false,
          name: "Passionfruit",
        },
      ],
    },
    {
      category: "Vegetables",
      groupedProduct: [
        {
          id: "4",
          category: "Vegetables",
          price: "$2",
          stocked: true,
          name: "Spinach",
        },
        {
          id: "5",
          category: "Vegetables",
          price: "$4",
          stocked: false,
          name: "Pumpkin",
        },
        {
          id: "6",
          category: "Vegetables",
          price: "$1",
          stocked: true,
          name: "Peas",
        },
      ],
    },
  ],
};

describe("ProductList", () => {
  it("should render product categories correctly", () => {
    setup(sampleProps);
    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(screen.getByText("Vegetables")).toBeInTheDocument();
  });
});
