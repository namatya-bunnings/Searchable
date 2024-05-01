import React from "react";
import "./FilterByCategory.css";

export type FilterByCategoryProps = {
  categories: string[];
  handleSelectedCategory: (value: string) => void;
  selectedCategory: string;
};

const FilterByCategory: React.FC<FilterByCategoryProps> = ({
  categories,
  handleSelectedCategory,
  selectedCategory,
}) => {
  return (
    <div>
      <select
        className="select-category"
        name="category"
        id="category"
        value={selectedCategory}
        onChange={(event) => handleSelectedCategory(event.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FilterByCategory;
