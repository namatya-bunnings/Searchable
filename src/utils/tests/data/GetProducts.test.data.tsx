export const sampleProductProps = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export const expectedOutcomeWhenCheckboxIsChecked = [
  [
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Apple",
    },
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Dragonfruit",
    },
  ],
  [
    {
      category: "Vegetables",
      price: "$2",
      stocked: true,
      name: "Spinach",
    },
    {
      category: "Vegetables",
      price: "$1",
      stocked: true,
      name: "Peas",
    },
  ],
];

export const expectedOutcomeForSearchQuery = [
  [
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Apple",
    },
  ],
];

export const groupedProductByCategories = [
  [
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Apple",
    },
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Dragonfruit",
    },
    {
      category: "Fruits",
      price: "$2",
      stocked: false,
      name: "Passionfruit",
    },
  ],
  [
    {
      category: "Vegetables",
      price: "$2",
      stocked: true,
      name: "Spinach",
    },
    {
      category: "Vegetables",
      price: "$4",
      stocked: false,
      name: "Pumpkin",
    },
    {
      category: "Vegetables",
      price: "$1",
      stocked: true,
      name: "Peas",
    },
  ],
];
