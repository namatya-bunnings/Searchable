import React from "react";
import ProductCategory from "../ProductCategory/ProductCategory";
import { Product } from "./ProductList.types";
import "./ProductList.css";

export type ProductListProps = {
  productListWithCategory: { category: string; groupedProduct: Product[] }[];
};

const ProductList: React.FC<ProductListProps> = ({
  productListWithCategory,
}) => {
  return (
    <div className="product-list">
      <div className="product-list-header">
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      {productListWithCategory.map(({ groupedProduct, category }) => (
        <ProductCategory
          key={groupedProduct[0].id}
          category={category}
          groupedProducts={groupedProduct}
        />
      ))}
    </div>
  );
};
export default ProductList;
