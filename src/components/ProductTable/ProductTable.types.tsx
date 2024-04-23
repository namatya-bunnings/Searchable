export type Product = {
  name: string;
  price: string;
  category: string;
  stocked: boolean;
};

export type ProductsProps = {
  products: Product[];
  searchQuery: string;
  checkboxIsChecked: boolean;
};
