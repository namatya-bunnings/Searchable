import { screen, render } from "@testing-library/react";
import SearchInputBox, { SearchBarProps } from "../SearchInputBox";
import userEvent from "@testing-library/user-event";
const user = userEvent.setup();

const setup = (props: SearchBarProps) => {
  render(<SearchInputBox {...props} />);
};

const mockChangeHandler = jest.fn();
const smapleProps = {
  type: "search",
  placeholder: "search...",
  value: "",
  onChangeHandler: mockChangeHandler,
};

describe("SearchInputBox", () => {
  it("should display search input box", () => {
    setup(smapleProps);
    expect(screen.getByRole("search")).toBeInTheDocument();
  });
  it("should trigger the search when user types in the search box", async () => {
    setup(smapleProps);
    const searchInput = screen.getByPlaceholderText("search...");
    await user.type(searchInput, "Apple");
    expect(mockChangeHandler).toHaveBeenCalledTimes(5);
  });
});
