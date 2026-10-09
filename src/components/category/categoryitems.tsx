import { TProduct } from "@/type";
import ProductCard from "../cards/productcard";

type TTopHeaderProps = {
  singleCategoryProducts: TProduct[];
};
const CategoryItems = ({ singleCategoryProducts }: TTopHeaderProps) => {
  return (
    <div className="container mx-auto">
      <p className="text-slate-500 mb-4">
        মোট {singleCategoryProducts.length.toLocaleString("bn-BD")} টি পণ্য
        দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-3 gap-5">
        {singleCategoryProducts.map((product) => (
          <ProductCard key={product.id} p={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
