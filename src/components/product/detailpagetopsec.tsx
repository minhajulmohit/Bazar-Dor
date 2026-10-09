import { TProduct } from "@/type";
import { unitMap } from "../nav/navmarquee";

const DetailPageTopSection = ({ product }: { product: TProduct }) => {
  return (
    <div className="container mx-auto bg-white p-3 border border-slate-300 rounded-xl my-5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <p className="text-4xl bg-[#f0f5f0] p-3 rounded-xl">{product.image}</p>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{product.nameBn}</h1>
          <small className="text-slate-500 leading-3">
            প্রতি {unitMap[product.unit]} • {product.categoryNameBn}
          </small>
          <small className="mt-3">
            গতকালেরর তুলনায় আজ দাম{" "}
            {product.change?.dir === "up" ? (
              <>
                <strong>বেড়েছে</strong> •{" "}
                {(product.today - product.yesterday).toLocaleString("bn-BD")}{" "}
                টাকা
              </>
            ) : (
              <>
                {product.change?.dir === "down" ? (
                  <>
                    <strong>কমেছে</strong> •{" "}
                    {(product.yesterday - product.today).toLocaleString(
                      "bn-BD",
                    )}{" "}
                    টাকা
                  </>
                ) : (
                  <strong>সমান</strong>
                )}
              </>
            )}
          </small>
        </div>
      </div>
      <div className="bg-[#f0f5f0] flex flex-col items-center gap-1 p-3 rounded-xl">
        <small className="text-slate-500">আজকের দাম</small>
        <h1 className="font-bold text-3xl">
          {product.today.toLocaleString("bn-BD")}
        </h1>
        <small className="text-slate-500">টাকা/{unitMap[product.unit]}</small>
        <small className="">
          <span
            className={
              product.change?.dir === "up"
                ? "text-red-600"
                : product.change?.dir === "down"
                  ? "text-green-600"
                  : "text-gray-500 font-extrabold"
            }
          >
            {product.change?.dir === "up"
              ? "▲"
              : product.change?.dir === "down"
                ? "▼"
                : "—"}{" "}
            {Math.abs(product.change?.pct ?? 0).toLocaleString("bn-BD")}%
          </span>
        </small>
      </div>
    </div>
  );
};

export default DetailPageTopSection;
