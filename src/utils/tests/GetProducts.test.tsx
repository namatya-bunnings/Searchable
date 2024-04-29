import {
  getCategories,
  getProductsGroupedByCategories,
  getFilteredProducts,
} from "../GetProducts";
import {
  sampleProductProps,
  expectedOutcomeWhenCheckboxIsChecked,
  expectedOutcomeForSearchQuery,
  groupedProductByCategories,
} from "./data/GetProducts.test.data";

describe("getCategories", () => {
  it("returns unique categories from the products", () => {
    const categories = getCategories(sampleProductProps);
    expect(categories).toEqual(["Fruits", "Vegetables"]);
  });
});

describe("getProductsGroupedByCategories", () => {
  it("returns product list grouped in their specific categories", () => {
    expect(getProductsGroupedByCategories(sampleProductProps)).toEqual(
      groupedProductByCategories,
    );
  });
});

describe("getFilteredProducts", () => {
  it.each`
    input                 | searchQuery | checkboxIsChecked | expectedOutcome
    ${sampleProductProps} | ${""}       | ${true}           | ${expectedOutcomeWhenCheckboxIsChecked}
    ${sampleProductProps} | ${"Apple"}  | ${false}          | ${expectedOutcomeForSearchQuery}
    ${sampleProductProps} | ${""}       | ${false}          | ${groupedProductByCategories}
  `(
    "returns filtered product list",
    ({ input, searchQuery, checkboxIsChecked, expectedOutcome }) => {
      expect(
        getFilteredProducts({
          products: input,
          searchQuery,
          checkboxIsChecked,
        }),
      ).toEqual(expectedOutcome);
    },
  );
});
