import React from "react";
import { ProductListProps } from "./ProductList.types";
import ProductCategory from "../ProductCategory/ProductCategory";
import "./ProductList.css";

const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((groupedProducts, index) => {
          return (
            <ProductCategory
              key={index}
              category={groupedProducts[0].category}
              groupedProducts={groupedProducts}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default ProductList;
