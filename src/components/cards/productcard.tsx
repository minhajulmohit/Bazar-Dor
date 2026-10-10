import { TProduct } from "@/types";
import { unitMap } from "../nav/navmarquee";
import Link from "next/link";

const ProductCard = ({ p }: { p: TProduct }) => {
  const unit = unitMap[p.unit] ?? p.unit;

  return (
    <Link href={`/product/${p.id}`} className="block h-full min-w-0">
      <article className="flex h-full min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-3 transition duration-200 hover:border-[#05893E]/40 hover:shadow-md sm:p-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f5f0] text-xl sm:h-12 sm:w-12 sm:text-2xl">
            {p.image}
          </span>

          <div className="min-w-0 flex-1">
            <h2 className="break-words text-sm font-bold leading-6 text-slate-800 sm:text-base">
              {p.nameBn}
            </h2>

            <p className="mt-0.5 text-xs text-slate-500">প্রতি {unit}</p>
          </div>
        </div>

        <div className="mt-4 flex min-w-0 flex-wrap items-end justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs text-slate-500">আজকের দাম</p>

            <p className="mt-1 break-words text-lg font-extrabold text-slate-900 sm:text-xl">
              {p.today.toLocaleString("bn-BD")}
              <span className="ml-1 text-xs font-normal text-slate-500">
                টাকা
              </span>
            </p>
          </div>

          <span className="shrink-0 rounded-full bg-[#f0f5f0] px-2 py-1 text-xs">
            <span
              className={
                p.change?.dir === "up"
                  ? "font-semibold text-red-600"
                  : p.change?.dir === "down"
                    ? "font-semibold text-green-600"
                    : "font-semibold text-slate-500"
              }
            >
              {p.change?.dir === "up"
                ? "▲"
                : p.change?.dir === "down"
                  ? "▼"
                  : "—"}{" "}
              {Math.abs(p.change?.pct ?? 0).toLocaleString("bn-BD")}%
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
