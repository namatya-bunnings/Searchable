import React from "react";
import ProductRow from "../ProductRow/ProductRow";
import { ProductCategoryProps } from "./ProductCategory.types";

const ProductCategory: React.FC<ProductCategoryProps> = ({
  category,
  products,
}) => {
  return (
    <>
      <th>{category}</th>
      {products.map((product, index) => {
        return <ProductRow product={product} key={index} />;
      })}
    </>
  );
};
export default ProductCategory;
