import React from "react";

const Checkbox = ({
  checkboxIsChecked,
  handleChange,
}: {
  checkboxIsChecked: boolean;
  handleChange: (status: boolean) => void;
}) => {
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
