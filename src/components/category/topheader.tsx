import { TNav, TProduct } from "@/types";

type TTopHeaderProps = {
  category: TNav;
  singleCategoryProducts: TProduct[];
};

const TopHeader = ({ category, singleCategoryProducts }: TTopHeaderProps) => {
  return (
    <div>
      <div className="container mx-auto my-4 flex items-center gap-3 rounded-xl border border-slate-300 bg-white p-3 sm:my-7 sm:p-4">
        <div className="shrink-0 text-3xl sm:text-5xl">{category.icon}</div>
        <div>
          <h1 className="wrap-break-word text-xl font-extrabold sm:text-2xl">
            {category.nameBn}
          </h1>
          <small className="text-slate-500">
            {singleCategoryProducts.length.toLocaleString("bn-BD")} টি পণ্যের
            আজকের দাম ও পরিবর্তন
          </small>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
