import { TProduct } from "@/types";
import ProductCard from "../cards/productcard";

const AllProducts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const products = await res.json();

  return (
    <div
      id="allProducts"
      className="mx-auto mt-6 w-full max-w-7xl min-w-0 scroll-mt-12 px-3 sm:mt-10 sm:px-5"
    >
      <h1 className="font-extrabold text-xl mb-3">
        সব পণ্য <br />
        <small className="font-normal text-[12px]">
          মোট {Math.abs(products.length).toLocaleString("bn-BD")} টি পণ্য দেখানো
          হচ্ছে
        </small>
      </h1>
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {products.map((p: TProduct) => (
          <div key={p.id}>
            <ProductCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
