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
      screen.getByLabelText("Only Show products with stocks"),
    ).toBeInTheDocument();
  });
  it("should call handleChange with true when checkbox is clicked", async () => {
    setup(checkBoxSampleProps);
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);
    // const { handleChange } = checkBoxSampleProps;
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith(true);
  });
  it("should call handleChange with false when checkbox is clicked again", async () => {
    setup({ ...checkBoxSampleProps, checkboxIsChecked: true });
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith(false);
  });
});
