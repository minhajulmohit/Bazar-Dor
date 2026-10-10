import { TNav, TProduct } from "@/types";

type TTopHeaderProps = {
  category: TNav;
  singleCategoryProducts: TProduct[];
};

const TopHeader = ({ category, singleCategoryProducts }: TTopHeaderProps) => {
  return (
    <div className="w-full min-w-0">
      <div className="container mx-auto my-4 flex w-full min-w-0 items-center gap-3 rounded-xl border border-slate-300 bg-white p-3 sm:my-7 sm:p-4">
        <div className="text-3xl sm:text-5xl bg-[#f0f5f0] p-2 rounded-xl">
          {category.icon}
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="wrap-break-word text-xl font-extrabold sm:text-2xl">
            {category.nameBn}
          </h1>

          <small className="block wrap-break-word text-slate-500">
            {singleCategoryProducts.length.toLocaleString("bn-BD")} টি পণ্যের
            আজকের দাম ও পরিবর্তন
          </small>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
