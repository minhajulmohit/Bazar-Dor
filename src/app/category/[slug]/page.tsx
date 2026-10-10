import { Suspense } from "react";
import CategoryItems from "@/components/category/categoryitems";
import TopHeader from "@/components/category/topheader";
import { TNav, TProduct } from "@/types";
import { notFound } from "next/navigation";
import CategorySkeleton from "@/components/category/categoryskeleton";

async function CategoryContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(slug)}`,
  );

  if (!res.ok) {
    throw new Error("Category products load failed");
  }

  const singleCategoryProducts: TProduct[] = await res.json();

  const res2 = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/categories/${encodeURIComponent(slug)}`,
  );

  if (res2.status === 404) {
    notFound();
  }

  if (!res2.ok) {
    throw new Error("Category information load failed");
  }

  const category: TNav = await res2.json();

  if (!category) {
    notFound();
  }

  return (
    <div>
      <TopHeader
        category={category}
        singleCategoryProducts={singleCategoryProducts}
      />

      <CategoryItems singleCategoryProducts={singleCategoryProducts} />
    </div>
  );
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<CategorySkeleton count={4} />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}
