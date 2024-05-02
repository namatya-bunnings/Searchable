import React from "react";
import "./SearchInputBox.css";

export type SearchBarProps = {
  type: string;
  placeholder: string;
  value: string;
  onChangeHandler: (userInput: string) => void;
};

const SearchInputBox = ({
  type,
  placeholder,
  value,
  onChangeHandler,
}: SearchBarProps) => {
  return (
    <form role="search">
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
export default SearchInputBox;
