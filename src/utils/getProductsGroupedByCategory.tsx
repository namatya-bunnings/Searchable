import { Product } from "../components/ProductTable/ProductTable.types";

const getUniqueCategories = (products: Product[]) => {
  let uniqueCategories: string[] = [];
  products.forEach((product) => {
    if (!uniqueCategories.includes(product.category)) {
      uniqueCategories.push(product.category);
    }
  });
  return uniqueCategories;
};

export const getProductsGroupedByCategory = (products: Product[]) => {
  const categories = getUniqueCategories(products);
  return categories.map((category) => {
    return products.filter((product) => product.category === category);
  });
};

export const getSearchedQueryOrProductLists = ({
  searchQuery,
  products,
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
    filteredProducts = filteredProducts.filter(
      (product) => product.name.toLowerCase() === searchQuery.toLowerCase(),
    );
  }
  return getProductsGroupedByCategory(filteredProducts);
};
