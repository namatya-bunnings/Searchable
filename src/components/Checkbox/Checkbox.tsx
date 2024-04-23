import React from "react";

const Checkbox = ({
  checkboxIsChecked,
  handleChange,
}: {
  checkboxIsChecked: boolean;
  handleChange: (status: boolean) => void;
}) => {
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={checkboxIsChecked}
          onChange={(event) => handleChange(event.target.checked)}
        />
      </div>
      <p>Only Show products with stocks</p>
    </>
  );
};
export default Checkbox;
