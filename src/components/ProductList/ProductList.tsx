import React from "react";
import ProductCategory from "../ProductCategory/ProductCategory";
import "./ProductList.css";

type Product = {
  name: string;
  price: string;
  category: string;
  stocked: boolean;
};

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
      {productListWithCategory.map(({ groupedProduct, category }, index) => (
        <ProductCategory
          key={index}
          category={category}
          groupedProducts={groupedProduct}
        />
      ))}
    </div>
  );
};
export default ProductList;
