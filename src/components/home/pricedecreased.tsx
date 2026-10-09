import { TProduct } from "@/types";
import ProductCard from "../cards/productcard";

const PriceDecreased = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const products = await res.json();
  const filterHighPriceProducts = products
    .filter((p: TProduct) => p.change?.dir === "down")
    .sort((a: TProduct, b: TProduct) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="font-extrabold text-xl mb-3">
        <span className="text-green-600">▼</span> আজ দাম কমেছে
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {filterHighPriceProducts.map((p: TProduct) => (
          <div key={p.id}>
            <ProductCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceDecreased;
