import { TNav, TProduct } from "@/types";

type TTopHeaderProps = {
  category: TNav;
  singleCategoryProducts: TProduct[];
};

const TopHeader = ({ category, singleCategoryProducts }: TTopHeaderProps) => {
  return (
    <div>
      <div className="flex items-center bg-white container mx-auto my-7 rounded-xl border border-slate-300 p-3">
        <div className="text-5xl">{category.icon}</div>
        <div>
          <h1 className="font-extrabold text-2xl">{category.nameBn}</h1>
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
