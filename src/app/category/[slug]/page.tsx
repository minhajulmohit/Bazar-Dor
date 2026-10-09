import CategoryItems from "@/components/category/categoryitems";
import SortingPart from "@/components/category/sortingpart";
import TopHeader from "@/components/category/topheader";
import { TNav, TProduct } from "@/type";

const categoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${slug}`,
  );

  const singleCategoryProducts: TProduct[] = await res.json();

  const res2 = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/categories/${slug}`,
  );
  const category: TNav = await res2.json();
  return (
    <div>
      <TopHeader
        category={category}
        singleCategoryProducts={singleCategoryProducts}
      />
      <SortingPart />
      <CategoryItems singleCategoryProducts={singleCategoryProducts} />
    </div>
  );
};

export default categoryPage;
