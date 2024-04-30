import React from "react";
import { Product } from "../ProductList/ProductList.types";
import "./ProductDetails.css";

const ProductDetails = ({ product }: { product: Product }) => {
  const { name, price } = product;
  return (
    <div className="product-details">
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};
export default ProductDetails;
