import { Product } from "../components/ProductList/ProductList.types";

export const getCategories = (products: Product[]) => {
  let uniqueCategories: string[] = [];
  products.forEach((product) => {
    if (!uniqueCategories.includes(product.category)) {
      uniqueCategories.push(product.category);
    }
  });
  return uniqueCategories;
};

export const getProductsGroupedByCategories = (products: Product[]) => {
  const categories = getCategories(products);
  return categories.map((category) => {
    return products.filter((product) => product.category === category);
  });
};

export const getFilteredProducts = ({
  products,
  searchQuery,
  checkboxIsChecked,
}: {
  searchQuery: string;
  products: Product[];
  checkboxIsChecked: boolean;
}) => {
  let filteredProducts = products;
  if (checkboxIsChecked) {
    filteredProducts = filteredProducts.filter((product) => product.stocked);
  }
  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }
  return getProductsGroupedByCategories(filteredProducts);
};
