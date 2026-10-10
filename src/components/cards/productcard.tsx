import { TProduct } from "@/types";
import { unitMap } from "../nav/navmarquee";
import Link from "next/link";

const ProductCard = ({ p }: { p: TProduct }) => {
  return (
    <Link href={`/product/${p.id}`} className="block h-full min-w-0">
      <div className="h-full min-w-0 rounded-xl border border-slate-300 bg-white p-2 transition hover:shadow-md sm:p-3">
        <div className="flex min-w-0 items-center gap-2">
          <p className="shrink-0 rounded-lg bg-[#f0f5f0] p-1 text-xl sm:text-2xl">
            {p.image}
          </p>

          <div className="min-w-0 flex-1">
            <p className="wrap-break-word text-sm font-bold sm:text-base">
              {p.nameBn}
            </p>

            <small className="text-[10px] text-slate-500 sm:text-[11px]">
              প্রতি {unitMap[p.unit]}
            </small>
          </div>
        </div>

        <small className="mt-2 block text-[10px] sm:text-[11px]">
          আজকের দাম
        </small>

        <div className="flex min-w-0 flex-wrap items-center justify-between gap-2">
          <p className="text-lg font-bold sm:text-xl">
            {p.today.toLocaleString("bn-BD")}{" "}
            <span className="text-[10px] font-normal sm:text-[11px]">টাকা</span>
          </p>

          <p className="rounded-full bg-[#f0f5f0] px-2 text-[10px] sm:text-xs">
            <span
              className={
                p.change?.dir === "up"
                  ? "text-red-600"
                  : p.change?.dir === "down"
                    ? "text-green-600"
                    : "font-extrabold text-gray-500"
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
