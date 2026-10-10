"use client";

import { TProduct } from "@/types";
import ProductCard from "../cards/productcard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SortingPart from "./sortingpart";
import { ArrowLeft, PackageSearch } from "lucide-react";

type TTopHeaderProps = {
  singleCategoryProducts: TProduct[];
};

const CategoryItems = ({ singleCategoryProducts }: TTopHeaderProps) => {
  const [sortOrder, setSortOrder] = useState("default");
  const router = useRouter();

  const sortedProducts = [...singleCategoryProducts].sort((a, b) => {
    if (sortOrder === "high") {
      return b.today - a.today;
    }

    if (sortOrder === "low") {
      return a.today - b.today;
    }

    return 0;
  });

  // Empty state
  if (singleCategoryProducts.length === 0) {
    return (
      <div className="mx-auto flex min-h-[350px] w-full max-w-[1280px] items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-md rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center shadow-sm sm:px-8">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <PackageSearch size={32} className="text-[#07883f]" />
          </div>

          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
            কোনো পণ্য পাওয়া যায়নি!
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই। অন্য ক্যাটাগরি থেকে পণ্য
            খুঁজে দেখতে পারেন।
          </p>

          <button
            type="button"
            onClick={() => router.back()}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#07883f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#067536] focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            <ArrowLeft size={18} />
            আগের পেজে ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1280px] min-w-0 px-3 sm:px-5">
      <SortingPart sortOrder={sortOrder} setSortOrder={setSortOrder} />

      <p className="mb-4 text-slate-500">
        মোট {singleCategoryProducts.length.toLocaleString("bn-BD")} টি পণ্য
        দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} p={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
