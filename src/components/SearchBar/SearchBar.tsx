import React from "react";
import "./SearchBar.css";

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
      <input
        className="searchInput"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChangeHandler(event.target.value);
        }}
      />
    </form>
  );
};
export default SearchBar;
