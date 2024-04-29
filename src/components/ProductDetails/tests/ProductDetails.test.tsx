import ProductDetails from "../ProductDetails";
import { screen, render } from "@testing-library/react";
import { Product } from "../../ProductList/ProductList.types";

const setup = (props: Product) => {
  render(<ProductDetails product={props} />);
};

describe("ProductDetails", () => {
  it("renders the ProductDetails correctly", () => {
    const sampleProps = {
      category: "Vegetables",
      price: "$1",
      stocked: true,
      name: "Peas",
    };
    setup(sampleProps);
    expect(screen.getByText("Peas")).toBeInTheDocument();
    expect(screen.getByText("$1")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
  });
});
