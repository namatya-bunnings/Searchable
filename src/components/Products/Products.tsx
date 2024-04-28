import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";
import ProductsWrapper from "./ProductsWrapper";
import { PRODUCTS } from "../../data/data";
import SearchBar from "../SearchBar/SearchBar";
import Checkbox from "../Checkbox/Checkbox";
import { getFilteredProducts } from "../../utils/GetProducts";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);
  const handleUserInput = (userInput: string) => {
    setSearchQuery(userInput);
  };
  const handleChange = (status: boolean) => {
    setCheckboxIsChecked(status);
  };

  const productList = getFilteredProducts({
    products: PRODUCTS,
    searchQuery,
    checkboxIsChecked,
  });

  return (
    <ProductsWrapper>
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
      {productList.length ? (
        <ProductList productList={productList} />
      ) : (
        <ErrorMessage />
      )}
    </ProductsWrapper>
  );
};

export default Products;
