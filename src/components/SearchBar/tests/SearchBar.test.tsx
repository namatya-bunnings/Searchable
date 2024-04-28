import { screen, render } from "@testing-library/react";
import SearchBar, { SearchBarProps } from "../SearchBar";
import userEvent from "@testing-library/user-event";
const user = userEvent.setup();

const setup = (props: SearchBarProps) => {
  render(<SearchBar {...props} />);
};

const mockChangeHandler = jest.fn();
const smapleProps = {
  role: "search",
  type: "search",
  placeholder: "search...",
  value: "",
  onChangeHandler: mockChangeHandler,
};

describe("SearchBar", () => {
  it("should render searchBar", () => {
    setup(smapleProps);
    expect(screen.getByRole("search")).toBeInTheDocument();
  });
  it("onChangeHandler is called when user types in the input field", async () => {
    setup(smapleProps);
    const searchInput = screen.getByPlaceholderText("search...");
    await user.type(searchInput, "Apple");
    expect(mockChangeHandler).toHaveBeenCalled();
    expect(mockChangeHandler).toHaveBeenCalledTimes(5);
  });
  it("does not call onChangeHandler when input field is empty", async () => {
    setup(smapleProps);
    expect(mockChangeHandler).not.toHaveBeenCalled();
  });
});
