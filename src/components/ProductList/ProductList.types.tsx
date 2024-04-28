export type Product = {
  name: string;
  price: string;
  category: string;
  stocked: boolean;
};

export type ProductListProps = {
  productList: Product[][];
};
