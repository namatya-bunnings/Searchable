import React from "react";

export type CheckboxProps = {
  checkboxIsChecked: boolean;
  handleChange: (status: boolean) => void;
};

const Checkbox = ({ checkboxIsChecked, handleChange }: CheckboxProps) => {
  return (
    <div>
      <input
        id="isStocked"
        type="checkbox"
        checked={checkboxIsChecked}
        onChange={(event) => handleChange(event.target.checked)}
      />
      <label htmlFor="isStocked">Only Show products with stocks</label>
    </div>
  );
};
export default Checkbox;
