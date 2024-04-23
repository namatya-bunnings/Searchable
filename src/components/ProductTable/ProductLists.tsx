import React from "react";
import { ProductsProps } from "./ProductTable.types";
import ProductCategory from "../ProductCategory/ProductCategory";
import "./ProductTable.css";

const ProductLists: React.FC<ProductsProps> = ({ productLists }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productLists.map((groupedProducts, index) => {
          return (
            <ProductCategory
              key={index}
              category={groupedProducts[0].category}
              products={groupedProducts}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default ProductLists;
