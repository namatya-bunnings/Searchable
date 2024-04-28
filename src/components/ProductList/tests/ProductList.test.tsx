import { render, screen } from "@testing-library/react";
import ProductList from "../ProductList";
import { ProductListProps } from "../../ProductList/ProductList.types";
const setup = (props: ProductListProps) => {
  render(<ProductList {...props} />);
};

const sampleProps = {
  productList: [
    [
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
      {
        category: "Fruits",
        price: "$2",
        stocked: false,
        name: "Passionfruit",
      },
    ],
    [
      {
        category: "Vegetables",
        price: "$2",
        stocked: true,
        name: "Spinach",
      },
      {
        category: "Vegetables",
        price: "$4",
        stocked: false,
        name: "Pumpkin",
      },
      {
        category: "Vegetables",
        price: "$1",
        stocked: true,
        name: "Peas",
      },
    ],
  ],
};

describe("ProductList", () => {
  it("should render product categories correctly", () => {
    setup(sampleProps);
    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(screen.getByText("Vegetables")).toBeInTheDocument();
  });
});
