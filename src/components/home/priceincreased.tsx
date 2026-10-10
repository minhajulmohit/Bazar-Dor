import { TProduct } from "@/types";
import ProductCard from "../cards/productcard";

const PriceIncreased = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const products = await res.json();
  const filterHighPriceProducts = products
    .filter((p: TProduct) => p.change?.dir === "up")
    .sort((a: TProduct, b: TProduct) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div className="container mx-auto px-3 sm:px-4">
      <h1 className="font-extrabold text-xl mb-3">
        <span className="text-red-600">▲</span> আজ দাম বেড়েছে
      </h1>
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {filterHighPriceProducts.map((p: TProduct) => (
          <div key={p.id}>
            <ProductCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceIncreased;
