import React, { ReactNode } from "react";
import "./Products.css";

type ProductTableWrapperProps = {
  children: ReactNode;
};

const ProductsWrapper: React.FC<ProductTableWrapperProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};
export default ProductsWrapper;
