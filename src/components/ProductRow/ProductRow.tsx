import React from "react";
import { Product } from "../ProductTable/ProductTable.types";

const ProductRow = ({ product }: { product: Product }) => {
  const { stocked, name, price } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};
export default ProductRow;
