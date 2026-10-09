import CategoryItems from "@/components/category/categoryitems";

import TopHeader from "@/components/category/topheader";
import { TNav, TProduct } from "@/types";
import { notFound } from "next/navigation";

const categoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
  );

  const singleCategoryProducts: TProduct[] = await res.json();

  const res2 = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/categories/${slug}`,
  );
  const category: TNav = await res2.json();

  if (!singleCategoryProducts) {
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
};

export default categoryPage;
