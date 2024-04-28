import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Product } from "../ProductList/ProductList.types";

const ProductCategory = ({
  category,
  groupedProducts,
}: {
  category: string;
  groupedProducts: Product[];
}) => {
  return (
    <>
      <th>{category}</th>
      {groupedProducts.map((product, index) => {
        return <ProductDetails product={product} key={index} />;
      })}
    </>
  );
};
export default ProductCategory;
