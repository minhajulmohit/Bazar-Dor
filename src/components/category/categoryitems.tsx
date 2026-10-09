"use client";
import { TProduct } from "@/types";
import ProductCard from "../cards/productcard";
import { useState } from "react";
import SortingPart from "./sortingpart";

type TTopHeaderProps = {
  singleCategoryProducts: TProduct[];
};
const CategoryItems = ({ singleCategoryProducts }: TTopHeaderProps) => {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedProducts = [...singleCategoryProducts].sort((a, b) => {
    if (sortOrder === "high") {
      return b.today - a.today;
    }
    if (sortOrder === "low") {
      return a.today - b.today;
    }
    return 0;
  });

  return (
    <div className="container mx-auto">
      <SortingPart sortOrder={sortOrder} setSortOrder={setSortOrder} />

      <p className="text-slate-500 mb-4">
        মোট {singleCategoryProducts.length.toLocaleString("bn-BD")} টি পণ্য
        দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} p={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
