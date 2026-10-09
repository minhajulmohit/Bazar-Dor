import { TProduct } from "@/types";
import { unitMap } from "../nav/navmarquee";
import Link from "next/link";

const ProductCard = ({ p }: { p: TProduct }) => {
  return (
    <Link href={`/product/${p.id}`}>
      {" "}
      <div className="bg-white border border-slate-300 rounded-xl p-3">
        <div className="flex gap-2 items-center">
          <p className="bg-[#f0f5f0] rounded-[10px] p-1 text-2xl">{p.image}</p>

          <div className="leading-none">
            <p className="font-bold">{p.nameBn}</p>
            <small className="text-[11px] text-slate-500">
              প্রতি {unitMap[p.unit]}
            </small>
          </div>
        </div>
        <small className="text-[11px]">আজকের দাম</small>
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">
            {p.today.toLocaleString("bn-BD")}{" "}
            <span className="font-normal text-[11px]">টাকা</span>
          </p>
          <p className="text-[12px] bg-[#f0f5f0] px-2 rounded-full">
            <span
              className={
                p.change?.dir === "up"
                  ? "text-red-600"
                  : p.change?.dir === "down"
                    ? "text-green-600"
                    : "text-gray-500 font-extrabold"
              }
            >
              {p.change?.dir === "up"
                ? "▲"
                : p.change?.dir === "down"
                  ? "▼"
                  : "—"}{" "}
              {Math.abs(p.change?.pct ?? 0).toLocaleString("bn-BD")}%
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
