import { screen, render } from "@testing-library/react";
import FilterByCategory, { FilterByCategoryProps } from "../FilterByCategory";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const mockHandleSelectedCategory = jest.fn();

const setup = (props: FilterByCategoryProps) => {
  render(<FilterByCategory {...props} />);
};

const sampleProps = {
  categories: ["Fruits", "Vegetables"],
  handleSelectedCategory: mockHandleSelectedCategory,
  selectedCategory: "",
};

describe("FilterByCategory", () => {
  it("renders FilterByCategory dropdown", () => {
    setup(sampleProps);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
  it("shows 'Select' when it renders first", () => {
    setup(sampleProps);
    expect(screen.getByText("Select Category")).toBeInTheDocument();
  });
  it("should call handleSelectedCategory when category is selected from dropdown", async () => {
    setup(sampleProps);
    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "Fruits");
    expect(mockHandleSelectedCategory).toHaveBeenCalledTimes(1);
    expect(mockHandleSelectedCategory).toHaveBeenCalledWith("Fruits");
  });
});
