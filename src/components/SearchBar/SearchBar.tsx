import React from "react";

export type SearchBarProps = {
  role: string;
  type: string;
  placeholder: string;
  value: string;
  onChangeHandler: (userInput: string) => void;
};

const SearchBar = ({
  role,
  type,
  placeholder,
  value,
  onChangeHandler,
}: SearchBarProps) => {
  return (
    <form role={role}>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            onChangeHandler(event.target.value);
          }}
        />
      </div>
    </form>
  );
};
export default SearchBar;
