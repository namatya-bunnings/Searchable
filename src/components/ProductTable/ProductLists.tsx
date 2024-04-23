import React from "react";
import { ProductsProps } from "./ProductTable.types";
import {
  getProductsGroupedByCategory,
  getSearchedQueryOrProductLists,
} from "../../utils/getProductsGroupedByCategory";
import ProductCategory from "../ProductCategory/ProductCategory";
import "./ProductTable.css";

const ProductLists: React.FC<ProductsProps> = ({
  products,
  searchQuery,
  checkboxIsChecked,
}) => {
  const productsGroupedByCategory = getProductsGroupedByCategory(products);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsGroupedByCategory.map((groupedProduct, index) => {
          return (
            <ProductCategory
              key={index}
              category={groupedProduct[0].category}
              products={getSearchedQueryOrProductLists({
                searchQuery,
                products: groupedProduct,
                checkboxIsChecked,
              })}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default ProductLists;
