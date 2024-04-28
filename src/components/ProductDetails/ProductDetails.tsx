import React from "react";
import { Product } from "../ProductList/ProductList.types";

const ProductDetails = ({ product }: { product: Product }) => {
  const { name, price } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};
export default ProductDetails;
