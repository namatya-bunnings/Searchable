import React, { ReactNode } from "react";
import "./FilterableProductTableWrapper.css";

type ProductTableWrapperProps = {
  children: ReactNode;
};

const FilterableProductTableWrapper: React.FC<ProductTableWrapperProps> = ({
  children,
}) => {
  return <div className="wrapper">{children}</div>;
};
export default FilterableProductTableWrapper;
