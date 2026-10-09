import { Suspense } from "react";

import AllProducts from "@/components/home/allproducts";
import Hero from "@/components/home/hero";
import PriceDecreased from "@/components/home/pricedecreased";
import PriceIncreased from "@/components/home/priceincreased";

export default function Home() {
  return (
    <div>
      <Hero />

      <Suspense
        fallback={
          <div className="container mx-auto mt-10">
            দাম বাড়ার তথ্য লোড হচ্ছে...
          </div>
        }
      >
        <PriceIncreased />
      </Suspense>

      <Suspense
        fallback={
          <div className="container mx-auto mt-10">
            দাম কমার তথ্য লোড হচ্ছে...
          </div>
        }
      >
        <PriceDecreased />
      </Suspense>

      <Suspense
        fallback={
          <div className="container mx-auto mt-10">
            পণ্যের তথ্য লোড হচ্ছে...
          </div>
        }
      >
        <AllProducts />
      </Suspense>
    </div>
  );
}
