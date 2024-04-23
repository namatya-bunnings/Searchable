import React, { useState } from "react";
import ProductLists from "../ProductTable/ProductLists";
import FilterableProductTableWrapper from "./FilterableProductTableWrapper";
import { PRODUCTS } from "../../data/data";
import SearchBar from "../InputBar/SearchBar";
import Checkbox from "../Checkbox/Checkbox";

const FilterableProductTable = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);
  const handleUserInput = (userInput: string) => {
    setSearchQuery(userInput);
  };
  const handleChange = (status: boolean) => {
    setCheckboxIsChecked(status);
  };

  return (
    <FilterableProductTableWrapper>
      <SearchBar
        role="search"
        type="search"
        placeholder="search..."
        value={searchQuery}
        onChangeHandler={handleUserInput}
      />
      <Checkbox
        checkboxIsChecked={checkboxIsChecked}
        handleChange={handleChange}
      />
      <ProductLists
        products={PRODUCTS}
        searchQuery={searchQuery}
        checkboxIsChecked={checkboxIsChecked}
      />
      ;
    </FilterableProductTableWrapper>
  );
};

export default FilterableProductTable;
