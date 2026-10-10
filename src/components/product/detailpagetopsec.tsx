import { TProduct } from "@/types";
import { unitMap } from "../nav/navmarquee";

const DetailPageTopSection = ({ product }: { product: TProduct }) => {
  return (
    <div className="mx-auto my-4 flex w-full max-w-[1280px] min-w-0 flex-col items-stretch gap-4 rounded-xl border border-slate-300 bg-white p-3 sm:my-5 sm:px-5 sm:py-4 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 items-center gap-2">
        <p className="text-4xl bg-[#f0f5f0] p-3 rounded-xl">{product.image}</p>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <h1 className="font-bold text-xl">{product.nameBn}</h1>
          <small className="text-slate-500 leading-3 text-[12px]font-bold">
            প্রতি {unitMap[product.unit]} • {product.categoryNameBn}
          </small>
          <small className="mt-1">
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
      <div className="flex w-full flex-col items-center gap-1 rounded-xl bg-[#f0f5f0] p-3 sm:w-auto sm:min-w-40">
        <small className="text-slate-500">আজকের দাম</small>
        <h1 className="text-2xl font-bold sm:text-3xl">
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
