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
  if (checkboxIsChecked) {
    return products.filter((product) => product.stocked);
  }
  if (!searchQuery) {
    return products;
  }

  return products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery?.toLowerCase() || ""),
  );
};
