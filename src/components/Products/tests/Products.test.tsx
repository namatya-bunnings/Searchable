import Products from "../Products";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
const setup = () => render(<Products />);

describe("Products Component", () => {
  it("shows product list when the component renders first", () => {
    setup();
    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  describe("Search Input field", () => {
    it("shows the search input field", () => {
      setup();
      expect(screen.getByRole("search")).toBeInTheDocument();
    });
    it("search input field has a placeholder", () => {
      setup();
      expect(screen.getByPlaceholderText("search...")).toBeInTheDocument();
    });
    it("shows only searched products", async () => {
      setup();
      const searchInput = screen.getByPlaceholderText("search...");
      await user.type(searchInput, "Apple");
      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.queryByText("Peas")).not.toBeInTheDocument();
    });
    it("shows error message when search query does not match the product in the list", async () => {
      setup();
      const searchInput = screen.getByPlaceholderText("search...");
      await user.type(searchInput, "Mango");
      expect(screen.queryByText("Apple")).not.toBeInTheDocument();
      expect(
        screen.getByText("No match found. Please try again!"),
      ).toBeInTheDocument();
    });
  });
  describe("checkbox", () => {
    it("shows checkbox", () => {
      setup();
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
      expect(
        screen.getByLabelText("Only show products with stocks"),
      ).toBeInTheDocument();
    });
    it("only show product items with value 'stocked:true'", async () => {
      setup();
      const checkBox = screen.getByRole("checkbox");
      await user.click(checkBox);
      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.queryByText("Passionfruit")).not.toBeInTheDocument();
    });
  });
});
describe("Select Category", () => {
  it("shows the category dropdown", () => {
    setup();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
  it("shows only selected category products", async () => {
    setup();
    const categoryDropdown = screen.getByRole("combobox");
    await user.selectOptions(categoryDropdown, "Fruits");
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.queryByText("Spinach")).not.toBeInTheDocument();
  });
  it("show all the categories and products when no category is selected", async () => {
    setup();
    const categoryDropdown = screen.getByRole("combobox");
    await user.selectOptions(categoryDropdown, "");
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Spinach")).toBeInTheDocument();
  });
});
