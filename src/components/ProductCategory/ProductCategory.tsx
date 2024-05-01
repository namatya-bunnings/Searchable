import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Product } from "../ProductList/ProductList.types";
import "./ProductCategory.css";

export type ProductCategoryProps = {
  category: string;
  groupedProducts: Product[];
};

const ProductCategory: React.FC<ProductCategoryProps> = ({
  category,
  groupedProducts,
}) => {
  return (
    <>
      <div className="category-title">
        <h4>{category}</h4>
      </div>
      {groupedProducts.map((product) => {
        return <ProductDetails product={product} key={product.id} />;
      })}
    </>
  );
};
export default ProductCategory;
