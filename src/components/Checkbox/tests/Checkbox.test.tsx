import Checkbox, { CheckboxProps } from "../Checkbox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const mockHandleChange = jest.fn();

const setup = (props: CheckboxProps) => {
  render(<Checkbox {...props} />);
};

const checkBoxSampleProps = {
  checkboxIsChecked: false,
  handleChange: mockHandleChange,
};

describe("Checkbox", () => {
  it("renders checkbox correctly", () => {
    setup(checkBoxSampleProps);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Only show products with stocks"),
    ).toBeInTheDocument();
  });
  it("should trigger handleChange with true when checkbox is clicked", async () => {
    setup({ ...checkBoxSampleProps, checkboxIsChecked: false });
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith(true);
  });
  it("should trigger handleChange with false when checkbox is clicked again", async () => {
    setup({ ...checkBoxSampleProps, checkboxIsChecked: true });
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith(false);
  });
});
