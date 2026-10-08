import { TProduct } from "@/type";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const unitMap: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const NavMarquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 600 } },
  );
  const product = await res.json();

  return (
    <div className="border-b border-b-slate-200 p-1">
      <MarqueeText direction="right" duration={15}>
        <div className="flex gap-6">
          {product.map((p: TProduct) => (
            <small key={p.id}>
              {p.image} {p.nameBn} {p.today.toLocaleString("bn-BD")} টাকা/
              {unitMap[p.unit]}{" "}
              <span
                className={
                  p.change?.dir === "up"
                    ? "text-green-600"
                    : p.change?.dir === "down"
                      ? "text-red-600"
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
