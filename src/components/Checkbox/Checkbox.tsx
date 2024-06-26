import React from "react";
import "./Checkbox.css";

export type CheckboxProps = {
  checkboxIsChecked: boolean;
  handleChange: (status: boolean) => void;
};

const Checkbox = ({ checkboxIsChecked, handleChange }: CheckboxProps) => {
  return (
    <>
      <input
        className="checkboxInput"
        id="isStocked"
        type="checkbox"
        checked={checkboxIsChecked}
        onChange={(event) => handleChange(event.target.checked)}
      />
      <label className="checkboxLabel" htmlFor="isStocked">
        Only show products with stocks
      </label>
    </>
  );
};
export default Checkbox;
