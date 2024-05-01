export type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  stocked: boolean;
};

export type ProductListProps = {
  productList: Product[][];
};
