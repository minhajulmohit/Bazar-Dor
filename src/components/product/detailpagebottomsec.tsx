import { TProduct } from "@/types";
import { unitMap } from "../nav/navmarquee";
import DetailPageMarkets from "./detailpagemarkets";

const DetailPageBottomSection = ({ product }: { product: TProduct }) => {
  const lowestMarket = product.markets.reduce((min, market) =>
    market.min < min.min ? market : min,
  );
  const highestMarket = product.markets.reduce((max, market) =>
    market.max > max.max ? market : max,
  );

  return (
    <div className="container mx-auto bg-white p-5 border border-slate-300 rounded-xl">
      <h2 className="font-bold">দামের সারসংক্ষেপ</h2>
      <div className="grid grid-cols-3 gap-5 my-4">
        <div className="border border-slate-300 p-3 rounded-xl">
          <small>সর্বনিম্ন দাম</small>
          <h1 className="font-bold text-3xl text-green-600">
            {lowestMarket.min.toLocaleString("bn-BD")}{" "}
            <small className="text-[15px]">টাকা</small>
          </h1>
          <small>সবচেয়ে কম দামের বাজার</small>
        </div>
        <div className="border border-slate-300 p-3 rounded-xl">
          <small>সর্বাধিক দাম</small>
          <h1 className="font-bold text-3xl text-red-600">
            {highestMarket.max.toLocaleString("bn-BD")}{" "}
            <small className="text-[15px]">টাকা</small>
          </h1>
          <small>সবচেয়ে বেশি দামের বাজার</small>
        </div>
        <div className="border border-slate-300 p-3 rounded-xl">
          <small>গড় দাম</small>
          <h1 className="font-bold text-3xl text-green-600">
            {((lowestMarket.min + highestMarket.max) / 2).toLocaleString(
              "bn-BD",
            )}{" "}
            <small className="text-[15px]">টাকা</small>
          </h1>
          <small>প্রতি {unitMap[product.unit]}-এর হিসাব </small>
        </div>
      </div>
      <div className="">
        <DetailPageMarkets product={product} />
      </div>
    </div>
  );
};

export default DetailPageBottomSection;
