import { TProduct } from "@/types";

const DetailPageMarkets = ({ product }: { product: TProduct }) => {
  const markets = product.markets ?? [];

  const sortedMarketsAvg = [...markets]
    .map((market) => ({ ...market, avg: (market.min + market.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  return (
    <div className="">
      <h2 className="font-bold mb-3 mt-10">বাজারভিত্তিক আজকের দাম</h2>
      <div className="overflow-x-auto rounded-box border border-slate-300">
        <table className="table">
          <tbody className="">
            <tr className="text-slate-500 border-b border-b-slate-400">
              <th className="font-normal px-4 py-2">বাজার</th>
              <th className="font-normal px-4 py-2">বিভাগ</th>
              <th className="font-normal px-4 py-2 text-end">সর্বনিম্ন</th>
              <th className="font-normal px-4 py-2 text-end">সর্বোচ্চ</th>
              <th className="font-normal px-4 py-2 text-end">গড়</th>
            </tr>

            {sortedMarketsAvg.map((market) => (
              <tr
                className="odd:bg-slate-100 even:bg-slate-200 hover:bg-base-300 border-b border-b-slate-400"
                key={market.market}
              >
                <td className="px-4 py-2">{market.market}</td>
                <td className="px-4 py-2">{market.division}</td>
                <td className="px-4 py-2 text-end">
                  {market.min.toLocaleString("bn-BD")}
                </td>
                <td className="px-4 py-2 text-end">
                  {market.max.toLocaleString("bn-BD")}
                </td>
                <td className="px-4 py-2 text-end">
                  {market.avg.toLocaleString("bn-BD")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailPageMarkets;
