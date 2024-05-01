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
  const handleCheckbox = (status: boolean) => {
    setCheckboxIsChecked(status);
  };

  const handleSelectedCategory = (value: string) => {
    setSelectedCategory(value);
  };

  const productListWithCategory = getFilteredProducts({
    products: PRODUCTS,
    searchQuery,
    checkboxIsChecked,
    category: selectedCategory,
  }).map((groupedProduct) => {
    return {
      category: groupedProduct[0].category,
      groupedProduct,
    };
  });

  const productCategories = getCategories(PRODUCTS);

  return (
    <ProductsWrapper>
      <div className="filter-products">
        <div>
          <SearchBar
            type="search"
            placeholder="search..."
            value={searchQuery}
            onChangeHandler={handleUserInput}
          />
          <Checkbox
            checkboxIsChecked={checkboxIsChecked}
            handleChange={handleCheckbox}
          />
        </div>

        <FilterByCategory
          categories={productCategories}
          handleSelectedCategory={handleSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      {productListWithCategory.length >= 1 ? (
        <ProductList productListWithCategory={productListWithCategory} />
      ) : (
        <ErrorMessage />
      )}
    </ProductsWrapper>
  );
};

export default Products;
