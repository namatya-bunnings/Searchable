import React from "react";
import { ProductListProps } from "./ProductList.types";
import ProductCategory from "../ProductCategory/ProductCategory";
import "./ProductList.css";

const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  return (
    <div className="product-list">
      <div className="product-list-header">
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      {productList.map((groupedProducts, index) => (
        <ProductCategory
          key={index}
          category={groupedProducts[0].category}
          groupedProducts={groupedProducts}
        />
      ))}
    </div>
  );
};
export default ProductList;
