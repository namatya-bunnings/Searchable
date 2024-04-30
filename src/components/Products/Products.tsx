import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";
import ProductsWrapper from "./ProductsWrapper";
import { PRODUCTS } from "../../data/data";
import SearchBar from "../SearchBar/SearchBar";
import Checkbox from "../Checkbox/Checkbox";
import { getFilteredProducts, getCategories } from "../../utils/GetProducts";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FilterByCategory from "../FilterByCategory/FilterByCategory";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleUserInput = (userInput: string) => {
    setSearchQuery(userInput);
  };
  const handleChange = (status: boolean) => {
    setCheckboxIsChecked(status);
  };

  const handleSelectedCategory = (value: string) => {
    setSelectedCategory(value);
  };

  const productList = getFilteredProducts({
    products: PRODUCTS,
    searchQuery,
    checkboxIsChecked,
    category: selectedCategory,
  });

  const productCategories = getCategories(PRODUCTS);

  return (
    <ProductsWrapper>
      <div className="filter-products">
        <div>
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
        </div>

        <FilterByCategory
          categories={productCategories}
          handleSelectedCategory={handleSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      {productList.length ? (
        <ProductList productList={productList} />
      ) : (
        <ErrorMessage />
      )}
    </ProductsWrapper>
  );
};

export default Products;
