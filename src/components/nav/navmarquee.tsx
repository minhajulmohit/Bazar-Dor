import { TProduct } from "@/types";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

export const unitMap: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const NavMarquee = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const products = await res.json();

  return (
    <div className="border-b border-b-slate-200 p-1">
      <MarqueeText direction="right" duration={15}>
        <div className="flex gap-6">
          {products.map((p: TProduct) => (
            <small key={p.id}>
              {p.image} {p.nameBn} {p.today.toLocaleString("bn-BD")} টাকা/
              {unitMap[p.unit]}{" "}
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
            </small>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default NavMarquee;
